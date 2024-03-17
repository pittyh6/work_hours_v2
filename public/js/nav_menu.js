const hamburgerMenu = document.querySelector(".icon-menu")
const showClass = document.querySelector(".nav-items")


//When click icon menu is going to show or hide for the mobile version
hamburgerMenu.addEventListener("click", function(){
    if(showClass.classList.contains("show")){
        showClass.classList.remove("show")
    }else{
        showClass.classList.add("show")
    }
})