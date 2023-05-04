import Greetings from './Greetings';
const greeting = new Greetings();

export default class Slider {

    randomImageNum = this._getRandomImageNum();

    _getRandomImageNum() {
        const firstImageNum = 1;
        const lastImageNum = 20;
        return Math.floor(Math.random() * (lastImageNum - firstImageNum + 1)) + firstImageNum;
    }

    setBg() {
        const imageNum = String(this.randomImageNum).padStart(2, 0);
        const timeOfDay = greeting.getTimeOfDay();
        // document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${imageNum}.jpg')`;

        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${imageNum}.jpg`;
        img.addEventListener('load', () => {
            // document.body.style.backgroundImage = `url(${img})`;
            document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${imageNum}.jpg')`;
        });
    }

    getSlideNext() {
        this.randomImageNum++;

        if (this.randomImageNum === 21) {
            this.randomImageNum = 1;
        }
    }

    getSlidePrev() {
        this.randomImageNum--;

        if (this.randomImageNum === 0) {
            this.randomImageNum = 20;
        }
    }

    changeSlide() {
        const nextSlideBtn = document.querySelector('.js-slide-next');
        const prevSlideBtn = document.querySelector('.js-slide-prev');

        nextSlideBtn.addEventListener('click', () => {
            this.getSlideNext();
            this.setBg();
        });

        prevSlideBtn.addEventListener('click', () => {
            this.getSlidePrev();
            this.setBg();
        });

    }
}

