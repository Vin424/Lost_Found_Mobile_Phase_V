control.controller('reportitem1PageController', [ '$scope', '$state','restApi', function($scope, restApi) {
    $scope.report_navTitle = 'Report Item';

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

}]);
control.controller('reportitem2PageController', [ '$scope', '$state','$stateParams','restApi',  function($scope, $state,$stateParams, restApi) {

        var myFile={};


$scope.updateValues = function(object){


    myFile = object;
    myFile.firstname = $stateParams.name;
    myFile.lastname = $stateParams.lastname;
    myFile.email = $stateParams.email;
    myFile.phone = $stateParams.phone;
    myFile.itempicture = 'data:image/jpg;base64,'+ $scope.PicData;
    myFile.isblocked='false';
    myFile.isadmin='false';
    postItem();


};


    function postItem() {
        restApi.getUserEmail(myFile.email).success(function (data) {


            if (data.user.length == 0) {

                restApi.postUser(myFile)
                    .success(function (data) {


                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });

                restApi.postItem(myFile)
                    .success(function () {

                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });


            }


            else if (data.user.length > 0) {


                restApi.updateUser(myFile)
                    .success(function (data) {

                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });


                restApi.postItem(myFile)
                    .success(function () {


                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });


            }
        })
    };


    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();

        }
    }];



    /*****************************Take a picture***************************************/
    /**********************************************************************************/
  
    $scope.takePic = function() {
        var options =   {
            quality: 15,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
            encodingType: 0    // 0=JPG 1=PNG
        }
        navigator.camera.getPicture(onSuccess,onFail,options);
    }
    var onSuccess = function(DATA_URL) {

        myFile.itempicture = 'data:image/jpg;base64,'+ DATA_URL;

        $scope.picData = 'data:image/jpg;base64,'+ DATA_URL;
        $scope.$apply();
    };


    var onFail = function(e) {
        console.log("On fail " + e);
    }

  

///**************************************Get picture from library************************/
///**************************************************************************************/
    $scope.getPic = function() {
        var options =   {
            quality: 15,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: 0,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
            encodingType: 0    // 0=JPG 1=PNG
        }
        navigator.camera.getPicture(onSuccess,onFail,options);
    }
    var onSuccess = function(DATA_URL) {
        myFile.itempicture = 'data:image/jpg;base64,'+ DATA_URL;


        $scope.picData = DATA_URL;
        $scope.$apply();
    };


    var onFail = function(e) {
        console.log("On fail " + e);
    }
    

}]);