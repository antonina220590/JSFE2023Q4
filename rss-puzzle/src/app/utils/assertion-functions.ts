export default function assertValues<T>(value: T): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
        throw Error('Element is not found');
    }
}
