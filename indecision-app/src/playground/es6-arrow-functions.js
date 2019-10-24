//es5 function
const square = function (x) {
    return x*x;
}
console.log(square(2));

// we can remove the const and just name the function itself
function fsquare(x) {
    return x*x;
}
console.log(fsquare(3));

//es6 arrow functions are anonymous and can be accessed only via a const or let
const asquare =  (x) => {
    return x*x;
}

console.log(asquare(4));

//in the above case we were only returning a single expression, we can do it as follows
const csquare =  (x) => x*x;

console.log(csquare(5));

const multiplier ={
    numbers:[2,3,4],
    multiplyBy:2,
    multiply (){
        return this.numbers.map((number) => number*this.multiplyBy)
    }
};

console.log(multiplier.multiply());