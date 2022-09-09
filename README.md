# randomjs
random.js with different random functions

### random()
returns a random number

### randintthis(n)
returns a random number between -n and n (exclusive)

### randBoolean()
returns a random boolean true or false

### randomintbool()
returns -1 or 1 (with less probability for zero)

### randomintbools() 
returns -1 or 0 or 1 with equal probability

### randfloats(f)
returns a random floating point number:: n point something
##### example: randrealfloat(2) >>> 2.927386543920341
##### example: randrealfloat(10) >>> 10.917839424511406

### randrealfloat(n)
returns a random real number with n digits
##### example: randrealfloat(3) >>> 871.2994981204236
##### example: randrealfloat(6) >>> 109411.34009664721

### randrealnos(r)
returns a "r" digit whole number only
##### example: randrealnos(10) >>> 4291195710
##### example: randrealnos(5) >>> 27411

### randchar()
returns a random character among:
 `!1~@2#$4%5^6&7*8(9)0_QWERTYUIOPASDFGHJKLZXCVBNM-+=|;;;:::<>,.??qwrtyeuiopasdfghjklzxcvbnm` 

### randabs()
returns a random alphabet

### randstr()
returns a random string of alphabets the length doesnt exceed 26 characters
###### eaxample: randstr() >>> dmatdisvheraw
however string length can be passed in the arguments
###### example: randstr(9) >>> lpxkznmxn 

### randInt(x,y)
returns a random integer x and y 

### randGauss()
returns a random gaussian random

### randomGauss(v)
random gaussian function

### randWholes(x,y)
random whole numbers

### getRndInteger(min,max)
random integers returning function

### randchoose()
returns a random item from a list of arguments passed into this function

### randchooselist(arr)
returns a random  item from array passed into the function 
 
 ### randSmooth(t)
 returns a random floating point approximately equal to t
 
 ### randSmooth(t,smoothness)
 returns a number within a range of smoothness 
 (geneally not necessary , it is taken to be 0.5 in default)
 
 ## sprout(n) and tremor(x,y,f=10)
 This is a function that can return oscillating range of numbers between x and y
 first it oscillates 10 floating point values around x then 10 floating point values around y shifts back to x and so on.
 f is taken 10 to be default it can be any number
 it is necessary to call the sprout() function before tremor() it can fix the range between values oscillate it is set default to 0.3
 
