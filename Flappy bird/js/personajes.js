class Rectangulo{
    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

//var Pajaro = new Rectangulo(cw/6,ch/2,50,50,"#fff");
//var Suelo = new Rectangulo(0,ch-100,cw,250,"#ddd");
function resetGame(){
    buclePrincipal.mseg = 0;
    grados = 0;
    Pajaro = new Rectangulo(cw/6,ch/3,40,40,);
    Suelo = new Rectangulo(0,ch-100,cw,250,);
    TuberiaUp = new Rectangulo(0,0,60, 0,);
    TuberiaDown = new Rectangulo(0,0,60, 0,);
    buclePrincipal.seg = 0;
}