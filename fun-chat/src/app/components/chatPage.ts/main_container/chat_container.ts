import './chat_container.css';
import { CommonParams, CommonView } from '../../../view/view';
import { BaseElementCreator } from '../../../utils/element-creator';
import HeaderChatView from '../main_components/header/chat_header';
import MainChatView from '../main_components/main/chat_main';
import FooterChatView from '../main_components/footer/chat_footer';

const styles = {
    WRAPPER: 'main-page__container',
};

const text = {
    EMPTY: '',
};

export default class ChatPageView extends CommonView {
    constructor(id: string) {
        const params: CommonParams = {
            HTMLtag: 'div',
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.elementCreator.addClasses([styles.WRAPPER]);
        this.elementCreator.setAttribute('id', id);
        this.showChilder();
    }

    showChilder() {
        const headerPageView = new HeaderChatView();
        const mainChatView = new MainChatView();
        const footerChatView = new FooterChatView();
        this.getHtmlElement().append(
            headerPageView.getHtmlElement(),
            mainChatView.getHtmlElement(),
            footerChatView.getHtmlElement()
        );
    }
}
