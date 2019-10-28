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






var counter= require('./count');                      //importing the module in main file
console.log(counter(['shaun', 'crystal','ryu']));

console.log(stuff.counter(['shaun','srystal','jksf']));
console.log(stuff.adder(3,5));
console.log(stuff.adder(stuff.pi +5));

// #### inbuilt modules , events module #### 

var events =require('events');

var myemmiter=new events.EventEmmiter()  //to create custom events like onclick
myemmiter.on('someevent',function(msg){         // creting event
    console.log(msg);
});

myemmiter.emit('someevent','the event was emitted');  //invoking and passing values to created event


//util module
var events=require('events');
var events=require('util');     //to inherit the events

var person=function(name){
    this.name=name;             
}

util.inherits(person.events.EventsEmmitter);

var james=new person('james');

var ryu=new person('ryu');
var mary=new person('mary');

var people=[james.mary,ryu];
people.forEach(function(person)
{
    person.on('speak',function(msg){          //custom event 'speak' created
        console.log(person.name + 'said: ' + msg);       //process on invoking the creted module
    });
});

ryu.emit('speak','hey dude    ')         //application of custom events
james.emit('speak','hey dude    ')
mary.emit('speak','hey dude    ')

//#### rading and writting files ####

var fs= require('fs');
var readme =fs.readFileSync('readMe.txt',utf8);  //need readme.txt file
fs.writeFileSync('writeme.txt',readme);  //copying text from one file to another


//#### creating and removing directories ####
var fs=require('fs');
fs.unlink('writem.txt');  // to delete some existing files
fs.mkdirSync('kishan');  //to create directory
fs.rmdir('kishan');   // to remove the directory

// asynchronously creating directory
fs.mkdir('stuff',function(){
    fs.readFile('readMe.txt','utf8',function(err,data){
        fs.writeFile('./kishan/writeMe.txt',data);
    });
});

//to remove directory asynchronous
use rmdir in place of mkdir;

//#### creating server ####

var http=require('http');
var server=http.createServer(function(req,res){       //creating the server
    console.log('request was made:' + req.url);      //will display the URL controlling this process
    res.writeHead(200,,{'Content-Type':'text/plain'});  //creting heaeder that will give response
    res.end('hey kishan');            //ending the process
});

server.listen(3000,'127.0.0.1');        //making server listen to the port
console.log('lostening to server 3000');

//####readable streams ####
var http=require('http');
var fs=require('fs');
var myreadstream=fs.createReadStream(__dirname +'/readme.txt'.'utf8'); //pass the data in chuncks to the var from readme.txt
myreadstream.on('data',function(chunk){   
    console.log('new chunk recieved');
    console.log(chunk);
});

//#### writable stream ####
var http=require('http');
var fs=require('fs');

var myreadstream=fs.createReadStream(__dirname +'/readme.txt'.'utf8'); //pass the data in chuncks to the var from readme.txt
var mywritestream=fs.createReadStream(__dirname +'/readme.txt'.'utf8'); //pass the data in chuncks to the var from readme.txt

myreadstream.on('data',function(chunk){   
    console.log('new chunk recieved');
    mywritestream.write(chunk);
});

//#### pipes ####
var http=require('http');
var fs=require('fs');

var myreadstream=fs.createReadStream(__dirname +'/readme.txt'.'utf8'); //pass the data in chuncks to the var from readme.txt
var mywritestream=fs.createReadStream(__dirname +'/readme.txt'.'utf8'); //pass the data in chuncks to the var from readme.txt

myreadstream.pipe(mywritestream);                //piping data directly to writestream using pipe
});

//for response to the webpage we can remove the writestrream part with res.
var http=require('http');
var server=http.createServer(function(req,res){       //creating the server
    console.log('request was made:' + req.url);      //will display the URL controlling this process
    res.writeHead(200,,{'Content-Type':'text/plain'});  //creting heaeder that will give response
    var myreadstream=fs.createReadStream(__dirname +'/readme.txt'.'utf8'); //pass the data in chuncks to the var from readme.txt
    myreadstream.pipe(res);
});

server.listen(3000,'127.0.0.1');        //making server listen to the port
console.log('lostening to server 3000');

//#### serving html pages ####
var http=require('http');
var server=http.createServer(function(req,res){       //creating the server
    console.log('request was made:' + req.url);      //will display the URL controlling this process
    res.writeHead(200,,{'Content-Type':'text/html'});  //creting heaeder that will give response
    var myreadstream=fs.createReadStream(__dirname +'/index.html'.'utf8'); //pass the data in chuncks to the var from readme.txt
    myreadstream.pipe(res);
});

server.listen(3000,'127.0.0.1');        //making server listen to the port
console.log('lostening to server 3000');
 //#### serving json to user ####
 var http=require('http');
var server=http.createServer(function(req,res){       //creating the server
    console.log('request was made:' + req.url);      //will display the URL controlling this process
    res.writeHead(200,,{'Content-Type':'application/json'});  //creting heaeder that will give response
    var myobj ={
        name:'ryu',
        job :'ninja',                     //creating json file
        age:29
    };
    res.end(JSON.stringify(myObj));
});
server.listen(3000,'127.0.0.1');        //making server listen to the port
console.log('lostening to server 3000');

//#### routing #####
var http=require('http');
var server=http.createServer(function(req,res){       //creating the server
    console.log('request was made:' + req.url);       //to check what user has requested
    if(req.url==='/home' || req.url==='/')
      {
    res.writeHead(200 ,{'Content-Type':'text/'});  //creting heaeder that will give response
    fs.createReadStream(__dirname +'/index.html').pipe(res); //pass the data in chuncks to the var from readme.txt
      }  
                                                        //in her we are controlling the page url using if else loops
      else if(req.url==='/home' || req.url==='/')
      {
    res.writeHead(200 ,{'Content-Type':'text/html'});  //creting heaeder that will give response
    fs.createReadStream(__dirname +'/contact.html').pipe(res); //pass the data in chuncks to the var from readme.txt
      }  
      else if(req.url==='/api/ninjas')             
      {
          var ninjas=[{name:'ryu',age:29},{name:'yoshi',age:10}];      //json file
          res.writeHead(200,{'Content-Type':'application/json'});
          res.end(JSON.stringify(ninjas));
      }
      else{
        res.writeHead(404 ,{'Content-Type':'text/html'});  //creting heaeder that will give response
        fs.createReadStream(__dirname +'/404.html').pipe(res); //pass the data in chuncks to the var from readme.txt
      }
});

server.listen(3000,'127.0.0.1');        //making server listen to the port
console.log('lostening to server 3000');