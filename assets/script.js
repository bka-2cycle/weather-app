var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var stateVal = document.querySelector('#stateinput');

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

var currentDate = dayjs().format('MM/DD/YY')
var addOneDay = dayjs().add(1, 'day').format('MM/DD/YY')
var addTwoDay = dayjs().add(2, 'day').format('MM/DD/YY')
var addThreeDay = dayjs().add(3, 'day').format('MM/DD/YY')
var addFourDay = dayjs().add(4, 'day').format('MM/DD/YY')
var addFiveDay = dayjs().add(5, 'day').format('MM/DD/YY')

console.log(currentDate);

apik = "65c56a71a3f7942733c868ac49d1ba56"

//convert kelvin to ferin
function conversion(val) {
    return Math.round((val - 273) * 1.8 + 32);
}
// convert wind speed to mph from kph
function convertKPHtoMPH(kph) {
    return Math.round((kph) * 0.6214);
}


// activate fetch via click
btn.addEventListener('click', function () {
    // First fetch for current city weather and lon lat coords
    //fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value, {state code}, {country code} '&appid=' + apik)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)

        .then(res => res.json())

        .then(data => {

            console.log(data);

            //collect the necessary information with the API link. Then collect that info and store it in different vars.

            var nameval = data['name']
            var descrip = data['weather']['0']['icon']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            var longVal = data['coord']['lon']
            var latVal = data['coord']['lat']

            //second fetch for 5 day forecast passing in city input and lat lon values
            fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latVal + '&lon=' + longVal + '&cnt=40&appid=' + apik)

                .then(res => res.json())

                .then(data => {

                    console.log(data);

                    //var dateValOne = data['list']['0']['dt_txt']
                    var dateValOne = addOneDay;
                    var dateValTwo = addTwoDay
                    var dateValThree = addThreeDay
                    var dateValFour = addFourDay
                    var dateValFive = addFiveDay

                    var iconValOne = data['list']['5']['weather']['0']['icon']
                    var iconValTwo = data['list']['13']['weather']['0']['icon']
                    var iconValThree = data['list']['21']['weather']['0']['icon']
                    var iconValFour = data['list']['29']['weather']['0']['icon']
                    var iconValFive = data['list']['37']['weather']['0']['icon']

                    var tempValOne = data['list']['5']['main']['temp']
                    var tempValTwo = data['list']['13']['main']['temp']
                    var tempValThree = data['list']['21']['main']['temp']
                    var tempValFour = data['list']['29']['main']['temp']
                    var tempValFive = data['list']['37']['main']['temp']

                    var windValOne = data['list']['5']['wind']['speed']
                    var windValTwo = data['list']['13']['wind']['speed']
                    var windValThree = data['list']['21']['wind']['speed']
                    var windValFour = data['list']['29']['wind']['speed']
                    var windValFive = data['list']['37']['wind']['speed']

                    var humidValOne = data['list']['5']['main']['humidity']
                    var humidValTwo = data['list']['13']['main']['humidity']
                    var humidValThree = data['list']['21']['main']['humidity']
                    var humidValFour = data['list']['29']['main']['humidity']
                    var humidValFive = data['list']['37']['main']['humidity']

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

                    windOne.innerHTML = `${'Wind: ' + convertKPHtoMPH(windValOne) + ' mph'}`
                    windTwo.innerHTML = `${'Wind: ' + convertKPHtoMPH(windValTwo) + ' mph'}`
                    windThree.innerHTML = `${'Wind: ' + convertKPHtoMPH(windValThree) + ' mph'}`
                    windFour.innerHTML = `${'Wind: ' + convertKPHtoMPH(windValFour) + ' mph'}`
                    windFive.innerHTML = `${'Wind: ' + convertKPHtoMPH(windValFive) + ' mph'}`

                    humidOne.innerHTML = `${'Humidity: ' + humidValOne + '%'}`
                    humidTwo.innerHTML = `${'Humidity: ' + humidValTwo + '%'}`
                    humidThree.innerHTML = `${'Humidity: ' + humidValThree + '%'}`
                    humidFour.innerHTML = `${'Humidity: ' + humidValFour + '%'}`
                    humidFive.innerHTML = `${'Humidity: ' + humidValFive + '%'}`

                });

            //Use innerHTML you have to display the information in the webpage.
            city.innerHTML = `Weather in <span>${nameval}<span> Today`
            description.setAttribute('src', 'http://openweathermap.org/img/wn/' + descrip + '.png')
            //description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            temp.innerHTML = `Temperature: <span>${conversion(tempature)}\u00B0</span>`
            wind.innerHTML = `Wind Speed: <span>${convertKPHtoMPH(wndspd)} mph<span>`
        })

        //condition for: if you do not input anything in the input box.
        .catch(err => alert('You entered Wrong city name'))
})

















