var render = function(el) {
  var Vue = require("vue");
  var fi = new Vue({
    el: el,
    paramAttributes: ["type", "id", "placeholder", "value"],
    template: require("./template.html"),
    ready: function() {
      this.toggleClass();
    },
    methods: {
        onFocus: function (e) {
          this.toggleClass(true);
        },
        onBlur: function (e) {
          this.toggleClass(false);
        },
        toggleClass: function(focused) {
          this.$el.className = focused || !!this.value ? "fv-input-focused" : "";
        }
    }
  });
  fi.$watch('value', function(value) {
    this.$el.value = value;
    if(!value) this.toggleClass(true);
  });
};
module.exports = {
    template: require("./template.html"),
    render: render
};
