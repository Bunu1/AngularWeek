"use strict";
exports.__esModule = true;
var Round = /** @class */ (function () {
    function Round() {
    }
    Round.prototype.getByAttackPriority = function (a, b) {
        if (a.chosenSpell && b.chosenSpell) {
            if (a.chosenSpell.priority > b.chosenSpell.priority) {
                return a;
            }
            else if (b.chosenSpell.priority > a.chosenSpell.priority) {
                return b;
            }
            else {
                return null;
            }
        }
        return undefined;
    };
    Round.prototype.getFastestPokemon = function (a, b) {
        if (a.speed < 1)
            throw new Error("Pokemon " + a.name + " speed is not valid");
        else if (b.speed < 1)
            throw new Error("Pokemon " + b.name + " speed is not valid");
        return a.speed > b.speed ? a : b;
    };
    Round.prototype.getOrder = function (a, b) {
        var res = this.getByAttackPriority(a, b);
        if (res === null) {
            res = this.getFastestPokemon(a, b);
            return res === a ? [a, b] : [b, a];
        }
        else if (res !== undefined) {
            return res === a ? [a, b] : [b, a];
        }
        throw new Error('Error spell priority');
    };
    Round.prototype.hitPokemon = function (attacker, defenser) {
        if (attacker.chosenSpell && attacker.chosenSpell.attackTouch()) {
            var damages = attacker.calculcateDamages() - defenser.defense;
            if (damages > 0)
                defenser.health -= damages;
        }
    };
    return Round;
}());
exports.Round = Round;
