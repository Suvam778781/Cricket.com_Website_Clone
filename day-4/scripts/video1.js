let obj=JSON.parse(localStorage.getItem("video"))||{}
console.log(obj)
let frame=document.createElement("iframe")

frame.allowFullscreen="yes"
frame.frameBorder="0px";
frame.height="450px"
frame.width="660px"
frame.src=`https://youtube.com/embed/${obj.Id}`;
//frame.frameBorder="0"
let p1=document.createElement("p")
p1.innerHTML=obj.tit;

video.append(frame,p1)
    // for homepage
    function mainpage(){

window.location.href="index.html"
}
// for videopagex
function videop(){

//window.location.href="video.html"
console.log("jhgjjjjjjhj")
}
// for newspage
function newspage(){

//window.location.href="news.html"
console.log("bbbb")
}
//for team page 
function teampage(){

console.log("JJHJH")
//window.location.href="teams.html"
}
//for player page
function playerpage(){
console.log("aaaaaaa")
//window.location.href="player.html"

}
// for profile
function profile(){

//window.location.href="login.html"
console.log("LLLLLL")
}