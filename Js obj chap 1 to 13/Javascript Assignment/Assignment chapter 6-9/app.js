var a = 10
document.write("Result:<br/>" + "The value of a is: " + a + "<br/>" + "<hr/>")
document.write("The value of ++a is: " + ++a + "<br/>")
document.write("Now the value of a is: " + a + "<br/>" + "<br/>")
document.write("The value of a++ is: " + a++ + "<br/>")
document.write("Now the value of a is: " + a + "<br/>" + "<br/>")
document.write("The value of --a is: " + --a + "<br/>")
document.write("Now the value of a is: " + a + "<br/>" + "<br/>")
document.write("The value of --a is: " + a-- + "<br/>")
document.write("Now the value of a is: " + a + "<br/>" + "<br/>" + "<hr/>")

var p = 2, q = 1;
document.write("a is: " + p + "<br/>" + "b is: " + q + "<br/>")
var result = --p - --q + ++q + q--;

document.write("result is: " + result + "<br/>" + "<br/>")
document.write("In --a first decreement" + "<br/>" + "<br/>" + "In --a - --b : both first decreement then subtract" + "<br/>" + "<br/>" + "In --a - --b + ++b : both a and b first decreement and increement then subtract and add" + "<br/>" + "<br/>" + "In --a - --b + ++b + b-- : both a and b first decreement and increement then subtract and add and b in the last add before decreement." + "<br/>" + "<hr/>")


var greet = prompt("Enter your name: ", "John Doe")
alert("Hello " + greet)

var no = +prompt("Enter a number to print a table: ")
if (no == "") {
    no = 5
}
for (i = 1; i < 11; i++) {
    document.write(no + " x " + i + " = " + no * i + "<br/>")
}
var sub1 = prompt("Enter a Subject 1 name: ")
var sub2 = prompt("Enter a Subject 2 name: ")
var sub3 = prompt("Enter a Subject 3 name: ")
var totalMarks = 100;
var oMarks1 = +prompt("Enter the marks of " + sub1)
var oMarks2 = +prompt("Enter the marks of " + sub2)
var oMarks3 = +prompt("Enter the marks of " + sub3)
var percent1 = oMarks1 / totalMarks * 100
var percent2 = oMarks2 / totalMarks * 100
var percent3 = oMarks3 / totalMarks * 100
var totalPer = (percent1+percent2+percent3)/300*100
var totalObtained = oMarks1 + oMarks2 + oMarks3;
var totalMa = totalMarks + totalMarks + totalMarks 
document.write("<hr/>"+"<table border=><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr ><tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+oMarks1+"</td><td>"+percent1+"%</td></tr><tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+oMarks2+"</td><td>"+percent2+"%</td></tr><tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+oMarks3+"</td><td>"+percent3+"%</td></tr><tfoot><tr><td>"+"Total"+"</td><td>"+ totalMa+"</td><td>"+ totalObtained +"</td><td>"+totalPer+"%</td></tr></tfoot></table>")