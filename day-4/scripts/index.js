
  let count=0;
  async function pop() {

    let res = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',{
      method: "GET",

      headers: {
        'X-RapidAPI-Key':'6cf10b8265b94229a9e2dcf2e086230f',
        //2bd4dfd17bmshed3d003ac4dca4ap1c998ejsn2857b7d9a6ea
        
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }



    })
    let data = await res.json()
    appen(data.typeMatches[1].seriesMatches[1].seriesAdWrapper.matches)
  }
    pop()
    
  function appen(data) {
 let ele= data[count] 
      matchinfo.innerHTML=null;
    let div = document.createElement("div")
    div.style.padding="20px"
    div.className = "information";
    div.style.padding = "10px";
    let h4 = document.createElement("h4");
    h4.innerText = `${ele.matchInfo.matchFormat}` + " " + `${ele.matchInfo.seriesName}`
    h4.style.marginTop = "6px";
    let imgdiv = document.createElement("div")
    imgdiv.style.display = "flex";
    imgdiv.style.height = "70px";
    imgdiv.align = "center";  
    let img1 = document.createElement("img");
    img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7acVBTWF3TB8-4ln2pUKaPL8ZkWbEDDV2Q&usqp=CAU";
    img1.style.width = "17px";
    img1.style.height = "19px";
    img1.style.marginLeft = "20px";
    let p1 = document.createElement("h3");
    p1.innerText = ele.matchInfo.venueInfo.city;
    // div for team and run & overs
    let p2 = document.createElement("span")
    let p3 = document.createElement("span")
    let namediv1 = document.createElement("div")
    namediv1.className = "namediv"
    let namediv2 = document.createElement("div")
    namediv2.className = "namediv"
    p2.innerText = `T1:${ele.matchInfo.team1.teamSName}`
    p3.innerText = `T2:${ele.matchInfo.team2.teamSName}`
    let span1 = document.createElement("span")
    span1.innerText = ele.matchScore.team1Score.inngs1.runs + "/" + ele.matchScore.team1Score.inngs1.wickets + " " + "(" + ele.matchScore.team1Score.inngs1.overs + ")"
    let span2 = document.createElement("span")
    span2.innerText = ele.matchScore.team1Score.inngs1.runs + "/" + ele.matchScore.team2Score.inngs1.wickets + " " + "(" + ele.matchScore.team2Score.inngs1.overs + ")"
    let p4 = document.createElement("p")
    p4.innerText = ele.matchInfo.status
    p4.className = "status"
    // button for slider
    let btndiv = document.createElement("div")
    let btn1 = document.createElement("button")
    btn1.innerText = "<"
    btn1.addEventListener("click",function(){
      btn1count()
    })
    let btn2 = document.createElement("button")
    btn2.innerText = ">";
    btn2.addEventListener("click",function(){
      btn2count()
    })
    btndiv.append(btn1, btn2) 
   btndiv.style.display="block";
   btndiv.id="button_div"
   
    btndiv.style.justifyContent="space-between";
    imgdiv.append(img1, p1)
    namediv1.append(p2, span1)
    namediv2.append(p3, span2)
    div.append(h4, imgdiv, namediv1, namediv2, p4)
    matchinfo.append(btndiv,div)
}
function btn1count(){
if(count>=1){
  count--;
pop();
}
}
function btn2count(){
if(count>=0&&count<=20){
  count++;
pop();
}
}

