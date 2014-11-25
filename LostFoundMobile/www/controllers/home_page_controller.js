control.controller('homePageController', [ '$scope', '$state','restApi', 'shareData','$ionicScrollDelegate', function($scope, $state,restApi,shareData,$ionicScrollDelegate) {

    var homepageCTRL = this;
    homepageCTRL.lostpage = 0;
    homepageCTRL.page = 0;
    homepageCTRL.foundpage = 0;

    $scope.setZero = function(){
        homepageCTRL.lostpage = 0;
        homepageCTRL.page = 0;
        homepageCTRL.foundpage = 0;
    };

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


    $scope.getItems1 = function(offset){
        get5Items(offset);
        $ionicScrollDelegate.scrollTop();

    };

    $scope.pageOffset = function(){
        return  homepageCTRL.page;

    }
    $scope.lostpageOffset = function(){
        return  homepageCTRL.lostpage;

    }
    $scope.foundpageOffset = function(){
        return  homepageCTRL.foundpage;

    }

    function get5Items(offset) {
        homepageCTRL.page = homepageCTRL.page + offset;
        restApi.get5Items(homepageCTRL.page)
            .success(function (data) {

                $scope.items = data.items;

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

    };



    $scope.getLostItems1 = function(offset){
        get5LostItems(offset);
        $ionicScrollDelegate.scrollTop();

    };

    function get5LostItems(offset) {
        homepageCTRL.lostpage = homepageCTRL.lostpage + offset;
        restApi.get5LostItems(homepageCTRL.lostpage)
            .success(function (data) {

                $scope.lostItems = data.lostItems;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };

    $scope.getFoundItems1 = function(offset){
        get5FoundItems(offset);
        $ionicScrollDelegate.scrollTop();
    };

    function get5FoundItems(offset) {
        homepageCTRL.foundpage = homepageCTRL.foundpage + offset;
        restApi.get5FoundItems(homepageCTRL.foundpage)
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