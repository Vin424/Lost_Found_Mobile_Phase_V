control.controller('myitems1PageController', [ '$scope','restApi','$state', function($scope, restApi, $state) {


    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];

    var credentials ={};
    var response ={};



    $scope.login = function(username,password) {
        credentials = {'email':username,'key':password};

        restApi.getAuth(credentials)
            .success(function (data) {
            response = data.user[0];

        })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });


        if(response.email === credentials.email && response.passkey === credentials.key){
            $state.go('main.myitems2');
        }
    };





}]);






control.controller('myitems2PageController', [ '$scope', '$state','restApi','$stateParams','shareData', function($scope, $state, restApi,$stateParams,shareData) {


    var credentials={};
    credentials.myemail =$stateParams.email;
    credentials.mykey =$stateParams.key;

    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];

    myposts();
    function  myposts(){


        restApi.getMyPosts(credentials)
            .success(function (data) {
                $scope.myItems = data.myPosts;

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

                return $scope.myItems;
    };

    $scope.setValue = function(object){
        shareData.selectedItem = object;

    };


}]);