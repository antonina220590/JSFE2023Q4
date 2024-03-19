import './loginpage.css';
import { CommonParams, CommonView } from '../../app/components/view';
import { BaseElementCreator } from '../../app/components/elements-creator';
import {
    checkInputName,
    checkInputSurname,
    handleClickFunction,
} from '../../app/components/input/validation/error-box/error-box-name';

const styles = {
    WRAPPER: 'wrapper__login-page',
    WRAPPERFORM: 'wrapper__info__form',
    FORM: 'login__form',
    FORM_WRAPPER: 'login-form__wrapper',
    TITLE: 'login-form__title',
    LABEL: 'login__form__label',
    LABELNAME: 'login-form_name',
    LABLESURNAME: 'login-form_surname',
    TEXT: 'login__form_text',
    TEXTNAME: 'login__form_text__name',
    TEXTSURNAME: 'login__form_text__surname',
    ERROR_BOX: 'error-box',
    LOGININPUT: 'login__form_input',
    LOGINNAMEINPUT: 'login__form__input_name',
    LOGINSURNAMEINPUT: 'login__form__input_surname',
    ERROR_LABEL: 'error-label',
    BUTTON: 'button',
    BUTTONLOG: 'button_log-in',
};

const text = {
    EMPTY: '',
    LOGIN: 'LOGIN',
    NAME: 'Name',
    SURNAME: 'Surname',
    BUTTON: 'Log In',
};
export default class LoginWrapperView extends CommonView {
    constructor() {
        const wrapperParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.WRAPPER],
        };
        super(wrapperParams);
        this.showChildren();
    }

    showChildren(): void {
        const wrapperFormParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.WRAPPERFORM],
        };
        const wrapperFormCreator = new BaseElementCreator(wrapperFormParams);
        wrapperFormCreator.setAttribute('id', 'info_form');

        const DivParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [],
        };
        const loginInfoCreator = new BaseElementCreator(DivParams);
        loginInfoCreator.addClasses([styles.FORM_WRAPPER]);

        const ParaParams: CommonParams = {
            HTMLtag: 'p',
            classNames: [],
        };
        const loginParaParamsCreator = new BaseElementCreator(ParaParams);
        loginParaParamsCreator.addTextContent(text.LOGIN);
        loginParaParamsCreator.addClasses([styles.TITLE]);
        loginInfoCreator.appendElement(loginParaParamsCreator.getElement());

        wrapperFormCreator.appendElement(loginInfoCreator.getElement());

        const loginFormParams: CommonParams = {
            HTMLtag: 'form',
            classNames: [styles.FORM],
        };

        const loginFormCreator = new BaseElementCreator(loginFormParams);
        loginFormCreator.setAttribute('id', 'login__form');
        loginFormCreator.setAttribute('action', '');

        const LabelParams: CommonParams = {
            HTMLtag: 'label',
            classNames: [],
        };

        const inputParams: CommonParams = {
            HTMLtag: 'input',
            classNames: [],
        };

        const paramsBtn: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.BUTTON, styles.BUTTONLOG],
            text: text.BUTTON,
        };
        const loginBtn = new BaseElementCreator(paramsBtn);
        loginBtn.addTextContent('Log In');
        loginBtn.setAttribute('id', 'logBtn');

        const inputName = new BaseElementCreator(inputParams);
        inputName.addClasses([styles.LOGININPUT, styles.LOGINNAMEINPUT]);
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('name', 'logename');
        inputName.setAttribute('data-register', 'name');
        inputName.setAttribute('id', 'logename');

        const inputSurame = new BaseElementCreator(inputParams);
        inputSurame.addClasses([styles.LOGININPUT, styles.LOGINSURNAMEINPUT]);
        inputSurame.setAttribute('type', 'text');
        inputSurame.setAttribute('name', 'logesurname');
        inputSurame.setAttribute('data-register', 'name');
        inputSurame.setAttribute('id', 'logesurname');

        const errorLabelName = new BaseElementCreator(LabelParams);
        errorLabelName.addClasses([styles.ERROR_LABEL]);
        errorLabelName.setAttribute('id', 'errorName');

        const errorLabelSurname = new BaseElementCreator(LabelParams);
        errorLabelSurname.addClasses([styles.ERROR_LABEL]);
        errorLabelSurname.setAttribute('id', 'errorSurname');

        const labelNameCreator = new BaseElementCreator(LabelParams);
        labelNameCreator.addClasses([styles.LABEL, styles.LABELNAME]);
        const labelParaNameCreator = new BaseElementCreator(ParaParams);
        labelParaNameCreator.addClasses([styles.TEXT, styles.TEXTNAME]);
        labelParaNameCreator.addTextContent(text.NAME);
        labelNameCreator.appendElement(labelParaNameCreator.getElement());
        const errorBoxName = new BaseElementCreator(DivParams);
        errorBoxName.addClasses([styles.ERROR_BOX]);
        labelNameCreator.appendElement(errorBoxName);
        errorBoxName.appendElement(inputName.getElement());
        errorBoxName.appendElement(errorLabelName.getElement());

        const labelSurnameCreator = new BaseElementCreator(LabelParams);
        labelSurnameCreator.addClasses([styles.LABEL, styles.LABLESURNAME]);
        const labelParaSurnameCreator = new BaseElementCreator(ParaParams);
        labelParaSurnameCreator.addClasses([styles.TEXT, styles.TEXTSURNAME]);
        labelParaSurnameCreator.addTextContent(text.SURNAME);
        labelSurnameCreator.appendElement(labelParaSurnameCreator.getElement());
        const errorBoxSurname = new BaseElementCreator(DivParams);
        errorBoxSurname.addClasses([styles.ERROR_BOX]);
        errorBoxSurname.appendElement(inputSurame.getElement());
        errorBoxSurname.appendElement(errorLabelSurname.getElement());
        labelSurnameCreator.appendElement(errorBoxSurname);
        loginFormCreator.appendElement(labelNameCreator.getElement());
        loginFormCreator.appendElement(labelSurnameCreator.getElement());
        wrapperFormCreator.appendElement(loginFormCreator.getElement());
        wrapperFormCreator.appendElement(loginBtn.getElement());

        this.elementCreator.appendElement(wrapperFormCreator.getElement());

        loginBtn.getElement().addEventListener('click', checkInputName);
        loginBtn.getElement().addEventListener('click', checkInputSurname);
        loginBtn.getElement().addEventListener('click', handleClickFunction);
    }
}
