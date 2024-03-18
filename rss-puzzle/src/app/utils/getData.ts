import assertValues from './assertion-functions';

export default function getData(linkURL: string): void {
    const level1RequestURL = linkURL;
    const request = new XMLHttpRequest();
    request.open('GET', level1RequestURL);
    request.responseType = 'json';
    request.send();

    /* eslint-disable */
    request.onload = function () {
        const jsonData = request.response;
        getWords(jsonData, 0, 0);
    };
}

function shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

interface JSON {
    rounds: [];
    words: [];
    textExample?: string;
}

function getWords(jsonObj: JSON, level: number, sentence: number) {
    const levelsArr: [] = jsonObj.rounds;
    let currentLevel: JSON = levelsArr[level];
    let currentWords: JSON = currentLevel.words[sentence];
    let currentSentence = currentWords.textExample;

    const box = document.querySelector('.data-source');
    assertValues(box);

    const splitedSentence = currentSentence?.split(' ');
    if (splitedSentence) {
        shuffle(splitedSentence);

        for (let i = 0; i < splitedSentence.length; i++) {
            const div = document.createElement('div');
            div.classList.add('word_div');
            div.textContent = splitedSentence[i];
            box.append(div);
        }
    }
}

export function changePosition(event: Event): void {
    const target = event.target as HTMLElement;
    const line1 = document.querySelector('.line1');
    const sourceBox = document.getElementById('source');
    assertValues(sourceBox);
    assertValues(line1);

    if (target) {
        if (target.classList.contains('word_div') && target.closest('.data-source')) {
            line1.append(target);
        } else if (target.classList.contains('word_div') && target.closest('.result-block')) {
            sourceBox.append(target);
        }
    }
}
