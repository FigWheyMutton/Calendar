
var localStorageSaves = new Array();
var save = $('.storage')

var moment = moment().format("ddd, MMM YYYY "); 

save.on('click', function change(event) {
        event.preventDefault()
        var hourKey = $(this).attr("id");  
        var userInput = $(this).siblings('.middleSection').children('.controller').val()
        console.log(userInput)
        localStorage.setItem(hourKey, userInput)
        $('.reminder').removeClass('hide')
})

let currentTime = moment();
let elements = document.querySelectorAll(".time")
let time = 9;
for (element of elements) {
  let setTime = moment().hours(time).minutes(0).seconds(0);
  element.dataset.time = moment(setTime).unix();
  if (currentTime.unix() > setTime.unix()) {
    element.classList.add("past")
  }
  if (currentTime.unix() < setTime.unix()) {
    element.classList.add("future")
  }
  if (moment(currentTime).hour() == moment(setTime).hour()) {    
    element.classList.add("present")
  }
  time++
}