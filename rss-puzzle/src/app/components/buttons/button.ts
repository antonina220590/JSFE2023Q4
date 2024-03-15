import './buttons.css';
import { CommonParams, CommonView } from '../view';
import ErrorBoxView from '../input/validation/error-box/error-box-name';
import ErrorBoxViewSurname from '../input/validation/error-box/error-box-surname';
import LocalStorage from '../../utils/local-storage';
import StartView from '../../../pages/startpage/startpage';

const styles = {
    BUTTON: 'button',
    BUTTONLOG: 'button_log-in',
};

const text = {
    EMPTY: '',
    BUTTON: 'LOG IN',
};

export default class ButtonView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.BUTTON, styles.BUTTONLOG],
            text: text.BUTTON,
        };
        super(params);
        this.elementCreator.addTextContent('Log In');
        this.elementCreator.setAttribute('id', 'logBtn');
        this.handle();
    }

    handle(): void {
        const button = this.elementCreator.getElement();
        const myStorage = new LocalStorage();

        const handleClickFunction = (event: Event): number => {
            event.preventDefault();
            const errorName = new ErrorBoxView();
            errorName.addErrorLabel();
            const errorSurname = new ErrorBoxViewSurname();
            errorSurname.addErrorLabel();

            const inputName = document.getElementById('logename') as HTMLInputElement;
            const inputNameVal = inputName.value;
            const inputSurname = document.getElementById('logsurname') as HTMLInputElement;
            const inputSurnameVal = inputSurname.value;

            const user = {
                username: `${inputNameVal}`,
                usersurname: `${inputSurnameVal}`,
            };
            if (!inputName.classList.contains('error') && !inputSurname.classList.contains('error')) {
                myStorage.setItems('userAT', user);
                document.body.setAttribute('id', 'wow');

                const start = new StartView();
                document.body.innerHTML = '';
                document.body.append(start.getHtmlElement());
            }
            console.log(localStorage.length);
            return localStorage.length;
        };

        button.addEventListener('click', handleClickFunction);
    }
}
