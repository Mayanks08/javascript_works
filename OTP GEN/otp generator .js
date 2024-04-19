function otpGenerate(length){
    let optShow = document.getElementById("otp")
    let digits = "0123456789"
    let otp ="";
 
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }

    // to display loader 
    optShow.innerHTML ='<span></span>';

    // display OTP after 1 second
    setTimeout(() =>{
        optShow.innerHTML = otp;
    },1000)
  
}
