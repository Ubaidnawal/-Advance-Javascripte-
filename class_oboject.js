class bank{
#blance;
constructor(name,blance){
this.name =name;
this.#blance = blance;
}
deposit(amount){
    this.#blance+= amount;
    }
    widthrwal(amount){
        this.#blance -= amount;
        }
        getBlance(amount){
           return this.#blance;
            }
};

let customer1 = new bank("ali",1000);
console.log(`${customer1.name}`);
console.log(customer1.getBlance());