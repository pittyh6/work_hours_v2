const btn_login_cancel = document.querySelector('#btn-login-cancel')
const btn_login_submit = document.querySelector('#btn-login-submit')
const input_userId = document.querySelector('#userIdLogin')
const input_password = document.querySelector('#passwordLogin')

btn_login_cancel.addEventListener('click', function () {
    input_userId.value = ''
    input_password.value = ''
})

btn_login_submit.addEventListener('click', function (e) {
    e.preventDefault()
    const username = input_userId.value
    const password = input_password.value
    console.log('btn_login_submit clicked: ', username)
    console.log('btn_login_submit clicked: ', password)

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    }
    try{
        alert("send fetch response: ")
        const response = await fetch('/login', options)
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    }catch(error){
        console.error("Network error:", error.message)
    }
})