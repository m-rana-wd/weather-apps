document.getElementById('search').addEventListener('click', function () {
    const locationSearch = document.getElementById('type').value;
    const locationAddress = document.getElementById('address');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('description');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationSearch + '&appid=0493e236ca29d54b8bedbdb3b099e8f5')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            locationAddress.innerText = data.name;
            let temperatureCelsius = Math.round(data.main.temp - 273.15);
            temperature.innerText = temperatureCelsius;
            weatherDescription.innerText = data.weather[0].main;

        })
})