import './gamepage.css';
import { CommonParams, CommonView } from '../../app/components/view';

const styles = {
    GAMEWRAPPER: 'game-page__wrapper',
};

export default class GametView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.GAMEWRAPPER],
        };
        super(params);
        this.elementCreator.setAttribute('id', 'game');
    }
}
