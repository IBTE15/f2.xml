//function hello (){
  //  console.log("hello world");
//}

//hello()
//hello()

// fun with parameters

//function person(name,age,grade){
  //  return name + "" + age + "" + grade;
//}

//let myvalues = person("Ali",25,"A");

//console.log(myvalues);

//function sum(a,b){
 //   console.log(`The Sum of a + b is ${a+b}`)
//}
//sum (54,72)

// GAME

let gameNum = 85;
let userNum = prompt("Enter Your Number");
while(userNum != gameNum){
    userNum =prompt("You guess the wrong number: Guess Again")
}
swal({
    title:"Game Alert",
    text: "You win the game.",
    timer: 5000  
});