const itemPerPage = 7


window.onload = async function () {
    if (window.location.href.indexOf('/punch_log') > -1) {
        getPageNumber()
    }
};
async function showData(clickedPage, startElPage) {
    // Send the employeeId to the server
    const response = await fetch(`/api/time/punch_log/${employeeId}`);
    const workData = await response.json();
    countPunchLog(workData)
    // Update the HTML with the workData
    const punchLogContainer = document.getElementById('punchLogContainer');
    punchLogContainer.innerHTML = ''; // Clear previous content
    //workData.forEach(data => {
    for (let i = startElPage; i < itemPerPage * clickedPage; i++) {
        //total calc
        const punchInTime = new Date(`2024-02-03 ${workData[i].punchIn}`);
        const punchOutTime = new Date(`2024-02-03 ${workData[i].punchOut}`);
        const breakStartTime = new Date(`2024-02-03 ${workData[i].breakStart}`);
        const breakEndTime = new Date(`2024-02-03 ${workData[i].breakEnd}`);
        const timeDiffInMilliseconds = (punchOutTime - breakEndTime) + (breakStartTime - punchInTime);
        const totalHours = Math.floor(timeDiffInMilliseconds / (1000 * 60 * 60));
        const totalMinutes = Math.floor((timeDiffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        let formattedHours = totalHours.toString().padStart(2, '0');
        let formattedMinutes = totalMinutes.toString().padStart(2, '0');
        const formattedTime = `${formattedHours}:${formattedMinutes}`;
        // create html to show data
        const logEntry = document.createElement('div');
        logEntry.classList.add('log-entry');
        logEntry.innerHTML = `
        <hr>
        <p class="day">${workData[i].weekDay} : ${workData[i].day}</p>
        <p class="clock-in">Clock In: ${workData[i].punchIn}</p>
        <p class="break-start">Break Start: ${workData[i].breakStart}</p>
        <p class="break-end">Break End: ${workData[i].breakEnd}</p>
        <p class="clock-out">Clock Out: ${workData[i].punchOut}</p>
        <p class="total-day">Total day: ${formattedTime}</p>
    `;
        punchLogContainer.appendChild(logEntry);
    };
    window.scrollTo(0,0)
}

//check how many pages number is going to have. Get all data and divide by 7. If the result is float, it rounds to 1 up.
function countPunchLog(workData) {
    const pagination = document.getElementById('pagination')
    const logEntry = document.querySelectorAll('.log-entry');
    const totalWorkData = workData.length
    const numberPages = Math.ceil(totalWorkData / itemPerPage)

    //create the pages number at the botton
    if(document.querySelectorAll('.pag-number').length <= 0){
        for (let i = 1; i <= numberPages; i++) {
            const paginationNumber = document.createElement('button')
            paginationNumber.classList.add('pag-number')
            paginationNumber.innerHTML = `${i}`
            pagination.appendChild(paginationNumber)
        }
    }
}

// get the page number clicked. 
function getPageNumber() {
    showData(1,0)
    document.addEventListener('click', function (event) {
        const logEntry = document.querySelectorAll('.log-entry');
        const punchContainer = document.querySelector('#punchLogContainer');
        if (event.target.classList == 'pag-number') {
            let clickedPage = parseInt(event.target.innerHTML)
            const startElPage = ((clickedPage * 7) - 7)
            showData(clickedPage, startElPage)
        } 
    })
}
