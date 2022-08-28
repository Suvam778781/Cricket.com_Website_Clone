function generateOTP(){
    let val = document.getElementById("ip").value;
    if(val>=1000000000 && val<10000000000){
        let otp = (Math.floor(100000 + Math.random() * 900000));
        alert(`Your 6 digit OTP is ${otp}`);
        localStorage.setItem("otp",JSON.stringify(otp));
        location.href="validateOTP.html"
    } else {
        alert ("Please enter a valid Mobile Number");
    }
}

function closefunction(){
    location.href="/Suvam panda/index.html"
}