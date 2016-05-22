app.service('GetBooks', function ($http) {
this.getBooks = function() {
	$http.get('/books')
	.then(function(response) {
		console.log(response.data);
		return response.data
	})
}

}