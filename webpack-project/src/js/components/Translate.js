export default class Translate {
    switcher = document.querySelector('.locale-switcher');
    locale = this.switcher.value;

    translations = {
        'en': {
            'morning': 'Good morning',
            'afternoon': 'Good afternoon',
            'evening': 'Good evening',
            'night': 'Good night',
            'dateOption': 'en-GB',
            'name': '[Enter your Name]'
        },
        'ua': {
            'morning': 'Добрий ранок',
            'afternoon': 'Доброго дня',
            'evening': 'Доброго вечора',
            'night': 'Доброї ночі',
            'dateOption': 'uk-UA',
            'name': '[Введіть ваше ім\'я]'
        },
    };

    getLocale() {
        this.switcher.addEventListener('change', event => {
            this.locale = event.target.value;
        });
    }

    translateGreeting(period) {
        return this.translations[this.locale][period];
    }

    translateDate() {
        return this.translations[this.locale].dateOption;
    }
}