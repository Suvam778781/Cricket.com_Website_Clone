let data=JSON.parse(localStorage.getItem("Data"))
console.log(data)
let Data=document.getElementById("appends")
let div=document.createElement("div")
let url=document.createElement("img")
url.src=data.urlToImage
let title=document.createElement("h1")
title.innerText=data.title
let content=document.createElement("p")
content.innerText=data.content
let desc=document.createElement("p")
desc.innerText=data.description
let author=document.createElement("h3")
author.id="author"
author.innerText=data.author
div.append(url,title,content,desc,author)
Data.append(div)

