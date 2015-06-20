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
        collection: menuCollection
        });
      $('.menu').prepend(menu.el);
    });

      var order = new OrderView({
        order: orderCollection
      });
      $('.sidebar').append(sidebar.el);
    });
})();
