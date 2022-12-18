let selected_tag=document.getElementById("select_price");
selected_tag.addEventListener("change",function(){
    let selected_value=+this.value;
    let premium_value=selected_value*0.9;
    let standard_value=selected_value*0.8;
    let essential_value=selected_value*0.6;

    let premium_pack=selected_value*15;
    let standard_pack=selected_value*12;
    let essential_pack=selected_value*10;

    
    if(selected_value==500){
        let get_premium_value=document.getElementById("premium_value");
        get_premium_value.textContent="23,000";

        let get_standard_value=document.getElementById("standard_value");
        get_standard_value.textContent="1,150";

        let get_essential_value=document.getElementById("essential_value");
        get_essential_value.textContent=770;
    }
    else if(selected_value>10000){
        let get_premium_value=document.getElementById("premium_value");
        get_premium_value.textContent=premium_value;

        let get_standard_value=document.getElementById("standard_value");
        get_standard_value.textContent=standard_value;

        let get_essential_value=document.getElementById("essential_value");
        get_essential_value.textContent=essential_value;  
    }
    else{
        let get_standard_value=document.getElementById("standard_value");
        get_standard_value.textContent=standard_value;

        let get_essential_value=document.getElementById("essential_value");
        get_essential_value.textContent=essential_value;
    }



    if(selected_value==500){
        let get_premium_value=document.getElementById("premium_pack");
        get_premium_value.textContent="23,000";

        let get_standard_value=document.getElementById("standard_pack");
        get_standard_value.textContent="1,150";

        let get_essential_value=document.getElementById("essential_pack");
        get_essential_value.textContent=770;
    }
    else if(selected_value>10000){
        let get_premium_value=document.getElementById("premium_pack");
        get_premium_value.textContent=premium_pack;

        let get_standard_value=document.getElementById("standard_pack");
        get_standard_value.textContent=standard_pack;

        let get_essential_value=document.getElementById("essential_pack");
        get_essential_value.textContent=essential_pack;  
    }
    else{
        if(selected_value>500){
            let get_free_pack=document.getElementById("free_pack").textContent="-limit-"
        }
        let get_standard_value=document.getElementById("standard_pack");
        get_standard_value.textContent=standard_pack;

        let get_essential_value=document.getElementById("essential_pack");
        get_essential_value.textContent=essential_pack;
    }
})

// let buy_buttons=document.querySelectorAll(".float_btn");
// for(let buy_button of buy_buttons){
//     buy_button.addEventListener("click",()=>{
//         let data
//     })
// }

localStorage.setItem("Price",0);
localStorage.setItem("Plan","Free Plan");

function getPriceStandard(){
    let standard_value=document.getElementById("standard_value").innerText;
    localStorage.setItem("Price",standard_value);
    localStorage.setItem("Plan","Standard Plan");
    window.location.assign("/Subscription&Admin/subscription.html");
}
function getPricePremium(){
    let premium_value=document.getElementById("premium_value").innerText;
    localStorage.setItem("Price",premium_value);
    localStorage.setItem("Plan","Premium Plan");   
    window.location.assign("/Subscription&Admin/subscription.html");
}
function getPriceEssentials(){
    let essential_value=document.getElementById("essential_value").innerText;
    localStorage.setItem("Price",essential_value);
    localStorage.setItem("Plan","Essentials Plan");
    window.location.href="/Subscription&Admin/subscription.html";
}