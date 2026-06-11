// function makeSubtractor(minusNum) {
// return function (num) {
//     return num - minusNum;
// }
// }
// const number = makeSubtractor(5);
// console.log(number(20));



// function makeFileNamer(extension) {
//     return function(string) {
//         return  string + extension;
//     }
// }

// const makeImage = makeFileNamer(".png");
// const makeSong = makeFileNamer(".mp3");

// console.log(makeImage("profile-pic"));
// console.log(makeSong("favourite-tune"));



// function makeRepeator(times) {
//     return function(text) {;
//     return text.repeat(times)

// }
// }
 
// const text = makeRepeator(3)
// console.log(text("rashmi"))


// function makePassowordChecker(correctPassword) {
//       return function(guess){;
//       return guess === correctPassword

      
// }
// }

// const check1 = makePassowordChecker ("secret")
// console.log(check1(wrongPassword));
//  console.log(check2(standing))



// function makeCurrencyFormatter(symbol) {
//     return function(number){
//     return  symbol + number
// }
// }

// const rupee = makeCurrencyFormatter("₹");
// console.log(rupee(100)

function createAtm() {
    let dailyLimit = 100;

    return function(amount) {
        if  (amount <= dailyLimit) {
            dailyLimit -= amount;
            return "success! remaining dailyLimit :$" +dailyLimit
        }else{
            return "denied! you can not exceed your dailyLimit" +dailyLimit
        }
    }
}
 const withdraw = 

