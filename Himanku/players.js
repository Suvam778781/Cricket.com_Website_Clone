let container =document.getElementById("content-body");
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
            // appendData(data)
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

// function appendData(data){
//     container.innerHTML=null;
//     data.forEach((elem)=>{
//         let div = document.createElement("div");
//         div.classList.add("player_tab")
//         let img = document.createElement("img");
//         img.src="https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg";
//         let title = document.createElement("p");
//         title.innerText=elem.Title;
//         let book = document.createElement("button");
//         book.innerText="Book Now"
//         book.classList.add("book_now")
//         book.addEventListener("click",function(){
//             AddFunc(elem);
//         })
//         div.append(img,title,book);
//         movies_div.append(div);
//     });
// }