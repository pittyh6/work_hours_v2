const insertId = document.querySelector('#userIdPassword')
const oldPassword = document.querySelector('#oldPassword')
const newPassword = document.querySelector('#newPassword')
const btnCancelPassword = document.querySelector('#btn-password-cancel')
const btnSubmitPassword = document.querySelector('#btn-password-submit')

btnCancelPassword.addEventListener('click', () =>{
    insertId.value = ''
    oldPassword.value = ''
    newPassword.value = ''
})

