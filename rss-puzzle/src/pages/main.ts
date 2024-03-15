import './entrypage.css';
import { CommonView, CommonParams } from '../app/components/view';
import StartView from './startpage/startpage';
import LoginWrapperView from './loginpage/loginpage';

const styles = {
    MAIN: 'main',
};

const text = {
    EMPTY: '',
};

export default class MainView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'main',
            classNames: [styles.MAIN],
            text: text.EMPTY,
        };

        super(params);
        const LS = localStorage.length;
        this.elementCreator.setAttribute('id', 'main');
        this.showChildren(LS);
    }

    showChildren(LS: number): void {
        if (LS === 0) {
            const commonWrapperView = new LoginWrapperView();
            this.getHtmlElement().append(commonWrapperView.getHtmlElement());
        } else {
            const startPageWrapperView = new StartView();
            this.getHtmlElement().append(startPageWrapperView.getHtmlElement());
        }
    }

    // delete(): void {
    //   const htmlElement = this.elementCreator.getElement();
    //   if (htmlElement.firstElementChild) {
    //     htmlElement.firstElementChild.remove()
    //   }
    // }
    // setContent(content: CommonView): void {
    //     const htmlElement = this.elementCreator.getElement();
    //     while (htmlElement.firstElementChild) {
    //         htmlElement.firstElementChild.remove();
    //     }
    //     this.elementCreator.appendElement(content.getHtmlElement());
    // }
}
