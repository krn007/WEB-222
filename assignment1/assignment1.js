
/***************************** 
* Task 1 
*****************************/ 
var studentname="Your Name";
var noofcourses="4";
var course ="CPD program";
var job="true";
var notjob="false";
if (job=="true"){
  var having="have";
  
}else{
  var having="dont have"
}
console.log("My name is " +studentname);
console.log("I'm in "+course);
console.log("I'm taking "+noofcourses + " course in the semester");
console.log("I "+having + " a part-time job now");
/***************************** 
* Task 2 
*****************************/ 
var date =2017;
var name=prompt("Please enter your age: ");
var result = date - name;
console.log("You were born in the year of " +result);
var name2=prompt("Enter the number of years you expect to study in the college ");
var result2=+date + +name2;
console.log("You will graduate from Seneca college in the year of "+result2);
/***************************** 
* Task 3
*****************************/ 
var celsius=35;
var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
var fahrenheit=95;
var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);

/***************************** 
* Task 4
*****************************/ 
function partA() {
        for (var i = 0; i <=10; i++){
            if ((i % 2) == 0) 
               console.log(i + ' Even'+ '\n');
        }
        
    }

    function partB() {
        for (var i = 0; i <=10; i++){
            if ((i % 2) !== 0) 
                console.log(i + ' Odd'+ '\n');
        }
    }

    partA();
    partB();
/***************************** 
* Task 5
*****************************/ 
//(A)//
function largeNum(a, b) {
  if ( a > b ) {
      return a;
  } else { 
     return b;
  }
}
console.log( "The larger number is " +largeNum(5,12) );
//(B)//
var largeNum=function(a,b){    
if ( a > b ) {
      return a;
  } else { 
     return b;
  }
}
console.log( "The larger number is " +largeNum(5,12) );
/***************************** 
* Task 6 
*****************************/ 

function Evaluator(){
  var add=0;
  for (var i=0;i<arguments.length;i++){
    add=add+arguments[i];
  }
  return (add/arguments.length >=50) ? true : false;
}
console.log("The average of 49,51 is greater than or equal to 50 is "+ Evaluator(49, 51)+",");
console.log("The average of 90,80,70,60 is greater than or equal to 50 is "+ Evaluator(90, 80, 70, 60)+",");
console.log("The average of 49,51 is greater than or equal to 50 is "+ Evaluator(30, 72, 24, 80)+".");

/***************************** 
* Task 7
*****************************/ 
Grader=function(score)
{
  var storegrades="";
  if(score>=90)
    storegrades="A+";
    if(score<90 && score>=80)
    storegrades="A";
  if(score<80 && score>=70)
    storegrades="B+";
  if(score<75 && score>=70)
  storegrades="B";
  if(score<70 && score>=65)
  storegrades="C+";
  if(score<65 && score>=60)
    storegrades="C";
 if(score<60 && score>=55)
  storegrades="D+";
  if(score<55 && score>=50)
  storegrades="D";
  if(score<50)
  storegrades="F";
  
  return grade;
}
var result1=Grader(93);
console.log("Your Grade is "+result1+" In grading Table: \n\nA+	90%  to  100%\nA -	80%  to  89%\nB+ -	75%  to  79%\nB -	70%  to  74%\nC+ -	65%  to  69%\nC -     60%  to  64%\nD+ -	55%  to  59%\nD -	50%  to  54%\nF -	0%    to  49% - Not a Pass\n");
var result2=Grader(85);
console.log("Your Grade is "+result2+" In grading Table: \n\nA+	90%  to  100%\nA -	80%  to  89%\nB+ -	75%  to  79%\nB -	70%  to  74%\nC+ -	65%  to  69%\nC -     60%  to  64%\nD+ -	55%  to  59%\nD -	50%  to  54%\nF -	0%    to  49% - Not a Pass\n");
var result3=Grader(48.99);
console.log("Your Grade is "+result3+" In grading Table: \n\nA+	90%  to  100%\nA -	80%  to  89%\nB+ -	75%  to  79%\nB -	70%  to  74%\nC+ -	65%  to  69%\nC -     60%  to  64%\nD+ -	55%  to  59%\nD -	50%  to  54%\nF -	0%    to  49% - Not a Pass\n");

/***************************** 
* Task 8 
*****************************/ 
function showMultiples()
{
  var cabee="";
  var panam=0;
  for(var i=1;i<=numMultiples;i++)
    {
      var panam=num*i;
      cabee=cabee+num+" x "+i+" = "+panam+"\n";
    }
return cabee;
}
var num=prompt("Enter Postive Number: ");
var numMultiples=4;
var result=showMultiples();
console.log(result);




























































































































