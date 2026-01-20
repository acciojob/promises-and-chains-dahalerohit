//your JS code here. If required.
let button = document.getElementById("btn");
let ages = document.getElementById("age");
let names = document.getElementById("name");
button.addEventListener("click", (event) => {
event.preventDefault();
 let agvalue = ages.value;
 let navalue = names.value;
if(agvalue == "" && navalue == ""){
alert("Please enter valid details"); 
}

let P = new Promise((resolve,reject) =>{
 setTimeout(() =>{
  if(agvalue>18){
    resolve("Welcome," + navalue + " . You can vote");
  }
  else{
    reject("Oh sorry," + navalue + ". You aren't old enough");
  }
 }, 4000);


});

P.then((r) => {
 alert(r);

}).catch((e) =>{

alert(e);
});

})