let container =document.getElementById("content-main");
let data;
let id;
async function main(){
    let query = document.getElementById("search-button").value;
    console.log("query: ",query)
    try{
        let res = await fetch(`https://api.cricapi.com/v1/players?apikey=6241fdab-4a27-45bc-ba5e-d64811b72466&offset=0&search=${query}`);
        data = await res.json();
        data = data.data;
        console.log(data);
        if(data!=undefined){
            appendData(data)
        } else {
            container.innerHTML=null;
        }
    } catch(err){}
}

function debounce(func,delay){
    if(id) {
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay)
}

function appendData(data){
    container.innerHTML=null;
    data.forEach((elem)=>{
        let div1 = document.createElement("div");
        div1.setAttribute("id","box")
        let div2 = document.createElement("div");
        div2.setAttribute("id","box-image")
        let div3 = document.createElement("div");
        div3.setAttribute("id","box-detail")
        let img = document.createElement("img");
        img.src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg";
        let name = document.createElement("h1");
        name.innerText=elem.name;
        let team = document.createElement("h2");
        team.innerText=`Country: ${elem.country}`;
        div2.append(img);
        div3.append(name,team);
        div1.append(div2,div3);
        container.append(div1);
    });
}