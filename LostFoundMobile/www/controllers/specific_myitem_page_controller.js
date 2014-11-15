control.controller('SpecificmyitemsPageController', [ '$scope','$stateParams', '$state','restApi', function($scope,$stateParams, $state, restApi) {


    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];

    getItemID();


    function getItemID(){
        restApi.getItemId($stateParams.item)
            .success(function (data) {
                $scope.specificItem= data.item[0];

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

        return $scope.specificItem;
    }

}]);