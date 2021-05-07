function sum(a, b) {

    return a + b;
}

console.log(sum(1, 2));

let sum2 = (a, b) => {
    a + b;
}

sum2 = (4, 4);
console.log(sum2);

/*ebben az esetben nem kell értékként megadni 
a függvényt egy változónak, meghívódik a függvény*/

(() => {

    console.log("önmagát hívja meg a függvény!");
})();

function isPositive(boolValue) {

    return boolValue;
};

console.log(isPositive(true));


let isPositiveVar = boolValue => {

    boolValue;
};

console.log(isPositiveVar = (false));

// ebben az esetben nem működik a return, tehát void tipusú lesz
(() => {

    return Math.round(Math.random() * 100);
})();


/*függvények esetében a JS beilleszt egy 
'return = undefined' visszatérési értéket*/

/*
let tipusú változó láthatósága(scope-ja)
blokkon belül van értelmezve*/


let coins = 55;


let incrementedCoins = (coins) => {

    return ++coins;
}
/*ebben az esetben nem a változó értéke átadódik a fv számára,
de a változó értéke nem fog változni, a fv-ben egy új érték kerül létrehozásra
*/

/*a JS érték szerint paraméterátadást használ, mivel ha az adott
paraméter címe kerülne átadásra, akkor az alap értéke is
megváltozna 
*/
console.log(incrementedCoins(coins));

console.log(coins);

let standardName = "Tonyásos Tonyási" ;

let name = {

    fullName:'Vandna Kapoor',

  /*  printInRegular: function(){
    
        console.log(`My Name is ${this.fullName}`);
    },*/

    /*arrow functio-ök esetében nem működik a 'this' kulcsszó
    a 'this' értéke mindig a legközelebbi nem 
    arrow function-höz van kötve*/
    printInArrow: () =>{
        console.log(`My Name is ${this.fullName}`)
    }
  
}
  
//  name.printInRegular();
  name.printInArrow();