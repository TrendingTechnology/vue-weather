const axios = require('axios').default;

const api_key = "91b0ab3c5cc120add5f863222da4ad73";

function getWeatherData (lat=24.363749799999997, lon=88.6434214) {
    const api_uri = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&&lon=' + lon + '&&appid=' + api_key;
    
    axios
    .get(api_uri)
    .then(response => {
        console.log(response.data)
    })
    .catch(err => {
        console.log(err);
    });
}

getWeatherData()

/*
    ================ API RESPONSE DATA =====================
    {
        coord: { lon: 33, lat: 11 },
        weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
        base: 'model',
        main: {
            temp: 308.22,
            pressure: 1010,
            humidity: 22,
            temp_min: 308.22,
            temp_max: 308.22,
            sea_level: 1010,
            grnd_level: 963
        },
        wind: { speed: 5.61, deg: 24 },
        clouds: { all: 0 },
        dt: 1574502569,
        sys: { country: 'SS', sunrise: 1574480838, sunset: 1574522496 },
        timezone: 10800,
        id: 369526,
        name: 'Debbat Nabaqaya',
        cod: 200
    }
*/