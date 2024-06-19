const request = require('supertest');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const setupTest = require('./setupTest');
// const sequelize = require('../utils/database');

const createServer = require('../server');
const User = require('../models/user');

dotenv.config();

setupTest();

describe('Test the register endpoint', () => {
	it('should return error if password is not provided', async () => {
		const user = {
			username: 'testuser',
			first_name: 'Имя',
			last_name: 'Фамилия',
			phone: '89193125500',
			email: 'testuser@example.com',
		}
		const res = await request(app).post('/auth/register').send(user);
		expect(res.statusCode).toEqual(400);
		expect(res.body).toHaveProperty('status', 'error');
		expect(res.body.errors).toHaveLength(1);
		expect(res.body.errors[0]).toHaveProperty('message', 'Укажите пароль');
	});

	it('should return error if password length is invalid', async () => {
		const user = {
			username: 'testuser',
			password: '1234567',
			first_name: 'Имя',
			last_name: 'Фамилия',
			phone: '89193125500',
			email: 'testuser@example.com',
		}
		const res = await request(app).post('/auth/register').send(user);
		expect(res.statusCode).toEqual(400);
		expect(res.body).toHaveProperty('status', 'error');
		expect(res.body.errors).toHaveLength(1);
		expect(res.body.errors[0]).toHaveProperty(
			'message',
			'Пароль должен содержать от 8 до 254 символов'
		);
	});

	it('should return error if username is already taken', async () => {
		const user = {
			username: 'testuser',
			password: 'Jero2012!',
			first_name: 'Имя',
			last_name: 'Фамилия',
			phone: '89193125500',
			email: 'testuser@example.com',
		};
		await User.create({
			...user,
			password: bcrypt.hashSync(user.password, 8),
		});
		const res = await request(app).post('/auth/register').send(user);
		expect(res.statusCode).toEqual(400);
		expect(res.body).toHaveProperty('status', 'error');
		expect(res.body.errors).toHaveLength(1);
		expect(res.body.errors[0]).toHaveProperty('message', 'Имя пользователя уже занято');
	});

	it('should return error if validation fails', async () => {
		const user = {
			username: 'testuser1',
			password: 'Jero2012!',
			first_name: 'Имя',
			last_name: 'Фамилия',
			phone: '89193125500',
			email: 'invalidemail',
		};
		const res = await request(app).post('/auth/register').send(user);
		expect(res.statusCode).toEqual(400);
		expect(res.body).toHaveProperty('status', 'error');
		expect(res.body.errors).toHaveLength(1);
		expect(res.body.errors[0]).toHaveProperty('message', 'Укажите корректный email');
	});

	it('should create new user if data is valid', async () => {
		const user = {
			username: 'testuser2',
			password: 'Jero2012!',
			first_name: 'Имя',
			last_name: 'Фамилия',
			phone: '89193125500',
			email: 'testuser@example.com',
		};
		const res = await request(app).post('/auth/register').send(user);
		expect(res.statusCode).toEqual(201);
		expect(res.body).toHaveProperty('status', 'success');
		const createdUser = await User.findOne({ where: { username: user.username } });
		expect(createdUser).not.toBeNull();
		expect(bcrypt.compareSync(user.password, createdUser.password)).toBe(true);
	});

	it('should return error if server error occurs', async () => {
		const createUserSpy = jest.spyOn(User, 'create').mockImplementation(() => {
			throw new Error('Test error');
		});
		const user = {
			username: 'testuser3',
			password: 'Jero2012!',
			first_name: 'Имя',
			last_name: 'Фамилия',
			phone: '89193125500',
			email: 'testuser@example.com',
		}
		const res = await request(app).post('/auth/register').send(user);
		expect(res.statusCode).toEqual(500);
		expect(res.body).toHaveProperty('status', 'error');
		expect(res.body).toHaveProperty('message', 'Ошибка сервера');
		createUserSpy.mockRestore();
	});
});

describe('Test the login endpoint', () => {
	beforeAll(async () => {
		await User.create({
			username: 'testuser10',
			password: bcrypt.hashSync('Jero2012!', 8),
			first_name: 'Имя',
			last_name: 'Фамилия',
			phone: '89193125500',
			email: 'testuser@example.com',
		});
	});

	it('should return error if user does not exist', async () => {
		const user = { username: 'nonexistentuser', password: 'password' };
		const res = await request(app).post('/auth/login').send(user);
		expect(res.statusCode).toEqual(401);
		expect(res.body).toHaveProperty('status', 'error');
		expect(res.body.errors).toHaveLength(1);
		expect(res.body.errors[0]).toHaveProperty('message', 'Неверные данные авторизации');
	});

	it('should return error if password is incorrect', async () => {
		const res = await request(app)
			.post('/auth/login')
			.send({ username: 'testuser10', password: 'wrongpassword' });
		expect(res.statusCode).toEqual(401);
		expect(res.body).toHaveProperty('status', 'error');
		expect(res.body.errors).toHaveLength(1);
		expect(res.body.errors[0]).toHaveProperty('message', 'Неверные данные авторизации');
	});

	it('should return error if validation fails', async () => {
		const res = await request(app)
			.post('/auth/login')
			.send({ username: 'testuser' });
		expect(res.statusCode).toEqual(400);
		expect(res.body).toHaveProperty('status', 'error');
		expect(res.body.errors).toHaveLength(1);
		expect(res.body.errors[0]).toHaveProperty('message', 'Укажите пароль');
	});

	it('should return login and token if login is successful', async () => {
		const res = await request(app)
			.post('/auth/login')
			.send({ username: 'testuser10', password: 'Jero2012!' });
		expect(res.statusCode).toEqual(200);
		expect(res.body).toHaveProperty('status', 'success');
		expect(res.body.token).toBeDefined();
		const decoded = jwt.verify(res.body.token, process.env.JWT_SECRET);
		expect(decoded.id).toBeDefined();
	});

	it('should return error if server error occurs', async () => {
		const createUserSpy = jest.spyOn(User, 'findOne').mockImplementation(() => {
			throw new Error('Test error');
		});
		const user = { username: 'testuser3', password: 'Jero2012!' }
		const res = await request(app).post('/auth/login').send(user);
		expect(res.statusCode).toEqual(500);
		expect(res.body).toHaveProperty('status', 'error');
		expect(res.body).toHaveProperty('message', 'Ошибка сервера');
		createUserSpy.mockRestore();
	});
});

const app = createServer();