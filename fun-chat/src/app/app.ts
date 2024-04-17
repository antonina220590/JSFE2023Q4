import '../style.css';
import LoginPageView from './components/authorizationPaga.ts/login';

export default class App {
    constructor() {
        this.createView();
    }

    createView(): void {
        const loginView = new LoginPageView();
        document.body.append(loginView.getHtmlElement());
    }
}
