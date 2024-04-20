
window.onload = function(){
    if(window.location.href.indexOf('/punch_log') > -1){
        console.log("load punch_log")
        getPunchLog()
    }
}

async function getPunchLog(){
    console.log("get Punch Log function")
}