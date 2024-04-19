import '../style.css';
import LoginPageView from './components/authorizationPage.ts/login';
import ChatPageView from './components/chatPage.ts/main_container/chat_container';
import InfoChatView from './components/infoPage.ts/info_page';

export default class App {
    constructor() {
        this.createView();
    }

    createView(): void {
        // const loginView = new LoginPageView();
        // document.body.append(loginView.getHtmlElement());

        // const ChatPage = new ChatPageView();
        // document.body.append(ChatPage.getHtmlElement());

        const infoPageView = new InfoChatView();
        document.body.append(infoPageView.getHtmlElement());
    }
}
