let timeNow = moment();

$("#currentDay").text(timeNow.format('[It is ] LLLL'))

function backgroundColor (time) {
    time = time.slice(0,2)
    timeCheck = timeNow.format('HH')
    if (time > timeCheck) {
        return 'future'
    }else if (time < timeCheck) {
        return 'past'
    }    else {
       return 'present'
    } 
}