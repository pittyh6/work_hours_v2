const insertId = document.querySelector('#userIdPassword')
const oldPassword = document.querySelector('#oldPassword')
const newPassword = document.querySelector('#newPassword')
const btnCancelPassword = document.querySelector('#btn-password-cancel')
const btnSubmitPassword = document.querySelector('#btn-password-submit')
const btnChangePassword = document.querySelector('#changePassword')

btnCancelPassword.addEventListener('click', () =>{
    insertId.value = ''
    oldPassword.value = ''
    newPassword.value = ''
})


btnSubmitPassword.addEventListener('click', (e) =>{
    e.preventDefault()
    const employeeIdNumber = insertId.value
    const old_password = oldPassword.value
    const new_password = newPassword.value
    console.log("employee id: " + employeeIdNumber)
    console.log("old_password : " + old_password)
    console.log("new_password: " + new_password)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({employeeIdNumber, old_password, new_password})}
    try{
        const response = await fetch('/change_password', options)
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    }catch(error){
        console.error("Network error:", error.message)
    }
})