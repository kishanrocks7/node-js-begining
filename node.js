// ####GLOBAL OBJECTS####
console.log('hey kishan');             // to print anything

setTimeout(function(){
console.log('3 seconds have passed');      //setTimeout function
},3000);


setInterval(function(){
console.log('3 seconds have passed');      //canbe used to update any variable after a 
},2000);                                    time interval also with if else loop

console.log(__dirname);                     //can print directory name
console.log(__filename);                     //can print file name

####FUNCTION EXPRESSIONS####
function sayhi(){
console.log('hi');              // creating a normal function
};

sayhi();               //invoking the function

//using function expressions
var saybye=function(){
    console.log('bye');
};

say bye;                  //invoking the function

//passing function into another function
function callfunction(fun){
    fun();
}

var saybye=function(){
    console.log('bye');
};

callfunction(saybye);


// #### MODULES AND require() ####
 var counter=function(arr){
     return 'there are'+ arr.length +'elements in this array';      //we have created a module in another file called count.js
 };                                                                 

 var adder=function(a,b){
     return `the sum of the two number is $[a+b]`;  //another way of creating function  
 };

 var pi=3.14;
module.exports=counter;                 // will make this module available to use in another file
module.exports.counter=counter;
module.exports.adder=adder;
module.exxports.pi=pi;

//easier ways to export modules;
module.exports.counter=function(arr){
    return `lenght of the string is`+arr.length+'units';
};

//or

module.exports={
    counter:counter;
    adder:adder;
    pi:pi;
};

// #### inbuilt modules , events module #### 




var counter= require('./count');                      //importing the module in main file
console.log(counter(['shaun', 'crystal','ryu']));

console.log(stuff.counter(['shaun','srystal','jksf']));
console.log(stuff.adder(3,5));
console.log(stuff.adder(stuff.pi +5));
