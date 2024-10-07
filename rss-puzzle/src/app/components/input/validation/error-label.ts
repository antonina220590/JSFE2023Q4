import './validation.css';
import { CommonParams, CommonView } from '../../view';

const styles = {
    ERROR_LABEL: 'error-label',
    ERROR: 'error',
};

export default class ErrorLabel extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'label',
            classNames: [styles.ERROR_LABEL],
        };
        super(params);
    }
}
