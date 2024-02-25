import Loader from './loader';

let link: string;
let apiK: string;

function checkEnv(): string {
    if (process.env.API_URL) {
        link = process.env.API_URL;
    } else {
        throw Error('Error!');
    }
    return link;
}
checkEnv();

function checkKey(): string {
    if (process.env.API_KEY) {
        apiK = process.env.API_KEY;
    } else {
        throw Error('Error!');
    }
    return apiK;
}
checkKey();

class AppLoader extends Loader {
    constructor() {
        super(link, {
            apiKey: apiK,
        });
    }
}

export default AppLoader;
