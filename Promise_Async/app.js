const setData = (callback) => {
  setTimeout(() => {
    callback("Listo!");
  }, 1500);
};

setTimeout(() => {
  console.log("Paso el tiempo!");
  setData((text) => {
    console.log(text);
  });
}, 2000);

console.log("Finalizado")