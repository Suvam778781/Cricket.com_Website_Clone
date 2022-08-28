let otp = JSON.parse(localStorage.getItem("otp"));

let validateOTP=()=>{
    let val = document.getElementById("otp-ip").value;
    console.log(otp)
    if(otp==val){
        alert("Login Successful");
        location.href="form.html"
    } else {
        alert ("Invalid OTP");
    }
}

let closefunction = ()=> {
    location.href="/Suvam panda/index.html"
}