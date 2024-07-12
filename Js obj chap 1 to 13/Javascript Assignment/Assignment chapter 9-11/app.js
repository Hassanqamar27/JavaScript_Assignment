var city = prompt("Enter your city name :","Karachi")
alert("Welcome to city of Lights: "+ city) 
var gender = prompt("Enter your Gender: ","male")
if(gender == "male"){
    alert("Good Morning Sir.")
}
else{
    alert("Good Morning Ma'am.") 
}
var signal = prompt("Enter the color of Trafic Lights: ","red")
if(signal == "red"){
    alert("Must Stop")
}
else if(signal == "yellow"){
    alert("Ready to Move")
}
else if(signal == "green"){
    alert("Move now")
}
else{
    alert("Not Applicable")
}
var fuel = +prompt("Enter a remaining fuel in car in litres: ",0.25)
if(fuel<=0.25){
    alert("Please refill the Fuel")
}




var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
else if (c === 13){
alert("condition 2 is true");
}
else if (++c < 14){
alert("condition 3 is true");
}
else if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}
var totalMarks = +prompt("Enter the Total marks of three subject ",300)
var obtainedMarks = +prompt("Enter the Obtained marks of three subject ",219)
document.write("<h1>Marks Sheet</h1>"+"<br/>"+"<br/>"+"Total marks : "+totalMarks+"<br/>"+"Marks Obtained : "+obtainedMarks+"<br/>")
var percent = obtainedMarks/totalMarks*100
if(percent >= 80){
    document.write("Percentage : "+percent+"%"+"<br/>"+"Grade : A-one"+"<br/>"+"Remarks : Excellent")
}
else if(percent >= 70){
    document.write("Percentage : "+percent+"%"+"<br/>"+"Grade : A"+"<br/>"+"Remarks : Good")
}
else if(percent >= 60){
    document.write("Percentage : "+percent+"%"+"<br/>"+"Grade : B"+"<br/>"+"Remarks : You need to improve")
}
else if(percent < 60){
    document.write("Percentage : "+percent+"%"+"<br/>"+"Grade : Fail"+"<br/>"+"Remarks : Sorry")
}
var no = 7;
var y = +prompt("Enter a no to guess from 1-10 : ",6)
if(y == 7){
    alert ("Bingo! correct answer ")
}
else if(y == 6){
    alert ("Close enough to the correct answer")
}
else if(y == 8){
    alert ("Close enough to the correct answer")
}
else {
    alert ("Wrong guess")
}
var newNo = +prompt("Enter a number to check that is divisble by 3", 9)
if(newNo%3 == 0){
    alert("The number is divisible by 3")
}
else if(newNo%3 != 0){
    alert("The number is not divisible by 3")
}


var nextNo = +prompt("Enter a number to check whether the number is Even or Odd", 10)
if(nextNo%2 == 0){
    alert("The number is Even")
}
else if(nextNo%2 != 0){
    alert("The number is Odd")
}