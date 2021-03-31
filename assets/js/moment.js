let timeNow = moment();

$("#currentDay").text(timeNow.format('[It is ] LLLL'))

// let hourlyTimes = [];
// $("text-area").each(function(){ hourlyTimes.push(this.val()); });
// console.log(hourlyTimes)


function backgroundColor (time) {
    console.log(time.slice(0,2))
    time = time.slice(0,2)
    //console.log('Hour we r checking out', time)
    //console.log('current hour!! moment thing', timeNow.format('HH:MM'))
    //timeMinus = moment().subtract(5, 'hours')
    timeCheck = timeNow.format('HH')
    console.log('THE CURRENT fake time minsed',timeCheck);
    if (time > timeCheck) {
        //console.log('we in the future')
        return 'future'
    }else if (time < timeCheck) {
       // console.log('we in past')
        return 'past'
    }    else {
       // console.log('its now')
       return 'future'
    }
    
//     $(".hour").each(() => {
//         var timeCheck = $(this).text();
//         console.log(timeCheck)
        
//     })
}

// let test = $("#hour0").text()
// console.log(test)

// let test2 = document.getElementsByClassName("hour").textContent;
// console.log(test2);

// var arr = $('.hour').map(function() {
//     return $.trim(this.value);
// }).get();
// console.log(arr);

// (function () {
//     var arr2 = [];
//     $('#hour'+[i]).each(function () {
//         arr2.push(this.text());
//     });
//     console.log(arr2)
// } ());

// let test3 = document.getElementsByTagName("text-area").value;
// console.log(test3)

// let test4 = $(".container").find('.hour').text();
// console.log(test4)

// console.log($( ".hour" ).toArray())

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }