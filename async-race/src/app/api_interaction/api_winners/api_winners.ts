import assertValues from '../../components/utils/assertion_function';
import WinnerBoxView from '../../components/view/main/winnersview.ts/winnersbox/winnersbox';

const path = {
    winners: '/winners',
    winner: './winner/:id',
    garage: '/garage',
};

interface Params {
    key: string;
    value: number | string;
}

interface CarParams {
    name: string;
    color: string;
    id: number;
}

interface WinnersParams {
    id: number;
    wins: number;
    time: number;
}
const baseUrl: string = 'http://127.0.0.1:3000';
let totalNumberWinners: number = 0;
let numberOfCars = 30;
let count = 1;

const generateString = (params: Params[] = []) =>
    params.length ? `?${params.map((x) => `${x.key}=${x.value}`).join('&')}` : '';

export const getAllWinners = async (params: Params[]) => {
    const response = await fetch(`${baseUrl}${path.winners}${generateString(params)}`);
    const resonseCars = await fetch(`${baseUrl}${path.garage}`);
    totalNumberWinners = Number(response.headers.get('X-Total-Count'));
    const winnersData = await response.json();
    const cars = await resonseCars.json();
    const winners = document.getElementById('total_winners');
    assertValues(winners);
    winners.innerHTML = `Winners(${totalNumberWinners})`;
    getCarInfo(cars, winnersData);
    if (totalNumberWinners <= 30) {
        document.getElementById('nextWinners')?.setAttribute('disabled', '');
        document.getElementById('prevWinners')?.setAttribute('disabled', '');
    }
};

export function changePageWinners(event: Event) {
    const clicked = event.target as HTMLElement;
    if (clicked.classList.contains('next')) {
        count += 1;
        numberOfCars += 7;
        document.getElementById('prevWinners')?.removeAttribute('disabled');
        if (numberOfCars >= totalNumberWinners) {
            document.getElementById('nextWinners')?.setAttribute('disabled', '');
        } else {
            document.getElementById('nextWinners')?.removeAttribute('disabled');
        }
    } else {
        document.getElementById('nextWinners')?.removeAttribute('disabled');
        numberOfCars -= 7;
        count -= 1;
        if (count <= 1) {
            document.getElementById('prevWinners')?.setAttribute('disabled', '');
        }
    }
    const page = document.getElementById('page_num_winners');
    assertValues(page);
    page.textContent = `Page ${count}`;
    getAllWinners([
        { key: '_page', value: `${count}` },
        { key: '_limit', value: 30 },
    ]);
}

function getCarInfo(cars: CarParams[], winnersData: WinnersParams[]) {
    const wrapper = document.getElementById('winnersWrapper');

    if (wrapper) {
        wrapper.innerHTML = '';
    }

    for (let i = 0; i < winnersData.length; i += 1) {
        const cars = new WinnerBoxView().getHtmlElement();
        wrapper?.append(cars);
    }

    const colors: string[] = [];
    const marks: string[] = [];
    const wins: number[] = [];
    const time: number[] = [];
    const id: number[] = [];

    winnersData.forEach((winner) => {
        wins.push(winner.wins);
        time.push(winner.time);
        id.push(winner.id);
        cars.forEach((car) => {
            if (winner.id === car.id) {
                colors.push(car.color);
                marks.push(car.name);
            }
        });
    });

    const winnerNum = document.getElementsByClassName('winners_number');
    let num = 0;
    for (let i = 0; i < winnerNum.length; i += 1) {
        num += 1;
        winnerNum[i].textContent = num.toString();
    }
    const winnersWrap = document.getElementsByClassName('common_wrapper');
    for (let i = 0; i < winnersWrap.length; i += 1) {
        for (let j = 0; j < id.length; j += 1) {
            winnersWrap[i].setAttribute('id', `${id[i]}`);
        }
    }

    const carArray = Array.from(document.getElementsByClassName('winner_car'));
    for (let i = 0; i < carArray.length; i += 1) {
        for (let j = 0; j < colors.length; j += 1) {
            const result = carArray[i] as HTMLElement;
            result.style.fill = colors[i];
        }
    }

    const carName = document.getElementsByClassName('winner_title');
    for (let i = 0; i < carName.length; i += 1) {
        for (let j = 0; j < marks.length; j += 1) {
            carName[i].textContent = marks[i];
        }
    }

    const carWins = document.getElementsByClassName('winner_win');
    for (let i = 0; i < carWins.length; i += 1) {
        for (let j = 0; j < wins.length; j += 1) {
            carWins[i].textContent = wins[i].toString();
        }
    }

    const carTime = document.getElementsByClassName('winner_time');
    for (let i = 0; i < carTime.length; i += 1) {
        for (let j = 0; j < time.length; j += 1) {
            carTime[i].textContent = time[i].toString();
        }
    }
}
