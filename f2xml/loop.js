// for loop

for (let i=0; i<=10; i++){
    console.log("This is for loop", i);
}

let num = 15;

while(num<=20){
    console.log("This is while loop!" , num);
    num++;
}

let a = 50;

do {
    console.log("This is do while loop" , a);
    a++;
} while(a<49);

let obj ={
    name: "Ali",
    age: 24,
    grade: "A"
}

for(let z in obj){

    console.log(z, obj[z])
}