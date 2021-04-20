let form=document.getElementById('form');

const username =document.getElementById('username')
const email =document.getElementById('email')
const password =document.getElementById('Password1')
const cpassword =document.getElementById('Password2')
const pnumber=document.getElementById('phoneNumber')



form.addEventListener('submit',function(e){
    e.preventDefault();

    myvalidation()
})


function myvalidation(){

    const usernameValue=username.value.trim()
    const emailValue=email.value.trim()
    const  password1Value=password.value.trim()
    const password2Value=cpassword.value.trim()
    const pnumberValue=pnumber.value.trim()


    //username validation start 
    if(usernameValue==""){
        // show error
        setErrorFor(username,'** Please fill up the username filled')

    }
    else if(!isNaN(usernameValue)){
        setErrorFor(username,'** Only characters are allowed')
    }
     else if(usernameValue.length <=2){
        setErrorFor(username,'** Username is  too short (length must be 3 and 20)')
    }
    else if(usernameValue.length >=20){
        setErrorFor(username,'** Username it too Large (length must be 2 and 20)')
    }
   
   else{
        setSuccessFor(username)
      }

    

    //Email validation start 

    // var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if(emailValue.match(mailformat)){
    //     setSuccessFor(email)
    //    }
    //     else{
    //         setErrorFor(email,'** You have entered an invalid email address!')
    //     }

    if(emailValue==""){
        //error Show
        setErrorFor(email,'** Please fill up the Email filled')
    }else if(emailValue.length > 55){
        setErrorFor(email,'** email Length is too long !')
   
   }else if(!isEmail(emailValue)){
       //isEmail function call 
    setErrorFor(email,'** Not a valid email !')
   }
    else{
        setSuccessFor(email)
    }



     //Phone Number validation start 
     if(pnumberValue==""){
        //error Show
        setErrorFor(pnumber,'** Please fill up the Phone Number filled')
    }else if(isNaN(pnumberValue)){
        setErrorFor(pnumber,'** Only digit are allowed ')
    }else if(pnumberValue.length!=11){
        setErrorFor(pnumber,'** Phone Number must be 11 digit')
    }
    else{
        setSuccessFor(pnumber)
    }



    // Password validation
    if(password1Value==""){
        //error Show
        setErrorFor(password,'** Please fill up the password filled')
    }else if(password1Value.length <8){
        setErrorFor(password,'** password at lest 8 characters ')

    }
    else if(password1Value.length >=35){
        setErrorFor(password,'** password too large ')

    }
    else{
        setSuccessFor(password)
    }


   // Confirm passwornd validation
    if(password2Value==""){
        //error Show
        setErrorFor(cpassword,'** Please fill up the Confirm password filled')
    }
    else{
        setSuccessFor(cpassword)
    }

      //  passwornd cheack  validation
      if(password1Value!==password2Value){
        //error Show
        setErrorFor(cpassword,'** password not match !')
    }
    



}


function setErrorFor(input,message){
    const formGroup=input.parentElement;
    const small=formGroup.querySelector('small')
    //add error message and show html

    small.innerHTML=message
    formGroup.className="form-group error"

}

function setSuccessFor(input){
    const formGroup=input.parentElement;
    const small=formGroup.querySelector('small')

    small.innerHTML="" 
    formGroup.className="form-group success"

}



function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}







