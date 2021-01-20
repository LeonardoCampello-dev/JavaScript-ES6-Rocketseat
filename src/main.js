const myPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

const executePromise = async () => {
  console.log(await myPromise());
  console.log(await myPromise());
};

executePromise();
