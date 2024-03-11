import './entrypage.css';
import { CommonView, CommonParams } from '../../app/components/view';
import WrapperView from './wrapper/wrapper';

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

        this.showChildren();
    }

    showChildren(): void {
        const wrapperView = new WrapperView();
        this.getHtmlElement().append(wrapperView.getHtmlElement());
    }
}
