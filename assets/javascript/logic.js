var topics = ["Rugrats", "Ducktales", `Dark Wing Duck`, "Hey Arnold", "Ned's Newt", "Tailspin", "Digimon"];
var stillGif;
var animateGif;


for (i=0; i<topics.length; i++){
	$(".button-box").append(`<button class=topicSearch data-name="${topics[i]}">- ${topics[i]}</button>`);
	// var searchQuery = $(".topicSearch").data(`name`);
}


var results;
// var searchQuery;

$(".search-button").on("click", function(){
	event.preventDefault();
	seachValue = $("#gif-search").val().trim();
	console.log(seachValue);

	$(".button-box").append(`<button class=topicSearch data-name="${seachValue}">- ${seachValue}</button>`);
	// var searchQuery = $(".topicSearch").data(`name`);


})


$(document.body).on("click", ".topicSearch", function(){


	$(".results-box").empty();

	searchQuery = $(this).data(`name`);

	console.log(`You searched Giphy for: ${searchQuery}`);


	getGif(searchQuery);
	
})


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



function getGif(search){



	$.get("https://api.giphy.com/v1/gifs/search?", {api_key:"inMvyNCFgyQC1dyf6cQvHVk3djujZ24O", q:`${search}`, limit:"10"}).done(function(response){


	results = response.data;

	for(i=0; i<10; i++){

		stillGif = results[i].images.fixed_height_still.url;
		animateGif = results[i].images.fixed_height.url;

		$(".results-box").append(`<img src=${stillGif} data-still=${stillGif} data-animate=${animateGif} data-state=still class=gif>`);
		// $(".results-box").append(results[i].rating);
		// console.log(`Search: ${searchQuery}`);
		
	}

	});
}
