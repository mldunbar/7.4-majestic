export default Backbone.View.extend({

  template: JST['menu-item'],
  className: 'menuItem',
  tagName: 'li',

  events: {
    'click #order': 'addOrder'
  },

  initialize: function(options){
    this.render();
    this.order = options.order
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  addOrder: function(){
    console.log(this.model.toJSON().price);
    console.log(this.model.toJSON().category);
    this.order.add(this.model);
}

});
