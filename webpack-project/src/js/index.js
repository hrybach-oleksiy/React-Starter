import '../scss/styles.scss';
import '../index.html';

import Time from './components/Time';
import Greetings from './components/Greetings';
import Slider from './components/Slider';
import Weather from './components/Weather';
import Quotes from './components/Quotes';
import Player from './components/Player';

const greeting = new Greetings();
const slider = new Slider();
const weather = new Weather();
const quotes = new Quotes();




slider.setBg();
slider.changeSlide();
// weather.getCity();
weather.changeLanguage();
// quotes.showQuotes();
// quotes.changeQuote();

window.addEventListener('beforeunload', greeting.setLocalStorage);
window.addEventListener('load', greeting.getLocalStorage);

