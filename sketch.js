let button = document.querySelector('#submit');
let text = document.querySelector('#input');
let div = document.querySelector('#d');
let url1 = `http://api.wordnik.com:80/v4/words.json/search/`;
let url2 = `?caseSensitive=true&minCorpusCount=5&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&skip=0&limit=100&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;



button.addEventListener('click', () => {
    process();
});

function process() {
    let word = text.value;
    for (let i = 0; i < word.length; i++) {
        let letter = word.charAt(i);
        fetch(url1 + letter + url2)
            .then((resp) => resp.json())
            .then((data) => {
                let res = data.searchResults;
                let word = res[Math.floor(Math.random(0, res.length) * res.length)].word;
                div.innerHTML += `<li> ${word} </li>`
            });
    }
}