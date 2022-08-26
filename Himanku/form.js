let arr = JSON.parse(localStorage.getItem("saveData")) || [];
function done (){
    let name = document.getElementById("name-input").value;
    let mobile = document.getElementById("mobile-input").value;
    let email = document.getElementById("email-input").value;
    let obj = {
        name,
        mobile,
        email
    }
    arr.push(obj);
    if(name=="" || mobile=="" || email==""){
        alert ("Fill in all the input fields")
        return;
    }
    localStorage.setItem("saveData", JSON.stringify(arr));
    alert("Registration Successful");
    location.href="./player.html"
}

let closefunction = ()=> {
    location.href="./player.html"
}

