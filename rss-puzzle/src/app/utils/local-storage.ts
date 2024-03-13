import assertValues from './assertion-functions';

export default class LocalStorage<T> {
    private localStorageCheck: boolean;

    constructor() {
        this.localStorageCheck = typeof window.localStorage !== 'undefined' && window.localStorage !== null;
    }

    public setItems(key: string, value: T): void {
        if (this.localStorageCheck) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    getItems(key: string): T | null {
        const data = localStorage.getItem(key.toString());
        if (data !== null) {
            return JSON.parse(data);
        }
        return null;
    }

    getKeys(): string[] {
        assertValues(localStorage);
        const keys = Object.keys(localStorage);
        return keys;
    }

    getValues(key: string): string[] {
        const data = localStorage.getItem(key.toString());
        assertValues(data);
        const obj = JSON.parse(data);
        const keys: string[] = Object.values(obj);
        return keys;
    }

    clearAll(): void {
        if (this.localStorageCheck) {
            localStorage.clear();
        }
    }
}
