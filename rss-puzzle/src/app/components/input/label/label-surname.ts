import '../login-form/login-form.css';
import { CommonParams, CommonView } from '../../view';
import { BaseElementCreator } from '../../elements-creator';
// import ErrorBoxViewSurname from '../validation/error-box/error-box-surname';

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

export default class LabelSurnameDisplay extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'label',
            classNames: [styles.LABEL, styles.LABLESURNAME],
        };
        super(params);
        // this.formView();
        // this.showChildren();
    }

    formView(): void {
        const paraNameParams: CommonParams = {
            HTMLtag: 'p',
            classNames: [styles.TEXT, styles.TEXTNAME],
        };
        const paraNameCreator = new BaseElementCreator(paraNameParams);
        paraNameCreator.addTextContent(text.SURNAME);
        this.elementCreator.appendElement(paraNameCreator);
    }

    // showChildren(): void {
    //     const errorBoxCreator = new ErrorBoxViewSurname();
    //     this.getHtmlElement().append(errorBoxCreator.getHtmlElement());
    // }
}
