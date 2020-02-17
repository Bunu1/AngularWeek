"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, health, attack, defense, speed, spells, chosenSpell) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.spells = spells;
        this.chosenSpell = chosenSpell;
    }
    Pokemon.prototype.calculcateDamages = function () {
        if (this.chosenSpell)
            return (this.attack + this.chosenSpell.damages) * .75;
        return 0;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
