var MenuItem = Backbone.Model.extend({
  idAttribute: 'id',

  defaults: {
    category: '',
  }
});

var MenuItemCollection = Backbone.Collection.extend({
  url: 'menu.json',
  model: MenuItem
});

export {Menu, MenuCollection};
