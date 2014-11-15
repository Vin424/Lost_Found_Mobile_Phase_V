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
    myFile.itempicture = "images/lostfoundpicture.jpg";
    postItem(myFile);

};

     function postItem(myfile) {
//        var file = data;
//        console.log('file is ' + JSON.stringify(file));
//        var uploadUrl = "/upload";
//        fileUpload.uploadFileToUrl(file, uploadUrl);
//        reportItemCtrl.list.itemStatus = $stateParams.itemStatus;
//        reportItemCtrl.list.itempicture = 'images/' + file.name;

        restApi.postItem(myFile)
            .success(function () {

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

    };


    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();

        }
    }];
//    $scope.rightButtons = [{
//        type: 'button-icon icon ion-ios7-upload-outline',
//        tap: function(e) {
//
//
//
//        }
//    }];


    /*****************************Take a picture***************************************/
    /**********************************************************************************/
    $scope.takePic = function() {
        var options =   {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
            encodingType: 0     // 0=JPG 1=PNG
        }
        navigator.camera.getPicture(onSuccess,onFail,options);
    }
    var onSuccess = function(FILE_URI) {
        console.log(FILE_URI);
        $scope.picData = FILE_URI;
        $scope.$apply();
    };
    var onFail = function(e) {
        console.log("On fail " + e);
    }
    $scope.send = function() {
        var myImg = $scope.picData;
        var options = new FileUploadOptions();
        options.fileKey="post";
        options.chunkedMode = false;

    }
///**************************************Get picture from library************************/
///**************************************************************************************/

    $scope.getPic = function() {
        var options =   {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: 0,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
            encodingType: 0     // 0=JPG 1=PNG
        }
        navigator.camera.getPicture(onSuccess,onFail,options);
    }
    var onSuccess = function(FILE_URI) {
        console.log(FILE_URI);
        $scope.picData = FILE_URI;
        $scope.$apply();
    };
    var onFail = function(e) {
        console.log("On fail " + e);
    }
    $scope.send = function() {
        var myImg = $scope.picData;
        var options = new FileUploadOptions();
        options.fileKey="post";
        options.chunkedMode = false;

    }

//    function getPic() {
//        // Retrieve image file location from specified source
//
//        navigator.camera.getPicture(
//            uploadPhoto,
//            function(message) { alert('get picture failed'); },
//            {
//                quality         : 50,
//                destinationType : navigator.camera.DestinationType.FILE_URI,
//                sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
//            }
//        );
//    }
//
//    function uploadPhoto(imageURI) {
//        var options = new FileUploadOptions();
//        options.fileKey="file";
//        options.fileName=imageURI.substr(imageURI.lastIndexOf('/images/')+1);
//        options.mimeType="image/jpeg";
//        options.trustAllHost = "true";
//
//        var params = {};
//        params.value1 = "test";
//        params.value2 = "param";
//
//        options.params = params;
//
//        var ft = new FileTransfer();
//        ft.upload(imageURI, encodeURI("http://136.145.116.235:3000"), win, fail, options);
//    }
//
//    function win(r) {
//        console.log("Code = " + r.responseCode);
//        console.log("Response = " + r.response);
//        console.log("Sent = " + r.bytesSent);
//    }
//
//    function fail(error) {
//        alert("An error has occurred: Code = " + error.code);
//        console.log("upload error source " + error.source);
//        console.log("upload error target " + error.target);
//    }




}]);