export class Employee{
constructor(name, salary){
this.name = name ;
this.salary = salary ;
}
// default export
details(){
    return `${this.name} earns ${this.salary};`
}
}
// name export
export default function greetEmployee(emp){
return `hello ${emp.name}!`;
}
// named export (varible + function)

export const company = "tech crop";

export function calculateBonus(salary){
    return salary *0.1;
}