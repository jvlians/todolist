(function() {
    'use strict';

    angular
        .module('todolistApp')
        .controller('ItemDialogController', ItemDialogController);

    ItemDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Item', 'Category'];

    function ItemDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Item, Category) {
        var vm = this;

        vm.item = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.categories = Category.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.item.id !== null) {
                Item.update(vm.item, onSaveSuccess, onSaveError);
            } else {
                Item.save(vm.item, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('todolistApp:itemUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.dateDue = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
