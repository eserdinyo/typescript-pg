/* let str: string;
let num: number;
let bool: boolean;
let what: any;

let langs: string[];
let numbers: number[];
let boolValues: Array<boolean>;

langs = ["Php", "Java", "C++"];
numbers = [1, 2, 3, 4,]; * /

function addNumbers(num1: number, num2?: number): number {
    if (typeof num2 == "undefined")
        return num1;
    return num1 + num2;
}

function subNumbers(num1: number, num2: number): void {
    console.log(num1 - num2);
}

class Person {
    private name: string;
    private age: number;
    private phone: string;

    constructor(name: string, age: number, phone: string) {
        this.name = name;
        this.age = age;
        this.phone = phone;

        console.log("Person has been created.")
    }

    showInfosPeople() {
        console.log(`Name: ${this.name} Age: ${this.age} Phone: ${this.phone}`);
    }

}

class Employee extends Person {
    salary: number;

    constructor(name: string, age: number, phone: string, salary: number) {
        super(name, age, phone);
        this.salary = salary;
    }
    showInfosEmployee() {
        super.showInfosPeople();
        console.log("Salary: ", this.salary);
    }
    changeDepartment() {
        console.log('Department has been changed.')
    }
}

let person1 = new Person("Hanna", 22, "123123");
let employee1 = new Employee('Alex', 32, "3232323", 10000);

employee1.showInfosEmployee();

interface IDatabase {
    add();
    get();
    delete();
    update();
}

class Mysql implements IDatabase {
    add() {
        console.log("Mysql add");
    }

    get() {
        console.log("Mysql get");
    }
    delete() {
        console.log("Mysql delete");
    }

    update() {
        console.log("Mysql update");
    }
}

class MongoDb implements IDatabase {
    add() {
        console.log("Mongodb add");
    }

    get() {
        console.log("Mongodb get");
    }
    delete() {
        console.log("Mongodb delete");
    }

    update() {
        console.log("Mongodb update");
    }
}

function addDatabase(database: IDatabase) {
    database.add();
}

addDatabase(new Mysql());
addDatabase(new MongoDb()); */

/* ABSTRACT CLASSES */
abstract class Database {
    get() {
        console.log("Database GET");
    }
    add() {
        console.log("Database ADD");
    }

    abstract delete();
    abstract update();
}

class Mysql extends Database {
    delete() {
        console.log("Mysql DELETE");
    }

    update() {
        console.log("Mysql DELETE");
    }
}

class MongoDB extends Database {
    delete() {
        console.log("MongoDB DELETE");
    }

    update() {
        console.log("MongoDB DELETE");
    }
}

function addDatabase(database: Database) {
    database.delete();
}

addDatabase(new Mysql());
addDatabase(new MongoDB());


