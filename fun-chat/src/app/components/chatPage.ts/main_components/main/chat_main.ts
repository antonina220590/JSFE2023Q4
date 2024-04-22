import './chat_main.css';
import { CommonParams, CommonView } from '../../../../view/view';
import { BaseElementCreator } from '../../../../utils/element-creator';

const styles = {
    MAIN: 'main',
    LEFT_WRAPPER: 'left-side__wrapper',
    RIGHG_WRAPPER: 'right-side__wrapper',
    SEARCH_INPUT: 'search_input',
    USER_LIST: 'users_list',
    USER_CONTAINER: 'user_container',
    USER_STATUS: 'user_status',
    LOGIN_NAME: 'user_login_name',
    STATUS_CONTAINER: 'status_container',
    LABEL_NAME: 'user_login_name',
    LABEL_STATUS: 'user_status_text',
    MESSAGES_CONTAINER: 'messages_container',
    MESSAGE_WRAPPER: 'message__wrapper',
    MESSAGE: 'message',
    MESSAGE_HEADER: 'message_header',
    MESSAGE_INFO: 'message_info',
    MESSAGE_TEXT: 'message_text',
    MESSAGE_FOOTER: 'message_footer',
    DELIVERY_STATUS: 'delivary_status',
    LOGGED_USER: 'logged_user',
};

const text = {
    EMPTY: '',
};

export default class MainChatView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.elementCreator.addClasses([styles.MAIN]);
        this.addLeftSide();
        this.addRightSide();
    }

    addLeftSide() {
        const DivParams: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };

        const InputParams: CommonParams = {
            HTMLtag: 'input',
            text: text.EMPTY,
            callback: null!,
        };

        const UlParams: CommonParams = {
            HTMLtag: 'ul',
            text: text.EMPTY,
            callback: null!,
        };

        const LiParams: CommonParams = {
            HTMLtag: 'li',
            text: text.EMPTY,
            callback: null!,
        };

        const LabelParams: CommonParams = {
            HTMLtag: 'label',
            text: text.EMPTY,
            callback: null!,
        };
        const leftSideContainer = new BaseElementCreator(DivParams);
        leftSideContainer.addClasses([styles.LEFT_WRAPPER]);

        const searchInput = new BaseElementCreator(InputParams);
        searchInput.addClasses([styles.SEARCH_INPUT]);
        searchInput.setAttribute('id', 'searchInput');
        searchInput.setAttribute('placeholder', 'Search...');

        const usersList = new BaseElementCreator(UlParams);
        usersList.addClasses([styles.USER_LIST]);

        const liList = new BaseElementCreator(LiParams);
        liList.addClasses([styles.USER_CONTAINER]);

        const userStatus = new BaseElementCreator(DivParams);
        userStatus.addClasses([styles.USER_STATUS]);

        const userLabel = new BaseElementCreator(LabelParams);
        userLabel.addClasses([styles.LOGIN_NAME, styles.LOGGED_USER]);
        userLabel.addTextContent('Halina');

        liList.getElement().append(userStatus.getElement(), userLabel.getElement());
        usersList.getElement().append(liList.getElement());
        leftSideContainer.getElement().append(searchInput.getElement(), usersList.getElement());
        this.elementCreator.getElement().append(leftSideContainer.getElement());
    }

    addRightSide() {
        const DivParams: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };

        const LabelParams: CommonParams = {
            HTMLtag: 'label',
            text: text.EMPTY,
            callback: null!,
        };

        const rightSideContainer = new BaseElementCreator(DivParams);
        rightSideContainer.addClasses([styles.RIGHG_WRAPPER]);

        const statusContainer = new BaseElementCreator(DivParams);
        statusContainer.addClasses([styles.STATUS_CONTAINER]);

        const nameLabel = new BaseElementCreator(LabelParams);
        nameLabel.addClasses([styles.LOGIN_NAME, styles.LOGGED_USER]);
        nameLabel.addTextContent('halina');

        const statusLabel = new BaseElementCreator(LabelParams);
        statusLabel.addClasses([styles.LABEL_STATUS]);
        statusLabel.addTextContent('online');

        statusContainer.getElement().append(nameLabel.getElement(), statusLabel.getElement());

        const messagesContainer = new BaseElementCreator(DivParams);
        messagesContainer.addClasses([styles.MESSAGES_CONTAINER]);

        const messageWrapper = new BaseElementCreator(DivParams);
        messageWrapper.addClasses([styles.MESSAGE_WRAPPER]);

        const message = new BaseElementCreator(DivParams);
        message.addClasses([styles.MESSAGE]);

        const messageHeader = new BaseElementCreator(DivParams);
        messageHeader.addClasses([styles.MESSAGE_HEADER]);

        const labelNameMsg = new BaseElementCreator(LabelParams);
        labelNameMsg.addClasses([styles.LABEL_NAME, styles.LOGGED_USER]);
        labelNameMsg.addTextContent('halina');

        const labelInfoMsg = new BaseElementCreator(LabelParams);
        labelInfoMsg.addClasses([styles.MESSAGE_INFO]);
        labelInfoMsg.addTextContent('17/04/2024, 21:05:11');

        const messageText = new BaseElementCreator(DivParams);
        messageText.addClasses([styles.MESSAGE_TEXT]);
        messageText.addTextContent('Hello');

        const messageFooter = new BaseElementCreator(DivParams);
        messageFooter.addClasses([styles.MESSAGE_FOOTER]);

        const messageStatus = new BaseElementCreator(LabelParams);
        messageStatus.addClasses([styles.DELIVERY_STATUS]);
        messageStatus.addTextContent('delivered');

        messageFooter.appendElement(messageStatus.getElement());

        messageHeader
            .getElement()
            .append(
                labelNameMsg.getElement(),
                labelInfoMsg.getElement(),
                messageText.getElement(),
                messageFooter.getElement()
            );
        message.getElement().append(messageHeader.getElement());
        messageWrapper.getElement().append(message.getElement());

        messagesContainer.getElement().append(messageWrapper.getElement());

        rightSideContainer.getElement().append(statusContainer.getElement(), messagesContainer.getElement());

        this.elementCreator.getElement().append(rightSideContainer.getElement());
    }
}
