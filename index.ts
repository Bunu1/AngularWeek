import {Battle} from './Battle';
import {Pokemon} from './Pokemon';
import {Priority} from './Priority';
import {Attack} from './Attack';

const a_attack = new Attack('Vive attaque', 40, 70, Priority.Low);
const b_attack = new Attack('Fire bolt', 60, 40, Priority.High);
let a = new Pokemon('Pikachu', 100, 30, 20, 1, undefined, a_attack);
let b = new Pokemon('Salamèche', 100, 30, 20, 1, undefined, b_attack);

let battle = new Battle(a, b);

battle.battle();
