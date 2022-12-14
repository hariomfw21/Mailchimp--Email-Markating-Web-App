
let signUpBtn=document.getElementById("form");
signUpBtn.addEventListener("submit",((e)=>{
    e.preventDefault();
    let email=document.getElementById("email").value;
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    console.log(email,username,password)
}))
