(function() {
    'use strict';

    angular
        .module('todolistApp')
        .controller('ItemDeleteController',ItemDeleteController);

    ItemDeleteController.$inject = ['$uibModalInstance', 'entity', 'Item'];

    function ItemDeleteController($uibModalInstance, entity, Item) {
        var vm = this;

        vm.item = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Item.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
