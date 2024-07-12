var num1 = 25
var num2 = 38
var num3 = 8


var result1 = num1-- + num1++ + num1++ - --num1 - --num1 - num1-- + num1
var result2 = ++num2 + ++num2 - --num2 - num2 + num2
var result3 = num3 + num3 + ++num3 + --num3 - --num3 + ++num3 + --num3 - num3
console.log("result1",result1,"result2",result2,"result3",result3)