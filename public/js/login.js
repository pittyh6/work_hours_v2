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
    const userId  = input_userId.value
    const password = input_password.value
    console.log('btn_login_submit clicked: ', userId)
    console.log('btn_login_submit clicked: ', password)
})