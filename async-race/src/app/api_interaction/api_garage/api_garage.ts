import assertValues from '../../components/utils/assertion_function';
import CarRaceView from '../../components/view/main/garageview/race_box.ts/racebox';
import { getAllWinners } from '../api_winners/api_winners';

export const path = {
    garage: '/garage',
    car: './garage/:id',
    winners: '/winners',
    engine: '/engine',
    winners_id: '/winners/:id',
};

export interface Params {
    key: string;
    value: number | string;
}

export interface CarParams {
    name: string;
    color: string;
    id: number;
}

interface Body {
    name: string;
    color: string;
}

const baseUrl: string = 'http://127.0.0.1:3000';
let totalNumber: number = 0;
let count = 1;
let numberOfCars = 7;
let parentId: number = 0;
let data: [] = [];

export const generateString = (params: Params[] = []) =>
    params.length ? `?${params.map((x) => `${x.key}=${x.value}`).join('&')}` : '';
export const getAllcars = async (params: Params[]) => {
    const response = await fetch(`${baseUrl}${path.garage}${generateString(params)}`);
    data = await response.json();
    totalNumber = Number(response.headers.get('X-Total-Count'));
    const garage = document.getElementById('total_cars');
    assertValues(garage);
    garage.innerHTML = `Garage(${totalNumber})`;
    getCarInfo(data);
    if (totalNumber <= 7) {
        document.getElementById('next')?.setAttribute('disabled', '');
    }
};

const updateCar = async (id: number, body: Body) => {
    const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const car = await response.json();
    return car;
};

const updateCarFromList = async () => {
    const inputName = document.getElementById('carName') as HTMLInputElement;
    const inputColor = document.getElementById('carColor') as HTMLInputElement;
    let newName = inputName.value;
    let newColor = inputColor.value;
    data.forEach((el: CarParams) => {
        if (el.id === parentId) {
            newName = el.name;
            newColor = el.color;
        }
    });

    await updateCar(parentId, {
        name: `${inputName.value}`,
        color: `${inputColor.value}`,
    });

    getAllcars([
        { key: '_page', value: `${count}` },
        { key: '_limit', value: 7 },
    ]);
    getAllWinners([
        { key: '_page', value: `${count}` },
        { key: '_limit', value: 30 },
    ]);
};

const getInfo = (event: Event) => {
    const clicked = event.target as HTMLElement;
    const parent = clicked.closest('.car-control__wrapper');
    parentId = Number(parent?.id);
    const inputName = document.getElementById('carName') as HTMLInputElement;
    const inputColor = document.getElementById('carColor') as HTMLInputElement;
    const btn = document.querySelector('.update-btn');
    if (btn) {
        btn.classList.add('button_active');
    }
    data.forEach((el: CarParams) => {
        if (el.id === parentId) {
            inputName.value = el.name;
            inputColor.value = el.color;
        }
    });
    return { parentId };
};

const deleteCarFromBase = async (id: number) => {
    const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
        method: 'DELETE',
    });
    const responseWinner = await fetch(`${baseUrl}${path.winners}/${id}`, {
        method: 'DELETE',
    });
    const car = await response.json();
    const winner = await responseWinner.json();
    return { car, winner };
};
export const deleteCar = async (event: Event) => {
    const clicked = event.target as HTMLElement;
    const parent = clicked.closest('.car-control__wrapper');
    const winnersWrap = Array.from(document.getElementsByClassName('common_wrapper'));
    parentId = Number(parent?.id);
    winnersWrap.forEach((wrap) => {
        const winnersId = Number(wrap.id);
        if (parentId === winnersId) {
            wrap.remove();
        }
    });
    parent?.remove();
    Array.from(document.getElementsByClassName('car-control__wrapper'));
    await deleteCarFromBase(parentId);
    getAllWinners([
        { key: '_page', value: `${count}` },
        { key: '_limit', value: 30 },
    ]);
};

export function getCarInfo(data: CarParams[]) {
    const wrapper = document.getElementById('carWrapper');
    if (wrapper) {
        wrapper.innerHTML = '';
    }

    for (let i = 0; i < data.length; i += 1) {
        const cars = new CarRaceView().getHtmlElement();
        wrapper?.append(cars);
    }

    const colors: string[] = [];
    const marks: string[] = [];
    const ids: number[] = [];
    data.forEach((car) => {
        colors.push(car.color);
        marks.push(car.name);
        ids.push(car.id);
    });
    const carName = document.getElementsByClassName('car-name');
    for (let i = 0; i < carName.length; i += 1) {
        for (let j = 0; j < marks.length; j += 1) {
            carName[i].textContent = marks[i];
        }
    }
    const carArray = Array.from(document.getElementsByClassName('car'));
    for (let i = 0; i < carArray.length; i += 1) {
        for (let j = 0; j < colors.length; j += 1) {
            const result = carArray[i] as HTMLElement;
            result.style.fill = colors[i];
        }
    }

    const wrapperArray = Array.from(document.getElementsByClassName('car-control__wrapper'));
    for (let i = 0; i < wrapperArray.length; i += 1) {
        for (let j = 0; j < ids.length; j += 1) {
            const resultWrapper = wrapperArray[i] as HTMLElement;
            resultWrapper.setAttribute('id', `${ids[i]}`);
        }
    }
    const deleteBtns = Array.from(document.getElementsByClassName('delete_button'));
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', deleteCar);
    });

    const editBtn = Array.from(document.getElementsByClassName('editBtn'));
    editBtn.forEach((btn) => {
        btn.addEventListener('click', getInfo);
    });

    const btn = document.querySelector('.update-btn');
    btn?.addEventListener('click', updateCarFromList);
}

export const changePage = (event: Event) => {
    const clicked = event.target as HTMLElement;
    if (clicked.classList.contains('next')) {
        count += 1;
        numberOfCars += 7;
        document.getElementById('prev')?.removeAttribute('disabled');
        if (numberOfCars >= totalNumber) {
            document.getElementById('next')?.setAttribute('disabled', '');
        } else {
            document.getElementById('next')?.removeAttribute('disabled');
        }
    } else {
        document.getElementById('next')?.removeAttribute('disabled');
        numberOfCars -= 7;
        count -= 1;
        if (count === 1) {
            document.getElementById('prev')?.setAttribute('disabled', '');
        }
    }
    const page = document.getElementById('page_num');
    assertValues(page);
    page.textContent = `Page ${count}`;
    getAllcars([
        { key: '_page', value: `${count}` },
        { key: '_limit', value: 7 },
    ]);
};

let name: string = '';
let color: string = '';
export const getInputValue = () => {
    const inputName = document.getElementById('carName') as HTMLInputElement;
    const inputColor = document.getElementById('carColor') as HTMLInputElement;
    name = inputName.value;
    color = inputColor.value;
    return { name, color };
};

const createCar = async (body: Body) => {
    const response = await fetch(`${baseUrl}${path.garage}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const car = await response.json();
    return car;
};

export const createNewCar = async () => {
    await createCar({
        name: `${name}`,
        color: `${color}`,
    });
    getAllcars([
        { key: '_page', value: `${count}` },
        { key: '_limit', value: 7 },
    ]);
    if (data.length >= 7) {
        document.getElementById('next')?.removeAttribute('disabled');
    }
};
