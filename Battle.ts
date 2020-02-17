import {Round} from './Round';
import {Pokemon} from './Pokemon';
import {Priority} from './Priority';
import {Attack} from './Attack';

export class Battle {
  constructor(
    public a: Pokemon,
    public b: Pokemon
  ) { }

  battle() {
    let round = new Round();

    let r = 1;
    var timeoutId = setInterval(() => {
      console.log("Round " + r);
      r++;

      let order = round.getOrder(this.a, this.b);
      console.log(order[0].name + " is attacking using " + order[0].chosenSpell.name + " !");
      round.hitPokemon(order[0], order[1]);
      console.log(order[0].name + " has " + order[0].health);
      console.log(order[1].name + " has " + order[1].health);
      console.log("\n");

      if(order[0].health <= 0 || order[1].health <= 0) {
        this.getWinner();
        clearInterval(timeoutId);
      }

      console.log(order[1].name + " is attacking !");
      round.hitPokemon(order[1], order[0]);
      console.log(order[0].name + " has " + order[0].health);
      console.log(order[1].name + " has " + order[1].health);
      console.log("\n");


      if(order[0].health <= 0 || order[1].health <= 0) {
        this.getWinner();
        clearInterval(timeoutId);
      }
    }, 1000);
  }

  getWinner() {
    let winner: Pokemon;
    if(this.a.health <= 0) {
      winner = this.b;
    } else {
      winner = this.a;
    }

    console.log(winner.name + " has won with " + winner.health + " left !");
  }
}
