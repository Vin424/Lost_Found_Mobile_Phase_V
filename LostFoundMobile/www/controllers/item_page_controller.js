control.controller('itemPageController', [ '$scope', '$state','$stateParams','shareData','restApi', function($scope, $state,$stateParams, shareData, restApi) {


    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];
    $scope.rightButtons = [{
        type: 'button-icon icon ion-arrow-left-c',
        tap: function(e) {
            window.history.back();
        }
    }];
    addSeen();


    function addSeen(){
        restApi.addSeen(shareData.selectedItem.itemid)
            .success(function (data) {


            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });


    }

    $scope.item = shareData.selectedItem;


    $scope.thumbsdown = function(id) {
        restApi.putThumbsdown(id)
            .success(function (data) {
                $scope.show = false;
            })
            .error(function (error) {

                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }


}]);