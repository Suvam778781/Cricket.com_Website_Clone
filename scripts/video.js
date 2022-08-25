let key='AIzaSyA6oKyep5hfcg48tu2xiwqg86FYM4_3-a4'
let getdata=async()=>{
    try{
        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=cricketnews&key=${key}&part=snippet&maxResults=50`)
        let data=await res.json()
        let actualdata=data.items
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
        
       }
       
    })
}