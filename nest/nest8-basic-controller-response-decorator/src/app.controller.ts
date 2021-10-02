import { Controller, Get, HttpStatus, Response } from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('bad')
  lessCompatibility(@Response() res: ExpressResponse) {
    res.status(HttpStatus.OK).json([]);
  }

  @Get('good')
  moreCompatibility(@Response({ passthrough: true }) res: ExpressResponse) {
    return [];
  }
}
