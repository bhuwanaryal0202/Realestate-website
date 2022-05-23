function validateForm(){
    //Declaring the function of the contact forms
    var name = document.forms["myForm"]["name"];
    var phone =document.forms['myForm']["phone"];
    var email =document.forms['myForm']["email"];
    var address =document.forms['myForm']["address"];
    var min =document.forms['myForm']["min"];
    var max =document.forms['myForm']["max"];

    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Please enter a valid name";  //using getelementbyId 
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
    if (phone.value == "")                                  
    { 
        document.getElementById('errorphone').innerHTML="Please enter a Phone number in correct formate";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorphone').innerHTML="";  
    }

    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 

    if (address.value == "")                                  
    { 
        document.getElementById('erroraddress').innerHTML="Please enter a valid address in correct formate";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('erroraddress').innerHTML="";  
    }

    // setting min and max price selection range
    if((max - min >= priceGap) && max <= rangeInput[1].max){
        if(e.target.className === "input-min"){
            rangeInput[0].value = min;
            range.style.left = ((min / rangeInput[0].max) * 100) + "%";
        }else{
            rangeInput[1].value = max;
            range.style.right = 100 - (max / rangeInput[1].max) * 100 + "%";
        }
    }

    return true;
}