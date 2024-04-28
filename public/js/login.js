const btn_login_cancel = document.querySelector('#btn-login-cancel')
const input_userId = document.querySelector('#userIdLogin')
const input_password = document.querySelector('#passwordLogin')

btn_login_cancel.addEventListener('click', function () {
    input_userId.value = ''
    input_password.value = ''
})

