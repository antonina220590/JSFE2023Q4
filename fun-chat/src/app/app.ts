import '../style.css';
import LoginPageView from './components/authorizationPage.ts/login';
import ChatPageView from './components/chatPage.ts/main_container/chat_container';
import InfoChatView from './components/infoPage.ts/info_page';
import { validateServer, checkNameInput, checkPasswordInput } from './validation/validation';
import ModalView from './components/modalWindow/modal_window';

export default class App {
    constructor() {
        this.createView();
        this.validation();
    }

    createView(): void {
        const loginView = new LoginPageView();
        document.body.append(loginView.getHtmlElement());

        // const ChatPage = new ChatPageView();
        // document.body.append(ChatPage.getHtmlElement());

        // const infoPageView = new InfoChatView();
        // document.body.append(infoPageView.getHtmlElement());

        const modalWindow = new ModalView();
        document.body.append(modalWindow.getHtmlElement());
    }

    validation(): void {
        const loginBtn = document.getElementById('logBtn');
        loginBtn?.addEventListener('click', validateServer);
        const nameInput = document.getElementById('logename') as HTMLInputElement;
        const passwordInput = document.getElementById('logpassword') as HTMLInputElement;
        nameInput.addEventListener('input', checkNameInput);
        passwordInput.addEventListener('input', checkPasswordInput);
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                validateServer();
            }
        });
    }
}
