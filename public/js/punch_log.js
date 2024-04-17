//const employeeId = document.querySelector('.staff-info-id').innerHTML

async function getIdFromEmployee(){
    console.log("function getIdFromEmployee", employeeId)
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeId })
    }
    try{
        const response = await fetch('/api/time/punch_log', options)
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    }catch(error){
        console.error("Network error:", error.message);
    }
}

//window.onload = getIdFromEmployee
window.onload = function(){
    if(window.location.href.indexOf('/punch_log') > -1){
        getIdFromEmployee()
    }
}