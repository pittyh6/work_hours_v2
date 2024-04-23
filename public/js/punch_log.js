
window.onload = async function () {
    if (window.location.href.indexOf('/punch_log') > -1) {
        // Send the employeeId to the server
        const response = await fetch(`/api/time/punch_log/${employeeId}`);
        const workData = await response.json();

        // Update the HTML with the workData
        const punchLogContainer = document.getElementById('punchLogContainer');
        punchLogContainer.innerHTML = ''; // Clear previous content
        workData.forEach(data => {
            //total calc
            const punchInTime = new Date(`2024-02-03 ${data.punchIn}`);
            const punchOutTime = new Date(`2024-02-03 ${data.punchOut}`);
            const breakStartTime = new Date(`2024-02-03 ${data.breakStart}`);
            const breakEndTime = new Date(`2024-02-03 ${data.breakEnd}`);
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
                <p class="day">${data.weekDay} : ${data.day}</p>
                <p class="clock-in">Clock In: ${data.punchIn}</p>
                <p class="break-start">Break Start: ${data.breakStart}</p>
                <p class="break-end">Break End: ${data.breakEnd}</p>
                <p class="clock-out">Clock Out: ${data.punchOut}</p>
                <p class="total-day">Total day: ${formattedTime}</p>
            `;
            punchLogContainer.appendChild(logEntry);
        });
    }
};
