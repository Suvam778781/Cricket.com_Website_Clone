// api-key: 8885c69da6a948b58396a88efe43b4dd

let picture = JSON.parse(localStorage.getItem("poster"));
console.log(picture)

let data;
async function getData(){
    try{
        let res=await fetch('https://newsapi.org/v2/everything?q=cricket&apiKey=8885c69da6a948b58396a88efe43b4dd&pageSize=10&page=3')
        let data=await res.json()
        data=data.articles
        console.log(data)
        appendNews(data)
    }
    catch(err){
        console.log(err)
    }
}
getData()

let container = document.getElementById("news-container");
function appendNews(data){
    container.innerHTML=null;
    data.forEach(function(elem){
        let news_div = document.createElement("div");
        news_div.setAttribute("id","news-div");

        let news_img = document.createElement("div");
        news_img.setAttribute("id","news-img");
        let img = document.createElement("img");
        img.src = elem.urlToImage;

        let news_data = document.createElement("div");
        news_data.setAttribute("id","news-data");
        let h2 = document.createElement("h2");
        h2.innerText = elem.title;
        let p1 = document.createElement("p");
        p1.innerText = elem.content;
        let p2 = document.createElement("p");
        p2.innerText = `News source: ${elem.source.name}`;

        news_data.append(h2,p1,p2);
        news_img.append(img);
        news_div.append(news_img,news_data);
        container.append(news_div);
    })
}

let pic_container = document.getElementById("show-image")
function getImg(data){
    pic_container.innerHTML = null;
    data.forEach(function({img, name}){
        let image = document.createElement("img");
        image.src = img;
        pic_container.append(image);

        let Name_display = document.getElementById("h2");
        Name_display.innerText = name;
    })
}

getImg(picture)