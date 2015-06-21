import MenuListView from './views/menuListView';
import OrderView from './views/orderView';
import {MenuCollection} from './models/menuList';
import {OrderCollection} from './models/menuOrder';

(function(){
  'use strict';

  $(document).ready(function(){
    var menuCollection = new MenuCollection();
    var orderCollection = new OrderCollection();

    menuCollection.fetch().then(function(){
      var menu = new MenuListView({
        order: orderCollection,
        collection: menuCollection
        });
      $('.menu').append(menu.el);
      });

      var sidebar = new OrderView({
        collection: orderCollection
      });
      $('.sidebar').prepend(sidebar.el);
  });
})();
