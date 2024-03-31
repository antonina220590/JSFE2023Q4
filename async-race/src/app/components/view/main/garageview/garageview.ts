import './garage.css';
import { CommonParams, CommonView } from '../../view';
import { BaseElementCreator } from '../../../utils/element-creator';
import InfoboxView from './infobox/infobox';
import CarSettingsView from './car_settings/car_settings';
import CarRaceWrapperView from './race_box.ts/race_box_wrapper/race_box_wrapper';

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
        this.elementCreator.setAttribute('id', 'section');
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
        const carSettings = new CarSettingsView().getHtmlElement();
        sectionCreator.getElement().append(h2Creator.getElement(), carSettings);
        this.elementCreator.getElement().append(sectionCreator.getElement());
    }

    showChildren() {
        const infoBox = new InfoboxView().getHtmlElement();
        const raceViewWrapper = new CarRaceWrapperView().getHtmlElement();
        this.elementCreator.getElement().append(infoBox, raceViewWrapper);
    }
}
