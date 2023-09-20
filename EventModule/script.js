const EventEmitter = require("events");
const event = new EventEmitter();

// FIRING ON EVENT WE CAN PERFORM MANY TASKS

// event.on("sayMy", () => {
//   console.log("My Name is Sukalyan Adhikary");
// });

// event.on("sayMy", () => {
//   console.log("i am learninng nodejs");
// });

// event.on("sayMy", () => {
//   console.log(" I am a bca final year student");
// });

// event.emit("sayMy");



//PARAMETER PASSING IN EVENT FUNCTION
event.on('checkPage',(sc,msg) =>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit('checkPage',200,'ok')
