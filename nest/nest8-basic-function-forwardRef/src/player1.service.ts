import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Player2Service } from './player2.service';

@Injectable()
export class Player1Service {
  constructor(
    @Inject(forwardRef(() => Player2Service))
    private player2Service: Player2Service,
  ) {}
}
