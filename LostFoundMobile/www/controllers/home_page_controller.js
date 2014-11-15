control.controller('homePageController', [ '$scope', '$state','restApi', function($scope, $state,restApi) {

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



    getItems();
    function getItems() {
        restApi.getItems()
            .success(function (data) {

                $scope.items = data.items;

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

    };

    getLostItems();
    function getLostItems() {
        restApi.getLostItems()
            .success(function (data) {

                $scope.lostItems = data.lostItems;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };

    getFoundItems();
    function getFoundItems() {
        restApi.getFoundItems()
            .success(function (data) {

                $scope.foundItems = data.foundItems;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };







}]);