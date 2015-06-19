import MenuListView from './views/menuListView';

import {MenuCollection} from './models/menuList';

(function(){
  'use strict';

  $(document).ready(function(){
    var menuCollection = new MenuCollection();

    menuCollection.fetch().then(function(){
      var menu = new MenuListView({
        collection: menuCollection
        });
      $('.menu').prepend(menu.el);
    });
    });
})();
