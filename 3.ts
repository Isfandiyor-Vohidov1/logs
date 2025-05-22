function LogProperty(target: any, propertyKey: string) {
    console.log(`This is ${propertyKey}`);
}

class properti {
    @LogProperty
    name: string

    @LogProperty
    work: string = 'worked';

    constructor(t: string) {
        this.name = t
    }
}
