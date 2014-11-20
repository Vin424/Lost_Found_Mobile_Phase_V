control.controller('SpecificmyitemsPageController', [ '$scope','$stateParams', '$state','restApi','shareData', function($scope,$stateParams, $state, restApi, shareData) {


    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];



$scope.specificItem=shareData.selectedItem;

//    getItemID();
//
//
//    function getItemID(){
//        restApi.getItemId($stateParams.item)
//            .success(function (data) {
//                $scope.specificItem= data.item[0];
//
//            })
//            .error(function (error) {
//                $scope.status = 'Unable to load customer data: ' + error.message;
//            });
//
//        return $scope.specificItem;
//    }

}]);