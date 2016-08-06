$(document).ready(function(){

	
    var api = 'https://api.giphy.com/v1/gifs/search?q=';
    var apiKey = '&api_key=dc6zaTOxFJmzC';

    var theCountry = ['Canada', 'United States', 'Mexico', 'Guatemala', 'Belize', 'Cuba', 
    'Honduras', 'El Salvador', 'Nicaraguas', 'Costa Rica', 'Panama', 'Jamaica','Haiti',
    'Dominican Republic', 'Puerto Rico'];

    var limit = '&limit=10&q=';	
    var valueInput = $('#gyphy-input').val().trim();
    var urlCombo = api + valueInput + apiKey + limit;
    
    //function that connects  
       $(document.body).on('click', '.country', function() {
            var countryName = $(this).attr('name');
            $(".hereTheyare").empty();
   
        $.ajax({url: urlCombo + countryName, 

        	method: 'GET'
        })

        //Function that creates a div and puts the Image.  
        .done(function(response) {
	       
            //
            var theGif = response.data;
            for (var i = 0; i < theGif.length; i++) {

                var newDivGif = $('<div class="gifImg">');

                var rating = $('<p>').text("Rating: " + theGif[i].rating);

                var theImages = $('<img>').css({'margin':'5px','width': '200px', 'height':'200px'})
                    .addClass('gifyIm animate still')
                    .attr('src', theGif[i].images.fixed_height_still.url)
                    .attr('data-still', theGif[i].images.fixed_height_still.url)
                    .attr('data-animate', theGif[i].images.fixed_height.url)
                    .attr('data-state', 'still');

                newDivGif.prepend(rating);
                newDivGif.prepend(theImages);
                $('.hereTheyare').append(theImages);
    		};
                console.log(response);
        });
            //animating the gif??
            $('.gifyIm').on('click', function(){
                var state = $(this).attr('data-state'); 
                if (state == 'still') {
                            $(this).attr('src', $(this).data('animate'));
                            $(this).attr('data-state', 'animate');
            }   else {
                            $(this).attr('src', $(this).data('still'));
                            $(this).attr('data-state', 'still');
                    }   
            }); 
            console.log(urlCombo);
            console.log(valueInput);
    	});
    	//This function "adds" the buttons 
    	function renderButtons(){ 
            $(".rightIn").empty();
            $.each(theCountry,function(index,element){
            var newButton = $("<button/>").addClass( "btn btn-info country").attr('name',element).text(element).css({'margin': '5px'});
            $(".rightIn").append(newButton);
        });

    }
        // This handels the event when click
        $('#theButton').on('click', function(){
            //adds the new country
            var countryWow = $("#gyphy-input").val().trim();
            theCountry.push(countryWow);
            renderButtons()
        $("#gyphy-input").val("");
            return false;
    })

            renderButtons();
            
});





