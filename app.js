$(document).ready(function(){


	var theCountry = ['Canada', 'United States', 'Mexico', 'Guatemala', 'Belize', 'Cuba', 
    'Honduras', 'El Salvador', 'Nicaraguas', 'Costa Rica', 'Panama', 'Jamaica','Haiti',
    'Dominican Republic', 'Puerto Rico'];

    var api = 'http://api.giphy.com/v1/gifs/search?q=';
    var apiKey = '&api_key=dc6zaTOxFJmzC';
    var limit = '&limit=10&q=';	
    var urlCombo = api + apiKey + limit + valueInput;
    var valueInput = $('#gyphy-input').val().trim();
      	
        $('.theCountry').on('click', function(){
	 	     theCountry.push(valueInput);
             valueInput = select(theCountry);
    });
        function alertName(){
        var countryName = $(this).data('name');
        alert(countryName);
    }
         $('.rightIn').empty();
       
        $.ajax({url: urlCombo , 
        	method: 'GET'
        })
          .done(function(response) {
			$('.theButton').html(JSON.stringify(response));	

                var results = response.data;
                for (var i = 0; i < results.length; i++) {
    		};
    		$('.theCountry').empty();
                // console.log(value);
    			console.log(response);
                console.log(valueInput);
    		 	console.log(results);
    		 	$('.images').append(valueInput);
    		 	$('.images').html(response.urlCombo);
    	});
    	//This function adds the buttons that are associated with the var theCountry.
    		$('#theButton').html
    			for (var x = 0; x < theCountry.length; x++){
			    		var b = $('<button>').append(theCountry).css('margin', '5px');
			    		b.addClass('btn btn-info country')
			    		b.attr('data-name', theCountry[x]);
			    		b.text(theCountry[x]);
			    		$('.rightIn').append(b);
	    	};
         
            $(document).on('click', '.countryName', alertName);
    		console.log(urlCombo);
            return false;
});





