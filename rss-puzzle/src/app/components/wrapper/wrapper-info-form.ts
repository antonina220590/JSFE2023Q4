import './wrapper.css';
import { CommonParams, CommonView } from '../view';

const styles = {
    WRAPPERFORM: 'wrapper__info__form',
};

export default class WrapperInfoFormView extends CommonView {
    constructor() {
        const wrapperParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.WRAPPERFORM],
        };
        super(wrapperParams);
        this.elementCreator.setAttribute('id', 'info_form');
    }
}
