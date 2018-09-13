/* let str: string;
let num: number;
let bool: boolean;
let what: any;

let langs: string[];
let numbers: number[];
let boolValues: Array<boolean>;

langs = ["Php", "Java", "C++"];
numbers = [1, 2, 3, 4,]; */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* function addNumbers(num1: number, num2?: number): number {
    if (typeof num2 == "undefined")
        return num1;
    return num1 + num2;
} */
/* function addNumbers(num1: number, num2: number): void {
    console.log(num1 + num2);
} */
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log("Person has been created.");
    }
    Person.prototype.showInfosPeople = function () {
        console.log("Name: " + this.name + " Age: " + this.age + " Phone: " + this.phone);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, salary) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.showInfosEmployee = function () {
        _super.prototype.showInfosPeople.call(this);
        console.log("Salary: ", this.salary);
    };
    Employee.prototype.changeDepartment = function () {
        console.log('Department has been changed.');
    };
    return Employee;
}(Person));
var person1 = new Person("Hanna", 22, "123123");
var employee1 = new Employee('Alex', 32, "3232323", 10000);
employee1.showInfosEmployee();
