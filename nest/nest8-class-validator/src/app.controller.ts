import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  @Post('basic')
  @UsePipes(new ValidationPipe({}))
  basic(@Body() body: CreateUserDto) {
    return body;
  }

  @Post('no-error-msg')
  @UsePipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  )
  noErrorMsg(@Body() body: CreateUserDto) {
    return body;
  }

  @Post('whitelist-true')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
    }),
  )
  whitelistTrue(@Body() body: CreateUserDto) {
    return body;
  }

  @Post('whitelist-false')
  @UsePipes(
    new ValidationPipe({
      whitelist: false,
    }),
  )
  whitelistFalse(@Body() body: CreateUserDto) {
    return body;
  }
}
