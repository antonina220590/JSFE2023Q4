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
        // const activeElement = this.elementCreator.getElement();

        // console.log(activeElement)
        // while (activeElement.firstElementChild) {
        //   activeElement.firstElementChild.remove()
        // }

        this.elementCreator.appendElement(element);
    }
}
