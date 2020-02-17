import {Pokemon} from './Pokemon';
import {Attack} from './Attack';
import {Priority} from './Priority';

export class Round {
  constructor() {}

  getByAttackPriority(a: Pokemon, b: Pokemon) : Pokemon | null | undefined {
    if (a.chosenSpell && b.chosenSpell) {
      if ( a.chosenSpell.priority > b.chosenSpell.priority) {
        return a;
      } else if (b.chosenSpell.priority > a.chosenSpell.priority) {
        return b;
      } else {
        return null;
      }
    }

    return undefined;
  }

  getFastestPokemon(a: Pokemon, b: Pokemon): Pokemon | never {
    if(a.speed < 1)
      throw new Error("Pokemon " + a.name + " speed is not valid");
    else  if(b.speed < 1)
      throw new Error("Pokemon " + b.name + " speed is not valid");

    return a.speed > b.speed ? a : b;
  }

  getOrder(a: Pokemon, b: Pokemon): Pokemon[] | never {
    let res = this.getByAttackPriority(a, b);
    if(res === null) {
      res = this.getFastestPokemon(a, b);
      return res === a ? [a, b] : [b, a];
    } else if(res !== undefined) {
      return res === a ? [a, b] : [b, a];
    }

    throw new Error('Error spell priority');
  }

  hitPokemon(attacker: Pokemon, defenser: Pokemon): void {
    if(attacker.chosenSpell && attacker.chosenSpell.attackTouch()) {
      let damages = attacker.calculcateDamages() - defenser.defense;
      if(damages > 0)
        defenser.health -= damages;
    }
  }

  // hasTypeAscendant(a: Pokemon, b: Pokemon): boolean {
  //
  // }
}
