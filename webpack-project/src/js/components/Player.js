import playList from "./playList";

export default class Player {
    playBtn = document.querySelector('.js-play');
    playPrevBtn = document.querySelector('.js-play-prev');
    playNextBtn = document.querySelector('.js-play-next');
    playListElem = document.querySelector('.js-play-list');

    audio = new Audio();
    isMusicPlay = false;
    playNum = 0;

    playAudio() {
        this.audio.src = playList[this.playNum].src;
        this.audio.currentTime = 0;
        this.setActiveItem(this.playNum);

        if (!this.isMusicPlay) {
            this.audio.play();
            this.isMusicPlay = true;
        } else {
            this.audio.pause();
            this.isMusicPlay = false;
        }
    }

    playMusic() {
        this.playBtn.addEventListener('click', () => {
            this.toggleBtn();
            this.playAudio();
        });
    }

    changeMusic() {
        this.playNextBtn.addEventListener('click', () => {
            this.playNum++;

            if (this.playNum === 4) {
                this.playNum = 0;
            }


            this.playAudio();
        });

        this.playPrevBtn.addEventListener('click', () => {
            this.playNum--;

            if (this.playNum === -1) {
                this.playNum = 3;
            }

            this.playAudio();
        });
    }

    toggleBtn() {
        this.playBtn.classList.toggle('pause');
    }

    createList() {
        this.playListElem.innerHTML = '';
        playList.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('play-item');
            li.textContent = item.title;
            this.playListElem.append(li);
        });
    }

    setActiveItem(counter) {
        this.createList();
        const items = document.querySelectorAll('.play-item');
        items[counter].classList.add('item-active');
    }
}

const player = new Player();
player.playMusic();
player.changeMusic();
player.createList();