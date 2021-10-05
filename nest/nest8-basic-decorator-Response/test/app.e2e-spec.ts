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

  it('/bad (GET)', () => {
    return request(app.getHttpServer()).get('/bad').expect(200).expect([]);
  });

  it('/good (GET)', () => {
    return request(app.getHttpServer()).get('/good').expect(200).expect([]);
  });
});
