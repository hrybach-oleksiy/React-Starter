import Translate from "./Translate";
const translate = new Translate();

export default class Weather {

    weatherIcon = document.querySelector('.weather-icon');
    temperature = document.querySelector('.temperature');
    weatherDescription = document.querySelector('.weather-description');
    wind = document.querySelector('.js-wind');
    humidity = document.querySelector('.js-humidity');
    cityInput = document.querySelector('.js-city');

    switcher = document.querySelector('.locale-switcher');
    city = this.getLocalStorage() || 'Kyiv';
    lang = translate.locale;

    async getWeather(city, lang) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&APPID=1931ff70cf6625de1248ddf61497f83a&units=metric`;
        const response = await fetch(url);
        return response.json();
    }

    showWeather() {
        this.getWeather(this.city, this.lang)
            .then(weather => {
                const roundedTemp = Math.round(weather.main.temp);
                this.weatherIcon.className = 'weather-icon owf';
                this.weatherIcon.classList.add(`owf-${weather.weather[0].id}`);
                this.temperature.textContent = `${roundedTemp}°C`;
                this.weatherDescription.textContent = weather.weather[0].description;
                this.wind.textContent = `Wind speed: ${Math.round(+weather.wind.speed)} m/s`;
                this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
            })
            .catch(err => {
                console.log(err);
                this.cityInput.classList.add('error');
                this.cityInput.value = 'Wrong City';
            });
    }

    getCity() {
        this.cityInput.value = this.city;
        this.showWeather();

        this.cityInput.addEventListener('change', () => {
            this.city = this.cityInput.value;
            this.cityInput.classList.remove('error');
            this.showWeather();
            this.setLocalStorage(this.cityInput.value);
        });
    }

    setLocalStorage(city) {
        localStorage.setItem('city', city);
    }

    getLocalStorage() {
        return localStorage.getItem('city');
    }

    changeLanguage() {
        this.switcher.addEventListener('change', event => {
            this.lang = event.target.value;
            this.showWeather();
        });
    }
}
