import assertValues from '../../../../utils/assertion_function';
import { allInactiveUsers } from '../../../../validation/validation';
import './chat_main.css';

const styles = {
    container: 'user_container',
    status: 'user_status',
    status_inactive: 'user_status_inactive',
    label: 'logged_user',
};
interface Item {
    login: '';
    isLogined: boolean;
}
export default function getOfflineUsers() {
    const currentUser = document.getElementById('currentUser');
    if (Array.isArray(allInactiveUsers[2]) && Array.isArray(allInactiveUsers[1])) {
        const allUsers = [...allInactiveUsers[1], ...allInactiveUsers[2]];
        const filteredArr = allUsers.filter((item: Item) => item.login !== currentUser?.innerHTML);
        filteredArr.find((item: Item) => {
            const ul = document.getElementById('userUl');
            const newLi = document.createElement('li');
            newLi.classList.add(styles.container);
            const newDiv = document.createElement('div');
            if (item.isLogined === false) {
                newDiv.classList.remove(styles.status);
                newDiv.classList.add(styles.status_inactive);
            } else {
                newDiv.classList.remove(styles.status_inactive);
                newDiv.classList.add(styles.status);
            }
            const newLabel = document.createElement('label');
            newLabel.classList.add(styles.label);
            newLabel.classList.add(styles.label);
            newLabel.textContent = `${item.login}`;
            newLi.append(newDiv, newLabel);
            for (let i = 0; i < allInactiveUsers.length; i += 1) {
                ul?.append(newLi);
            }
        });
    }
}
