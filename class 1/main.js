const info ={
emp_id: 1504,
name: `ubaid`,
age: 19,
salery: 150004,

print:function(){
console.log("employee id", this.emp_id);
console.log("name", this.name);
console.log("age", this.age);
console.log("salery", this.salery);

},

display() {
console.log(`emplayee id: ${this.emp_id},
Name: ${this.name},                 
age: ${this.age},
salery: ${this.salery}`

);
},
incermentsalery(amout){
this.salery += amout;
return this.salary;

}
};

const department = {
mang: "M01",
dep_name: "IT",
location: "karachi",



displayDepInfo(){
console.log(`mang:$this.mang,
department:${this.dep_name},
location:${this.dep_name}
`);
}

};

department.__proto__ = info;