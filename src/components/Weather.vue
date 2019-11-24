<template>
    <!-- section start -->
    <section class="container-fluid" style="margin-bottom: 30px">
        
        <!-- container start -->
        <div class="container text-white">
        
            <!-- Location status: right aligned -->
            <div class="text-center">
                <button type="button" class="status-btn">
                    Location:
                    <span v-bind:class="isLocation ? 'text-success' : 'text-danger'">{{isLocation ? 'Active' : 'Inactive' | capitalize}}</span>
                </button>
                <button type="button" class="status-btn">
                    Weather:
                    <span v-bind:class="isWeather ? 'text-success' : 'text-danger'">{{isWeather ? 'Active' : 'Inactive' | capitalize}}</span>
                </button>        
            </div>


            <!-- weather information start -->
            <ul class="text-center" style="margin-top: 50px">
                <li>
                    <div style="font-size: 76px; padding-bottom: 20px" class="text-warning">
                        <span>{{weatherData.temperature}}</span> &deg;C
                    </div>
                    <div style="font-size: 1.3rem; font-weight: bold;" class="text-center" >
                        {{weatherData.status | capitalize}}
                    </div>
                </li>
                <li></li>
                <li style="margin-left: 60px">
                    <table  class="text-left">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>City:</th>
                                <td>{{weatherData.city}}</td>
                            </tr>
                            <tr>
                                <th>Temp. Min:</th>
                                <td>{{weatherData.min_temperature}} &deg;C</td>
                            </tr>
                            <tr>
                                <th>Temp. Max</th>
                                <td>{{weatherData.max_temperature}} &deg;C</td>
                            </tr>
                            <tr>
                                <th>Humidity:</th>
                                <td>{{weatherData.humidity}} %</td>
                            </tr>
                            <tr>
                                <th>Pressure:</th>
                                <td>{{weatherData.pressure}} atm</td>
                            </tr>
                            <tr>
                                <th>Wind Speed:</th>
                                <td>{{weatherData.wind.direction}} m/s</td>
                            </tr>
                            <tr>
                                <th>Wind Direction:</th>
                                <td>{{weatherData.wind.direction}}&deg; (meteorological)</td>
                            </tr>
                            <tr>
                                <th>Sea Level:</th>
                                <td>{{weatherData.sea_level}} atm</td>
                            </tr>
                            <tr>
                                <th>Ground Level:</th>
                                <td>{{weatherData.ground_level}} atm</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul><!-- weather information end -->
            <div class="text-center" style="margin-top: 40px;">
                <button @click="fetchWeatherData" class="text-danger status-btn"
                    style="padding: 10px">
                    Click to check weather info
                </button>
            </div>
        </div><!-- container end -->
    </section><!-- section end -->
</template>

<script>
export default {
    name: "Weather",
    data(){
        return {
            lon: null,
            lat: null,
            isLocation: false,
            isWeather: false,
            weatherData: {
                city: '-',
                status: '---',
                temperature: '-',
                humidity: '-',
                pressure: '-',
                min_temperature: '-',
                max_temperature: '-',
                sea_level: '-',
                ground_level: '-',
                wind: {
                    speed: '-',
                    direction: '-'
                },
            },
            API_KEY: "91b0ab3c5cc120add5f863222da4ad73",
        }
    },
    created () {
        this.$getLocation({
                enableHighAccuracy: true,
                timeout: Infinity,
            })
            .then(coordinates => {
                this.lon = coordinates.lng;
                this.lat = coordinates.lat;
                this.isLocation = true;
            });
    },

    methods: {
        async fetchWeatherData () {
            const axios = require('axios').default;
            const api_uri = 'http://api.openweathermap.org/data/2.5/weather?lat=' + this.lat + '&&lon=' + this.lon + '&&appid=' + this.API_KEY;
            try {
                const response = await axios.get(api_uri);
                this.setWeatherData(response.data)
                this.isWeather = true;
            } catch (err) {
                alert(err);
            }
        },
        setWeatherData (data) {
            // basic
            this.weatherData.city = data.name;
            this.weatherData.status = data.weather[0].description;
            
            // wind and other
            this.weatherData.wind.speed = data.wind.speed;
            this.weatherData.wind.direction = data.wind.deg;
            this.weatherData.sea_level = (data.main.sea_level * 0.00098692316931427).toFixed(5);
            this.weatherData.ground_level = (data.main.grnd_level * 0.00098692316931427).toFixed(5)
            this.weatherData.humidity = data.main.humidity;
            // given hPa, result shownn in atomic pressure
            this.weatherData.pressure = (data.main.pressure * 0.00098692316931427).toFixed(5);

            // temp
            this.weatherData.temperature = (data.main.temp - 273.15).toFixed(1);
            this.weatherData.min_temperature = (data.main.temp_min - 273.15).toFixed(1);
            this.weatherData.max_temperature = (data.main.temp_max - 273.15).toFixed(1);
            
        }
    },
}
</script>

<style scoped>
section {
    padding-top: 30px;
    min-height: 400px;
    text-align: left;
}
th, td {font-size: 1.1rem;}
td {padding-left: 10px; color: rgb(125, 231, 25)}
li {
    display: inline-block;
    list-style: none
}
.status-btn {
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 10px;
    padding-right: 10px;
    z-index: 0;
    box-shadow: none!important;
    font-weight: bold;
}

</style>
