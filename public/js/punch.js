

const btn_clock_in = document.querySelector('#clockIn')
const btn_break_start = document.querySelector('#breakStart')
const btn_break_end = document.querySelector('#breakEnd')
const btn_clock_out = document.querySelector('#clockOut')
const employeeId = document.querySelector('.staff-info-id').innerHTML


//punchIn hour
btn_clock_in.addEventListener('click', async function (e) {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeId })
    }
    try {
        const response = await fetch('/api/time/punchIn', options)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    } catch (error) {
        console.error("Network error:", error.message);
    }
})
//BreakStart hour
btn_break_start.addEventListener('click', async function (e) {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({employeeId})
    }
    try {
        const response = await fetch('/api/time/breakStart', options)
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    }catch(error) {
        console.error("Network error:", error.message)
    }
})

//Break End Hour
btn_break_end.addEventListener('click', async function (e) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({employeeId})
    }
    try{
        const response = await fetch('/api/time/breakEnd', options)
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    }catch(error){
        console.error("Network error:", error.message)
    }
})

//clock out hour
btn_clock_out.addEventListener('click', async function (e) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({employeeId})
    }
    try{
        const response = await fetch('/api/time/clockOut', options)
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    }catch(error){
        console.error("Network error:", error.message)
    }
})