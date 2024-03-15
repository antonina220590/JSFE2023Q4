import '../styles/style.css';
import MainView from '../pages/main';

export default class App {
    constructor() {
        this.createView();
    }

    createView(): void {
        const mainView = new MainView();
        document.body.append(mainView.getHtmlElement());
    }
}
