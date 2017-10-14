var topics = ["Rugrats", "Ducktales", `Dark Wing Duck`, "Hey Arnold", "Ned's Newt", "Tailspin", "Digimon"];


for (i=0; i<topics.length; i++){
	$(".button-box").append(`<button class=topicSearch data-name=${topics[i]}>${topics[i]}</button>`);
}

var searchQuery = $(".topicSearch").data();
var results;


$(".topicSearch").on("click", function(){ getGif(searchQuery);})





// $.get("https://api.giphy.com/v1/gifs/search?", {api_key:"inMvyNCFgyQC1dyf6cQvHVk3djujZ24O", q:`${searchQuery}`, limit:"10"}).done(function(response){

// 	console.log(response.data);

// });


function getGif(search){

	$.get("https://api.giphy.com/v1/gifs/search?", {api_key:"inMvyNCFgyQC1dyf6cQvHVk3djujZ24O", q:`${search}`, limit:"10"}).done(function(response){


	results = response.data;
	$(".results-box").append(`<img src=${results[2].images.fixed_height_still.url}>`);
	$(".results-box").append(results[0].rating);


	console.log(results);
	console.log(results[3].images.fixed_height_still.url);

	});
}
