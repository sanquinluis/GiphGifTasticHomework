$(document).ready(function(){


	var theCountry = ['Canada', 'United States', 'Mexico', 'Guatemala'];
    var api = 'http://api.giphy.com/v1/gifs/search?q=';
    var limit = '&limit=10&q=';	
    var apiKey = '&api_key=dc6zaTOxFJmzC';
    var theInput = value
    var urlCombo = api + apiKey + limit;

    var countries = $(this).attr('input');
	
		
		
      	//This is the input value that allows the user to types anything he(she) whats to 
      	//search in giphy.

      	var value = $('input').val().trim();
	 		value = value.trim().replace(/\s+/g, '+');

       //.ajax links all the API URL. 
        $.ajax({url: api + apiKey + limit, 
        	method: 'GET'
        })
          .done(function(response) {
			$('.theButton').html(JSON.stringify(response));	

                var results = response.data;
                for (var i = 0; i < results.length; i++) {
    		};
    		$('.theCountry').empty();
    			console.log(response);
    		 	console.log(results);
    		 	$('.images').append(results);
    		 	$('.images').append(response);

    	});
    	//This function adds the buttons that are associated with the var theCountry.
    		$('#theButton').html(function(){
    			
    			for (var x = 0; x < theCountry.length; x++){
			    		var b = $('<button>').append(theCountry).css('margin', '10px');
			    		b.addClass('btn btn-primary country')
			    		b.attr('data-country', theCountry[x]);
			    		b.text(theCountry[x]);
			    		$('.rightIn').append(b);
	    	};
	    	// $('.images').append();
	    	// $('.images').append(urlCombo);
    		console.log(urlCombo);
            console.log(theCountry);
            return false;
           

         
		
	
 });

});





