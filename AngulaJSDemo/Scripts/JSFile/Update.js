
angular.module('app', [])
   
.controller('MainCtrl', function ($scope) {
    
    // Set of Photos
    $scope.photos = [

    { src: 'Images/download.jpg', desc: 'Image 01' },
    { src: 'Images/Planet_scenery.png', desc: 'Image 02' },
    { src: 'Images/dummy-1.jpg', desc: 'Image 03' },
    { src: 'Images/dummy-2.jpg', desc: 'Image 04' },
    { src: 'Images/dummy-3.jpg', desc: 'Image 05' },
    { src: 'Images/dummy-4.jpg', desc: 'Image 06' },
    { src: 'Images/dummy-5.jpg', desc: 'Image 07' },
        { src: 'Images/dummy-6.jpg', desc: 'Image 08' },
            { src: 'Images/dummy-7.jpg', desc: 'Image 09' },
                { src: 'Images/dummy-8.jpg', desc: 'Image 10' },
                    { src: 'Images/dummy-9.jpg', desc: 'Image 11' },
                        { src: 'Images/dummy-10.jpg', desc: 'Image 12' },
                            { src: 'Images/dummy-11.jpg', desc: 'Image 13' },
                                { src: 'Images/dummy-12.jpg', desc: 'Image 14' },
                                    { src: 'Images/dummy-13.jpg', desc: 'Image 15' },
                                        { src: 'Images/dummy-14.jpg', desc: 'Image 16' },
                                            { src: 'Images/dummy-15.jpg', desc: 'Image 17' }
  
    ];
    // initial image index
    $scope.direction = 'left';
    $scope._Index = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.direction = (index > $scope._Index) ? 'left' : 'right';
        $scope._Index = index;
    };
    // if a current image is the same as requested image
    $scope.isCurrentSlideIndex = function (index) {
        return $scope._Index === index;
    };
    // show prev image
    $scope.showPrev = function () {
        $scope.direction = 'left';
        $scope.currentIndex = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
        //        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };
    // show next image
    $scope.showNext = function () {
        $scope.direction = 'right';
        debugger;
        $scope.currentIndex = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
        //        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };
    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };

    //$scope.myTrigger = function (arg) {
    //    alert(arg + ' clicked');
    //};













})

 .animation('.slide-animation', function () {
     return {
         beforeAddClass: function (element, className, done) {
             var scope = element.scope();

             if (className == 'ng-hide') {
                 var finishPoint = element.parent().width();
                 if (scope.direction !== 'right') {
                     finishPoint = -finishPoint;
                 }
                 TweenMax.to(element, 0.5, { left: finishPoint, onComplete: done });
             }
             else {
                 done();
             }
         },
         removeClass: function (element, className, done) {
             var scope = element.scope();

             if (className == 'ng-hide') {
                 element.removeClass('ng-hide');

                 var startPoint = element.parent().width();
                 if (scope.direction === 'right') {
                     startPoint = -startPoint;
                 }

                 TweenMax.fromTo(element, 0.5, { left: startPoint }, { left: 0, onComplete: done });
             }
             else {
                 done();
             }
         }
     };
 });  /// <reference path="../Images/images.jpg" />
