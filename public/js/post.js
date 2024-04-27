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

window.onload = async function () {
    if (window.location.href.indexOf('/post') > -1) {
        getPosts()
    }
}

async function getPosts() {
    const response = await fetch('/api/time/post')
    const postData = await response.json()
    const postContainer = document.querySelector('#posts')
    console.log(postData)
    paginationPost(postData)
    postData.forEach(posts => {
        const postDiv = document.createElement('div')
        postDiv.classList.add('post-block')
        postDiv.classList.add('phrase')
        postDiv.innerHTML = `
            <p class='post-data-text'>${posts.post}</p>
            <p class='post-data-employeeName'>${posts.employeeName}</p>
        `
        postContainer.appendChild(postDiv)
    })
}
function paginationPost(postData){
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
}