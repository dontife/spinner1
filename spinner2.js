let time = -100;
let array = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];
while (time <= 1600){
  for (let i = 0; i < array.length; i++){
    setTimeout(() => {
      process.stdout.write(`${array[i]}  `);
    }, time += 200);
  }
};
