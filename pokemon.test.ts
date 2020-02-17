import {Round} from "./Round";
import {Pokemon} from "./Pokemon";
import {Attack} from "./Attack";
import {Priority} from "./Priority";
import {Type} from "./Type";

describe('Speed test', () => {
  test('Pokemon A is the fastest', () => {
    const A = new Pokemon('A', 100, 30, 20, 2);
    const B = new Pokemon('B', 100, 30, 20, 1);
    const round = new Round();

    expect(round.getFastestPokemon(A, B)).toBe(A);
  });

  test('Pokemon B is the fastest', () => {
    const A = new Pokemon('A', 100, 30, 20, 1);
    const B = new Pokemon('B', 100, 30, 20, 2);
    const round = new Round();

    expect(round.getFastestPokemon(A, B)).toBe(B);
  });

  test('Pokemon A is going backward', () => {
    const A = new Pokemon('A', 100, 30, 20, -1);
    const B = new Pokemon('B', 100, 30, 20, 1);
    const round = new Round();

    expect(() => round.getFastestPokemon(A, B)).toThrow("Pokemon A speed is not valid");
  });

  test('Pokemon B is going backward', () => {
    const A = new Pokemon('A', 100, 30, 20, 1);
    const B = new Pokemon('B', 100, 30, 20, -1);
    const round = new Round();

    expect(() => round.getFastestPokemon(A, B)).toThrow("Pokemon B speed is not valid");
  });

  test('Pokemon A\'s attack has higher priority', () => {
    const A_attack = new Attack('A\'s attack', 50, 100, Priority.High);
    const B_attack = new Attack('B\'s attack', 50, 100, Priority.Low);
    const A = new Pokemon('A', 100, 30, 20, 1, undefined, A_attack);
    const B = new Pokemon('B', 100, 30, 20, 1, undefined, B_attack);
    const round = new Round();

    expect(round.getByAttackPriority(A, B)).toBe(A);
  });

  test('Pokemon B\'s attack has higher priority', () => {
    const A_attack = new Attack('A\'s attack', 50, 100, Priority.Low);
    const B_attack = new Attack('B\'s attack', 50, 100, Priority.High);
    const A = new Pokemon('A', 100, 30, 20, 1, undefined, A_attack);
    const B = new Pokemon('B', 100, 30, 20, 1, undefined, B_attack);
    const round = new Round();

    expect(round.getByAttackPriority(A, B)).toBe(B);
  });

  test('Pokemon A\'s attack is undefined', () => {
    const B_attack = new Attack('B\'s attack', 50, 100, Priority.High);
    const A = new Pokemon('A', 100, 30, 20, 1);
    const B = new Pokemon('B', 100, 30, 20, 1, undefined, B_attack);
    const round = new Round();

    expect(round.getByAttackPriority(A, B)).toBe(undefined);
  });

  test('Pokemon B\'s attack is undefined', () => {
    const A_attack = new Attack('A\'s attack', 50, 100, Priority.High);
    const A = new Pokemon('A', 100, 30, 20, 1, undefined, A_attack);
    const B = new Pokemon('B', 100, 30, 20, 1);
    const round = new Round();

    expect(round.getByAttackPriority(A, B)).toBe(undefined);
  });
});

describe('Attack test', () => {
  let MathRandom: any;
  beforeEach(() => {
    MathRandom = Math.random;
    Math.random = () => 0.50;
  });

  afterEach(() => {
    Math.random = MathRandom;
  });

  test('Pokemon A loosess 30hp', () => {
    const b_attack = new Attack('B\'s attack', 50, 100, Priority.High);
    const A = new Pokemon('A', 100, 30, 20, 1);
    const B = new Pokemon('B', 100, 30, 20, 2, [b_attack], b_attack);
    const round = new Round();

    round.hitPokemon(B, A);
    expect(A.health).toBe(60);
  });

  test('Pokemon B looses 30hp', () => {
    const a_attack = new Attack('A\'s attack', 50, 100, Priority.High);
    const A = new Pokemon('A', 100, 30, 20, 1, [a_attack], a_attack);
    const B = new Pokemon('B', 100, 30, 20, 2);
    const round = new Round();

    round.hitPokemon(A, B);
    expect(B.health).toBe(60);
  });

  test('Attack must hit', () => {
    const attack = new Attack('Attack', 50, 50, Priority.High);
    expect(attack.attackTouch()).toBe(true);
  });

  test('Attack must miss', () => {
    const attack = new Attack('Attack', 50, 49, Priority.High);
    expect(attack.attackTouch()).toBe(false);
  });

  test('Attack hits, Pokemon B looses 30hp', () => {
    const attack = new Attack('Attack', 50, 80, Priority.High);
    const A = new Pokemon('A', 100, 30, 20, 1, [attack], attack);
    const B = new Pokemon('B', 100, 30, 20, 2);
    const round = new Round();

    round.hitPokemon(A, B);
    expect(B.health).toBe(60);
  });

  test('Attack misses, Pokemon B looses no hp', () => {
    const attack = new Attack('Attack', 50, 40, Priority.High);
    const A = new Pokemon('A', 100, 30, 20, 1, [attack], attack);
    const B = new Pokemon('B', 100, 30, 20, 2);
    const round = new Round();

    round.hitPokemon(A, B);
    expect(B.health).toBe(100);
  });
});
