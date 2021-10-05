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

  it('/hello/user/yoo (GET)', () => {
    return request(app.getHttpServer())
      .get('/hello/user/yoo')
      .expect(200)
      .expect('Hello~! yoo');
  });

  it('/hello/message/hi (GET)', () => {
    return request(app.getHttpServer())
      .get('/hello/message/hi')
      .expect(200)
      .expect('msg: hi');
  });
});
