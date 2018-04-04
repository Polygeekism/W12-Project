var myApp = angular.module('myApp', []);

myApp.controller('submitDayController', function(){
    console.log('submit service loaded');
    var self = this;

    
    
    self.submitDay = function(){
        console.log('we have button action')
    }

})

