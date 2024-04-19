import '../style.css';
import LoginPageView from './components/authorizationPaga.ts/login';
import ChatPageView from './components/chatPage.ts/main_container/chat_container';

export default class App {
    constructor() {
        this.createView();
    }

    createView(): void {
        // const loginView = new LoginPageView();
        // document.body.append(loginView.getHtmlElement());

        const ChatPage = new ChatPageView();
        document.body.append(ChatPage.getHtmlElement());
    }
}
