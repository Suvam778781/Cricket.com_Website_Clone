//let key='AIzaSyDXMbLZ-XhfEX3Euipd6GVc6VD5SAFi4p8';  
let new_data;
async function getdata(){
try{
    let res=await fetch('https://newsapi.org/v2/everything?q=cricket&apiKey=41feef4bd9f14d12aea364191b17569e')
    let data=await res.json()
     new_data=data.articles
    console.log(new_data)
    append(new_data)
}
catch(err){
    console.log(err)
}
}
getdata()


let app=document.querySelector("#append")
let append=(data)=>{
    data.forEach((ele)=>{
          let div=document.createElement("div")
          let div1=document.createElement("div")
          let url=document.createElement('img')
          url.src=ele.urlToImage
          let title=document.createElement("h3")
          title.innerText=ele.title
          let content=document.createElement("p")
          content.innerText=ele.content
          content.style.color="grey"
          content.style.fontSize="17px"
          let author=document.createElement("p")
          author.innerText=ele.author
          let time=document.createElement("h3")
          time.id="time"
          time.innerText=ele.publishedAt
          author.style.color="black"
          div.append(title,content,author,time)
          div1.append(url,div)
          div1.id="div1"
      app.append(div1)
    })
}





let latest=document.querySelector("#latest")
function LATEST(){
    app.innerHTML=null
    NEW.classList="green"
    DA.classList="green"
     MATCHS.classList="green"
     FEATURES.classList="green"
     latest.classList="red"
    getdata()

}

let NEW=document.querySelector("#NEWS")
function NEWS(){
   app.innerHTML=null
   latest.classList="green"
   DA.classList="green"
   MATCHS.classList="green"
   FEATURES.classList="green"
   NEW.classList="red"
    console.log("ram")
    let z=new_data.sort(function(a,b){
        if(a.publishedAt>b.publishedAt) return 1;
        if(a.publishedAt<b.publishedAt) return -1;
        return 0;
    })
   append(z)
   
}

let DA=document.querySelector("#DAY")
function DAY(){
    app.innerHTML=null
    latest.classList="green"
    MATCHS.classList="green"
    FEATURES.classList="green"
    NEW.classList="green"
    DA.classList="red"
    let z=new_data.sort(function(a,b){
        if(a.publishedAt>b.publishedAt) return -1;
        if(a.publishedAt<b.publishedAt) return 1;
        return 0;
    })
   append(z)


}

let MATCHS=document.querySelector("#MATCH")
function MATCH(){
    app.innerHTML=null
    latest.classList="green"
    FEATURES.classList="green"
    NEW.classList="green"
    DA.classList="green"
     MATCHS.classList="red"
     let z=new_data.sort(function(a,b){
        if(a.content>b.content) return -1;
        if(a.content<b.content) return 1;
        return 0;
    })
   append(z)

}

let FEATURES=document.querySelector("#FEATURES")
function FEATURE(){
    app.innerHTML=null
    latest.classList="green"
    NEW.classList="green"
    DA.classList="green"
     MATCHS.classList="green"
     FEATURES.classList="red"
     let z=new_data.sort(function(a,b){
        if(a.content>b.content) return 1;
        if(a.content<b.content) return -1;
        return 0;
    })
   append(z)
}