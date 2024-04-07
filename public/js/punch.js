

const btn_clock_in = document.querySelector('#clockIn')
const btn_break_start = document.querySelector('#breakStart')
const btn_break_end = document.querySelector('#breakEnd')
const btn_clock_out = document.querySelector('#clockOut')

btn_clock_in.addEventListener('click', async function (e) {
    $.ajax({
        type: 'POST',
        url: '/api/time/punchIn',
        success: function(response) {
            console.log('success ajax: ', response)
        },
        error: function(err){
            console.log("error ajax: ",err)
        }
    })
})

