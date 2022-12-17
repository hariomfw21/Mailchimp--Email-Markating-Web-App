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
