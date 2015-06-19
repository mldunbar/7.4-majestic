export default Backbone.View.extend({

  template: JST['menu-item'],
  className: 'menuItem',

  events: {
    'click .order': 'addOrder'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
  },

  addOrder: function(){
  console.log(this);
}

});
