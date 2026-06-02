// if (true) {
//      x = "var";
//     let y = "let";
//     const z = "const"
     
// }
// console.log(y);

// console.log(null == undefined);

// function fly() {
//     let plane = "boeing 747"
//     console.log(plane)
// }

// fly ()
// console.log(plane)



// function outer() {
//     let count = 0;
//     function inner () {
//         count++
//         console.log(count)
//     }
//     return inner
// }

// let a = outer()
//  a()
//  a()

//  let b = outer()
//  b()
//  b()


   
// function createBank() {
//     let balance = 100;

//     return function checkBalance () {
//         console.log(balance)
//     }
// }

// const myAccount = createBank();
// run the outer function and save the innner and save the inner function into a variable

// myAccount()


function createPlayer(playerName) {
    let score = 0;

    return function() {
        score += 10;
        return playerName + " has " + score + "points"
    }
}

const player1 = createPlayer("Mario");
const player2 = createPlayer("Luigi");
console.log(player1())
console.log(player1())
console.log(player2())