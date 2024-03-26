import './garage.css';
import { CommonParams, CommonView } from '../../view';
import { BaseElementCreator } from '../../../utils/element-creator';
import InfoboxView from './infobox/infobox';

const styles = {
    GARAGE: 'garage',
    SETTINGS: 'garage__settings',
    TITLE: 'garage-title',
};

const text = {
    EMPTY: '',
    TITLE: 'Garage',
};

export default class GarageView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'section',
            classNames: [styles.GARAGE],
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
        this.elementCreator.getElement().append(infobox);
    }
}
