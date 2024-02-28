const btnRightClose = document.querySelector(".top-right-btn.close");
const sidebarRight = document.querySelector(".sidebar-right");
const centerContent = document.querySelector(".center-content");
const hiddenPostsBtn = document.querySelector(".hidden-posts");
const searchBtn = document.querySelector(".searchBtn");
const searchBar = document.querySelector(".ipt-src");
const searchInput = document.querySelector(".input-search");
const node = document.querySelector(".row.node");
console.log(searchBar);

const closeRight = ()=>{
    sidebarRight.classList.add("d-none");
    centerContent.classList.add("col-10");
    centerContent.classList.remove("col-8");
    hiddenPostsBtn.innerText = "VISUALIZZA ANNUNCI";
}

const toggleRight = ()=>{
    sidebarRight.classList.toggle("d-none");
    centerContent.classList.toggle("col-10");
    centerContent.classList.toggle("col-8");
    if(hiddenPostsBtn.innerText === "NASCONDI ANNUNCI"){
        hiddenPostsBtn.innerHTML = "VISUALIZZA ANNUNCI";
    }else{
        hiddenPostsBtn.innerText = "NASCONDI ANNUNCI";
    }
}

const srcBarDisp = ()=>{
    searchBar.classList.remove("d-none");
}

const ifEnter = (event)=>{
    if(event.key === "Enter"){
        let src = searchInput.value;
        console.log(src)
        fetchFnc(src);
        searchBar.classList.add("d-none");
        searchInput.value = "";
    }
}

const fetchFnc = async (idSearch)=>{
    try{
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${idSearch}`);
        let json = await response.json();
        console.log(json.data);
        displayFnc(json.data);

    }catch(err){
        console.log(err);
    }
};

const displayFnc = (array) => {
    node.innerHTML = "";
    array.forEach(element => {
        let side = document.createElement("div");
        side.classList.add("col-3", "my-2");
        node.appendChild(side)
        
        let content = document.createElement("div");
        content.classList.add("p-3");
        content.style.backgroundColor = "black";
        content.style.borderRadius = "10px";
        content.style.height = "100%"
        side.appendChild(content);

        let img = document.createElement("img");
        img.src = element.album.cover_medium;
        img.style.width = "100%";
        content.appendChild(img);

        let art = document.createElement("p");
        art.innerText = element.artist.name;
        content.appendChild(art);

        let title = document.createElement("p");
        title.innerText = element.album.title;
        content.appendChild(title);

    });
    }





fetchFnc();

btnRightClose.addEventListener("click", closeRight);
hiddenPostsBtn.addEventListener("click", toggleRight);
searchBtn.addEventListener("click", srcBarDisp);
searchInput.addEventListener("keyup", (event)=>{ifEnter(event)});