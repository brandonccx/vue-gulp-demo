var Vue = require('vue');
var HelloWorld = require('./components/HelloWorld/index');

new Vue({
  el: '#app',
  components: {
    HelloWorld: HelloWorld
  }
});
