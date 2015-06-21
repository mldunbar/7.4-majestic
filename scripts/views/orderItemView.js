export default Backbone.View.extend({

  template: JST['menu-order'],
  tagName: 'li',


  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }

});
