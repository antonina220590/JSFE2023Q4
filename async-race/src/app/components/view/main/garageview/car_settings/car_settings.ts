import './car_settings.css';
import { CommonParams, CommonView } from '../../../view';
import { BaseElementCreator } from '../../../../utils/element-creator';
import { getInputValue, createNewCar } from '../../../../../api_interaction/api_garage/api_garage';

const styles = {
    SETTINGS: 'car-settings__box',
    INPUT: 'input',
    LABEL: 'label',
    INPUTNAME: 'input-name',
    LABELCAR: 'car_name',
    INPUTCOLOR: 'input-color',
    LABELCOLOR: 'car_color',
    BUTTONS: 'buttons_set',
    CREATEBTN: 'create-btn',
    GENERATEBTN: 'generate-btn',
    BUTTON: 'button',
};

const text = {
    NAME: 'Name:',
    COLOR: 'Color:',
    CREATE: 'Create Car',
    GENERATE: 'Generate Cars',
    EMPTY: '',
};

export default class CarSettingsView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.SETTINGS],
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.additionalView();
    }

    additionalView() {
        const spanParams: CommonParams = {
            HTMLtag: 'span',
            classNames: [styles.LABEL],
            text: text.EMPTY,
            callback: null!,
        };

        const inputParams: CommonParams = {
            HTMLtag: 'input',
            classNames: [styles.INPUT],
            text: text.EMPTY,
            callback: null!,
        };

        const divParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.BUTTONS],
            text: text.EMPTY,
            callback: null!,
        };

        const buttonParams: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.BUTTON],
            text: text.EMPTY,
            callback: null!,
        };
        const spanNameCreator = new BaseElementCreator(spanParams);
        spanNameCreator.addClasses([styles.LABELCAR]);
        spanNameCreator.addTextContent(text.NAME);

        const spanColorCreator = new BaseElementCreator(spanParams);
        spanColorCreator.addClasses([styles.LABELCOLOR]);
        spanColorCreator.addTextContent(text.COLOR);

        const inputNameCreator = new BaseElementCreator(inputParams);
        inputNameCreator.addClasses([styles.INPUTNAME]);
        inputNameCreator.setAttribute('type', 'text');
        inputNameCreator.setAttribute('id', 'carName');
        const inputName = inputNameCreator.getElement() as HTMLInputElement;

        const inputColorCreator = new BaseElementCreator(inputParams);
        inputColorCreator.addClasses([styles.INPUTCOLOR]);
        inputColorCreator.setAttribute('type', 'color');
        inputColorCreator.setAttribute('id', 'carColor');

        const divCreator = new BaseElementCreator(divParams);

        const btnCreateCreator = new BaseElementCreator(buttonParams);
        btnCreateCreator.addClasses([styles.CREATEBTN]);
        btnCreateCreator.addTextContent(text.CREATE);

        btnCreateCreator.getElement().addEventListener('click', getInputValue);
        btnCreateCreator.getElement().addEventListener('click', createNewCar);

        const btnGenerateCreator = new BaseElementCreator(buttonParams);
        btnGenerateCreator.addClasses([styles.GENERATEBTN]);
        btnGenerateCreator.addTextContent(text.GENERATE);

        divCreator.getElement().append(btnCreateCreator.getElement(), btnGenerateCreator.getElement());

        this.elementCreator
            .getElement()
            .append(
                spanNameCreator.getElement(),
                inputName,
                spanColorCreator.getElement(),
                inputColorCreator.getElement(),
                divCreator.getElement()
            );
    }
}
