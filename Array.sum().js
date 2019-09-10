// const AwaitAsyncForEach = require('await-async-foreach');
// const _ = require('lodash');


// const Delay = async (delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// };

// (async () => {
//   const data = [1, 2, 3, 4];
//   let i = 0;
//   await AwaitAsyncForEach(data, async (v, k) => {
//     await Delay(1000);
//     i += 1;
//     console.log(v);
//   });
//   console.log('done', i);
// })();



//@todo: rtrim/ltrim/
String.prototype.duplicate = function() { return this + this; }

Array.prototype.sum = function() {
    //you can write in reduce but consider for compatible for all browsers
    let sum = 0;
    for (let i = 0; i< this.length;i++) {
        sum+=this[i];
    }
    return sum;
};
Array.prototype.multi = function() {
    //you can write in reduce but consider for compatible for all browsers
    let mul = 1;
    for (let i = 0; i< this.length;i++) {
        mul*=this[i];
    }
    return this.length ? mul : 0;
};
String.prototype.xxx = {
    'x':1,
    'y':2
}