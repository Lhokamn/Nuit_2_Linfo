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
        this.infected = 100;
        this.deaths = 0;
        this.letality = 0.01;
        this.transmission = 1.2;
        this.data = 0.5;
        this.tickCount = 0;
        this.graphics = graphics;
        this.running = true;
        this.graphics.canvas.addEventListener("click",() => {
            this.points++;
        }, false)
        this.graphics.investSidaction.onclick = () =>{
            if(this.points > 0){
                this.points--;
                this.letality -= 0.01;
                this.spentPointsSidaction++;
                this.updateData()
            }
        }
        this.graphics.investPasteur.onclick = () =>{
            if(this.points > 0){
                this.points--;
                this.transmission -= 0.03;
                this.spentPointsPasteur++;
                this.updateData()
            }
        }
        this.graphics.investInsee.onclick = () =>{
            if(this.points > 0 && this.data < 1){
                this.points--;
                this.data += 0.05;
                this.spentPointsInsee++;
                this.updateData()
            }
        }
        this.displayData();
        this.run();
    }

    updateData(){
        console.log("data update")
        if(Math.random() >= 0.4 ) this.transmission += 0.01;
        if(Math.random() >= 0.4 ) this.letality += 0.01;
        this.infected *= this.transmission;
        this.deaths += this.infected * this.letality;
        this.displayData();
    }

    displayData(){
        if(Math.random() <= this.data) this.graphics.letalityp.textContent = "Taux de létalité : "+this.letality.toString();
        else this.graphics.letalityp.textContent = "Taux de létalité : "+ (Math.random() >= 0.5 ? (this.letality*(this.data)).toString() : (this.letality*(2-this.data)));
        if(Math.random() <= this.data) this.graphics.transmissionp.textContent = "Taux de transmission : "+this.transmission.toString();
        else this.graphics.transmissionp.textContent = "Taux de transmission : "+ (Math.random() >= 0.5 ? (Math.floor((this.transmission*(this.data)*100))/100).toString() : Math.floor((this.transmission*(2-this.data)*100))/100);
        this.graphics.dataQuality.textContent = "Qualité des données : " + (this.data*100).toString() + "%"
        this.graphics.deathsp.textContent = Math.floor(this.deaths).toString() + " décès";
    }

    tick(){
        return new Promise(resolve => setTimeout(resolve, 1));
    }

    async run(){
        while(this.running){
            if(this.tickCount % 500 == 0) this.updateData();
            this.graphics.draw();
            this.tickCount++;
            await this.tick();
        }
    }
}

class Graphics{
    investSidaction;
    investPasteur;
    investInsee;
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
    clicker:Clicker;

    particleList:Particle[];

    clickerDimensions = [100,100];

    constructor(){
        this.investSidaction = document.getElementById("sidaction-button") as HTMLElement;
        this.investPasteur = document.getElementById("pasteur-button") as HTMLElement;
        this.investInsee = document.getElementById("insee-button") as HTMLElement;
        this.totalPts = document.getElementById("totalpts") as HTMLElement;
        this.sidactionPts = document.getElementById("sidaction-pts") as HTMLElement;
        this.pasteurPts = document.getElementById("pasteur-pts") as HTMLElement;
        this.inseePts = document.getElementById("insee-pts") as HTMLElement;
        this.letalityp = document.getElementById("letality") as HTMLElement;
        this.transmissionp = document.getElementById("transmission") as HTMLElement;
        this.dataQuality = document.getElementById("data-quality") as HTMLElement;
        this.deathsp = document.getElementById("deaths") as HTMLElement;
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.logo = document.getElementById("logo-sida") as CanvasImageSource;
        this.particleList = [];
        this.clicker = new Clicker(this.logo,this.canvas.width/2-this.clickerDimensions[0]/2,this.canvas.height/2-this.clickerDimensions[1]/2,this.clickerDimensions[0],this.clickerDimensions[1],this.ctx,this.canvas)   
    }
    
    async draw(){   
        this.clicker.draw(this.ctx);
    }
}

class Clicker{
    img:CanvasImageSource;
    x:number;
    y:number;
    width:number;
    height:number;
    ctx:CanvasRenderingContext2D
    canvas:HTMLCanvasElement;

    constructor(img:CanvasImageSource,x:number,y:number,width:number,height:number,ctx:CanvasRenderingContext2D,canvas:HTMLCanvasElement){
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx=ctx;
        this.canvas = canvas;
    }

    draw(ctx:CanvasRenderingContext2D){
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }
}

class Particle{
    img:CanvasImageSource;
    x:number;
    y:number;
    offSetX:number = 0;
    offSetY:number = 0;
    direction:number;
    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;

    constructor(img:CanvasImageSource,x:number,y:number,canvas:HTMLCanvasElement,ctx:CanvasRenderingContext2D){
        this.img = img;
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.ctx = ctx;
        
        this.direction = Math.floor(Math.random()*360);

        this.setOffsets();
        this.loop()
    }

    loop(){
        while(this.updatePosition(10)){
            this.draw(this.ctx);
        }
    }

    setOffsets(){
        if(this.direction > 270 && this.direction < 360){
            this.offSetX = this.direction / 360;
            this.offSetY = this.direction / 270;
        }
        else if(this.direction < 90 && this.direction > 0){ 
            this.offSetX = this.direction / 360;
            this.offSetY = this.direction / 90 * -1;
        }
        else if(this.direction > 90 && this.direction < 180){
            this.offSetX = this.direction / 180 *-1;
            this.offSetY = this.direction/90* -1;
        }
        else{
            this.offSetX = this.direction / 180*-1;
            this.offSetY = this.direction / 270;
        }
        
    }

    updatePosition(step:number):boolean{
        this.x += this.offSetX*step;
        this.y += this.offSetY*step;
        if(this.x < 0 || this.y < 0 || this.x > this.canvas.width || this.y > this.canvas.height){
                return false;
        }
        return true;
    }

    draw(ctx:CanvasRenderingContext2D){
        ctx.drawImage(this.img,this.x,this.y,10,10);
    }
}

function main():void{
    let graphics = new Graphics();
    console.log(graphics);
    new Game(graphics);
}

main();