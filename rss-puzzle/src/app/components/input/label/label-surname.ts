import '../login-form-wrapper/login-form-wrapper.css';
import { CommonParams, CommonView } from '../../view';
import { BaseElementCreator } from '../../elements-creator';
import InputSurnameDisplay from '../input-field/input-surname';

const styles = {
    LABEL: 'login__form__label',
    LABLESURNAME: 'login-form_surname',
    TEXT: 'login__form_text',
    TEXTNAME: 'login__form_text__name',
    TEXTSURNAME: 'login__form_text__surname',
};

const text = {
    EMPTY: '',
    P: 'LOGIN',
    NAME: 'Name',
    SURNAME: 'Surname',
};

export default class LabelSurnameDisplay extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'label',
            classNames: [styles.LABEL, styles.LABLESURNAME],
            text: text.EMPTY,
        };
        super(params);
        this.formView();
        this.showChildren();
    }

    formView(): void {
        const paraSurnameParams: CommonParams = {
            HTMLtag: 'p',
            classNames: [styles.TEXT, styles.TEXTSURNAME],
            text: text.SURNAME,
        };
        const paraSurnameCreator = new BaseElementCreator(paraSurnameParams);
        this.elementCreator.appendElement(paraSurnameCreator);
    }

    showChildren(): void {
        const inputSurnameCreator = new InputSurnameDisplay();
        this.getHtmlElement().append(inputSurnameCreator.getHtmlElement());
    }
}
