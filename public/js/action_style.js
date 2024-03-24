/* ------------------ Menu ------------------ */
const hamburgerMenu = document.querySelector(".icon-menu")
const showClass = document.querySelector(".nav-items")

//When click icon menu is going to show or hide for the mobile version
hamburgerMenu.addEventListener("click", function () {
    if (showClass.classList.contains("show")) {
        showClass.classList.remove("show")
    } else {
        showClass.classList.add("show")
    }
})
/* ------------------ ----- ------------------ */

/* ------------------ Carousel ------------------ */
const carouselItems = document.querySelectorAll('.carousel-item')
let currentItem = 0

function showItem(index) {
    if (index < 0) {
        index = currentItem.length -1
    } else if (index >= carouselItems.length) {
        index = 0
    }

    carouselItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })

    currentItem = index
}

function nextItem() {
    showItem(currentItem + 1)
}
function prevItem() {
    showItem(currentItem === 0 ? carouselItems.length - 1 : currentItem - 1);
}
document.querySelector('.prev-btn').addEventListener('click', prevItem);
document.querySelector('.next-btn').addEventListener('click', nextItem);
setInterval(nextItem, 3000)
showItem(0)
/* ------------------ ----- ------------------ */