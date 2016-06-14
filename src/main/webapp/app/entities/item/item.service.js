(function() {
    'use strict';
    angular
        .module('todolistApp')
        .factory('Item', Item);

    Item.$inject = ['$resource', 'DateUtils'];

    function Item ($resource, DateUtils) {
        var resourceUrl =  'api/items/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.dateDue = DateUtils.convertDateTimeFromServer(data.dateDue);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
