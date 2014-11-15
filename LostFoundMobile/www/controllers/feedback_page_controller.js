control.controller('feedbackPageController', [ '$scope', '$state', function($scope, $state) {
    $scope.feedback_navTitle = 'Leave a FeedBack';

    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];
}]);