var app = angular.module("bookApp", []);

app.controller('MainController',  function ($scope, , GetBooks) {	
	$scope.title = 'Top Sellers in Books';
	$scope.books = ['pop1.jpg', 'pop2.jpg', 'pop3.jpg', 'pop4.jpg'];

  $scope.bookJson = GetBooks.getBooks;



});

   //  var request = $http({
			//   url: '/books',
			//   method: 'GET',
			//   transformResponse: [function (data) {
			//       // Do whatever you want!
			//       	$scope.data =data;
			//      return data;
			//   }]
			// });

   //  request.then(function (data) {/* access data or $scope.data in here */

   //  	$scope.$apply(function () {
   //           $scope.bookData = $scope.data;
   //      });

   //  	 $scope.bookData = $scope.data;
   //  	console.log($scope.data)
   //  });


	 //  	$http.get('/books').success(function(response){
		// 	console.log(response);
		// 	$scope.data = response;
		// })
	
	


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

});