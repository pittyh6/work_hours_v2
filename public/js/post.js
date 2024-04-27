const btn_cancel = document.getElementById('btn-cancel')
const btn_post = document.getElementById('btn-post')
const text_post = document.getElementById('text-post')
//const employeeId = document.querySelector('.staff-info-id').innerHTML
const employeeName = document.querySelector('.staff-info-name').innerHTML



btn_cancel.addEventListener('click', () => {
    text_post.value = ''
})

btn_post.addEventListener('click', async function () {
    const post = document.querySelector('.text-post').value
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
        getPageClicked()
        
    }
}

async function getPosts(start, clickedPage) {
    const response = await fetch('/api/time/post')
    const postData = await response.json()
    pagination(postData, 5) //comes from utils.js
    const postContainer = document.querySelector('#posts')
    postContainer.innerHTML = '' //clear content
    //postData.forEach(posts => {
    for (let i = start; i <= start + 4; i++) {
        const postDiv = document.createElement('div')
        postDiv.classList.add('post-block')
        postDiv.classList.add('phrase')
        postDiv.innerHTML = `
                    <p class='post-data-text'>${postData[i].post}</p>
                    <p class='post-data-employeeName'>${postData[i].employeeName}</p>
                `
        postContainer.appendChild(postDiv)
        window.scrollTo(0,0)
    }
}
function getPageClicked(){
    getPosts(0, 1)
    document.addEventListener('click', (e) => {
        if (e.target.classList == 'pag-number') {
            let clickedPage = parseInt(e.target.innerHTML)
            const start = (clickedPage * 5) - 5
            getPosts(start, clickedPage)
        } 
    })
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

