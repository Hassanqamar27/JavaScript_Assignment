var a = 2 + 3;
document.write("Sum of 3 and 5 is "+a+ "<br/>")
var b = 2 - 3;
document.write("Sum of 3 and 5 is "+b+"<br/>")
var c = 2 * 3;
document.write("Sum of 3 and 5 is "+c+"<br/>")
var d = 2 / 3;
document.write("Sum of 3 and 5 is "+d+"<br/>")
var e = 2 % 3;
document.write("Sum of 3 and 5 is "+e+"<br/>"+"<hr/>")
var w =undefined;
document.write("Variale after variable declaration is "+w+"<br/>")
w = 5;
document.write("Initial value:"+w+"<br/>")
w++
w = w + 7
document.write("Value after addition is:"+w+"<br/>")
w--
document.write("Value after decrement is:"+w+"<br/>")
w=w%3
document.write("The remainder is:"+w+"<br/>"+"<hr/>")
ticketPrice = 600
tickets = 5
buy = ticketPrice * tickets
document.write("The cost to buy"+tickets+" tickets to a movie is:"+buy+"<br/>")
document.write("Table of 4"+"<br/>"+"<hr/>")
for(var i=1; i < 11; i++){
    s=4*i
    document.write("4 x "+i+" = "+ s+ "<br/>")
}

celsius = 25
var f = (celsius*9/5)+32
document.write("<hr/>"+celsius+"<sup>"+"o"+"</sup>"+"C"+" is "+f+"<sup>"+"o"+"</sup>"+"F"+"<br/>")
farenheit = 70
var ce = (farenheit -32)*5/9
document.write(farenheit+"<sup>"+"o"+"</sup>"+"F"+" is "+ce+"<sup>"+"o"+"</sup>"+"C"+"<br/>"+"<br/>"+"<hr/>")
document.write("<h1>Shopping Cart</h1>"+"<br/>"+"<br/>"+"<br/>")
var item1 = 650
var item2 = 100
var quantity1 = 3
var quantity2 = 7
var ship = 100
document.write("Price of item 1 is "+item1+"<br/>")
document.write("Quantity of item 1 is "+quantity1+"<br/>")
document.write("Price of item 2 is "+item2+"<br/>")
document.write("Quantity of item 2 is "+quantity2+"<br/>")
document.write("Shipping Charges "+ship+"<br/>"+"<br/>")
order = (item1*quantity1)+(item2*quantity2)+ship
document.write("Total cost of your order is "+order+"<br/>"+"<hr/>")
var totalMarks = 980;
var marksObtained = 804;
var percent = marksObtained/totalMarks*100
document.write("<br/>"+"<h1>"+"Marks Sheet"+"</h1>"+"<br/>"+"<br/>"+"<br/>"+"Total marks: "+totalMarks+"<br/>"+"Marks obtained: "+marksObtained+"<br/>"+"Percentage: "+percent+"<br/>"+"<hr/>")

var pkr = (10*104.80)+(25*28)
document.write("<h1>"+"Currency in PKR"+"</h1>"+"<br/>"+"<br>"+"Total Currency in PKR: "+pkr+"<br/>"+"<hr/>")

var initVar = 7
var arithematic = (initVar+5)*10/2
console.log(arithematic) 

var currentYear = 2023
var birthYear = 2002
var myAge = (currentYear-birthYear)
var orMyAge = myAge-1
document.write("<h1>"+"Age Calculator"+"</h1>"+"<br/>"+"<br/>"+"Current Year: "+currentYear+"<br/>"+"Birth Year: "+birthYear+"<br/>"+"Your Age is either: "+myAge+" or "+orMyAge+"<br/>"+"<hr/>")

var radius = 20
var circumference = 2*3.142*radius
var area = 3.142*(radius**2)
document.write("<h1>"+"The Geometrizer"+"</h1>"+"<br/>"+"<br/>"+"Radius of a circle: "+radius+"<br/>"+"The circumference is : "+circumference+"<br/>"+"The area is: "+area+"<br/>"+"<hr/>")

var favSnack = "chocolate chip"
var currentAge = 21;
var maxAge = 65;
var snacksPerDay = 3;
var chipOfLife = (maxAge-currentAge)*365*3
document.write("<h1>"+"The Lifetime Supply Calculator"+"</h1>"+"<br/>"+"<br/>"+"Favourite Snacks: "+favSnack+"<br/>"+"Current age: "+currentAge+"<br/>"+"Amount of snacks per day: "+snacksPerDay+"<br/>"+"You will need "+chipOfLife+" "+favSnack+" to last you untill the ripe old age of "+maxAge+"<br/>")