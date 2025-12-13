 
//  call back function  call back hall
 
 
 function login(user, callback) {
    setTimeout(() => {
        console.log(`${user}logged in `);
        callback();
    }, 2000);
}

function selectRestaurant(callback) {
    setTimeout(() => {
        console.log("restaurant select");
        callback();
    }, 1000);
}


function placeOrder(callback) {
    setTimeout(() => {
        console.log("place order");
        callback();
    }, 1000);
}


function makepayment(callback) {
    setTimeout(() => {
        console.log("payment successful");
        callback();
    }, 1000);
}


function confrimDelivered() {
    setTimeout(() => {
        console.log("food delivered  successful");
        callback();
    }, 1000);
}


login("ali", () => {
    selectRestaurant(() => {
        placeOrder(() => {
            makepayment(() => {
                confrimDelivered(); 


                });
            });
        });
    });


// promsie

let promise = new Promise ( ( resovle) => {
let wifi = true;

if(wifi){
    resovle("wife is ON ");
}else {
reject("wife is OFF");
}
});

// prosime handling - changing
promise.then((result) =>{
console.log(result);
}).catch((e) =>{
console.log(e);
});
