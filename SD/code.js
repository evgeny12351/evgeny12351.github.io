
"use strict";



let can, holst, xx, yy, w, a, s, d, speed, xE, yE, kkk,dx,dy

let xarr,yarr,i,i1,speeedE, n,sparr,i2,sparr2,i3,i4,xarr2,yarr2,dx1,dy1,fon,ok,hero,sg,t1,enemies,hero1,hero2,hero3,count,label

window.onload = function() {
 sg = false
 t1 = document.getElementById("t1");
 label = document.getElementById("label");
 enemies = new Image()
    enemies.src = "enemies.png"
    ok = false
    hero = new Image()
    hero.src = "hero.png"
    hero1 = new Image()
    hero1.src = "hero1.png"
    hero2 = new Image()
    hero2.src = "hero2.png"
    hero3 = new Image()
    hero3.src = "hero3.png"
    fon = new Image()
    fon.src = "fon.jpg"
    fon.onload = function() {
        hero.onload = function() {

        
ok = true
        }
    }
    speeedE = 5
    sparr = [1,1,1]
    xarr = [120, 350, 700]
    yarr = [300, 400, 300]
    xE = 400;
    xarr2 = 250
    yarr2 = 300
    sparr2 = 2                                                               
    yE = 250;
    n = 3
i4 = 0 + i4
 i2 = 1
 i3 = 2
 function drawEnemie2(){
holst.fillstyle = "#999999"
//holst.fillRect(xarr2,yarr2,100, 50)
 }

 t1.onclick = function() {
    sg = true
    if(!localStorage.getItem("count")) {
        localStorage.setItem("count",1)
    }   else{ 
        count = parseInt(localStorage.getItem("count"))
        count = count + 1
        localStorage.setItem("count",count)
    }


    label.innerHTML = localStorage.getItem("count")
 }
    function drawEnemies() {
        i = 0
        while (i !== 3) {
            holst.fillStyle = "#997799";
           // holst.fillRect(xarr[i],yarr[i],50,50)
            
            if(sg = true) {
                holst.drawImage(enemies,xarr[i],yarr[i],50,50)

            }
            i = i + 1
        }
    }

    function controlHit() {
                if(i2 = 1) {
        dx = Math.abs(xx - xarr[i2])
        dy = Math.abs(yy - yarr[i2])
        if((dx < 50) && (dy < 50)) {
            xarr[i2] = 50000
        }
    }
    if(i3 = 2) {
        dx = Math.abs(xx - xarr[i3])
        dy = Math.abs(yy - yarr[i3])
        if((dx < 50) && (dy < 50)) {
            xarr[i3] = 50000
        }
    }
    if(i4 = 0) {
        dx = Math.abs(xx - xarr[i4])
        dy = Math.abs(yy - yarr[i4])
        if((dx < 50) && (dy < 50)) {
            xarr[i4] = 50000
        }
    }
    dx1 = Math.abs(xx - xarr2)
    dy1 = Math.abs(yy - yarr2)
    
    
      if((dx1 < 100 ) && (dy1 < 50)) {
        xarr2 = 50000
    }
}

    w = false;

    a = false;

    s = false;

    d = false;



    can = document.getElementById("can");

    holst = can.getContext("2d");



    function clearFon() {

        holst.clearRect(0, 0, 800, 600);

        holst.fillStyle = "#00FF00";

        holst.fillRect(0, 0, 800, 600);
        if(ok === true) {
    holst.drawImage(fon,0,0,800,600)


        }

    }

     

    



    xx = 120;

    yy = 240;



    function drawHero() {

        //holst.fillStyle = "#999999"

        
     if(ok = true) {
        holst.drawImage(hero,xx,yy,50,50)

     }
    }



    drawHero();

function moveEnemies() {
    i1 = 0
    while (i1 !== 3) {
        if (xarr[i1] < xx ) {
            xarr[i1] = xarr[i1] - sparr[i1]
        }  else {
            xarr[i1] = xarr[i1] + sparr[i1]
        }

        if (yarr[i1] < yy ) {
            yarr[i1] = yarr[i1] - sparr[i1]
        }  else {
            yarr[i1] = yarr[i1] + sparr[i1]
        }
       
        i1 = i1 + 1
    } 





}





    window.onkeydown = function(k1) {

        console.log(k1.keyCode);

        if(k1.keyCode === 87) {

            w = true;

        }

        if(k1.keyCode === 65) {

            a = true;

        }

        if(k1.keyCode === 83) {

            s = true;

        }

        if(k1.keyCode === 68) {

            d = true;

        }

    }



    window.onkeyup = function(k2) {

        console.log(k2.keyCode);

        if(k2.keyCode === 87) {
            holst.drawImage(hero,xx,yy,50,50)
            w = false;
            

        }

        if(k2.keyCode === 65) {
            holst.drawImage(hero1,xx,yy,50,50)
            a = false;
            

        }

        if(k2.keyCode === 83) {

            s = false;
            

        }

        if(k2.keyCode === 68) {

            d = false;
            holst.drawImage(hero3,xx,yy,50,50)

        }

    }



    speed = 10;



    function moveHero() {

        if(a === true) {

            xx = xx - speed;

        }

        if(d === true) {

            xx = xx + speed;

        }

        if(w === true) {

            yy = yy - speed;

        }

        if(s === true) {

            yy = yy + speed;
  
        }

        if(xx + 50 > 800) {
            xx = xx - speed;
        }
        if(xx < 0) {
            xx = xx + speed;
        }
        if(yy + 50 > 600) {
            
            yy = yy - speed;
        }
        if(yy < 0) {
            
            yy = yy + speed;
        }

    }

    



    setInterval(function() {
if(sg === true) {
        clearFon();
        moveHero();
        drawHero();
        moveEnemies()
       drawEnemies()
        drawEnemie2()
        controlHit();
}
    }, 50);

}








  