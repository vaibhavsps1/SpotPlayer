async function aa() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 3000);
  });
}
const fun = (async () => {
  console.log(1);
  await aa();
  console.log(3);
})();
