"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Game {
    constructor(graphics) {
        this.points = 0;
        this.spentPointsSidaction = 0;
        this.spentPointsPasteur = 0;
        this.spentPointsInsee = 0;
        this.infected = 0;
        this.deaths = 0;
        this.letality = 1;
        this.transmission = 1;
        this.data = 0.2;
        this.tickCount = 0;
        this.graphics = graphics;
        this.running = true;
        this.graphics.logo.onload = this.run;
    }
    tick() {
        return new Promise(resolve => setTimeout(resolve, 1));
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            while (this.running) {
                this.graphics.draw();
                yield this.tick();
            }
        });
    }
}
class Graphics {
    constructor() {
        this.investSidaction = document.getElementById("sidaction-button");
        this.totalPts = document.getElementById("totalpts");
        this.sidactionPts = document.getElementById("sidaction-pts");
        this.pasteurPts = document.getElementById("pasteur-pts");
        this.inseePts = document.getElementById("insee-pts");
        this.letalityp = document.getElementById("letality");
        this.transmissionp = document.getElementById("transimssion");
        this.dataQuality = document.getElementById("data-quality");
        this.deathsp = document.getElementById("deaths");
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.logo = document.getElementById("logo-sida");
    }
    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function main() {
}
//# sourceMappingURL=game.js.map