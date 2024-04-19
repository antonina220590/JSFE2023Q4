import './chat_header.css';
import { CommonParams, CommonView } from '../../../../view/view';
import { BaseElementCreator } from '../../../../utils/element-creator';

const styles = {
    HEADER: 'header',
    NAME_CONTAINER: 'user_name_container',
    USER: 'user',
    USERNAME: 'username',
    HEADER_TEXT: 'header_text',
    APP_NAME: 'app_name',
    BTN_BOX: 'btns_box',
    BUTTON: 'button',
    BTN_INFO: 'info_button',
    BTN_LOGOUT: 'logout_button',
};

const text = {
    EMPTY: '',
    USER: 'User: ',
    USERNAME: 'Antonina',
    APPNAME: 'Fun Chat',
    INFO: 'Info',
    LOGOUT: 'Log Out',
};

export default class HeaderChatView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.elementCreator.addClasses([styles.HEADER]);
        this.additionalView();
    }

    additionalView() {
        const DivParams: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };
        const userNameContainerView = new BaseElementCreator(DivParams);
        userNameContainerView.addClasses([styles.NAME_CONTAINER]);

        const SpanParams: CommonParams = {
            HTMLtag: 'span',
            text: text.EMPTY,
            callback: null!,
        };

        const paramsBtn: CommonParams = {
            HTMLtag: 'button',
            text: text.EMPTY,
            callback: null!,
        };

        const userContainer = new BaseElementCreator(SpanParams);
        userContainer.addClasses([styles.USER, styles.HEADER_TEXT]);
        userContainer.addTextContent(text.USER);

        const userNameContainer = new BaseElementCreator(SpanParams);
        userNameContainer.addClasses([styles.USERNAME, styles.HEADER_TEXT]);
        userNameContainer.addTextContent(text.USERNAME);

        const appName = new BaseElementCreator(SpanParams);
        appName.addClasses([styles.APP_NAME, styles.HEADER_TEXT]);
        appName.addTextContent(text.APPNAME);

        userContainer.getElement().append(userNameContainer.getElement());
        userNameContainerView.getElement().append(userContainer.getElement());

        const buttonsBox = new BaseElementCreator(DivParams);
        buttonsBox.addClasses([styles.BTN_BOX]);

        const infoBtn = new BaseElementCreator(paramsBtn);
        infoBtn.addClasses([styles.BUTTON, styles.BTN_INFO]);
        infoBtn.setAttribute('id', 'infoBTN');
        infoBtn.addTextContent(text.INFO);

        const logoutBtn = new BaseElementCreator(paramsBtn);
        logoutBtn.addClasses([styles.BUTTON, styles.BTN_INFO]);
        logoutBtn.setAttribute('id', 'logoutBtn');
        logoutBtn.addTextContent(text.LOGOUT);

        buttonsBox.getElement().append(infoBtn.getElement(), logoutBtn.getElement());
        this.getHtmlElement().append(userNameContainerView.getElement(), appName.getElement(), buttonsBox.getElement());
    }
}
