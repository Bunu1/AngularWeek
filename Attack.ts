import {Type} from './Type';
import {Priority} from './Priority';

export class Attack {
  constructor(
    public name: string,
    public damages: number,
    public precision: number,
    // public type: Type,
    // public description: string,
    public priority: Priority
  ) {}

  attackTouch(): boolean {
    let random = Math.floor(Math.random() * (100 - 1)) + 1;
    return random <= this.precision ? true : false;
  }
}
