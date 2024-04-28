const btn_login_cancel = document.querySelector('#btn-login-cancel')
const input_userId = document.querySelector('#userIdLogin')
const input_password = document.querySelector('#passwordLogin')
function cleanLogin(){
    btn_login_cancel.addEventListener('click', function() {
        console.log("clicked cancel")
        input_userId.value = ''
        input_password.value = ''
    })
}
