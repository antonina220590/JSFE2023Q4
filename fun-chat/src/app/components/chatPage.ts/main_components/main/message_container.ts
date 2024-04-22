export default function updateNames() {
    let nameUser = '';
    const arr = Object.values(sessionStorage);
    for (let i = 0; i < arr.length; i += 1) {
        const obj = JSON.parse(arr[i]);
        nameUser = obj.username;
    }
    const userNameSlots = Array.from(document.getElementsByClassName('logged_user'));
    userNameSlots.forEach((user) => {
        const userItem = user;
        userItem.innerHTML = `${nameUser}`;
    });
}
