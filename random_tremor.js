


function random() {
    return Math.random()
    //random whole number
  }


  function randintthis(n) {
    return Math.floor(Math.random() * 2 * n)  - n
    // random number inbetween -n and n (exclusive)
  }


  function randintthis2(n) {
    let ninny = (Math.floor(Math.random() * n) + 1) - (Math.floor(Math.random() * n) + 1)
    // random number inbetween -n and n (inclusive)
  }


  function randintneg(x,y) {
    return Math.floor(Math.random() * -1 * (x-y)) + y
    // returns negative integers between -x and -y (exclusive)
  }


  /*randintbetw(x,y) {
    return (Math.floor(Math.random() *10)) - Math.floor(Math.random() * 10)
  }*/
function randBoolean() {
  let tre = false 
  
  if(Math.random() > 0.5) {
    tre = true
    
  }
  return tre
}
// retruns -1 or 1 or 0 
  function randomintbool() {
    let ret
    let oop =  Math.random() - Math.random()
    if(oop < 0) {
      ret = -1
    }
    else if(oop==0) {
      ret=0
    }
    else if(oop>0) {
      ret = 1
    }
    return ret
  }
//retruns -1 , 0 , 1 equally likely
  function randomintbools() {
    let ret
    let oop =  Math.random() - Math.random()
    if(oop < -0.333) {
      ret = -1
    }
    else if(oop > -0.333 && oop < 0.333) {
      ret=0
    }
    else if(oop > 0.333) {
      ret = 1
    }
    return ret
  }

// retruns n point something
  function randfloats(f) {
    return f + Math.random()
  }
  
// randfloat return s rnadom digit real no
  function randrealfloat(e) {
    let ret = Math.random()
    for(let i = 0; i < e; i++) {
    ret *= 10
    }
    return ret
  }
//randrealnos returmns only n digited whole number only
function randrealnos(r) {
   let ret = (Math.random() * 10)
    for(let i = 0; i < r-1; i++) {
    ret *= 10
    }
    return parseInt(ret)
}

//returns random characters
function randchar() {
  let charss =  "~`!1@2#$4%5^6&7*8(9)0_QWERTYUIOPASDFGHJKLZXCVBNM-+=|;;;:::<>,.??qwrtyeuiopasdfghjklzxcvbnm` "
  return charss[Math.floor(Math.random() * 91) + 1]
}
//rando m alphabet returners
function randabs() {
  let alphabets = "qwertyuiopasdfghjklzxcvbnm"
  return alphabets[Math.floor(Math.random() * 26) + 1]
}
//retruns wanted string is argument not given it returns a string of 26 characters
function randstr(x=Math.floor(Math.random() * 10) + 1) {
  let rety = ""
  for(let y = 0; y < x; y++) {
    rety += randabs()
  }
  return rety
}
//#Source https://bit.ly/2neWfJ2 

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
/*
console.log(randomIntegerInRange(0, 5));
randomIntegerInRange(x,y)
*/

// Standard Normal variate using Box-Muller transform.
/*
function randn_bm() {

    var u = 0, v = 0;

    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)

    while(v === 0) v = Math.random();

    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

}*/
function randGauss() {

  let u = 0, v = 0;

  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)

  while(v === 0) v = Math.random();

  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

  num = num / 10.0 + 0.5; // Translate to 0 -> 1

  if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1

  return num

}
// Gaussian random
function randomGauss(v){ 

    var r = 0;

    for(var i = v; i > 0; i --){

        r += Math.random();

    }

    return r / v;

}
function randWholes(x,y) {
  return Math.floor(Math.random() * y) +x;
}
//random integers
function getRndInteger(min, max) {

  return Math.floor(Math.random() * (max - min + 1) ) + min;

}
//choosees a randon string from a list
function randchoice() {
  var choice = ""
  var choose = Math.floor(Math.random() * arguments.length);
  return arguments[choose]
}
//function returns a random item from an array
function randchooselist(arr) {
 var t =  Math.floor(Math.random() * arr.length)
  return arr[t]
}


let call;
let xn;
let fsmooth
/////    sprout  tremor
function sprout(xc=0.3) {
  call=0
  xn=true
  fsmooth = xc;
}
 
function tremor(x=0.5,y=0.5,f=10) {
  if(call==f) {xn=false}
  if(call==0) {xn=true}
  
  if(xn) {
    call+=1
  return xoss(x,fsmooth)
  
  }
  
  if(xn==false) {
    call-=1
    return yoss(y,fsmooth)
   

}
  

  
  
}
//randfloats(f)
let u = 0
function xoss(x,fsmo=fsmooth) {
  
  h = 1/fsmo
  if(Math.random() > fsmo) {
 let t = x-0.3;
   u = t + (Math.random()/h)}
  else {
    let t = x;
    u = t +(Math.random()/h)
  }
  return u

}
let j = 0
function yoss(y,fsmo=fsmooth) {
  h = 1/fsmo;
  if(Math.random() > 0.5) {
    let t = y-0.3
    j = t + (Math.random()/h)
  }
  else {
    let t = y;
    j = t + (Math.random()/h) }
  return j
}
//rand smooth return s smooth random float around "n"
///////////// sprot tremor
let g = 0
function randSmooth(r,smo=0.5) {
  let h = 1/smo
  if(Math.random()>0.5) {
    let t = r-smo;
    g = t+(Math.random()/h)
  }
  else {
    let t = r;
    g = t + (Math.random()/h)
  }
  return g
}
