export default Backbone.View.extend({

  template: JST['menu-order-full'],
  // className: 'orderList',
  // tagName: 'div',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.prepend(this.template(this.model));
  }

});
