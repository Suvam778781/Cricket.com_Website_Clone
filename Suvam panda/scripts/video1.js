<<<<<<< HEAD
let obj = JSON.parse(localStorage.getItem("video")) || {}
console.log(obj)
let frame = document.createElement("iframe")
frame.id = "framea"
frame.allowFullscreen = "yes"
frame.frameBorder = "0px";
// frame.height="450px"
// frame.width="660px"
frame.src = `https://youtube.com/embed/${obj.Id}`;
//frame.frameBorder="0"
let p1 = document.createElement("p")
p1.innerHTML = obj.tit;
video.append(frame, p1)
// video for extra
let popo = async () => {
    let res = await fetch(`https://www.googleapis.com/youtube/v3/search?q=cricket.com feature&key=AIzaSyCBI-yg4UA7C0YTKBt4LN_mPdsKkTTxal4&p=2&part=snippet&maxResults=10`)
    ////AIzaSyA6oKyep5hfcg48tu2xiwqg86FYM4_3-a4'
    //my k=AIzaSyCaApnrzGZ2tPdnbzsyN-kFhmDAUwgrX34
    //my-1 AIzaSyCoorsCtFxIA5npI5BxFfZUWmt2jrl09K0
    ///////AIzaSyCBI-yg4UA7C0YTKBt4LN_mPdsKkTTxal4

    let { items } = await res.json()  //items=>data.items
    let video_data = items
    console.log(video_data)
    appenddata(items)

}
let appenddata = (data) => {
    //maindiv.innerHTML = null
    data.forEach(({ id: { videoId }, snippet: { title }, snippet: { description }, snippet: { thumbnails: { medium: { url } } } }) => {

        let div = document.createElement("div")
        div.style.display = "flex";
        div.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
        div.style.padding = "10px"
        div.style.marginBottom = "8px"
        let div1 = document.createElement("div")
        div1.style.margin = "13px"

        div1.id = "video_buttom"
        let h3 = document.createElement("h3")
        h3.innerText = title
        let p1 = document.createElement("p")
        p1.innerText = description;
        let video = document.createElement("iframe")
        video.src = url;

        video.id = "iframe"
        video.frameBorder = "0"
        video.scrolling = "no"
        div1.append(h3, p1)
        div.append(video, div1)
        video_space_1.append(div)
    });
}
popo()



// for suggession videos

=======
let obj = JSON.parse(localStorage.getItem("video")) || {}
console.log(obj)
let frame = document.createElement("iframe")
frame.id = "framea"
frame.allowFullscreen = "yes"
frame.frameBorder = "0px";
// frame.height="450px"
// frame.width="660px"
frame.src = `https://youtube.com/embed/${obj.Id}`;
//frame.frameBorder="0"
let p1 = document.createElement("p")
p1.innerHTML = obj.tit;
video.append(frame, p1)
// video for extra
let popo = async () => {
    let res = await fetch(`https://www.googleapis.com/youtube/v3/search?q=cricket.com feature&key=AIzaSyCBI-yg4UA7C0YTKBt4LN_mPdsKkTTxal4&p=2&part=snippet&maxResults=10`)
    ////AIzaSyA6oKyep5hfcg48tu2xiwqg86FYM4_3-a4'
    //my k=AIzaSyCaApnrzGZ2tPdnbzsyN-kFhmDAUwgrX34
    //my-1 AIzaSyCoorsCtFxIA5npI5BxFfZUWmt2jrl09K0
    ///////AIzaSyCBI-yg4UA7C0YTKBt4LN_mPdsKkTTxal4

    let { items } = await res.json()  //items=>data.items
    let video_data = items
    console.log(video_data)
    appenddata(items)

}
let appenddata = (data) => {
    //maindiv.innerHTML = null
    data.forEach(({ id: { videoId }, snippet: { title }, snippet: { description }, snippet: { thumbnails: { medium: { url } } } }) => {

        let div = document.createElement("div")
        div.style.display = "flex";
        div.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
        div.style.padding = "10px"
        div.style.marginBottom = "8px"
        let div1 = document.createElement("div")
        div1.style.margin = "13px"

        div1.id = "video_buttom"
        let h3 = document.createElement("h3")
        h3.innerText = title
        let p1 = document.createElement("p")
        p1.innerText = description;
        let video = document.createElement("iframe")
        video.src = url;

        video.id = "iframe"
        video.frameBorder = "0"
        video.scrolling = "no"
        div1.append(h3, p1)
        div.append(video, div1)
        video_space_1.append(div)
    });
}
popo()



// for suggession videos

>>>>>>> b127ebcc3a76f7f26e97742a27c6dfa2f511fe9c
