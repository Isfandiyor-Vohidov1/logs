function LogMethod(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    console.log(`Bu method ${methodName}, arguments ${descriptor}, target ${target}`);
}


class Method {
    @LogMethod
    create() {
        console.log("Created successfully");
    }
}
