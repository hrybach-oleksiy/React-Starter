import Translate from "./Translate";
const translate = new Translate();

export default class Greetings {
    greetingElem = document.querySelector('.js-greeting');
    userNameElem = document.querySelector('.js-name');
    switcher = document.querySelector('.locale-switcher');

    getTimeOfDay() {
        const date = new Date();
        const hours = +date.getHours();

        // switch (hours) {
        //     case hours >= 4 && hours < 12:
        //         return 'morning';
        //     case hours >= 12 && hours < 17:
        //         return 'afternoon';
        //     case hours >= 17 && hours <= 23:
        //         return 'evening';
        //     default:
        //         return 'night';
        // }
        if (hours >= 6 && hours < 12) {
            return 'morning';
        } else if (hours >= 12 && hours < 18) {
            return 'afternoon';
        } else if (hours >= 18 && hours <= 23) {
            return 'evening';
        } else {
            return 'night';
        }
    }

    showGreetings() {
        const timeOfDay = this.getTimeOfDay();
        translate.getLocale();
        const translated = translate.translateGreeting(timeOfDay);
        this.greetingElem.textContent = translated;
    }

    setLocalStorage() {
        const userName = document.querySelector('.js-name').value;

        if (userName) {
            localStorage.setItem('name', userName);
        }
    }

    getLocalStorage() {
        const userName = localStorage.getItem('name');

        if (userName) {
            const userNameElem = document.querySelector('.js-name');
            userNameElem.value = userName;
        }
    }

    translatePlaceholder() {

    }

}