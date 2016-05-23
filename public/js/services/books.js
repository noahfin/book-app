app.service('dataService', function ($http) {
this.getBooks = function(callback) {
	$http.get('/books').then(callback)
}

});