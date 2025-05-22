function LogParam(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
) {
    console.log(`${String(propertyKey)} index: ${parameterIndex}`);
}

class MyService {
    saySomething(@LogParam name: string, age: number) {
        console.log(`Hello ${name}, age ${age}`);
    }
}

const say = new MyService();
say.saySomething("Gojo", 20 - 31);
