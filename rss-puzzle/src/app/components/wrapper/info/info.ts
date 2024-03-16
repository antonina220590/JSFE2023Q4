import { CommonParams, CommonView } from '../../view';
import { BaseElementCreator } from '../../elements-creator';
import './info.css';

const styles = {
    INFO: 'game__info',
    TITLE: 'game__title',
    DESCRIPTION: 'game__description',
    H3: 'h3',
    DIVWELCOME: 'div_btn',
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
            // text: text.EMPTY,
        };

        super(params);
        this.descriptionView();
        this.h3View();
        this.pView();
    }

    descriptionView(): HTMLElement {
        const h1Params: CommonParams = {
            HTMLtag: 'h1',
            classNames: [styles.TITLE],
        };
        const h1Creator = new BaseElementCreator(h1Params);
        h1Creator.addTextContent(text.H1);
        this.elementCreator.appendElement(h1Creator);
        const h1Tag = h1Creator.getElement();

        return h1Tag;
    }

    h3View(): HTMLElement {
        const h3Params: CommonParams = {
            HTMLtag: 'h3',
            classNames: [styles.H3],
        };
        const h3Creator = new BaseElementCreator(h3Params);
        const h3Tag = h3Creator.getElement();
        return h3Tag;
    }

    pView(): HTMLElement {
        const paraParams: CommonParams = {
            HTMLtag: 'p',
            classNames: [styles.DESCRIPTION],
        };
        const paraCreator = new BaseElementCreator(paraParams);
        const pTag = paraCreator.getElement();
        return pTag;
    }

    divView(): HTMLElement {
        const paraParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.DIVWELCOME],
        };
        const divCreator = new BaseElementCreator(paraParams);
        const divTag = divCreator.getElement();
        return divTag;
    }
}
