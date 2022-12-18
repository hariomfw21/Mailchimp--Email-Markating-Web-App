
let signUpBtn=document.getElementById("form");
let Credentials=JSON.parse(localStorage.getItem("UserData")) || [];
signUpBtn.addEventListener("submit",((e)=>{
    e.preventDefault();

    let email=document.getElementById("email").value;
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    
    for(let i=0; i<=Credentials.length-1; i++){
        if(Credentials[i].email==email){
            alert("User Already Exist! You Need To Login.");
            return;
        }
    }

    let obj={
        email,
        username,
        password,        
        is_subscribed:"Not Subscribed",
        plan:"Not Subscribed",
        price:"Not Subscribed",
        time:"Not Subscribed",
        subscription_period:"Not Subscribed"
    }
    
    if(password.length<6){
       alert("Password length should be more than 5 characters")
    }
    else if(email && username && password){
       Credentials.push(obj);
       localStorage.setItem("UserData",JSON.stringify(Credentials));   
       Popup();
    }
    else{
        alert("Please fill all the Inputs");     
    }

}))


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
           Registration Success!!
       </div>
       <div class="description">
           You are Successfully Registered.
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
   
       window.location.href="login.html"
   
      });

}
