import './gamepage.css';
import { CommonParams, CommonView } from '../../app/components/view';
import { BaseElementCreator } from '../../app/components/elements-creator';

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
    }

    showChildren(): void {
        const divResultParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.RESULTBOX],
        };
        const divCreator = new BaseElementCreator(divResultParams);
        const divResultTag = divCreator.getElement();

        for (let i = 0; i < numberOfLevels; i += 1) {
            const divLineParams: CommonParams = {
                HTMLtag: 'div',
                classNames: [styles.LINE],
            };
            const divLineCreator = new BaseElementCreator(divLineParams);
            const divLineTag = divLineCreator.getElement();
            divResultTag.append(divLineTag);
        }

        const divSourceParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.SOURCEBOX],
        };
        const divSourceCreator = new BaseElementCreator(divSourceParams);
        const divSourceTag = divSourceCreator.getElement();
        this.elementCreator.getElement().append(divResultTag, divSourceTag);
    }
}
