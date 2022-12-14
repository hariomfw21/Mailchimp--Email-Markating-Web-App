let signUpBtn=document.getElementById("signup-btn");
signUpBtn.addEventListener("click",function(e){

    document.getElementById("right_child").innerHTML=null;
    document.getElementById("left_child").innerHTML=null;
    
    let popUpBtn=document.getElementsByClassName("popup")[0];
    popUpBtn.classList.add("active")

})


let dismissBtn=document.getElementById("dismiss-popup-btn");
dismissBtn.addEventListener("click",function(e){
    
    let popUpBtn=document.getElementsByClassName("popup")[0];
    popUpBtn.classList.remove("active");

    window.location.href="signUp.html"

})

