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

  it('/admin (GET)', () => {
    return request(app.getHttpServer())
      .get('/admin')
      .expect(200)
      .expect('This is Admin Page');
  });

  it('/admin/dashboard (GET)', () => {
    return request(app.getHttpServer())
      .get('/admin/dashboard')
      .expect(200)
      .expect('This is Admin Dashboard Page');
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(200)
      .expect('This is User Page');
  });

  // nested RouteModule not supported.
  it('/user/login (GET)', () => {
    return request(app.getHttpServer()).get('/user/login').expect(404);
  });
});
