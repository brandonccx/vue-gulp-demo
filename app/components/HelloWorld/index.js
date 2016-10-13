require('./style.css');

module.exports = {
  template: require('./template.html'),
  data: function () {
    return {
      message: 'Hello vue.js!'
    };
  }
};
