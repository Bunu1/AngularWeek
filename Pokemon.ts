import {Attack} from './Attack';

export class Pokemon {
  constructor(
    public name: string,
    public health: number,
    public attack: number,
    public defense: number,
    public speed: number,
    public spells?: Attack[],
    public chosenSpell?: Attack
  ) {}

  calculcateDamages(): number {
    if(this.chosenSpell)
      return (this.attack + this.chosenSpell.damages) * .75;

    return 0;
  }
}
