"use strict";
exports.__esModule = true;
var Attack = /** @class */ (function () {
    function Attack(name, damages, precision, 
    // public type: Type,
    // public description: string,
    priority) {
        this.name = name;
        this.damages = damages;
        this.precision = precision;
        this.priority = priority;
    }
    Attack.prototype.attackTouch = function () {
        var random = Math.floor(Math.random() * (100 - 1)) + 1;
        return random <= this.precision ? true : false;
    };
    return Attack;
}());
exports.Attack = Attack;
