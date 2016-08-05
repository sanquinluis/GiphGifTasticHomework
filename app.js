$(document).ready(function(){


	var theCountry = ['Canada', 'United States', 'Mexico', 'Guatemala', 'Belize', 'Cuba', 
    'Honduras', 'El Salvador', 'Nicaraguas', 'Costa Rica', 'Panama', 'Jamaica','Haiti',
    'Dominican Republic', 'Puerto Rico'];

    var api = 'http://api.giphy.com/v1/gifs/search?q=';
    var apiKey = '&api_key=dc6zaTOxFJmzC';
    var limit = '&limit=10&q=';	
    var valueInput = $('#gyphy-input').val().trim();
    var urlCombo = api + apiKey + limit + valueInput;
    
       
        function tellName(){
        var countryName = $(this).data('data-name');
        
    }
         $('.rightIn').empty();
       
        $.ajax({url: urlCombo, 
        	    method: 'GET'
        })
          .done(function(response) {
			$('theCountry').html(JSON.stringify(response));	

                var results = response.data;
                for (var i = 0; i < results.length; i++) {
    		};
    
                // console.log(value);
    			console.log(response);
                console.log(valueInput);
    		 	console.log(results);
    		 	$('.images').append(valueInput);
    		 	$('.images').html(response.urlCombo);
    	});
    	//This function "adds" the buttons 
    		function renderButtons(){ 

        // YOUR CODE GOES HERE
        $(".rightIn").empty();

        $.each(theCountry,function(index,element){
            var newButton = $("<button/>").addClass( "btn btn-info country").attr('name',element).text(element).css({'margin': '5px'});
            $(".rightIn").append(newButton);
        });

    }

    // This function handles events where one button is clicked
    $('#theButton').on('click', function(){
            //this adds the new movie to the list of movies
            theCountry.push($("#gyphy-input").val());
        
        renderButtons()
        $("#gyphy-input").val("");
        return false;
    })


    // This allows renderButtons() to run and creat the origional buttons
    renderButtons();

            
    		console.log(urlCombo);
            return false;
});





