var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

var dateOne = document.querySelector('.one-one');
var dateTwo = document.querySelector('.two-one');
var dateThree = document.querySelector('.three-one');
var dateFour = document.querySelector('.four-one');
var dateFive = document.querySelector('.five-one');

var iconOne = document.querySelector('.weather-icon-one');
var iconTwo = document.querySelector('.weather-icon-two');
var iconThree = document.querySelector('.weather-icon-three');
var iconFour = document.querySelector('.weather-icon-four');
var iconFive = document.querySelector('.weather-icon-five');

var tempOne = document.querySelector('.one-three');
var tempTwo = document.querySelector('.two-three');
var tempThree = document.querySelector('.three-three');
var tempFour = document.querySelector('.four-three');
var tempFive = document.querySelector('.five-three');

var windOne = document.querySelector('.one-four');
var windTwo = document.querySelector('.two-four');
var windThree = document.querySelector('.three-four');
var windFour = document.querySelector('.four-four');
var windFive = document.querySelector('.five-four');

var humidOne = document.querySelector('.one-five');
var humidTwo = document.querySelector('.two-five');
var humidThree = document.querySelector('.three-five');
var humidFour = document.querySelector('.four-five');
var humidFive = document.querySelector('.five-five');



apik = "65c56a71a3f7942733c868ac49d1ba56"

//kelvin to ferin
function conversion(val) {
    return Math.round((val - 273) * 1.8 + 32);
}




// activate fetch via click
btn.addEventListener('click', function () {
    // First fetch for current city weather and lon lat coords
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)

        .then(res => res.json())

        .then(data => {

            console.log(data);

            //collect the necessary information with the API link. Then collect that info and store it in different vars.

            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            var longVal = data['coord']['lon']
            var latVal = data['coord']['lat']

            //second fetch for 5 day forecast passing in city input and lat lon values
            fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latVal + '&lon=' + longVal + '&cnt=40&appid=' + apik)

                .then(res => res.json())

                .then(data => {

                    console.log(data);

                    var dateValOne = data['list']['0']['dt_txt']
                    var dateValTwo = data['list']['7']['dt_txt']
                    var dateValThree = data['list']['14']['dt_txt']
                    var dateValFour = data['list']['22']['dt_txt']
                    var dateValFive = data['list']['34']['dt_txt']

                    var iconValOne = data['list']['0']['weather']['0']['icon']
                    var iconValTwo = data['list']['7']['weather']['0']['icon']
                    var iconValThree = data['list']['14']['weather']['0']['icon']
                    var iconValFour = data['list']['22']['weather']['0']['icon']
                    var iconValFive = data['list']['34']['weather']['0']['icon']

                    var tempValOne = data['list']['0']['main']['temp']
                    var tempValTwo = data['list']['7']['main']['temp']
                    var tempValThree = data['list']['14']['main']['temp']
                    var tempValFour = data['list']['22']['main']['temp']
                    var tempValFive = data['list']['34']['main']['temp']

                    var windValOne = data['list']['0']['wind']['speed']
                    var windValTwo = data['list']['7']['wind']['speed']
                    var windValThree = data['list']['14']['wind']['speed']
                    var windValFour = data['list']['22']['wind']['speed']
                    var windValFive = data['list']['34']['wind']['speed']

                    var humidValOne = data['list']['0']['main']['humidity']
                    var humidValTwo = data['list']['7']['main']['humidity']
                    var humidValThree = data['list']['14']['main']['humidity']
                    var humidValFour = data['list']['22']['main']['humidity']
                    var humidValFive = data['list']['34']['main']['humidity']

                    dateOne.innerHTML = `${dateValOne}`
                    dateTwo.innerHTML = `${dateValTwo}`
                    dateThree.innerHTML = `${dateValThree}`
                    dateFour.innerHTML = `${dateValFour}`
                    dateFive.innerHTML = `${dateValFive}`


                    iconOne.setAttribute('src', 'http://openweathermap.org/img/wn/' + iconValOne + '.png')
                    iconTwo.setAttribute('src', 'http://openweathermap.org/img/wn/' + iconValTwo + '.png')
                    iconThree.setAttribute('src', 'http://openweathermap.org/img/wn/' + iconValThree + '.png')
                    iconFour.setAttribute('src', 'http://openweathermap.org/img/wn/' + iconValFour + '.png')
                    iconFive.setAttribute('src', 'http://openweathermap.org/img/wn/' + iconValFive + '.png')


                    tempOne.innerHTML = `${'Temp: ' + conversion(tempValOne) + '\u00B0'}`
                    tempTwo.innerHTML = `${'Temp: ' + conversion(tempValTwo) + '\u00B0'}`
                    tempThree.innerHTML = `${'Temp: ' + conversion(tempValThree) + '\u00B0'}`
                    tempFour.innerHTML = `${'Temp: ' + conversion(tempValFour) + '\u00B0'}`
                    tempFive.innerHTML = `${'Temp: ' + conversion(tempValFive) + '\u00B0'}`

                    windOne.innerHTML = `${'Wind: ' + windValOne}`
                    windTwo.innerHTML = `${'Wind: ' + windValTwo}`
                    windThree.innerHTML = `${'Wind: ' + windValThree}`
                    windFour.innerHTML = `${'Wind: ' + windValFour}`
                    windFive.innerHTML = `${'Wind: ' + windValFive}`

                    humidOne.innerHTML = `${'Humidity: ' + humidValOne + '%'}`
                    humidTwo.innerHTML = `${'Humidity: ' + humidValTwo + '%'}`
                    humidThree.innerHTML = `${'Humidity: ' + humidValThree + '%'}`
                    humidFour.innerHTML = `${'Humidity: ' + humidValFour + '%'}`
                    humidFive.innerHTML = `${'Humidity: ' + humidValFive + '%'}`

                });

            //Use innerHTML you have to display the information in the webpage.
            city.innerHTML = `Weather in <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${conversion(tempature)} F</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
        })

        //condition for: if you do not input anything in the input box.
        .catch(err => alert('You entered Wrong city name'))
})

















