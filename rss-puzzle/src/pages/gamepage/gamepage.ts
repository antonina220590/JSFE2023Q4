import './gamepage.css';
import { CommonParams, CommonView } from '../../app/components/view';
import { BaseElementCreator } from '../../app/components/elements-creator';
import getData from '../../app/utils/getData';

const styles = {
    GAMEWRAPPER: 'game-page__wrapper',
    SOURCEBOX: 'data-source',
    RESULTBOX: 'result-block',
    LINE: 'line',
    WORDBOX: 'word_div',
};

const numberOfLevels: number = 10;

export default class GametView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.GAMEWRAPPER],
        };
        super(params);
        this.elementCreator.setAttribute('id', 'game');
        this.showChildren();
        this.getInfoFromGitHub();
    }

    showChildren(): HTMLElement {
        const divResultParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.RESULTBOX],
        };
        const divCreator = new BaseElementCreator(divResultParams);
        const divResultTag = divCreator.getElement();

        let counter = 0;
        for (let i = 0; i < numberOfLevels; i += 1) {
            counter += 1;
            const divLineParams: CommonParams = {
                HTMLtag: 'div',
                classNames: [styles.LINE],
            };
            const divLineCreator = new BaseElementCreator(divLineParams);
            const divLineTag = divLineCreator.getElement();
            divLineTag.classList.add(`line${counter}`);
            divResultTag.append(divLineTag);
        }

        const divSourceParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.SOURCEBOX],
        };
        const divSourceCreator = new BaseElementCreator(divSourceParams);
        const divSourceTag = divSourceCreator.getElement();
        divSourceTag.setAttribute('id', 'source');
        this.elementCreator.getElement().append(divResultTag, divSourceTag);

        return divSourceTag;
    }

    getInfoFromGitHub(): void {
        const linkURLCurrentLevel: string =
            'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel1.json';
        getData(linkURLCurrentLevel);
    }
}
