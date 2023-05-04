
import Translate from './Translate';
import Greetings from './Greetings';
const translate = new Translate();
const greeting = new Greetings();

const timeElem = document.querySelector('.js-time');
const dateElem = document.querySelector('.js-date');
const switcher = document.querySelector('.locale-switcher');
translate.getLocale();
let tempLocale = translate.translateDate();

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    timeElem.textContent = currentTime;
    showDate(tempLocale);
    greeting.showGreetings();
    setTimeout(showTime, 1000);
}

function showDate(lang) {
    const date = new Date();
    const options = { month: 'long', day: 'numeric', weekday: "long" };
    // const locale = translate.translateDate();
    // console.log(locale);
    const currentDate = date.toLocaleDateString(`${lang}`, options);
    dateElem.textContent = currentDate;
}

showTime();

switcher.addEventListener('change', event => {
    tempLocale = event.target.value;
    showDate(tempLocale);
});


