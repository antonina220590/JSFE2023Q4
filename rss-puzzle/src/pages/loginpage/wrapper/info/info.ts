import { CommonParams, CommonView } from '../../../../app/components/view';
import { BaseElementCreator } from '../../../../app/components/elements-creator';
import './info.css';

const styles = {
    INFO: 'game__info',
    TITLE: 'game__title',
    P: 'game__description',
};

const text = {
    EMPTY: '',
    H1: 'PUZZLE GAME',
    P: 'Click on words, collect phrases. Words can be drag and drop. Select tooltips in the menu',
};

export default class InfoView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.INFO],
            text: text.EMPTY,
        };

        super(params);
        this.descriptionView();
    }

    descriptionView(): void {
        const h1Params: CommonParams = {
            HTMLtag: 'h1',
            classNames: [styles.TITLE],
            text: text.H1,
        };
        const h1Creator = new BaseElementCreator(h1Params);
        this.elementCreator.appendElement(h1Creator);

        const paraParams: CommonParams = {
            HTMLtag: 'p',
            classNames: [styles.P],
            text: text.P,
        };
        const paraCreator = new BaseElementCreator(paraParams);
        this.elementCreator.appendElement(paraCreator);
    }
}
