export function Test(): string {
    return 'test';
}

let self: TestClass;
let lastId: number = 1;


export abstract class BaseClass {
    private test = 'adfasdf';
    constructor() {

    }

    getName() {
        return 'adsfads';
    }

    getTest() {
        return this.test;
    }

}

class Bla extends BaseClass implements IFsItem {
    constructor() {
        super();
    }
}

export class TestClass {
    public name: string;

    constructor(name: string) {
        debugger;
        self = this;
        this.name = name + lastId++;
    }

    public getName(): string {
        return privateReturnName();
    }

    public getSomeThihs(item: IFsItem[]) {
        item[0].getName();
    }
}

export var testInstance = new TestClass('asdsa');

function privateReturnName(): string {
    return self.name;
}