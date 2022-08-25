let container = document.getElementById("team-container");

function appendData(data){
    container.innerHTML=null;
    data.forEach(function(elem){
        let square = document.createElement("div");
        square.setAttribute("id","square");
        square.addEventListener("click", function(){
            AddFunc(elem);
        })
        let name = document.createElement("div");
        name.setAttribute("id","name-div");
        name.innerText = elem.name;

        let img_div = document.createElement("div");
        img_div.setAttribute("id","img-div");
        let img = document.createElement("img");
        img.src = elem.img;
        img_div.append(img)
       
        let icc = document.createElement("div");
        icc.setAttribute("id","ranking-tag-div");
        icc.innerText = elem.icc;

        let rank = document.createElement("div");
        rank.setAttribute("id","ranking-actual");

        let test = document.createElement("div");
        test.setAttribute("id","test");
        let no1 = document.createElement("div");
        no1.setAttribute("id", "no1");
        no1.innerText=elem.test_no;
        let no_test = document.createElement("div");
        no_test.setAttribute("id", "no-test");
        no_test.innerText=elem.test;

        let odi = document.createElement("div");
        odi.setAttribute("id","odi");
        let no2 = document.createElement("div");
        no2.setAttribute("id", "no2");
        no2.innerText=elem.odi_no;
        let no_odi = document.createElement("div");
        no_odi.setAttribute("id", "no-odi");
        no_odi.innerText=elem.odi;

        let t20 = document.createElement("div");
        t20.setAttribute("id","T20");
        let no3 = document.createElement("div");
        no3.setAttribute("id", "no3");
        no3.innerText=elem.T20_no;
        let no_T20 = document.createElement("div");
        no_T20.setAttribute("id", "no-T20");
        no_T20.innerText=elem.T20;

        t20.append(no3,no_T20);
        odi.append(no2,no_odi);
        test.append(no1,no_test);
        rank.append(test,odi,t20);
        square.append(name,img_div,icc,rank);
        container.append(square);
    })
}
appendData(teamData)


// Filter on input

function display(){
    let query=document.getElementById("query").value;
    query=query.toLowerCase();
    let copy_data=teamData;
    copy_data=copy_data.filter(function(elem){
        return elem.name.toLowerCase().includes(query);
    });
    appendData(copy_data);
    if(copy_data==""){
        let img=document.createElement("img");
        img.setAttribute("id","image");
        img.src="https://www.clipartmax.com/png/full/288-2883707_search-results-are-finished-no-results-found-cartoon.png";
        container.append(img);
    }
}




function AddFunc(elem){
    let selected=[];
    let val = document.getElementById("query");
    val.value="";
    selected.push(elem);
    localStorage.setItem("poster", JSON.stringify(selected));
    location.href="teamdisplay.html"

}