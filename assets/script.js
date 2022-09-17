var localStorageSaves = new Array();
var save = document.getElementById('storage')





var moment = moment().format("ddd, MMM YYYY ");
$('#1A').text(moment);


save.addEventListener('click', function change(event) {
    var userInput = document.getElementById('userInput').value
    event.preventDefault()
    localStorage.setItem('SaveBtn', userInput)
    var completed = document.getElementById('completed').classList.remove('hide')
})
