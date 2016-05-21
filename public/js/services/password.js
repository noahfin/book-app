
app.service('Password', function () {
       //Your Code
       function getStrength(pass) {
       	 var score = 0; 
       	 if (!pass) {
       	 	return score;
       	 }
       	 var letters = {}
       	 //award every uniqe letter until 5 repeations
       	 for (var i = 0; i < pass.length; i++) {
       	 	letters[pass[i]] =(letters[pass[1]] || 0) + 1;
       	 	score += 5.0 / letters[pass[i]];
       	 };
       

       	 // bouns pooints for mixing it up
       	 var variations = {
       	 	digits: /\d/.test(pass),
       	 	lower: /[a-z]/.test(pass),
       	 	upper: /[A-Z]/.test(pass),
       	 	nowords: /\W/.test(pass)
       	 }

       	 var variationCount = 0;
       	 for(var check in variations) {
       	 	variationCount +=(variations[check] == true) ? 1 : 0;
       	 }
       	 score += (variationCount -1) * 10;

       	 if (score > 100) score = 100;
       	 return parseInt(score);

       }
       return {
       	getStrength: function (pass) {
       		return getStrength(pass);

       	}
       }


    });
