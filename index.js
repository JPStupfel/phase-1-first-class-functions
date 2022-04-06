const receivesAFunction = function(callBackFunction) {return callBackFunction()}
const returnsANamedFunction = ()=> receivesAFunction
const returnsAnAnonymousFunction = ()=> function(){console.log('hello world')}