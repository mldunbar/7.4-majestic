export default Backbone.View.extend({

  template: JST['menu-order-full'],
  // className: 'orderList',
  // tagName: 'div',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model));
  }

});
