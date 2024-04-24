import '../style.css';
import LoginPageView from './components/authorizationPage.ts/login';
import ChatPageView from './components/chatPage.ts/main_container/chat_container';
import InfoChatView from './components/infoPage.ts/info_page';
import { validateServer, checkNameInput, checkPasswordInput, cleanInputs } from './validation/validation';
import getOfflineUsers, { search } from './components/chatPage.ts/main_components/main/userslist';
import ModalView from './components/modalWindow/modal_window';
import updateNames from './components/chatPage.ts/main_components/main/message_container';

const logPage = new LoginPageView('login-page').getHtmlElement();
const ChatPage = new ChatPageView('chat-page').getHtmlElement();
const InfoPage = new InfoChatView('info-page').getHtmlElement();

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
        App.goToInfoPage();
        App.searchUser();
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
            App.validation();
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
    }

    static goToChatPage() {
        const loginBtn = document.getElementById('logBtn');
        const storageObj = Object.values(sessionStorage);
        const nameInput = document.getElementById('logename') as HTMLInputElement;
        const passwordInput = document.getElementById('logpassword') as HTMLInputElement;
        let keys: SessionObject = { username: '', password: '', isLogined: false };
        storageObj.forEach((item) => {
            keys = JSON.parse(item);
        });
        const name = keys.username;

        function changePage() {
            if (sessionStorage.length > 0 || name.length > 0) {
                document.body.innerHTML = '';
                document.body.append(ChatPage);
                const infoChatBtn = document.getElementById('infoBTN');
                infoChatBtn?.addEventListener('click', App.goToInfoPage);
                App.goToLoginPage();
                updateNames();
                getOfflineUsers();
                App.searchUser();
            }
        }
        loginBtn?.addEventListener('click', validateServer);
        loginBtn?.addEventListener('click', changePage);

        function enter(e: KeyboardEvent) {
            try {
                if (nameInput.value && passwordInput.value && e.keyCode === 13) {
                    App.validation();
                    validateServer();
                    changePage();
                }
            } catch (err) {
                Error('error');
            }
        }
        document.addEventListener('keydown', enter);
    }

    static goToLoginPage() {
        const logOutBtn = document.getElementById('logoutBtn');
        function checkOut() {
            sessionStorage.clear();
            document.body.innerHTML = '';
            document.body.append(logPage);
            cleanInputs();
            App.goToChatPage();
        }
        logOutBtn?.addEventListener('click', checkOut);
    }

    static goToInfoPage() {
        const logInfoBtn = Array.from(document.getElementsByClassName('info_button'));

        const storageObj = Object.values(sessionStorage);
        let keys: SessionObject = { username: '', password: '', isLogined: false };
        storageObj.forEach((item) => {
            keys = JSON.parse(item);
        });
        const name = keys.username;

        function closeInfoPage() {
            if (sessionStorage.length <= 0 || name.length <= 0) {
                document.body.innerHTML = '';
                document.body.append(logPage);
            } else if (sessionStorage.length > 0 || name.length > 0) {
                document.body.innerHTML = '';
                document.body.append(ChatPage);
            }
        }

        function visitInfoPage() {
            document.body.innerHTML = '';
            document.body.append(InfoPage);
            const closeInfoBtn = document.getElementById('closeBtn');
            if (closeInfoBtn) {
                closeInfoBtn.addEventListener('click', closeInfoPage);
            }
        }

        logInfoBtn.forEach((btn) => {
            btn.addEventListener('click', visitInfoPage);
        });
    }

    static searchUser(): void {
        const searchInput = document.getElementById('searchInput') as HTMLInputElement;
        if (searchInput) {
            searchInput.addEventListener('input', search);
        }
    }
}
