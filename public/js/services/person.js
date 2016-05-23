app.factory("sharedService", function($rootScope){

    var mySharedService = {};

    mySharedService.values = {};

    mySharedService.personWasUpdated = function(){
        $rootScope.$broadcast('update');
    }

    return mySharedService; 
});