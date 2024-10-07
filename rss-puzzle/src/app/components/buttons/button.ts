import './buttons.css';
import { CommonParams, CommonView } from '../view';
import ErrorBoxView from '../input/input-field/error-box/error-box-name';
import ErrorBoxViewSurname from '../input/input-field/error-box/error-box-surname';
import LocalStorage from '../../utils/local-storage';

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
        this.handle();
    }

    handle(): void {
        const button = this.elementCreator.getElement();
        const myStorage = new LocalStorage();

        function handleClickFunction(event: Event): void {
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
            myStorage.setItems('userAT', user);
        }
        button.addEventListener('click', handleClickFunction);
    }
}
