//ACTIVITY-1
let num = 0;
if(num>0){
    console.log("num is positive");
}
else if(num<0){
    console.log("num is negative");
}
else{
    console.log("num is zero");
}

//-> task 2
let age= 2;
if(age>=18){
    console.log("The person can vote");
}
else{
    console.log("the person cannot vote");
}

//ACTIVITY-2 - largest of three nums
let num1 =100, num2=20, num3=30;
if(num1>num2 && num1 >num3){
    console.log("num1 i.e "+num1+ " is largest");
}
else if(num2>num1 && num2>num3){
    console.log("num2 i.e "+num2+ " is largest");
}
else{
    console.log("num3 i.e "+num3+ " is largest");
}


//ACTIVITY-3   SWITCH CASE
let day =7;
let dayname;
switch (day) {
    case 1:
        dayname ="Monday";
        break;
    case 2:
        dayname ="Tuesday";
        break;
    case 3:
        dayname ="Wednesday";
        break;
    case 4:
        dayname ="Thursday";
        break;
    case 5:
        dayname ="Friday";
        break;
    case 6:
        dayname ="Saturday";
        break;
    case 7:
        dayname ="Sunday";
        break;

    default:
        dayname="Invalid day";
        break;
}

console.log(dayname);

// task5

function getGrade(score) {
    let grade;

    // Convert score to a range that can be easily used with switch-case
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }

    return grade;
}

// Test the function
let score = 55;
console.log(`The grade for score ${score} is: ${getGrade(score)}`); // Output: The grade for score 85 is: B

//ACTIVITY-4

let no = 223;
let res = (no%2 ===0) ? 'even' : 'odd';
console.log(`${no} is ${res}`);

//ACTIVITY-5
function isLeap(year){
    if((year%4===0 && year%100 !==0 ) || year % 400 ===0){
        return true;
    }
    return false;
}
let year = 200;
console.log(`${year} is a leap year = ${isLeap(year)}`);