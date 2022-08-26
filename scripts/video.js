let key='AIzaSyA6oKyep5hfcg48tu2xiwqg86FYM4_3-a4'
let actualdata;
let getdata=async()=>{
    try{
        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=latestcriketnews&key=${key}&part=snippet&maxResults=20`)
        let data=await res.json()
         actualdata=data.items
        console.log(actualdata)
        appenddata(actualdata)
        
    }
    catch(err){
        console.log(err)
    }
    
}
getdata()

let appenddata=(data)=>{
    let video=document.querySelector("#video")
    video.innerHTML=null;
    data.forEach((ele)=>{
   
        let div=document.createElement("div")
        let div1=document.createElement('div')
        let image=document.createElement("img")
          image.style.cursor="pointer"
       image.src=ele.snippet.thumbnails.medium.url
       let name=document.createElement("h4")
       name.innerText=ele.snippet.title;
       let time=document.createElement("p")
       time.innerText=ele.snippet.publishTime;
       let desc=document.createElement("p")
       desc.innerText=ele.snippet.description;
       div.append(name,time,desc)
       div1.append(image,div)
       div1.id="flex"
       video.append(div1)
       let data={
        snippet:ele.snippet,
        videoId:ele.id.videoId
       }
       div1.onclick=()=>{
        localStorage.setItem("data",JSON.stringify(data))
        display()
       }
     
    })
}

let play=document.querySelector("#play")
function display(){
play.innerHTML=null
let data=JSON.parse(localStorage.getItem("data"))
let div=document.createElement("div")
let title=document.createElement("p")
 title.innerText=data.snippet.title
let videos=data.videoId
let time=document.createElement("h5")
       time.innerText=data.snippet.publishTime;
 let iframe=document.createElement("iframe")
  iframe.src=`https://www.youtube.com/embed/${videos}`
     iframe.width="1000px"
     iframe.height="400px"
     iframe.allow="fullscreen"
     div.append(iframe,title,time)
play.append(div)
}


function LATEST(){
   console.log("ram")


}

function FANTASY(){
    console.log("ram")
    let z=actualdata.sort(function(a,b){
        if(a.videoId>b.videoId) return 1;
        if(a.videoId<b.videoId) return -1;
        return 0;
    })
   append(z)
}

function MATCHRELATED(){
    console.log("ram")
}

function NEWS(){
    console.log("ram")
}