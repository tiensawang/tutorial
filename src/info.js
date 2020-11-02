const myWallet = {
  creditCard: 10,
  cash: 20,
  render: () => {
    console.log("render1...");
    console.log("render2...");
  },
};
// console.log("::", myWallet.render);
myWallet.render();

// declare variable
var a = 1;
let b = 1.1;
b = 2;
const c = 3;
c = 5;
