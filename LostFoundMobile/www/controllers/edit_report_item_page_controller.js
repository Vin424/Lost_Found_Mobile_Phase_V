control.controller('editreportitem1PageController', [ '$scope', '$state','restApi', function($scope, restApi) {
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
control.controller('editreportitem2PageController', [ '$scope', '$state','restApi','$stateParams',  function($scope, $state, restApi,$stateParams) {

    $scope.report_navTitle = 'Report Item';

    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();

        }
    }];
    $scope.rightButtons = [{
        type: 'button-icon icon ion-ios7-upload-outline',
        tap: function(e) {
            $state.go('entry');
        }
    }];






    getItemID();

    $scope.updateValues = function(object){


        $scope.editItem = object;
        updateItem( $scope.editItem );

    };

    function updateItem(editItem) {

        restApi.updateUser(editItem)
            .success(function (data) {

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

        restApi.updateItem(editItem)
            .success(function () {

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });



    };






    function getItemID(){
        restApi.getItemId($stateParams.item)
            .success(function (data) {
                $scope.editItem= data.item[0];

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

        return $scope.editItem;
    }



    /*****************************Take a picture***************************************/
    /**********************************************************************************/

    $scope.takePic = function() {
        var options =   {
            quality: 25,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
            encodingType: 0    // 0=JPG 1=PNG
        }
        navigator.camera.getPicture(onSuccess,onFail,options);
    }
    var onSuccess = function(DATA_URL) {


        console.log(DATA_URL);

        $scope.editItem.itempicture = 'data:image/jpg;base64,'+ DATA_URL;
        $scope.$apply();
    };


    var onFail = function(e) {
        console.log("On fail " + e);
    }



///**************************************Get picture from library************************/
///**************************************************************************************/
    $scope.getPic = function() {
        var options =   {
            quality: 25,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: 0,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
            encodingType: 0    // 0=JPG 1=PNG
        }
        navigator.camera.getPicture(onSuccess,onFail,options);
    }
    var onSuccess = function(DATA_URL) {


        console.log(DATA_URL);
        $scope.editItem.itempicture = 'data:image/jpg;base64,'+ DATA_URL;
        $scope.$apply();
    };


    var onFail = function(e) {
        console.log("On fail " + e);
    }






}]);