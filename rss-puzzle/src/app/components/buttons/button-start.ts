import './buttons.css';
import { CommonParams, CommonView } from '../view';

const styles = {
    BUTTON: 'button',
    BUTTONLOG: 'button_log-in',
};

export default class ButtonStartView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.BUTTON, styles.BUTTONLOG],
        };
        super(params);
        this.elementCreator.addTextContent('Start');
        this.elementCreator.setAttribute('id', 'start');
    }
}
