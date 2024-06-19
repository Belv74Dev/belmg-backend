const request = require('supertest');
const dotenv = require('dotenv');

// const setupTest = require('./setupTest');

const createServer = require('../server');

dotenv.config();

describe('Tes', () => {
	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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
});

describe('Tes', () => {
	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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
});

describe('Tes', () => {
	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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
});

describe('Tes', () => {
	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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
});

describe('Tes', () => {
	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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
});

describe('Tes', () => {
	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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
});

describe('Tes', () => {
	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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
});

describe('Tes', () => {
	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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
});

describe('Tes', () => {
	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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
});

describe('Tes', () => {
	it('should', async () => {
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

	it('should', async () => {
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

	it('should', async () => {
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
});

const app = createServer();