let userData=JSON.parse(localStorage.getItem("UserData")) || [];

let loginBtn=document.getElementById("form");
loginBtn.addEventListener("submit",function(e){
e.preventDefault();
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(userData.length==0){
    alert("Please SignUp first you dont have any account");
    return;
}

console.log(email,password);
let flag_email=false;
let flag_pass=false;

for(let i=0; i<=userData.length-1; i++){
    if(userData[i].email==email){
        flag_email=true;
        
    }
    if(userData[i].password==password){
        flag_pass=true;
    }
}
console.log(flag_pass)

if(flag_email && flag_pass){
    Popup();
}
else if(flag_email && flag_pass==false){
    alert("Incorrect Password");
}
else if(flag_email==false){
    alert("User does not exist");
}

})


function Popup(){

    let Addpopup=document.getElementById("Addpopup");
    
    Addpopup.innerHTML=`
    <div class="popup center">
    <div class="icon">
        <i class="fa fa-check">
        <img class="icon-img" src="./tick logo.png" alt="Tick's Img">
        </i>
    </div>
    <div class="title">
        Login Success!!
    </div>
    <div class="description">
        You are Successfully Logged In.
    </div>
    <div class="dismiss-btn">
        <button id="dismiss-popup-btn">
            Dismiss
        </button>
    </div>
    </div> 
    `

    document.getElementById("right_child").innerHTML=null;
    document.getElementById("left_child").innerHTML=null;
    
    let popUpBtn=document.getElementsByClassName("popup")[0];
    popUpBtn.classList.add("active");


    let dismissBtn=document.getElementById("dismiss-popup-btn");
    dismissBtn.addEventListener("click",function(e){
    
    let popUpBtn=document.getElementsByClassName("popup")[0];
    popUpBtn.classList.remove("active");

    window.location.href="signUp.html"

});

}


