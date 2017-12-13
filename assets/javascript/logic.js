// Variable Declarations
var topics = [`Rugrats`, `Ducktales`, `Dark Wing Duck`, `Hey Arnold`, `Ned's Newt`, `Tailspin`, `Digimon`];
var stillGif;
var animateGif;
var results;


//Function Declarations
console.log("hello world");

var x = "ht";


function getGif(search){


	$.get("https://api.giphy.com/v1/gifs/search?", {api_key:"inMvyNCFgyQC1dyf6cQvHVk3djujZ24O", q:`${search}`, limit:"10"}).done(function(response){


	results = response.data;
	console.log(results);


	for(i=0; i<10; i++){

		stillGif = results[i].images.fixed_height_still.url;
		animateGif = results[i].images.fixed_height.url;
		rating = results[i].rating;


		$(".results-box").append(`<div class=gif-box><img src=${stillGif} data-still=${stillGif} data-animate=${animateGif} data-state=still class=gif><div class=rating>Rated: ${rating}</div></div>`);

		// $(".results-box").append(`<img src=${stillGif} data-still=${stillGif} data-animate=${animateGif} data-state=still class=gif><div class=rating>Rated: ${rating}</div>`);

		// $(".results-box").append(`<div class=rating>Rated: ${rating}</div>`);

	}

	});
}



for (i=0; i<topics.length; i++){

	$(".button-box").append(`<button class=topicSearch data-name="${topics[i]}">${topics[i]}</button>`);
}

//Click Event for Mobile Menu
$(document.body).on("click", ".hamburger-button", function(){

	if($(".button-box").css(`visibility`) == `hidden`){
		$(".button-box").css(`visibility`,`visible`);
		$(".results-box").css(`grid-column-start`, `2`);
	}

	else{
		$(".button-box").css(`visibility`,`hidden`);
		$(".results-box").css(`grid-column-start`, `1`);
		console.log(black);
	}

})

//Click Event for Adding Search
$(".search-button").on("click", function(){
	event.preventDefault();
	seachValue = $("#gif-search").val().trim();

	console.log(seachValue);

	$("#gif-search").val("");

	$(".button-box").append(`<button class=topicSearch data-name="${seachValue}">${seachValue}</button>`);
	// var searchQuery = $(".topicSearch").data(`name`);
})

//Click Event to Search Giphy
$(document.body).on("click", ".topicSearch", function(){

	$(".results-box").empty();
	searchQuery = $(this).data(`name`);
	console.log(searchQuery);
	getGif(searchQuery);
})

//Click Event to Play/Pause Gif
$(document.body).on("click", ".gif", function(){



	var state = $(this).attr('data-state');

		console.log(`data-state: ${state}`);

	if(state === 'still'){
		console.log("animate url: " + $(this).attr('data-animate'));
		$(this).attr("src", $(this).attr('data-animate'));
		// $(this).attr("src", $(this).attr(animateGif));

	    $(this).attr('data-state', 'animate');
	}

	if(state === 'animate'){
		$(this).attr("src", $(this).attr('data-still'));
		$(this).attr('data-state', 'still');
	}
})
