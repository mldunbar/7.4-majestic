export default Backbone.View.extend({

  template: JST['menu-item'],
  className: 'menuItem',
  tagName: 'li',

  events: {
    'click .order': 'addOrder'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  addOrder: function(){
  console.log(this);
}

});
