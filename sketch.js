let step = false;
let paststep=["H"];
let game= true;
let win=false;
let lose=false;
function setup() {
    createCanvas(500,500);
}

let char ={
    x:50,
    y:190,
    draw: function(){
        fill(225,0,0);
        rect(this.x,this.y,75,175);
    },
    a:this.x+75,
    b:this.y+175
}
let ground={
    x:0,
    y:300,
    draw: function(){
        fill("green");
        rect(this.x,this.y,500,300)     
    }
    
}
let road={
    x:0,
    y:325,
    length:900,
    draw:function(){
        fill("black");
        rect(this.x,this.y,this.length,50);
    }
}

let stripes={
    x:road.x,
    y:345,
    length:30,
    numberStripes:75,
    width:10,
    draw:function(){
        fill("white"); 
        for(i=0;i<road.length/this.numberStripes;i++)
        rect(i*this.numberStripes+this.x, this.y,this.length,this.width);                         
    }
}
let enemy = {
    x:50,
    y:165,
    draw: function(){
        fill("green");
        rect(this.x,this.y,75,175);
    },
    a:this.x+75,
    b:this.y+175
}

let finishLine={
    x:road.x+road.length,    
    y:325,
    length:40,
    draw:function(){
        fill("yellow");
        rect(this.x,this.y,this.length,50);
    }        
}  
let gameState={
    intro: function(){
        background("green");
        
    },
    gaming:function (){
         background("blue");
         ground.draw();
         road.draw();
         stripes.draw();
         finishLine.draw();
         enemy.draw();
         char.draw();
         enemy.x++;
         if(step===true){
             road.x-=10;
             enemy.x-=10;
             stripes.x-=10;
             finishLine.x-=10;
             step=false;
         }
         if(char.x+75>finishLine.x&&lose===false){
            game=false; 
            win=true;
         }
         if(enemy.x+75>finishLine.x&&win===false){
            game=false; 
            lose=true;
         }
        
    },
    won:function(){
        background("white");
        textSize(50);
        fill("yellow");
        text("You won",150,200);
    },
    lost:function(){
        background("black")
        textSize(50);
        fill("red");
        text("You lost",150,200);                                                
}    


}
function draw(){
//Game Display
if(game===true){
  gameState.gaming()
}
  if(lose===true){
  gameState.lost();
  }
  if(win===true){
  gameState.won();
  }
}

function keyReleased() {
    //Lose
        if (keyCode === 74&&paststep[0]==="J"||keyCode === 72&&paststep[0]==="H") {
        game=false;
        lose=true;
    }

    //J
    if (keyCode === 74&&paststep[0]==="H") {
        step=true;
        paststep.pop();
        paststep.push("J");
    }
    //H
    if (keyCode === 72&&paststep[0]==="J") {
        step=true;
        step=true;
        paststep.pop();
        paststep.push("H");
    }
}