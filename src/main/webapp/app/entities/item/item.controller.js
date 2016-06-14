(function() {
    'use strict';

    angular
        .module('todolistApp')
        .controller('ItemController', ItemController);

    ItemController.$inject = ['$scope', '$state', 'Item'];

    function ItemController ($scope, $state, Item) {
        var vm = this;
        
        vm.items = [];

        loadAll();

        function loadAll() {
            Item.query(function(result) {
                vm.items = result;
            });
        }
    }
})();
