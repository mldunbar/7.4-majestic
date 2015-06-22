import {MenuCollection} from './menuList';

var Order = Backbone.Model.extend({
  idAttribute: 'id',

    defaults: function() {
      return {
      item: '',
      price: 0,
    };
  }
});

var OrderCollection = Backbone.Collection.extend({
  url: 'menu.json',
  model: Order
});

export default {Order, OrderCollection};
