const city = document.getElementById('city');
const apiKey = 'e5b3f49657b2ccff409c34647081d13b'; 
const getWeatherBtn = document.getElementById('getWeatherBtn');

document.getElementById('search').addEventListener('click', () => {
    const city = cityInput.value
    if (city) {
        getWeather(city);
         cityInput.value = ""
    } else {
        alert('Please enter a city name');
    }
});
async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('countryName').innerText = data.sys.country;
    document.getElementById('temp').innerText = data.main.temp.toFixed(1)+"°C";
}
