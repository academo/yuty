//dummy module to avoid including app just to use vent
//https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
define(['app'],function(App){
  return App.vent;
});