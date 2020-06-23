//[CHAPTER # 21 to 25]    (STRING METHODS)

 

//Ques # 01;

// var firstName = prompt("Enter a first Name :");
// var lastName  = prompt("Enter a last Name :");
// var fullName  = firstName +  lastName;
// alert("Welcome back "+fullName);

//Ques # 02;

// var mobile = prompt("Describe about favourite mobile phone");
// var a = mobile.length;
// document.write("My favourite phone is : "+mobile);
// document.write("<br><br>The length of string is: " +a);

//Ques # 03;

// var a ="Pakistani"
// var b = a.indexOf("n");
// document.write("String : "+a);
// document.write("<br>Inde of 'n' : "+b);

//Ques # 04;

// var c ="Hello World"
// var d = c.lastIndexOf("l");
// document.write("String : "+c);
// document.write("<br>Last index of 'l' : "+d);

//Ques # 05;

// var p ="Pakistani";
// var ch = p.charAt(3)
// document.write("String : "+p);
// document.write("<br>Character at index 3 : "+ch);

//Ques # 06;

// var firstName = prompt("Enter a first Name :");
// var lastName  = prompt("Enter a last Name :");
// alert(firstName.concat(' ', lastName));

//Ques # 07;

// var city = 'Hyderabad';
// var wordReplace = city.replace("Hyder", "Islam");
// document.write("City : "+city);
// document.write("<br>After Replacement : "+wordReplace);

//Ques # 08;

// var text = "Ali and Sami are best friends.They play cricket and football together";
// var textReplace = text.replace(/and/g,"&");
// document.write(textReplace);

//Ques # 10;


// var a = prompt("Enter a Letter :");
// var b = a.toUpperCase();
// document.write("User Inputs : "+a);
// document.write("<br>Upper Case : "+b);

//Ques # 11;

// var a = prompt("Enter a Letter :");
// var b = a.toLowerCase()
// document.write("User Inputs : "+a);
// document.write("<br>Title Case : "+b);

//Ques # 12;

// const num = 35.36;
// const without = num.toString().replace(".", ""); 
// document.write(without);

//Ques # 16;

// var university = "University of Karachi";
// var convert = university.split();
// document.write(convert);

//Ques # 17;

// var a = "Pakistan";
// var b = a.lastIndexOf("n");
// document.write(b);


//Ques # 18;

// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
 
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));



//[CHAPTER # 26 to 30]    (MATH METHODS)

//Ques # 01;

// var a = 3.142222;
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("number : "+a);
// document.write("<br>round off value : "+b);
// document.write("<br>floor value : "+c);
// document.write("<br>Ceil value : "+d);



//Ques # 02;


// var a = -2.673;
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// document.write("number : "+a);
// document.write("<br>round off value : "+b);
// document.write("<br>floor value : "+c);
// document.write("<br>Ceil value : "+d);

//Ques # 03;

// var a = -4;
// var b = Math.abs(a);
// document.write("Absolute value of -4 is "+b);

//Ques # 04;

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("Random diced value : "+diceRoll);

//Ques # 05;

// var headuser = prompt("Enter head user name");
// var tailuser = prompt("Enter tail user name");
// var toss = Math.random() * 2;
// var floor = Math.random(toss)
// if (floor === 0){
//     document.write("Heads "+headuser+ " win the toss")
// }else{
//     document.write("Tails "+tailuser+ " win the toss")

// }

//Ques # 06;

// var a = Math.floor(Math.random() * 101); 
// document.write("Random number between 1 and 100 are : "+a);





//Ques # 07;

// alert =(prompt("Enter your weiht in killograms"));
// document.write("The weight of user is "+alert+ " kilograms");


//Ques # 08;

// alert =(prompt("Enter a number between 1 and 10"));
// var a = Math.floor(Math.random() * 10);
// if(alert===a){
//     document.write("Congratulations")
// } else{
// document.write("Try Again");
// }


//[CHAPTER # 31 to 34]    (DATE METHODS)

//Ques # 01;

// var rightNow = new Date();
// document.write(rightNow);

//Ques # 02;

// var d = new Date();
// var currentMonth = d.getMonth();
// document.write("Current Month : "+currentMonth);


var d = new Date();
var e = d.slice(0,3);
alert(e);


