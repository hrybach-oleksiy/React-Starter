export default class Quotes {

    quoteElem = document.querySelector('.js-quote');
    authorElem = document.querySelector('.js-author');
    changeBtn = document.querySelector('.js-change-quote');


    async getQuotes() {

        const options = {
            method: 'GET',
            headers: { 'x-api-key': '36iNebpitjvSceZwB1T/6Q==DiUtV3rl25EpMgsF' }
        };
        const url = `https://api.api-ninjas.com/v1/quotes?category=happiness`;
        const response = await fetch(url, options);
        return response.json();
    }

    showQuotes() {
        this.getQuotes()
            .then(quote => {
                this.quoteElem.textContent = quote[0].quote;
                this.authorElem.textContent = quote[0].author;
            })
            .catch(err => console.log(err));
    }

    changeQuote() {
        this.changeBtn.addEventListener('click', () => {
            this.showQuotes();
        });
    }
}

