const singleton = (function() {
  let instance;

  return {
    getInstance: getInstance
  }

  function init() {
    let privateVariable = 'private variable';

    function privateMethod() {
      console.log('private method');
    }

    function publicMethod() {
      console.log(privateVariable);
    }

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

console.log(one === two);