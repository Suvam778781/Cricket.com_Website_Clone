<<<<<<< HEAD
function navbar() {
    return `<div onclick="mainpage()" id="img1">
        <img src="https://www.cricket.com/cricket.com.svg" alt="">
    </div>

    <div id="img2">

        <div class="A1">

            <img src="https://www.cricket.com/svgs/icons/frc.svg" alt="">
            <a id="p1" href="#">Fantasy Center</a>
        </div>
        <div class="A1">

            <img src="https://www.cricket.com/svgs/icons/criclytics-icon.svg" alt="">
            <a href="#">Criclytics</a>
        </div>
        <div class="A1">

            <img src="https://www.cricket.com/svgs/icons/schedule-icon.svg" alt="">
            <a href="#">Schedule</a>
        </div>
        <div class="A1">

            <img src="https://www.cricket.com/svgs/icons/series-icon.svg" alt="">
            <a href="#">Series</a>
        </div>
        <div id="div_news" onclick="newspage()" class="A1">

            <img src="https://www.cricket.com/svgs/icons/news-and-articles-icon.svg" alt="">
            <a href="#">News</a>
        </div>
        <div id="div_video" onclick="videop()" class="A1">

            <img src="https://www.cricket.com/svgs/icons/video-icon.svg" alt="">
            <a href="#">Video</a>
        </div>
        <div id="div_player" onclick="playerpage()" class="A1">

            <img src="https://www.cricket.com/svgs/icons/players-icon.svg" alt="">
            <a href="#">Player</a>
        </div>
        <div id="div_team" onclick="teampage()" class="A1">

            <img src="https://www.cricket.com/svgs/icons/teams-icon.svg" alt="">
            <a href="#">Teams</a>
        </div>
        <div class="A1" id="drop_down">

            <img src="https://www.cricket.com/svgs/icons/more.svg" alt="">
            <a href="#">More <span id="spand">▼</span></a>
            
        <!--         drop down menu      -->
        <div id="drop">

            <div class="dropdown_for_more" id="drop1">
                <img src="https://www.cricket.com/svgs/icons/stadium-icon.svg" alt="">
                <span>Stadium</span>
            </div>
            <div class="dropdown_for_more" id="drop2">
                <img src="https://www.cricket.com/svgs/icons/rankings-icon.svg" alt="">
                <span>Ranking</span>
            </div>
            <div class="dropdown_for_more" id="drop3">
                <img src="https://www.cricket.com/svgs/GroupArchive.svg" alt="">
                <span>Archives</span>
            </div>
            <div class="dropdown_for_more" id="drop4">
                <img src="https://www.cricket.com/svgs/icons/records-icon.svg" alt="">
                <span>Records</span>
            </div>
            <div class="dropdown_for_more" id="drop5">
                <img src="https://www.cricket.com/svgs/fantasynav.svg" alt="">
                <span>Season Fantasy</span>
            </div>
            <div onclick="profile()" class="dropdown_for_more" id="drop6">
                <img src="https://www.cricket.com/svgs/icons/profile.svg" alt="">
                <span>Profile</span>
            </div>
            
            </div>
            </div>
</div>`
}
function footer() {
    return ` <div>
<img src="https://www.cricket.com/svgs/cricket-logo.svg" alt="">
<h5>Cricket like never before</h5>
</div>

<div id="footer_m">
<a href="#">Term of use</a>
<a href="#">Privacy Policy</a>
<a href="#">Cookies Policy</a>
</div>
<div id="footer_e">
<div>
    <span>Follow us on</span>
    <a href="https://www.facebook.com/Cricketcom/"><img src="https://www.cricket.com/svgs/facebook.svg"
            alt=""></a>
    <a href="https://twitter.com/weRcricket"><img src="https://www.cricket.com/svgs/twitter.svg"
            alt=""></a>
    <a href="https://www.linkedin.com/company/cricketcom/"><img src="https://www.cricket.com/svgs/linkedin.svg"
            alt=""></a>
</div>
<span>@ 2020 cricket.com | All rights reserved</span>
</div>`
}



 function buttom(){


 return ` <div onclick="mainpage()" id="bt1">
      
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDI0IDIyIj4KICAgPHBhdGggZmlsbD0iI0Q0NDAzMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSdNMS41IDExLjYyOGgyLjI5N3Y5LjA5OWEuNS41IDAgMCAwIC41LjVoNS41di01LjdhLjUuNSAwIDAgMSAuNS0uNWgzLjhhLjUuNSAwIDAgMSAuNS41djUuN2g1LjUwMWEuNS41IDAgMCAwIC41LS41di05LjA5OWgyLjI5NmEuNS41IDAgMCAwIC4zMzUtLjg3MUwxMi41MzMgMS4xMjhhLjUuNSAwIDAgMC0uNjY5IDBMMS4xNjYgMTAuNzU3YS41LjUgMCAwIDAgLjMzNC44NzF6Jy8+Cjwvc3ZnPg==" alt="">
<span>HOME</span>
</div>
<div onclick="videop()" id="bt2">
    <img src="https://www.cricket.com/svgs/icons/news-and-articles-icon.svg" alt="">
    <span>VIDEOS</span>
</div>
<div onclick="newspage()" id="bt3">
    <img src="https://www.cricket.com/svgs/icons/news-and-articles-icon.svg" alt="">
    <span>NEWS</span>
</div>
<div onclick="teampage()" id="bt4">
    <img src="https://www.cricket.com/svgs/icons/teams-icon.svg" alt="">
    <span>TEAMS</span>
</div>`

 }



 export { navbar, footer,buttom }

