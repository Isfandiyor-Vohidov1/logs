function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(`Accessor ${name}`);
}

class Student {
    private id: number = 1;

    @LogAccessor
    get seeStudent() {
        return this.id;

    }

    @LogAccessor
    set delStudent(value: number) {
        this.id = value;

    }
}

const student = new Student();
student.seeStudent
