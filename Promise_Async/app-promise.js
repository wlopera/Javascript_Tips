const setData = () => {
  const promise = new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("Listo!");
    }, 1500)
  );
  return promise;
};

setTimeout(() => {
  console.log("Paso el tiempo!");
  setData().then((text) => {
    console.log(text);
  });
}, 2000);

console.log("Finalizado");
