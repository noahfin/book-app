var app = angular.module("bookApp", []);

app.controller('MainController',  function ($scope, dataService) {	
	$scope.title = 'Top Sellers in Books';
	$scope.books = ['pop1.jpg', 'pop2.jpg', 'pop3.jpg', 'pop4.jpg'];

 dataService.getBooks(function(response) {
 	   console.log('in the call back');
		console.log(response.data);





	   $scope.data =    angular.fromJson(response.data);
	   console.log(typeof($scope.data));
	});



});

  







app.controller('PasswordController',  function ($scope, Password) {		 
	$scope.$watch('user.password', function(pass) {
		$scope.passwordStrength = Password.getStrength(pass);
		
		$scope.isPasswordWeak =function() {
			return Password.getStrength(pass) < 40;
		}
		$scope.isPasswordOk = function() {
			return Password.getStrength(pass) >= 40 && Password.getStrength(pass) <= 70;
		}
		$scope.isPasswordStrong = function () {
			return Password.getStrength(pass) > 70;
		}

	});
	 $scope.invaild = true
	$scope.isInputVaild = function(input) {
		var matches = input.$modelValue.match(/\d+/g);
	  var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\:<>\?]/);
		var hasSpecialChar = pattern.test(input.$modelValue);
		if (input.$modelValue.length > 6 && matches !== null && hasSpecialChar){
			 $scope.vaild = false;
			return true;
			}
			else {
				 $scope.vaild = true;
			}
	}

	$scope.isInputInvaild = function(input) {
		 return $scope.vaild;
	}




// ng-class="{'progress-bar-success' : isPasswordStrong(), 'progress-bar-warning': isPasswordOk(), 'progress-bar-danger' : isPasswordWeak()}"







});