import './race_box_wrapper.css';
import { CommonParams, CommonView } from '../../../../view';

const styles = {
    WRAPPER: 'wrapper',
};

const text = {
    EMPTY: '',
};
export default class CarRaceWrapperView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.WRAPPER],
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.elementCreator.setAttribute('id', 'carWrapper');
    }
}
