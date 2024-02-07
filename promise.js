setTimeout(function(){
    console.log("hello world!")
}, 4000)
setInterval(function(){
    document.write("WOW")
}, 2000)

// PROMISE

let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("This is the first promise")
    }, 2000)
})

// SECOND

let promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name: "Ali", password: "12345"})
    }, 2000)
})

promiseTwo.then(function(user){
    console.log(user)
})

// Three

let promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Camel", email:"camel@gmail.com"})
    }, 2000)
})

promiseThree.then(function(elec){
    return elec.email;
}).then(function(userEmail){
    console.log(userEmail)
})

// Four

let promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){

        let error = false;
        if(!error){
            resolve({name: "Ahmed", password: "123"})
        }
        else{
            reject("ERROR : SOMETHING WENT WRONG HERE!")
        }
    }, 5000)
})

promiseFour.then(function(apple){
    return apple.name
}).then(function(myName){
    console.log(myName)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("PROMISE HAS BEEN RESOLVE OR REJECTED!")
})

//Five

let promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name:"Aisha", password: "456"})
        }
        else{
            reject("ERROR IN THIS FUNCTION!")
        }
    }, 6000)
})

async function consumedPromiseFive(){
    try{
        let resp = await promiseFive;
        console.log(resp);
    }
    catch(error){
        console.log(error);
    }
}

consumedPromiseFive()

// API WITH ASYNC

async function getAllUsers(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        document.write(JSON.stringify(data))
    }
    catch(error){
        console.log(error);
    }
}

getAllUsers()