document.addEventListener('DOMContentLoaded', () => {
    const currentWeather = { temp: 25, humidity: 60, wind: 10 };
    document.getElementById('temperature').textContent = `Temperature: ${currentWeather.temp} °C`;
    document.getElementById('humidity').textContent = `Humidity: ${currentWeather.humidity} %`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${currentWeather.wind} km/h`;

    const forecastData = [
        { day: 'Mon', temp: 26 },
        { day: 'Tue', temp: 24 }
    ];

    const forecastContainer = document.getElementById('forecastContainer');
    forecastData.forEach(day => {
        const card = document.createElement('div');
        card.classList.add('forecast-card');
        card.innerHTML = `<p>${day.day}</p><p>${day.temp} °C</p>`;
        forecastContainer.appendChild(card);
    });
});