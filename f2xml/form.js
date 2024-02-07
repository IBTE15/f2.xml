function validation(){
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let number = document.getElementById('number');

let usercheck = /^[A-Za-z]+$/;
let emailcheck =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordcheck =/^[0-9a-zA-Z]+$/;
let numbercheck =/^[0-9]+$/;
if(usercheck.test('username') && emailcheck.test('email')  && passwordcheck.test('password')  && numbercheck.test('number')){

    alert("Your form has been Submitted")
    return false;
}
else{
    alert("Invalid Entry");
}

}
