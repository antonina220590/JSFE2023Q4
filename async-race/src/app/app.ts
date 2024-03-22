import '../style.css';
import HeaderView from './components/view/header/header';

export default class App {
    constructor() {
        this.createView();
    }

    createView(): void {
        const headerView = new HeaderView();
        document.body.append(headerView.getHtmlElement());
    }
}
