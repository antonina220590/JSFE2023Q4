import './startpage.css';
import { CommonParams, CommonView } from '../../app/components/view';
import ButtonLogoutView from '../../app/components/buttons/button-logout';

const styles = {
    STARTWRAPPER: 'start-page__wrapper',
};

export default class StartView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.STARTWRAPPER],
        };
        super(params);
        this.elementCreator.setAttribute('id', 'start');
        this.showChildren();
    }

    showChildren(): void {
        const logoutBtn = new ButtonLogoutView();
        this.getHtmlElement().append(logoutBtn.getHtmlElement());
    }
}
