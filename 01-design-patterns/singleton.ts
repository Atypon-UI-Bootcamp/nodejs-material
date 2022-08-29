class MyClass {
    public static instance: MyClass;

    private constructor() {}

    public static getInstance(): MyClass {
        if (!MyClass.instance) {
            MyClass.instance = new MyClass();
        }
        return MyClass.instance;
    }

    public doSomething(): void {
        console.log('doing something');
    }

    public doSomethingElse(): void {
        console.log('doing something else');
    }
}

MyClass.instance.doSomething();

