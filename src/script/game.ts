const investSidaction = document.getElementById("sidaction-button");
const totalPts = document.getElementById("totalpts");
const sidactionPts = document.getElementById("sidaction-pts");
const pasteurPts = document.getElementById("pasteur-pts");
const inseePts = document.getElementById("insee-pts");
const letalityp = document.getElementById("letality");
const transmissionpù = document.getElementById("transimssion");
const dataQuality = document.getElementById("data-quality");
const deathsp = document.getElementById("deaths");

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

let points:number;
let spentPointsSidaction:number;
let spentPointsPasteur:number;
let spentPointsInsee:number;
let deaths:number;
let letality:number;
let transmission:number;
let data:number;
let rank:number;

