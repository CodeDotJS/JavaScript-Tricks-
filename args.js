// Combiner of passed arguments and defaults (usable with any function)
Object.prototype.combine = function(_args){
  for(var i in this) {
    if(typeof _args[i] == "undefined") {
      _args[i] = this[i];
    }
  }
};

// Specific example function with defaults
function feedTheCat(args){
  var defaults = {
      'morning' : "nothing",
      'noon'    : "pork",
      'nite'    : "mouse"
  };
  defaults.combine(args);
}

// USAGE: only passing 2 of 3 arguments
feedTheCat({
  'morning': "milk", 
  'nite': "kitekat"
}); 

// Values would be: milk | pork | kitekat
