var app = angular.module('carousel', []);
app.controller('folderCtrl', function ($scope) {
    $scope.w = window.innerWidth;
    $scope.h = window.innerHeight - 20;
    $scope.uri = "http://www.desicomments.com/";
    $scope.folders = [
    'flowers',
    'birthdays'
   ];
    $scope.images = [0,1];

    $scope.currentFolder = $scope.folders[0];
    $scope.selectFolder = function (folder) {
        $scope.currentFolder = folder;
    };
    $scope.activeFolder = function (folder) {
        return (folder === $scope.currentFolder) ? 'active' : '';
    };
});
