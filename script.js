const btnRightClose = document.querySelector(".top-right-btn.close");
const sidebarRight = document.querySelector(".sidebar-right");
const centerContent = document.querySelector(".center-content");
const hiddenPostsBtn = document.querySelector(".hidden-posts");

const closeRight = ()=>{
    sidebarRight.classList.add("d-none");
    centerContent.classList.add("col-10");
    centerContent.classList.remove("col-8");
    hiddenPostsBtn.innerText = "VISUALIZZA ANNUNCI";
}

const openRight = ()=>{
    sidebarRight.classList.toggle("d-none");
    centerContent.classList.toggle("col-10");
    centerContent.classList.toggle("col-8");
    if(hiddenPostsBtn.innerText === "NASCONDI ANNUNCI"){
        hiddenPostsBtn.innerHTML = "VISUALIZZA ANNUNCI";
    }else{
        hiddenPostsBtn.innerText = "NASCONDI ANNUNCI";
    }
}

btnRightClose.addEventListener("click", closeRight);
hiddenPostsBtn.addEventListener("click", openRight);