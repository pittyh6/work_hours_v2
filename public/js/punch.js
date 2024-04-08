

const btn_clock_in = document.querySelector('#clockIn')
const btn_break_start = document.querySelector('#breakStart')
const btn_break_end = document.querySelector('#breakEnd')
const btn_clock_out = document.querySelector('#clockOut')
const employeeId = document.querySelector('.staff-info-id').innerHTML



/*btn_clock_in.addEventListener('click', async function (e) {
    $.ajax({
        type: 'POST',
        url: '/api/time/punchIn',
        data: { employeeId: employeeId },
        success: function (response) {
            console.log('success ajax: ', response)
        },
        error: function (err) {
            console.log("error ajax: ", err)
        }
    })
})*/

btn_clock_in.addEventListener('click', async function (e) {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeId})
    }
    try{
        const response = await fetch('/api/time/punchIn', options)
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    }catch (error) {
        console.error("Network error:", error.message);
    }
})
