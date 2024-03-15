import './buttons.css';
import { CommonParams, CommonView } from '../view';
import LocalStorage from '../../utils/local-storage';
import LoginWrapperView from '../../../pages/loginpage/loginpage';

const styles = {
    BUTTON: 'button',
    BUTTONLOG: 'button_log-in',
};

const text = {
    EMPTY: '',
    BUTTON: 'LOG OUT',
};
export default class ButtonLogoutView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.BUTTON, styles.BUTTONLOG],
            text: text.BUTTON,
        };
        super(params);
        this.elementCreator.addTextContent('Log Out');
        this.logout();
    }

    logout(): void {
        const logOut = (event: Event): void => {
            event.preventDefault();
            new LocalStorage().clearAll();
            const main = new LoginWrapperView();
            document.body.innerHTML = '';
            document.body.append(main.getHtmlElement());
        };
        this.elementCreator.getElement().addEventListener('click', logOut);
    }
}
