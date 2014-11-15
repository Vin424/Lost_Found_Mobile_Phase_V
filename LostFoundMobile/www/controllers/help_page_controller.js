control.controller('helpPageController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Help';

    $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];
    $scope.tutorials = [
        {
            'pict':'pictures/tutorialitem.jpg'
        },
        {
            'pict':'pictures/tutorialnav.jpg'
        },
        {
            'pict':'pictures/tutorialreportside.jpg'
        },
        {
            'pict':'pictures/tutorialspecificitem.jpg'
        },
    ];
}]);