// news api fetch
  async function features() {
    let key = "b5b02f37a12c44ecad761da4b2675aa8"
    let res = await fetch(`https://newsapi.org/v2/everything?q=cricket&apiKey=${key}`)

    let data = await res.json()

    console.log(data)

  append11(data.articles)
  }
  features()

  function append11(data) {

    for (let i = 1; i <= 20; i++) {
      // div creation
      let div = document.createElement("div")
      div.className = "news_div"
      let div1 = document.createElement("div")
       div1.id="tdes"
      let div2 = document.createElement("div")
    div2.style.width="100%"
    div2.style.display="flex";
    div2.style.justifyContent="space-between";

      let image_div = document.createElement("div")
      image_div.style.width = "100px"
      // img tag creation 
      let thumbnail = document.createElement("img")
      thumbnail.src = data[i].urlToImage;
      thumbnail.className = "image_for_news"
      //title & content
      let h1 = document.createElement("h4")
      h1.innerText = data[i].title
      let p1 = document.createElement("p")
      p1.innerText = data[i].description;
      // name &date 
      let author = document.createElement("span")
      author.innerText = data[i].author;
      let date = document.createElement("span")
      date.innerText = data[i].publishedAt;
      image_div.append(thumbnail)
      div2.append(author, date)
      div1.append(h1, p1,div2)
      div.append(image_div, div1)

      cricket_news_data.append(div)
    }
  }
  // author: "Tim Dowling"
  // content: "I am in the changing room of a cricket ground somewhere in Sussex. All around me men are pulling on tops bearing the names of university teams or some charity XI. Mine still has a Sports Direct tag t… [+4256 chars]"
  // description: "By the time the 10th wicket falls, my knees are skinned and I have bruises on both anklesI am in the changing room of a cricket ground somewhere in Sussex. All around me men are pulling on tops bearing the names of university teams or some charity XI. Mine st…"
  // publishedAt: "2022-07-30T05:00:18Z"
  // source: {id: null, name: 'The Guardian'}
  // title: "Tim Dowling: When it comes to cricket, try not to leave the pitch in an ambulance"
  // url: "https://amp.theguardian.com/lifeandstyle/2022/jul/30/tim-dowling-when-it-comes-to-cricket-try-not-to-leave-the-pitch-in-an-ambulance"
  // urlToImage: "https://i.guim.co.uk/img/media/2dcd5afd8eadf5380a273e3671344c58db79435a/1_0_2559_1536/master/2559.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0bb8bd2b75ffff0f0a9c975dc6896cba"
  // [[Prototype]]: Object
  // data.html:151 
    let popo = async () => {

      let res = await fetch(`https://www.googleapis.com/youtube/v3/search?q=cricket.com features&key=AIzaSyA6oKyep5hfcg48tu2xiwqg86FYM4_3-a4&p=2&part=snippet&maxResults=10`)
////AIzaSyA6oKyep5hfcg48tu2xiwqg86FYM4_3-a4'
//my k=AIzaSyCaApnrzGZ2tPdnbzsyN-kFhmDAUwgrX34
      let { items } = await res.json()  //items=>data.items


      let video_data = items

      console.log(video_data)
      appenddata(items)

    }

    let appenddata = (data) => {

      //maindiv.innerHTML = null
      data.forEach(({ id: { videoId }, snippet: { title }, snippet: { thumbnails: { medium: { url } } } }) => {

        let div = document.createElement("div")
    let h3=document.createElement("h5")
    h3.innerText=title
        let video = document.createElement("iframe")
        video.src = url;
        video.width = "289px";
        video.frameBorder = "0"
        video.height = "190px";
        video.scrolling = "no"
        video.overflow = "hidden";
        div.onclick=()=>(
          poop(videoId,title)
        )
        div.append(video,h3)
        video_space.append(div)
      });
    } 
    popo()
    function poop(videoId,title) {

      let obj = {
        Id: videoId,
        tit:title

      }
     localStorage.setItem("video", JSON.stringify(obj))  
    window.location.href = "video1.html"
    }
  // ALL file link here

// for maain page
function mainpage(){

window.location.href="index.html"
}
// for videopagex
function videop(){

//window.location.href=""
console.log("jhgjjjjjjhj")
}
// for newspage
function newspage(){

//window.location.href=""
console.log("bbbb")
}
//for team page 
function teampage(){

console.log("JJHJH")
//window.location.href=""
}
//for player page
function playerpage(){
console.log("aaaaaaa")
//window.location.href=""

}
// for profile
function profile(){

//window.location.href=""
console.log("LLLLLL")
}
