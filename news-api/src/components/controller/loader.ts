import { ApiOptions, SourceOptions, CallbackGen } from '../view/interfaces';

const enum resStatus {
    UNAUTHORIZED = 401,
    NOTFOUND = 404,
}

class Loader {
    baseLink: string;
    options: ApiOptions;

    constructor(baseLink: string, options: ApiOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options = {} }: { endpoint: string; options: SourceOptions },
        callback: CallbackGen<T> = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === resStatus.UNAUTHORIZED || res.status === resStatus.NOTFOUND)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(options: SourceOptions, endpoint: string): string {
        const urlOptions: { [index: string]: string } = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;
        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    public load<T>(method: string, endpoint: string, callback: CallbackGen<T>, options: SourceOptions = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => callback(data))
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.error(err);
                }
            });
    }
}

export default Loader;
