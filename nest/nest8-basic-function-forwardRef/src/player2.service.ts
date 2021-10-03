import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Player1Service } from './player1.service';

@Injectable()
export class Player2Service {
  constructor(
    @Inject(forwardRef(() => Player1Service))
    private player1Service: Player1Service,
  ) {}
}
