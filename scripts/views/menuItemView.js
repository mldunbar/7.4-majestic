export default Backbone.View.extend({

  template: JST['menu-item'],
  className: 'menuItem',
  tagName: 'li',

  events: {
    'click #order': 'addOrder'
  },

  initialize: function(options){
    this.render(options);
    this.order = options.order
  },

  render: function(){
    this.$el.html(this.template(this.model));
  },

  addOrder: function(){
    // console.log(this.model.price);
    // console.log(this.model.category);
    this.order.add(this.model);
}

});
