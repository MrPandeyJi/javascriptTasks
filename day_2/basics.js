//ACTIVITY- 1

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function rem(a,b){
    return a%b;
}
let a =4, b=8;
console.log("The addition of "+a +" & " + b + " is "  + add(a,b));
console.log("The subtraction of "+a +" & " + b + " is "  + subtract(a,b));
console.log("The multiplication of "+a +" & " + b + " is "  + mul(a,b));
console.log("The divison of "+a +" & " + b + " is "  + divide(a,b));
console.log("The remainder of "+ a +" & " + b + " is "  + rem(a,b));

//ACTIVITY-2

let num = 10;
console.log(num);
num += 2;
console.log(num);
num -= 2;
console.log(num);

//ACTIVITY-3
let num1 = 100 , num2 = 200;
console.log("Is num1 > num2? " + (num1 > num2));
console.log("Is num1 < num2? " + (num1 < num2));
console.log("Is num1 <= num2? " + (num1 <= num2));
console.log("Is num1 >= num2? " + (num1 >= num2));

let var1 = 10, var2= '10';

console.log("var1 == var2? "+ (var1 == var2));
console.log("var1 === var2? "+ (var1 === var2));

//ACTIVITY- 4

let age = 10, weight = 60;
if(age>18 && weight >=55){
    console.log("can wrestle");
}
else{
    console.log("cannot wrestle")
}

//ACTIVITY-5
let drive = age>18 ? "can drive" : "cannot drive";
console.log(" a person "+ drive);
