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

/* ------------------ Carousel IMG Home Page ------------------ */
const carouselItems = document.querySelectorAll('.carousel-item')
let currentItem = 0

function showItem(index) {
    if (index < 0) {
        index = currentItem.length - 1
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
setInterval(nextItem, 5000)
showItem(0)
/* ---------------------- ------------------ ---------------------- */

/* ------------------ Carousel Phrases Home Page ------------------ */
const phraseArr = [
    {
        phrase: "Learn as if you will live forever, live like you will die tomorrow",
        author: "—Mahatma Gandhi",
    },
    {
        phrase: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
        author: "—Mark Twain",
    },
    {
        phrase: "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.",
        author: "—Eleanor Roosevelt",
    },
    {
        phrase: "When you change your thoughts, remember to also change your world.",
        author: "—Norman Vincent Peale",
    },
    {
        phrase: "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.",
        author: "—Walter Anderson"
    },
]
function showPhrase() {
    const phraseText = document.querySelector('#phrase-day')
    const phraseAuthor = document.querySelector('#author')

    console.log(phraseText.textContent)
    console.log(phraseAuthor.textContent)
    console.log(phraseArr[0].phrase)

    for (let i = 0; i < phraseArr.length; i++) {
        setTimeout(function () {
            phraseText.textContent = phraseArr[i].phrase
            phraseAuthor.textContent = phraseArr[i].author
            console.log(phraseArr[1].phrase)
        }, i * 5000)

    }

}
showPhrase()
/* ---------------------- ------------------ ---------------------- */