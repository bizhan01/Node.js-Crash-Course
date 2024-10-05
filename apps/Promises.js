function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async operation completed");
    }, 1000);
  });
}

asyncFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
