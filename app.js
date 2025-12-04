//  function constructor or function prototype based inheritance

function Employee(id,name,age,salary){
this.em_id =id;
this.name =name;
this.age =age;
this.salary =salary;
 
}

// funtion bas inheritance
Employee.prototype.print=function(){
console.log(`Employee ID : ${this.em_id},
Name:${this.name},
Age:${this.age},
Salary:${this.salary}`,
);
};

// instances object

let emp1 =new Employee (101,'ali ',25, 5222  );
emp1.print()
let emp2 =new Employee (102,'hamza ',25, 7487454);
emp2.print()