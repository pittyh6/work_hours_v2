const btn_login_cancel = document.querySelector('#btn-login-cancel')
const btn_login_submit = document.querySelector('#btn-login-submit')
const input_userId = document.querySelector('#userIdLogin')
const input_password = document.querySelector('#passwordLogin')

btn_login_cancel.addEventListener('click', function () {
    input_userId.value = ''
    input_password.value = ''
})

btn_login_submit.addEventListener('click', function () {
    let userId  = document.getElementById('userIdLogin').value
    alert('btn_login_submit clicked: ', userId)
})