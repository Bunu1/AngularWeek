"use strict";
exports.__esModule = true;
var Round_1 = require("./Round");
var Battle = /** @class */ (function () {
    function Battle(a, b) {
        this.a = a;
        this.b = b;
    }
    Battle.prototype.battle = function () {
        var _this = this;
        var round = new Round_1.Round();
        var r = 1;
        var timeoutId = setInterval(function () {
            console.log("Round " + r);
            r++;
            var order = round.getOrder(_this.a, _this.b);
            console.log(order[0].name + " is attacking using " + order[0].chosenSpell.name + " !");
            round.hitPokemon(order[0], order[1]);
            console.log(order[0].name + " has " + order[0].health);
            console.log(order[1].name + " has " + order[1].health);
            console.log("\n");
            if (order[0].health <= 0 || order[1].health <= 0) {
                _this.getWinner();
                clearInterval(timeoutId);
            }
            console.log(order[1].name + " is attacking !");
            round.hitPokemon(order[1], order[0]);
            console.log(order[0].name + " has " + order[0].health);
            console.log(order[1].name + " has " + order[1].health);
            console.log("\n");
            if (order[0].health <= 0 || order[1].health <= 0) {
                _this.getWinner();
                clearInterval(timeoutId);
            }
        }, 1000);
    };
    Battle.prototype.getWinner = function () {
        var winner;
        if (this.a.health <= 0) {
            winner = this.b;
        }
        else {
            winner = this.a;
        }
        console.log(winner.name + " has won with " + winner.health + " left !");
    };
    return Battle;
}());
exports.Battle = Battle;
