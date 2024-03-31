import './racebox.css';
import { CommonParams, CommonView } from '../../../view';
import { BaseElementCreator } from '../../../../utils/element-creator';
// import { deleteCar } from '../../../../../api_interaction/api_garage/api_garage';

const styles = {
    BUTTON_WRAPPER: 'car-buttons__wrapper',
    BUTTON: 'button',
    BUTTON_ACTIVE: 'button_active',
    CAR_MARK: 'car-name',
    CAR_CONTROL: 'car-control__wrapper',
    CAR_CONTROL_AFTER: 'car-control__wrapper::after',
    COMMON: 'common',
    EDIT_WRAPPER: 'edit-delete-wrap',
    RACE_BTN_WRAPPER: 'race-stop-btn',
    CAR_WRAPPER: 'svg_wrapper',
};

const text = {
    EDIT: 'Edit',
    DELETE: 'Delete',
    RACE: 'Race',
    STOP: 'Stop',
    EMPTY: '',
    CARNAME: 'Audi Cayenne',
};

export default class CarRaceView extends CommonView {
    constructor() {
        const params: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.CAR_CONTROL],
            text: text.EMPTY,
            callback: null!,
        };
        super(params);
        this.additionalView();
    }

    additionalView() {
        const divParams: CommonParams = {
            HTMLtag: 'div',
            classNames: [styles.COMMON],
            text: text.EMPTY,
            callback: null!,
        };

        const buttonParams: CommonParams = {
            HTMLtag: 'button',
            classNames: [styles.BUTTON],
            text: text.EMPTY,
            callback: null!,
        };

        const carTitleParams: CommonParams = {
            HTMLtag: 'span',
            classNames: [styles.CAR_MARK],
            text: text.CARNAME,
            callback: null!,
        };

        const divParamsCreator = new BaseElementCreator(divParams);
        divParamsCreator.addClasses([styles.BUTTON_WRAPPER]);

        const divBtnEditParamsCreator = new BaseElementCreator(divParams);
        divBtnEditParamsCreator.addClasses([styles.EDIT_WRAPPER]);

        const divBtnRaceParamsCreator = new BaseElementCreator(divParams);
        divBtnRaceParamsCreator.addClasses([styles.RACE_BTN_WRAPPER]);

        const editBtn = new BaseElementCreator(buttonParams);
        editBtn.setAttribute('id', 'editBtn');
        editBtn.addTextContent(text.EDIT);

        const deleteBtn = new BaseElementCreator(buttonParams);
        deleteBtn.setAttribute('id', 'deleteBtn');
        deleteBtn.addTextContent(text.DELETE);
        // deleteBtn.getElement().addEventListener('click', deleteCar);

        divBtnEditParamsCreator.getElement().append(editBtn.getElement(), deleteBtn.getElement());

        const raceBtn = new BaseElementCreator(buttonParams);
        raceBtn.setAttribute('id', 'raceCarBtn');
        raceBtn.addTextContent(text.RACE);

        const stopBtn = new BaseElementCreator(buttonParams);
        stopBtn.setAttribute('id', 'stopCarBtn');
        stopBtn.addTextContent(text.STOP);

        const carTitleParamsCreator = new BaseElementCreator(carTitleParams);
        carTitleParamsCreator.setAttribute('id', 'carName');

        divBtnRaceParamsCreator.getElement().append(raceBtn.getElement(), stopBtn.getElement());

        divParamsCreator
            .getElement()
            .append(
                divBtnEditParamsCreator.getElement(),
                carTitleParamsCreator.getElement(),
                divBtnRaceParamsCreator.getElement()
            );
        const svgDivCreator = new BaseElementCreator(divParams);
        svgDivCreator.addClasses([styles.CAR_WRAPPER]);
        const svgcar = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgcar.classList.add('car');
        const useSvg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './images/car.svg#hatchback');
        svgcar.append(useSvg);
        svgcar.style.fill = '#000';
        svgDivCreator.getElement().append(svgcar);
        this.elementCreator
            .getElement()
            .append(divParamsCreator.getElement(), divParamsCreator.getElement(), svgDivCreator.getElement());
    }
}
