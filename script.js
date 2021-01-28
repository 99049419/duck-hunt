var directions = ["N","NE","E","SE","S", "SW","W", "NW"];
var screensizeH = screen.height;
var screensizeW = screen.width;
var hitC = 0;
var missC = 0;


function fly(direction){
  
//console.log(direction)
    switch(direction){
        case "N":
            var newtop = getOffsetTop(duckimg) - 75;
            if (newtop < 0){
                var newtop = getOffsetTop(duckimg) + 75;
            }else{ var newtop = getOffsetTop(duckimg) - 75;}
            newtop = newtop + "px";
            duckimg.style.top = newtop;
            break;
        case "NE":
            var newtop = getOffsetTop(duckimg) - 75;
            var newleft = getOffsetLeft(duckimg) + 75;
            if (newtop < 0 || newleft > 1500){
                var newtop = getOffsetTop(duckimg) + 75;
                var newleft = getOffsetLeft(duckimg) - 75;

            }else{var newtop = getOffsetTop(duckimg) - 75;
                var newleft = getOffsetLeft(duckimg) + 75;}
            newtop = newtop + "px";
            duckimg.style.top = newtop;
            newleft = newleft + "px";
            duckimg.style.left = newleft;
            break;
        case "E":
            var newleft = getOffsetLeft(duckimg) + 75;
            if (newleft > 1500){
            var newleft = getOffsetLeft(duckimg) - 75;
            }else{var newleft = getOffsetLeft(duckimg) + 75;}
            newleft = newleft + "px";
            duckimg.style.left = newleft;
            break;
        case "SE":
            var newtop = getOffsetTop(duckimg) + 75;
            var newleft = getOffsetLeft(duckimg) + 75;
            newtop = newtop + "px";
            duckimg.style.top = newtop;
            newleft = newleft + "px";
            duckimg.style.left = newleft;
            break;
        case "S":
            var newtop = getOffsetTop(duckimg) + 75;
            if (newtop > screensizeH - 250){
                var newtop = getOffsetTop(duckimg) - 75;
            }else{ var newtop = getOffsetTop(duckimg) + 75;}
            newtop = newtop + "px";
            duckimg.style.top = newtop;
            break;
        case "SW":
            var newtop = getOffsetTop(duckimg) + 75;
            var newleft = getOffsetLeft(duckimg) - 75;
            newtop = newtop + "px";
            duckimg.style.top = newtop;
            newleft = newleft + "px";
            duckimg.style.left = newleft;
            break;
        case "W":
            var newleft = getOffsetLeft(duckimg) - 75;
            if (newleft < 0){
            var newleft = getOffsetLeft(duckimg) + 75;
            }else{var newleft = getOffsetLeft(duckimg) - 75;}
            newleft = newleft + "px";
            duckimg.style.left = newleft;
            break;
        case "NW":
            var newtop = getOffsetTop(duckimg) - 75;
            var newleft = getOffsetLeft(duckimg) - 75;
            if (newtop < 0 || newleft < 0){
                var newtop = getOffsetTop(duckimg) + 75;
                var newleft = getOffsetLeft(duckimg) + 75; 
            }
            newtop = newtop + "px";
            duckimg.style.top = newtop;
            newleft = newleft + "px";
            duckimg.style.left = newleft;
            break;
    }

}

var duckimg = document.getElementById("duck");
duckimg.onclick = duckShot;
var body = document.getElementById("body");
body.onclick = shotMissed;

function shotMissed(){
    missC++;
    document.getElementById("counterMiss").innerHTML = missC;

    console.log(missC)
    if (missC === 5){
        alert("You lost with " + missC + "  misses and " + hitC + " hits")
        hitC = 0;
        missC = 0;
        document.getElementById("counterHit").innerHTML = hitC;
        document.getElementById("counterMiss").innerHTML = missC;
    }
}

function duckShot(){

   
    hitC++;
    document.getElementById("counterHit").innerHTML = hitC;

    console.log(hitC)

    if (hitC === 5){
        alert("You won with " + hitC + "  hits and " + missC + " misses")
        hitC = 0;
        missC = 0;
        document.getElementById("counterHit").innerHTML = hitC;
        document.getElementById("counterMiss").innerHTML = missC;


    }
    event.stopPropagation();

}

 function start() {
    setInterval(function(){ 
        //console.log("left: " + getOffsetLeft(duckimg))
        //console.log("top: " + getOffsetTop(duckimg))
  
        fly(directions[Math.floor((Math.random() * directions.length))]);
        //console.log("left: " + getOffsetLeft(duckimg))
        //console.log("top: " + getOffsetTop(duckimg))

  
     }, 500);
  }

  function getOffsetLeft( elem )
  {
      var offsetLeft = 0;
      do {
        if ( !isNaN( elem.offsetLeft ) )
        {
            offsetLeft += elem.offsetLeft;
        }
      } while( elem = elem.offsetParent );
      return offsetLeft;
  }

  function getOffsetTop( elem )
  {
      var offsetTop = 0;
      do {
        if ( !isNaN( elem.offsetTop ) )
        {
            offsetTop += elem.offsetTop;
        }
      } while( elem = elem.offsetParent );
      return offsetTop;
  }

   start();