"use strict";
$( document ).ready(function() {
console.log('\'Hello \'Hello!'); // eslint-disable-line no-console

$(".splendidBtn").click(function(){
        alert("Woohoo! Yeoman scaffolding successfully completed.");
    });

// Scroll to Top button
var offset = 300,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});


// Alternate Stylesheet Script
function swapStyleSheet(sheet) {
    document.getElementById("pageStyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");

    style1.onclick = function () { swapStyleSheet("styles/main.css") };
	style2.onclick = function () { swapStyleSheet("styles/alternate.css"); };
}

window.onload = initate;
});

