// 

class Employee {
    #salary
    constructor(id, name, age, salary) {
        this.id = id,
            this.name = name,
            this.age = age,
            this.#salary = salary

    }
    print() {
        console.log(`${this.id},
 ${this.name},
  ${this.age},
   ${this.#salary}

`);

    }

}




class Department extends Employee {

    #dept_name
    constructor(id, name, age, salary, dname, dhod) {
        super(id, name, age, salary);
        this.#dept_name = dname;
        this._had = dhod;


    }
    print() {

        super.print();
        return `${this.#dept_name}-${this._dhad}`;

    }

}



let emp1 = new Employee(1, "abc", 20, 1010);
let dept2 = new Department(2, "hamza", 45, 78000, 'IT', 'Ubaid');
console.log(dept2.print());
console.log(emp1);