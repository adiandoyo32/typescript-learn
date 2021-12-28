import BaseLaptop from "./BaseLaptop";

class MacBook<T> extends BaseLaptop<T> {
    constructor(type: T, numeric: boolean, touchButton: boolean) {
        super("Asus", type, numeric, touchButton);
    }
}

export default MacBook;