=======
function navbar() {
    return `<div onclick="mainpage()" id="img1">
        <img src="https://www.cricket.com/cricket.com.svg" alt="">
    </div>

    <div id="img2">

        <div class="A1">

            <img src="https://www.cricket.com/svgs/icons/frc.svg" alt="">
            <a id="p1" href="#">Fantasy Center</a>
        </div>
        <div class="A1">

            <img src="https://www.cricket.com/svgs/icons/criclytics-icon.svg" alt="">
            <a href="#">Criclytics</a>
        </div>
        <div class="A1">

            <img src="https://www.cricket.com/svgs/icons/schedule-icon.svg" alt="">
            <a href="#">Schedule</a>
        </div>
        <div class="A1">

            <img src="https://www.cricket.com/svgs/icons/series-icon.svg" alt="">
            <a href="#">Series</a>
        </div>
        <div id="div_news" onclick="newspage()" class="A1">

            <img src="https://www.cricket.com/svgs/icons/news-and-articles-icon.svg" alt="">
            <a href="#">News</a>
        </div>
        <div id="div_video" onclick="videop()" class="A1">

            <img src="https://www.cricket.com/svgs/icons/video-icon.svg" alt="">
            <a href="#">Video</a>
        </div>
        <div id="div_player" onclick="playerpage()" class="A1">

            <img src="https://www.cricket.com/svgs/icons/players-icon.svg" alt="">
            <a href="#">Player</a>
        </div>
        <div id="div_team" onclick="teampage()" class="A1">

            <img src="https://www.cricket.com/svgs/icons/teams-icon.svg" alt="">
            <a href="#">Teams</a>
        </div>
        <div class="A1" id="drop_down">

            <img src="https://www.cricket.com/svgs/icons/more.svg" alt="">
            <a href="#">More <span id="spand">▼</span></a>
            
        <!--         drop down menu      -->
        <div id="drop">

            <div class="dropdown_for_more" id="drop1">
                <img src="https://www.cricket.com/svgs/icons/stadium-icon.svg" alt="">
                <span>Stadium</span>
            </div>
            <div class="dropdown_for_more" id="drop2">
                <img src="https://www.cricket.com/svgs/icons/rankings-icon.svg" alt="">
                <span>Ranking</span>
            </div>
            <div class="dropdown_for_more" id="drop3">
                <img src="https://www.cricket.com/svgs/GroupArchive.svg" alt="">
                <span>Archives</span>
            </div>
            <div class="dropdown_for_more" id="drop4">
                <img src="https://www.cricket.com/svgs/icons/records-icon.svg" alt="">
                <span>Records</span>
            </div>
            <div class="dropdown_for_more" id="drop5">
                <img src="https://www.cricket.com/svgs/fantasynav.svg" alt="">
                <span>Season Fantasy</span>
            </div>
            <div onclick="profile()" class="dropdown_for_more" id="drop6">
                <img src="https://www.cricket.com/svgs/icons/profile.svg" alt="">
                <span>Profile</span>
            </div>
            
            </div>
            </div>
</div>`
}
function footer() {
    return ` <div>
<img src="https://www.cricket.com/svgs/cricket-logo.svg" alt="">
<h5>Cricket like never before</h5>
</div>

<div id="footer_m">
<a href="#">Term of use</a>
<a href="#">Privacy Policy</a>
<a href="#">Cookies Policy</a>
</div>
<div id="footer_e">
<div>
    <span>Follow us on</span>
    <a href="https://www.facebook.com/Cricketcom/"><img src="https://www.cricket.com/svgs/facebook.svg"
            alt=""></a>
    <a href="https://twitter.com/weRcricket"><img src="https://www.cricket.com/svgs/twitter.svg"
            alt=""></a>
    <a href="https://www.linkedin.com/company/cricketcom/"><img src="https://www.cricket.com/svgs/linkedin.svg"
            alt=""></a>
</div>
<span>@ 2020 cricket.com | All rights reserved</span>
</div>`
}



 function buttom(){


 return ` <div onclick="mainpage()" id="bt1">
      
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDI0IDIyIj4KICAgPHBhdGggZmlsbD0iI0Q0NDAzMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSdNMS41IDExLjYyOGgyLjI5N3Y5LjA5OWEuNS41IDAgMCAwIC41LjVoNS41di01LjdhLjUuNSAwIDAgMSAuNS0uNWgzLjhhLjUuNSAwIDAgMSAuNS41djUuN2g1LjUwMWEuNS41IDAgMCAwIC41LS41di05LjA5OWgyLjI5NmEuNS41IDAgMCAwIC4zMzUtLjg3MUwxMi41MzMgMS4xMjhhLjUuNSAwIDAgMC0uNjY5IDBMMS4xNjYgMTAuNzU3YS41LjUgMCAwIDAgLjMzNC44NzF6Jy8+Cjwvc3ZnPg==" alt="">
<span>HOME</span>
</div>
<div onclick="videop()" id="bt2">
    <img src="https://www.cricket.com/svgs/icons/news-and-articles-icon.svg" alt="">
    <span>VIDEOS</span>
</div>
<div onclick="newspage()" id="bt3">
    <img src="https://www.cricket.com/svgs/icons/news-and-articles-icon.svg" alt="">
    <span>NEWS</span>
</div>
<div onclick="teampage()" id="bt4">
    <img src="https://www.cricket.com/svgs/icons/teams-icon.svg" alt="">
    <span>TEAMS</span>
</div>`

 }



 export { navbar, footer,buttom }

>>>>>>> b127ebcc3a76f7f26e97742a27c6dfa2f511fe9c
