import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/basic (POST)', () => {
    return request(app.getHttpServer()).post('/basic').send({}).expect(400);
  });

  it('/basic (POST)', () => {
    return request(app.getHttpServer())
      .post('/basic')
      .send({ email: 'aaaa' })
      .expect(400)
      .expect({
        statusCode: 400,
        message: ['email must be an email'],
        error: 'Bad Request',
      });
  });

  it('/basic (POST)', () => {
    return request(app.getHttpServer())
      .post('/basic')
      .send({ email: 'abcd@gmail.com' })
      .expect(201);
  });

  it('/no-error-msg (POST)', () => {
    return request(app.getHttpServer())
      .post('/no-error-msg')
      .send({ email: 'aaaa' })
      .expect(400)
      .expect({
        statusCode: 400,
        message: 'Bad Request',
      });
  });

  it('/whitelist-true (POST)', () => {
    return request(app.getHttpServer())
      .post('/whitelist-true')
      .send({ email: 'abcd@gmail.com', custom: 'aaa...' })
      .expect(201)
      .expect({ email: 'abcd@gmail.com' });
  });

  it('/whitelist-false (POST)', () => {
    return request(app.getHttpServer())
      .post('/whitelist-false')
      .send({ email: 'abcd@gmail.com', custom: 'aaa...' })
      .expect(201)
      .expect({ email: 'abcd@gmail.com', custom: 'aaa...' });
  });
});
