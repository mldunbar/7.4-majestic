var Menu = Backbone.Model.extend({
  idAttribute: 'id',

  defaults: {
    item: '',
    price: 0,
    description: '',
    category: '',
  }
});

var MenuCollection = Backbone.Collection.extend({
  url: 'menu.json',
  model: Menu
});

export {Menu, MenuCollection};
