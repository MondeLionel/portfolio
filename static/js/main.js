

$(document).ready(function () {
// first page load
setTimeout(
	function(){
		$('body').removeClass("loading");

}, 10000)


	// mousemove background beeyatch
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$(".mainHeader").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 20;
          $('.mainHeader').css("background-position", newvalueX+"px     "+newvalueY+"px");
	});
})



var body = $('body');
var projects = $("#projects");
var menu = $('.navigation');
var projects = document.getElementById("projects");
var main_content = $('.mainHeader');
var sound = new Howl({
	src:['../static/audio/1.mp3']
})
var artist = $('.artist a');
var pauseMusic = $('.music-close');




// anchor link click on sidebar
$('._jsSideNav').on('click', function(){
	body.toggleClass('sideNavOpen');
	// changeText();
	$('#nav-icon1').toggleClass('open');

})

// proximity menu open
projects.addEventListener("mousemove", function(e){
if (e.clientX < 200){
	body.addClass("wee")
}else{
	body.removeClass("wee")
	}
});

function openMenu(){
	body.addClass("sideNavOpen");
	body.removeClass("wee");
}

function openMusic(){
	body.addClass("music-open");
	body.removeClass("wee");
	body.removeClass("sideNavOpen");
}

function closeMusic(){
	body.removeClass("music-open");
}


function changeText(){
	if(body.hasClass("sideNavOpen")){
		menu.text("X CLOSE MENU");
	}else{
		menu.text("MENU");
	}
}


function playAudio (){
	console.log("Fire sound");
	sound.play();
}

function stopAudio(){
	console.log("pause sound")
	sound.pause();
}



artist.on('click', playAudio());
pauseMusic.on('click',stopAudio());