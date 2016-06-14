(function() {
    'use strict';

    angular
        .module('todolistApp')
        .controller('CategoryDetailController', CategoryDetailController);

    CategoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Category', 'Item', 'User'];

    function CategoryDetailController($scope, $rootScope, $stateParams, entity, Category, Item, User) {
        var vm = this;

        vm.category = entity;

        var unsubscribe = $rootScope.$on('todolistApp:categoryUpdate', function(event, result) {
            vm.category = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
