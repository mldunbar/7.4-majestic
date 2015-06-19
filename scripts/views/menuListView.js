import MenuItemView from "./menuItemView";

export default Backbone.View.extend ({
	template: JST['menu-categories'],
  className: 'menuCategories',
  tagName: 'ul',

	initialize: function(){
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
    this.renderChildren();
    console.log(this);
	},

	renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map(function(child) {
      var view = new MenuItemView({
        model: child
      });
      this.$el.append(view.el);
      return view;
    }.bind(this));

    return this;
  },

  remove: function(){
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
