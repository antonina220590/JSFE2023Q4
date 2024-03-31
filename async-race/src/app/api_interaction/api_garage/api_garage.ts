import assertValues from '../../components/utils/assertion_function';
import CarRaceView from '../../components/view/main/garageview/race_box.ts/racebox';

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

function getCarInfo(data: CarParams[]) {
    const wrapper = document.getElementById('carWrapper');
    if (wrapper) {
        wrapper.innerHTML = '';
    }

    for (let i = 0; i < data.length; i += 1) {
        const cars = new CarRaceView().getHtmlElement();
        wrapper?.append(cars);
        console.log(data.length);
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
    console.log(carArray);
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
}

let totalNumber: number = 0;
const baseUrl: string = 'http://127.0.0.1:3000';
export const generateString = (params: Params[] = []) =>
    params.length ? `?${params.map((x) => `${x.key}=${x.value}`).join('&')}` : '';

let data: [] = [];
export const getAllcars = async (params: Params[]) => {
    const response = await fetch(`${baseUrl}${path.garage}${generateString(params)}`);
    data = await response.json();
    totalNumber = Number(response.headers.get('X-Total-Count'));
    const garage = document.getElementById('total_cars');
    assertValues(garage);
    garage.innerHTML = `Garage(${totalNumber})`;
    getCarInfo(data);
};

// export const myFun = async (event: Event) => {
//     const response = await fetch(`${baseUrl}${path.garage}`, {
//         method: 'GET',
//     });
// };

const deleteCarFromBase = async (id: number) => {
    const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
        method: 'DELETE',
    });
    const car = await response.json();
    return car;
};

let count = 1;
export const changePage = (event: Event) => {
    const clicked = event.target as HTMLElement;
    if (clicked.classList.contains('next')) {
        count += 1;
        document.getElementById('prev')?.removeAttribute('disabled');
    } else {
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

export const deleteCar = async (event: Event) => {
    const clicked = event.target as HTMLElement;
    const parent = clicked.closest('.car-control__wrapper');
    const parentId = Number(parent?.id);
    parent?.remove();
    Array.from(document.getElementsByClassName('car-control__wrapper'));
    await deleteCarFromBase(parentId);
};
