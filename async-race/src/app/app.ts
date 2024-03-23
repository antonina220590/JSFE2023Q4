import '../style.css';
import HeaderView from './components/view/header/header';
import MainView from './components/view/main/main';
import FooterView from './components/view/footer/footer';

export default class App {
    constructor() {
        this.createView();
    }

    createView(): void {
        const mainView = new MainView();
        const headerView = new HeaderView(mainView);
        const footerView = new FooterView();

        document.body.append(headerView.getHtmlElement(), mainView.getHtmlElement(), footerView.getHtmlElement());
    }
}
