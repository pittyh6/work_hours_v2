const btn_cancel = document.getElementById('btn-cancel')
const btn_post = document.getElementById('btn-post')
const text_post = document.getElementById('text-post')
//const employeeId = document.querySelector('.staff-info-id').innerHTML
const employeeName = document.querySelector('.staff-info-name').innerHTML



btn_cancel.addEventListener('click', () => {
    console.log("btn cancel was clicked")
    text_post.value = ''
})

btn_post.addEventListener('click', async function () {
    const post = document.querySelector('.text-post').value
    console.log("btn post was clicked: ", post)
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ employeeId, employeeName, post })
    }
    try {
        const response = await fetch('/api/time/post', options)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    } catch (error) {
        console.error("Network error:", error.message);
    }

})
window.addEventListener('click', (e) => {
    console.log("click event: ", e.target)
    if (e.target.classList.contains('pag-number')) {
        console.log("class contains pag-number: ", e.target.innerHTML)
        const clickedPage = e.target.innerHTML
        const start = (clickedPage * 5) - 5
        getPosts(start, clickedPage)
    } else {
        console.log("it does not contain pag-number: ", e.target.innerHTML)
    }
})

window.onload = async function () {
    if (window.location.href.indexOf('/post') > -1) {
        getPosts(0, 1)
    }
}

async function getPosts(start, clickedPage) {
    const response = await fetch('/api/time/post')
    const postData = await response.json()
    const postContainer = document.querySelector('#posts')
    console.log(postData)
    pagination(postData, 5) //comes from utils.js
    //postData.forEach(posts => {

    for (let i = start; i <= start + 4; i++) {
        console.log("entrouuuuuu")
        const postDiv = document.createElement('div')
        postDiv.classList.add('post-block')
        postDiv.classList.add('phrase')
        postDiv.innerHTML = `
                    <p class='post-data-text'>${postData[i].post}</p>
                    <p class='post-data-employeeName'>${postData[i].employeeName}</p>
                `
        postContainer.appendChild(postDiv)
    }


}
/*async function getPosts(start, clickedPage) {
    const response = await fetch('/api/time/post')
    const postData = await response.json()
    const postContainer = document.querySelector('#posts')
    console.log(postData)
    pagination(postData, 5) //comes from utils.js
    postData.forEach(posts => {
        console.log("entrouuuuuu")
        const postDiv = document.createElement('div')
        postDiv.classList.add('post-block')
        postDiv.classList.add('phrase')
        postDiv.innerHTML = `
            <p class='post-data-text'>${posts.post}</p>
            <p class='post-data-employeeName'>${posts.employeeName}</p>
        `
        postContainer.appendChild(postDiv)
    })
}*/
/*function paginationPost(postData){
    const qtdPost = 5
    const pageQtd = Math.ceil(postData.length / qtdPost)
    const pagination = document.getElementById('pagination')
    console.log("postPerPage: ", postData.length)
    console.log("postPerPage pagination: ", pageQtd)
    
    for(let i = 1; i <= pageQtd; i++){
        const pagNumber = document.createElement('button')
        pagNumber.classList.add('pag-number')
        pagNumber.innerHTML = `${i}`
        pagination.appendChild(pagNumber)
    }
}*/

