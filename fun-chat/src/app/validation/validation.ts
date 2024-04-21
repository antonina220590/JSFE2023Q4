import assertValues from '../utils/assertion_function';

export function validateServer() {
    const nameInput = document.getElementById('logename') as HTMLInputElement;
    const passwordInput = document.getElementById('logpassword') as HTMLInputElement;
    const socket = new WebSocket('ws://localhost:4000');
    const uniqueId = crypto.randomUUID();
    const reg = {
        id: `${uniqueId}`,
        type: 'USER_LOGIN',
        payload: {
            user: {
                login: `${nameInput.value}`,
                password: `${passwordInput.value}`,
            },
        },
    };
    const res = JSON.stringify(reg);
    socket.addEventListener('open', (event) => {
        socket.send(res);
    });

    socket.addEventListener('message', (event) => {
        const error = JSON.parse(event.data);
        const errorPara = document.getElementById('serverErr');
        if (error.type === 'ERROR') {
            openModal();
            if (errorPara) {
                errorPara.innerHTML = `${error.payload.error}`;
            }
        }
    });
}

export function openModal() {
    const overlay = document.getElementById('overlay');
    overlay?.classList.add('modal__logout_overlay_active');
    const form = document.getElementById('form');
    form?.classList.add('modal__logout__form_active');
}

let flag = 'false';
let flag1 = 'false';
export function checkNameInput(): string {
    const nameInput = document.getElementById('logename') as HTMLInputElement;
    const errorLabelName = document.getElementById('errorName');
    const nameInputVal = nameInput.value;
    assertValues(errorLabelName);
    const regExpUpper = /[A-Z][\\-a-zA-z]+$/;
    const test = regExpUpper.test(nameInputVal);
    errorLabelName.innerText = '';
    if (test === false) {
        errorLabelName.innerText = '';
        setTimeout(() => {
            errorLabelName.innerText = 'Invalid symbols / First letter is capital';
        }, 0);
        nameInput.classList.add('error');
        flag = 'false';
    }
    if (test === true) {
        setTimeout(() => {
            errorLabelName.innerText = '';
        }, 0);
        nameInput.classList.remove('error');
        flag = 'true';
    }
    checkBoth(flag, flag1);
    return flag;
}
export function checkPasswordInput(): string {
    const passwordInput = document.getElementById('logpassword') as HTMLInputElement;
    const errorLabelPassword = document.getElementById('errorPassword');
    const passwordInputValue = passwordInput.value;
    assertValues(errorLabelPassword);

    const maxLength = passwordInputValue.length;

    if (maxLength < 8) {
        errorLabelPassword.innerText = '';
        setTimeout(() => {
            errorLabelPassword.innerText = 'Password must contain at least 8 characters';
        }, 100);
        passwordInput.classList.add('error');
        flag1 = 'false';
    } else {
        errorLabelPassword.innerText = '';
        passwordInput.classList.remove('error');
        flag1 = 'true';
    }
    checkBoth(flag, flag1);
    return flag1;
}

function checkBoth(flag: string, flag1: string) {
    const btn = document.getElementById('logBtn');
    if (flag === 'true' && flag1 === 'true') {
        btn?.removeAttribute('disabled');
    } else {
        btn?.setAttribute('disabled', '');
    }
}
