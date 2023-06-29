const receivesAFunction = callback => {
    callback();
  };
  
  const returnsANamedFunction = () => {
    return function namedFn() {
      console.log("this is a named function");
    };
  };
  
  const returnsAnAnonymousFunction = () => {
    return () => console.log("this is an anonymous function");
  };
  