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

  it('/has-default-scope-service (GET)', () => {
    return request(app.getHttpServer())
      .get('/has-default-scope-service')
      .expect(200)
      .expect('true');
  });

  it('/is-same-request-scope-service-instance-with-context-id (GET)', () => {
    return request(app.getHttpServer())
      .get('/is-same-request-scope-service-instance-with-context-id')
      .expect(200)
      .expect('true');
  });

  it('/is-same-request-scope-service-instance-without-context-id (GET)', () => {
    return request(app.getHttpServer())
      .get('/is-same-request-scope-service-instance-without-context-id')
      .expect(200)
      .expect('false');
  });
});
