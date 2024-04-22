import './login.css';
import { CommonParams, CommonView } from '../../view/view';
import { BaseElementCreator } from '../../utils/element-creator';
import { PageIds } from '../../enum';

export const Button = [
    {
        id: PageIds.MessagePage,
    },
    {
        id: PageIds.InfoPage,
    },
    {
        id: PageIds.LoginPage,
    },
];

const styles = {
    WRAPPER: 'login-form__wrapper',
    TITLE: 'login-form__title',
    LOGIN_FORM: 'login__form',
    LOGIN_FORM_LABEL: 'login__form__label',
    LOGIN_FORM_LABEL_NAME: 'login__form__label__name',
    LOGIN_FORM_LABEL_PASSWORD: 'login__form__label__password',
    ERROR_BOX: 'error_box',
    ERROR_BOX_NAME: 'error_box_name',
    ERROR_BOX_PASSWORD: 'error_box_name',
    INPUT_FORM: 'login__form_input',
    BUTTON: 'button_login',
    LOGININPUT: 'login__form_input',
    LOGIN_NAME_INPUT: 'login__form__input_name',
    LOGIN_PASSWORD_INPUT: 'login__form__input_name',
    ERROR_LABEL: 'error_label',
    BTN_INFO: 'info_button',
};

const text = {
    EMPTY: '',
    TITLE: 'LOGIN',
    BUTTON: 'Log In',
    INFO: 'Info',
    NAME: 'Name',
    PASSWORD: 'Password',
};

export default class LoginPageView extends CommonView {
    constructor(id: string) {
        const params: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.elementCreator.addClasses([styles.WRAPPER]);
        this.elementCreator.setAttribute('id', id);
        this.additionalView();
    }

    additionalView() {
        const ParaParams: CommonParams = {
            HTMLtag: 'p',
            text: text.TITLE,
            callback: null!,
        };

        const ParaPParams: CommonParams = {
            HTMLtag: 'p',
            text: text.EMPTY,
            callback: null!,
        };
        const loginParaParamsCreator = new BaseElementCreator(ParaParams);
        loginParaParamsCreator.addClasses([styles.TITLE]);

        const loginFormParams: CommonParams = {
            HTMLtag: 'form',
            text: text.EMPTY,
            callback: null!,
        };

        const loginFormCreator = new BaseElementCreator(loginFormParams);
        loginFormCreator.addClasses([styles.LOGIN_FORM]);
        loginFormCreator.setAttribute('action', '');
        loginFormCreator.setAttribute('id', 'login__form');

        const LabelParams: CommonParams = {
            HTMLtag: 'label',
            text: text.EMPTY,
            callback: null!,
        };

        const DivParams: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };

        const errorNameCreator = new BaseElementCreator(DivParams);
        errorNameCreator.addClasses([styles.ERROR_BOX, styles.ERROR_BOX_NAME]);
        const errorPasswordCreator = new BaseElementCreator(DivParams);
        errorPasswordCreator.addClasses([styles.ERROR_BOX, styles.ERROR_BOX_PASSWORD]);

        const inputParams: CommonParams = {
            HTMLtag: 'input',
            text: text.EMPTY,
            callback: null!,
        };

        const paramsBtn: CommonParams = {
            HTMLtag: 'button',
            text: text.BUTTON,
            callback: null!,
        };
        const loginBtn = new BaseElementCreator(paramsBtn);
        loginBtn.setAttribute('id', 'logBtn');
        loginBtn.addClasses([styles.BUTTON]);
        loginBtn.setAttribute('type', 'button');
        loginBtn.setAttribute('disabled', '');
        loginBtn.setAttribute('href', `#${PageIds.MessagePage}`);

        const paramsInfoBtn: CommonParams = {
            HTMLtag: 'button',
            text: text.INFO,
            callback: null!,
        };
        const loginInfoBtn = new BaseElementCreator(paramsInfoBtn);
        loginInfoBtn.setAttribute('id', 'logInfoBtn');
        loginInfoBtn.addClasses([styles.BUTTON, styles.BTN_INFO]);

        const inputName = new BaseElementCreator(inputParams);
        inputName.addClasses([styles.ERROR_BOX_NAME, styles.LOGIN_PASSWORD_INPUT]);
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('name', 'logename');
        inputName.setAttribute('data-register', 'name');
        inputName.setAttribute('id', 'logename');
        inputName.setAttribute('required', '');

        const errorLabelName = new BaseElementCreator(LabelParams);
        errorLabelName.addClasses([styles.ERROR_LABEL]);
        errorLabelName.setAttribute('id', 'errorName');

        const inputPassword = new BaseElementCreator(inputParams);
        inputPassword.addClasses([styles.ERROR_BOX_NAME, styles.LOGIN_PASSWORD_INPUT]);
        inputPassword.setAttribute('type', 'password');
        inputPassword.setAttribute('name', 'logpassword');
        inputPassword.setAttribute('id', 'logpassword');
        inputPassword.setAttribute('required', '');

        const errorLabelPassword = new BaseElementCreator(LabelParams);
        errorLabelPassword.addClasses([styles.ERROR_LABEL]);
        errorLabelPassword.setAttribute('id', 'errorPassword');

        errorNameCreator.getElement().append(inputName.getElement(), errorLabelName.getElement());
        errorPasswordCreator.getElement().append(inputPassword.getElement(), errorLabelPassword.getElement());

        const nameParaCreator = new BaseElementCreator(ParaPParams);
        nameParaCreator.addTextContent(text.NAME);

        const namePasswordCreator = new BaseElementCreator(ParaPParams);
        namePasswordCreator.addTextContent(text.PASSWORD);

        const labelPasswordCreator = new BaseElementCreator(LabelParams);
        labelPasswordCreator.addClasses([styles.LOGIN_FORM_LABEL, styles.LOGIN_FORM_LABEL_PASSWORD]);
        labelPasswordCreator.getElement().append(namePasswordCreator.getElement(), errorPasswordCreator.getElement());

        const labelNameCreator = new BaseElementCreator(LabelParams);
        labelNameCreator.addClasses([styles.LOGIN_FORM_LABEL, styles.LOGIN_FORM_LABEL_NAME]);
        labelNameCreator.getElement().append(nameParaCreator.getElement(), errorNameCreator.getElement());

        loginFormCreator.getElement().append(labelNameCreator.getElement(), labelPasswordCreator.getElement());
        this.getHtmlElement().append(
            loginParaParamsCreator.getElement(),
            loginFormCreator.getElement(),
            loginBtn.getElement(),
            loginInfoBtn.getElement()
        );
    }
}
