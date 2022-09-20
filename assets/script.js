var localStorageSaves = new Array();
var save = $('.storage')

var moment = moment().format("ddd, MMM YYYY "); 
$('#1A').text(moment);

save.on('click', function change(event) {
        event.preventDefault()
        var hourKey = $(this).attr("id");  
        var userInput = $(this).siblings('.middleSection').children('.controller').val()
        console.log(userInput)
        localStorage.setItem(hourKey, userInput)
        $('.reminder').removeClass('hide')
})

$('#9A').val(localStorage.getItem(9))

for(var i = 9;i <18; i++) {
    $(`#${i}A`).val(localStorage.getItem(i))
}

for(var p = 9; p < 18; p++) {
    var currentTime = {value: "time", timestamp: new Date().getTime()}
    localStorage.setItem("time", JSON.stringify(currentTime));
    
    var displayTime = JSON.parse(currentTime)
    console.log(currentTime)
    if (p < currentTime) {
        $('controller').addClass(past)
    } if (p == currentTime) {
        $('controller').addClass(present)
    } else {
        $('controller').addClass(future)
    }
}