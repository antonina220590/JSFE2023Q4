import './winners.css';
import { CommonParams, CommonView } from '../../view';
import { BaseElementCreator } from '../../../utils/element-creator';
import InfoboxView from './infobox/infobox';
import WinnersWrapperView from './winners_box_wrapper/winners_box_wrapper';

const styles = {
    WINNERS: 'winners',
    SETTINGS: 'winners__settings',
    TITLE: 'winners-title',
};

const text = {
    EMPTY: '',
    TITLE: 'Winners',
};

export default class WinnersView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'section',
            classNames: [styles.WINNERS],
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.additionalView();
        this.showChildren();
    }

    additionalView() {
        const params: CommonParams = {
            HTMLtag: 'section',
            classNames: [styles.SETTINGS],
            text: text.EMPTY,
            callback: null!,
        };
        const sectionCreator = new BaseElementCreator(params);

        const h2Params: CommonParams = {
            HTMLtag: 'h2',
            classNames: [styles.TITLE],
            text: text.TITLE,
            callback: null!,
        };
        const h2Creator = new BaseElementCreator(h2Params);
        sectionCreator.getElement().append(h2Creator.getElement());
        this.elementCreator.getElement().append(sectionCreator.getElement());
    }

    showChildren() {
        const infobox = new InfoboxView().getHtmlElement();
        const winnersWrapper = new WinnersWrapperView().getHtmlElement();
        this.elementCreator.getElement().append(infobox, winnersWrapper);
    }
}
