import './main.css';
import { CommonParams, CommonView } from '../view';

const styles = {
    MAIN: 'main',
};

const text = {
    GAMENAME: 'Async Race',
    EMPTY: '',
    GARAGE_BTN: 'Garage',
    WINNERS_BTN: 'Winners',
};

export default class MainView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'main',
            classNames: [styles.MAIN],
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
    }

    showCurrentPage(view: CommonView) {
        const element = view.getHtmlElement();
        this.elementCreator.appendElement(element);
    }
}
