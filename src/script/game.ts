

class Game{
    points;
    spentPointsSidaction;
    spentPointsPasteur;
    spentPointsInsee;
    infected;
    deaths;
    letality;
    transmission;
    data;
    tickCount;
    graphics;
    running;

    constructor(graphics:Graphics){
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

    tick(){
        return new Promise(resolve => setTimeout(resolve, 1));
    }

    async run(){
        while(this.running){
            this.graphics.draw();
            await this.tick();
        }
    }
}

class Graphics{
    investSidaction;
    totalPts;
    sidactionPts;
    pasteurPts;
    inseePts;
    letalityp;
    transmissionp;
    dataQuality;
    deathsp;

    canvas;
    ctx;

    logo;

    constructor(){
        this.investSidaction = document.getElementById("sidaction-button");
        this.totalPts = document.getElementById("totalpts");
        this.sidactionPts = document.getElementById("sidaction-pts");
        this.pasteurPts = document.getElementById("pasteur-pts");
        this.inseePts = document.getElementById("insee-pts");
        this.letalityp = document.getElementById("letality");
        this.transmissionp = document.getElementById("transimssion");
        this.dataQuality = document.getElementById("data-quality")
        this.deathsp = document.getElementById("deaths");
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.logo = document.getElementById("logo-sida") as HTMLElement;

    }
    draw():void{   
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
    }
}

function main():void{

}