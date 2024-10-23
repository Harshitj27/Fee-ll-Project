async function fetchCurrentWeather(cityName) {
    const cityCoordinates = {
        Varanasi: { latitude: 25.3176, longitude: 82.9739 },
        Delhi: { latitude: 28.6139, longitude: 77.2090 },
        Mumbai: { latitude: 19.0760, longitude: 72.8777 },
        Ahmedabad: { latitude: 23.0225, longitude: 72.5714 },
        Amritsar: { latitude: 31.6340, longitude: 74.8723 },
        Chandigarh: { latitude: 30.7333, longitude: 76.7794 },
        Coorg: { latitude: 12.3292, longitude: 75.7300 },
        Darjeeling: { latitude: 27.0385, longitude: 88.2623 },
        Hyderabad: { latitude: 17.3850, longitude: 78.4867 },
        Jaipur: { latitude: 26.9124, longitude: 75.7873 },
        Leh: { latitude: 34.1526, longitude: 77.5773 },
        Mysore: { latitude: 12.2958, longitude: 76.6394 },
        Nainital: { latitude: 29.3802, longitude: 79.4545 },
        Pondicherry: { latitude: 11.9416, longitude: 79.7687 },
        Rameswaram: { latitude: 9.2886, longitude: 79.3120 },
        Srinagar: { latitude: 34.0837, longitude: 74.7973 },
        Udaipur: { latitude: 24.5714, longitude: 73.6823 },
        Ujjain: { latitude: 23.1822, longitude: 75.7794 }
    };
    

    const { latitude, longitude } = cityCoordinates[cityName];

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);
    
    return await response.json();
}

function createWeatherCard(city, currentData) {
    const weatherCard = document.createElement('div');
    weatherCard.className = 'weather-card';
    weatherCard.innerHTML = `
        <h3>${city}</h3>
        <p>Temperature: ${currentData.temperature_2m} °C</p>
    `;
    return weatherCard;
}

async function displayWeather() {
    const cityName = document.getElementById('city-name').textContent;


    try {
        const weatherData = await fetchCurrentWeather(cityName);
        const currentData = weatherData.current;

        const weatherCard = createWeatherCard(cityName, currentData);
        document.getElementById('weather-container').appendChild(weatherCard);
    } catch (error) {
        console.error(error);
    }
}

displayWeather();