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

    _.each(this.collection.groupBy('category'), function(items, category){
			var menuCollection = new Backbone.Collection(items);
			var view = new MenuItemView({
				category: category,
				collection: menuCollection,
				order: this.order
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
