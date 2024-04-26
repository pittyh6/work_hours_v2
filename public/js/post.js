const btn_cancel = document.getElementById('btn-cancel')
const btn_post = document.getElementById('btn-post')
const text_post = document.getElementById('text-post')
//const employeeId = document.querySelector('.staff-info-id').innerHTML
const employeeName = document.querySelector('.staff-info-name').innerHTML

btn_cancel.addEventListener('click', () =>{
    console.log("btn cancel was clicked")
    text_post.value = ''
})

btn_post.addEventListener('click', async function() {
    console.log("btn post was clicked: ", employeeName)
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ employeeId, employeeName })
    }
    try{
        const response = await fetch('/api/time/post', options)
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    }catch (error) {
        console.error("Network error:", error.message);
    }

})