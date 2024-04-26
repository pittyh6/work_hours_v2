const btn_cancel = document.getElementById('btn-cancel')
const btn_post = document.getElementById('btn-post')
const text_post = document.getElementById('text-post')

btn_cancel.addEventListener('click', () =>{
    console.log("btn cancel was clicked")
    text_post.value = ''
})

btn_post.addEventListener('click', () =>{
    console.log("btn post was clicked")
})