import '../login-form-wrapper/login-form-wrapper.css';
import { CommonParams, CommonView } from '../../view';
import { BaseElementCreator } from '../../elements-creator';
import InputNameDisplay from '../input-field/input-name';

const styles = {
    LABEL: 'login__form__label',
    LABELNAME: 'login-form_name',
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

export default class LabelNameDisplay extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'label',
            classNames: [styles.LABEL, styles.LABELNAME],
            text: text.EMPTY,
        };
        super(params);
        this.formView();
        this.showChildren();
    }

    formView(): void {
        const paraNameParams: CommonParams = {
            HTMLtag: 'p',
            classNames: [styles.TEXT, styles.TEXTNAME],
            text: text.NAME,
        };
        const paraNameCreator = new BaseElementCreator(paraNameParams);
        this.elementCreator.appendElement(paraNameCreator);
    }

    showChildren(): void {
        const inputNameCreator = new InputNameDisplay();
        this.getHtmlElement().append(inputNameCreator.getHtmlElement());
    }
}
