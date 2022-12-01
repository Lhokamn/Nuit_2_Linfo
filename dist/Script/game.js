"use strict";
const investSidaction = document.getElementById("sidaction-button");
const totalPts = document.getElementById("totalpts");
const sidactionPts = document.getElementById("sidaction-pts");
const pasteurPts = document.getElementById("pasteur-pts");
const inseePts = document.getElementById("insee-pts");
const letalityp = document.getElementById("letality");
const transmissionp = document.getElementById("transimssion");
const dataQuality = document.getElementById("data-quality");
const deathsp = document.getElementById("deaths");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const logo = document.getElementById("logo-sida");
let points;
let spentPointsSidaction;
let spentPointsPasteur;
let spentPointsInsee;
let deaths;
let letality;
let transmission;
let data;
let rank;
logo.onload = main;
function main() {
}
//# sourceMappingURL=game.js.map