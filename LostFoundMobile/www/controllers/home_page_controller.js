control.controller('homePageController', [ '$scope', '$state','restApi', 'shareData', function($scope, $state,restApi,shareData) {

    $scope.navTitle = 'Lost/Found';
    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];
    $scope.rightButtons = [{
        type: 'button-icon icon ion-paper-airplane',
        tap: function(e) {
            $state.go('main.reportitem1');
        }
    }];


    $scope.getItems1 = function(){
        getItems();

    };

    function getItems() {
        restApi.getItems()
            .success(function (data) {

                $scope.items = data.items;

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

    };

    $scope.getLostItems1 = function(){
        getLostItems();

  };

    function getLostItems() {
        restApi.getLostItems()
            .success(function (data) {

                $scope.lostItems = data.lostItems;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };

    $scope.getFoundItems1 = function(){
        getFoundItems();
    };

    function getFoundItems() {
        restApi.getFoundItems()
            .success(function (data) {

                $scope.foundItems = data.foundItems;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };


    $scope.setValue = function(object){

        shareData.selectedItem = object;


    };




}]);