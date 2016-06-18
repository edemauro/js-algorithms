const singleton = (function() {
  // private b/c of block scoping (let)
  // if var, would be private as well b/c of function scoping
  let instance;
  let anotherPrivateVariable = 1;

  // api
  return {
    getInstance: getInstance
  }

  // function to initialize the singleton
  function init() {
    let privateVariable = 'private variable';

    function privateMethod() {
      console.log('private method');
      // can access b/c it is a closure (scope chain)
      console.log(anotherPrivateVariable);
    }

    function publicMethod() {
      privateMethod();
    }

    // the singleton's api
    return {
      publicMethod: publicMethod
    }
  }

  function getInstance() {
    if(!instance) {
      instance = init();
    }

    return instance;
  }
})();

let one = singleton.getInstance();
let two = singleton.getInstance();

one.publicMethod();

console.log(one === two);