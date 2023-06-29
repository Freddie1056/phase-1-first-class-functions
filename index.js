const receivesAFunction = (callback) => {
  callback();
};

const returnsANamedFunction = () => {
  return function namedFunction() {};
};

const returnsAnAnonymousFunction = () => {
  return () => {};
};
