control.controller('commentsPageController', [ '$scope','$stateParams','shareData','restApi', function($scope,$stateParams, shareData, restApi) {


    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];




    getComment();
    function getComment() {
        restApi.getComments($stateParams.item)
            .success(function (data) {
                $scope.comments = data.comments;

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }


    var objectComment={};

        $scope.getCommentObject = function (object) {
           objectComment = object;
           objectComment.isblocked = 'false';
           objectComment.itemid = $stateParams.item;
            postComment();
        }
    function postComment() {

        restApi.postComment(objectComment)
            .success(function (data) {

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };




}]);