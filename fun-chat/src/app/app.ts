import '../style.css';
import LoginPageView from './components/authorizationPage.ts/login';
import { CommonView } from './view/view';
import ChatPageView from './components/chatPage.ts/main_container/chat_container';
import InfoChatView from './components/infoPage.ts/info_page';
import { validateServer, checkNameInput, checkPasswordInput, cleanInputs } from './validation/validation';
import ModalView from './components/modalWindow/modal_window';
import updateNames from './components/chatPage.ts/main_components/main/message_container';

const logPage = new LoginPageView('login-page').getHtmlElement();
const ChatPage = new ChatPageView('chat-page').getHtmlElement();

interface SessionObject {
    username: string;
    password: string;

    isLogined: boolean;
}

export default class App {
    constructor() {
        this.createView();
        App.goToLoginPage();
        App.goToChatPage();
        App.validation();
    }

    createView(): void {
        const storageObj = Object.values(sessionStorage);
        let keys: SessionObject = { username: '', password: '', isLogined: false };
        storageObj.forEach((item) => {
            keys = JSON.parse(item);
        });
        const name = keys.username;
        document.body.append(logPage);
        if (sessionStorage.length <= 0 || name.length <= 0) {
            document.body.innerHTML = '';
            document.body.append(logPage);
            App.goToLoginPage();
        } else if (sessionStorage.length > 0) {
            document.body.innerHTML = '';
            document.body.append(ChatPage);
            App.goToChatPage();
        }

        const modalWindow = new ModalView();
        document.body.append(modalWindow.getHtmlElement());
    }

    static validation(): void {
        const nameInput = document.getElementById('logename') as HTMLInputElement;
        const passwordInput = document.getElementById('logpassword') as HTMLInputElement;
        if (nameInput) {
            nameInput.addEventListener('input', checkNameInput);
        }
        if (passwordInput) {
            passwordInput.addEventListener('input', checkPasswordInput);
        }
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                validateServer();
            }
        });
    }

    static goToChatPage() {
        const loginBtn = document.getElementById('logBtn');
        const storageObj = Object.values(sessionStorage);
        let keys: SessionObject = { username: '', password: '', isLogined: false };
        storageObj.forEach((item) => {
            keys = JSON.parse(item);
        });
        const name = keys.username;

        function changePage() {
            if (sessionStorage.length > 0) {
                document.body.innerHTML = '';
                document.body.append(ChatPage);
                App.goToLoginPage();
                updateNames();
            }
        }
        loginBtn?.addEventListener('click', validateServer);
        loginBtn?.addEventListener('click', changePage);
    }

    static goToLoginPage() {
        const logOutBtn = document.getElementById('logoutBtn');
        const loginBtn = document.getElementById('logBtn');
        function checkOut() {
            sessionStorage.clear();
            document.body.innerHTML = '';
            document.body.append(logPage);
            validateServer();
            App.validation();
            cleanInputs();
            App.goToChatPage();
            updateNames();
        }
        logOutBtn?.addEventListener('click', checkOut);
    }
}
