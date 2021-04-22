function sumIntFrom1ToN(a) {
    let sum = 0
  for (let i = 0; i < a; i++) {
      

     sum = sum + i + 1;
     
  } 
  
  console.log(sum);
}

sumIntFrom1ToN(4);

sumIntFrom1ToN(13);

sumIntFrom1ToN(600);



function sumOfCubes(a, b, c) {

    if (a == null ) {
        a = 0
    }
    if (b == null ) {
        b = 0
    }
    if (c == null ) {
        c = 0
    }

    let sumn = (a ** 3 ) + (b ** 3) + (c ** 3);
    return console.log(sumn) ;

   
 
    
}

sumOfCubes(1, 5, 9);
sumOfCubes(2)
sumOfCubes()


function isStrStartOfWord(word, string) {
    if (b = string.indexOf(word) == 0)
     {return true; } 

     return false;
}
console.log(isStrStartOfWord("bu", "button"));
console.log(isStrStartOfWord("tri", "triplet"));
console.log(isStrStartOfWord("beau", "pastry"));

// console.log("Potato".indexOf("to"));


function isLEQZero(a) {
    let num = 0;
    if (num >= a) {return true; }
    return false;
}

console.log(isLEQZero(3)) 
console.log(isLEQZero(0)) 
console.log(isLEQZero(-4) )
console.log(isLEQZero(10) )


function countOccurrences(string, i) {
    
   let count = string.split(i).length-1;
   console.log(count);
    }


countOccurrences("this is a string", "i")


function calcBaseToExponent(a, b) {
    
    let c = (a ** b );

    console.log(c);
}

calcBaseToExponent(5, 5);
calcBaseToExponent(10, 10) ;
calcBaseToExponent(3, 3);


function dogAge(a) {

   let dogYear = 7;
   let year = (a * 7);
   console.log(`Your doggo is ${year} years old in dog years!`)
}

dogAge(4);

function calcLifetimeSupply(age, unit) {
    let year = 365
    let realAge = (100 - age);
    let LifetimeSnack = (realAge * unit );
    console.log(`The snack company should provide you with ${year * LifetimeSnack} units, until you are a ripe old age of 100. Happy snacking!`)
}

calcLifetimeSupply(25, 2)
calcLifetimeSupply(40, 3)

function calcLifetimeSupplyOld(age, unit, maxAge) {
    let year = 365 
    let realAge = (maxAge - age);
    let LifetimeSnack = (realAge * unit );
    console.log(`The snack company should provide you with ${Math.round(year * LifetimeSnack)} units, until you are a ripe old age of 100. Happy snacking!`)
}

calcLifetimeSupplyOld(32, 0.58, 65)



function isWaldoHere(string) {

    
        if (console.log(string.toLowerCase().includes("waldo"))) {
            
            return true;
        }
            return false;
    
    
}

isWaldoHere("is there a wal here?")
isWaldoHere("I found you Waldo!") 
isWaldoHere("Wait, don't you mean Wally?") 
isWaldoHere("waldo is here")


function isEqualSlices(a, b, c) {
    if (console.log(b * c <= a)) {
        return true;
    }
    return false;
}

isEqualSlices(11, 5, 3)
isEqualSlices(8, 3, 2)
isEqualSlices(8, 3, 3)
isEqualSlices(24, 12, 2)



// function isEqualNumXandO(string) {

// // string.split("")
// let a = "ooxx"
//     if (string.includes(a).toLowerCase()) {
        
//         return true;
//     }
// }
// console.log(isEqualNumXandO("ooxx"))


const EmailValidation = (email)  => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

console.log(EmailValidation("j@example.com")); 
console.log(EmailValidation("john.smith@com"));
console.log(EmailValidation("@example.com")); 
console.log(EmailValidation("john.smith@email.com")); 
console.log(EmailValidation("john..smith@email.com")); 