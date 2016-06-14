(function() {
    'use strict';

    angular
        .module('todolistApp')
        .controller('ItemDetailController', ItemDetailController);

    ItemDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Item', 'Category'];

    function ItemDetailController($scope, $rootScope, $stateParams, entity, Item, Category) {
        var vm = this;

        vm.item = entity;

        var unsubscribe = $rootScope.$on('todolistApp:itemUpdate', function(event, result) {
            vm.item = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
