const promiseExample = (name) => {
  return new Promise((resolve, reject) => {
    // Do anything you want
    // finishes when resolve() is called
    setTimeout(() => {
      resolve(name);
     }, 3000);
  });
};

promiseExample('Calvin')
  .then(answer => 'Hello ' + answer)
  .then((res) => console.log(res))
  .catch((e) => console.log('Something went wrong!'))
  .then(() => console.log('still going'));

console.log('hi');
