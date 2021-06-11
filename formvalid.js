
function func1()
{

var x, res=0;
var w_months = ["Sep","Oct","Nov"];
var num = new Array(10,20,30,50);
var result=0;
var result1=0;
var i;
var a,b,c,d;


var num1=5;
var num2,num3;
var greater;
var day;

//num1 =parseInt(prompt("Enter the weekday (1-7) "));
//num2 = parseInt(prompt("Enter the number2"));
//num3 = parseInt(prompt("Enter the number3"));
//greater = (num1 > num2)?num1 : num2
for (i in num)
{
   res += i;

}
switch (num1)
{
   case 1: 
      day = "Monday";
      break;
   case 2:
      day = "Tuesday";
      break;
   case 3:
      day = "Wednesday";
      break;
   case 4:
      day = "Thursday";
      break;
   case 5:
      day = "Friday";
      break;
   case 6:
   case 7:
      day = "weekend";
      break;
   default:
      day = "Invalid day"
}

document.write("Sum of Array element " + res);

/*
sum  = num1 + num2;

for(i=0; i<num.length; i++)
{

   result = result + num[i];

}


num.unshift(50);
num.pop();
for(;i<num.length;i++,j++)
{
   result1 = result1 + num[i];
   i++;

}

a=5; b=5; c=5; d=5;
document.write ("A value Pre Increment "+ (++a)); //6
document.write ("B Value Post Increment" + (b++)); //5
document.write ("C value Pre Decrement "+ (--c)); //4
document.write ("D Value Post Decrement" + (d--));//5--4
document.write ("A value  "+ a); //6
document.write ("B Value " + b); //6
document.write ("C value "+ c);//4
document.write ("D Value " + d);//4

*/
//document.write (num[0]);

//window.alert("Java Script Invoked");
/*
document.write ( " Testing "+ sum);
document.write ("Result is " + result);
document.write ("Result after the changes " + result1);
document.write(w_months[0] + "    ");
document.write(w_months[1] + "    ");
document.write(w_months[2] + "    ");
*/
// x= document.getElementByClassName("m");
	//for(int i=0;i<x;i++) {
    //  x[i].value=10;
//  }
}
