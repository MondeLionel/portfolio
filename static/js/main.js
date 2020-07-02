
(function(w,d,$){

	$(document).ready(function () {
// first page load
setTimeout(
	function(){
		if(window.location.pathname === '/'){
			$('body').addClass("show-permission");
		}

		$('body').removeClass("loading")
		$('body').addClass("render")
	}, 1000);


})//end dom ready

var body = $('body');
var projects = $("#projects");
var menu = $('.navigation');
var projects = document.getElementById("projects");
var main_content = $('.mainHeader');
var music_nav = $('.music-nav');
var item = $('.item');
var artist = $('.artist a');
var pauseMusic = $('.music-close');
const artistItem = $('.artist');
var proximity = $('.proximity');
var openApps = $('._jsOpenMusic');
var playmusic = $('.play-music');
var stopMusic = $('.pause-music');
var appMenuItem = $('.menu-item');
var sound = new Howl({
  src: ['../static/audio/I_cant_breate.mp3'],
  autoplay: false,
  loop: false,
  volume: 0.5,
  // 
  onload:function(){
  	console.log("sound loaded");

  },
  onend: function() {
    music_nav.removeClass("play");
	music_nav.addClass("paused");
  },
  onplayerror: function(error) {
    sound.once('unlock', function() {
      playAudio();
  })

    console.log(error);
}
});




// ******** EVENTS LISTENERS *********** //


// listen for click on menu


openApps.on('click', openMusic());
pauseMusic.on('click', closeMusic());
playmusic.on('click', playAudio());
stopMusic.on('click', stopAudio()); 
appMenuItem.on('click', closeAppMenu());



	
	// anchor link click on sidebar on menu click event
	$('._jsSideNav').on('click', function(){
		body.toggleClass('sideNavOpen');
		// changeText();
		$('#nav-icon1').toggleClass('open');
	})
	
	$('.hidePlayer').on('click', removeActive())
	// item.on('click', itemSelected())

	
	// proximity menu open
	// check for null values
	
	if (window.innerWidth > 900){
		var movementStrength = 6;
		if(main_content != null || main_content != undefined){
			main_content.on("mousemove", function(e){
				if (e.clientX < 618 && e.clientX > 200 && e.clientY > 428){
					proximity.addClass("show");
					var xtrans = movementStrength*100 / e.clientX *100 - proximity.width();
					var xtrans = Math.floor(xtrans);
					proximity.css("transform","translateX(" + xtrans + "px)");
					// console.log(Math.floor(xtrans));
				}else{
					proximity.removeClass("show");
				}
			})
		}
	}else{
		proximity.addClass("d-none")
	}


$(document).on("scroll", function() {
    addScrolled();
  });

// app menu
$('.menu-1').on('click', function(e){
		e.preventDefault();
		appMenu();
})



/* end event listeners */
function addScrolled(e){
  if ($(document).scrollTop() > 10) {
    $('body').addClass("scrolled");
      
    } else {
      $('body').removeClass("scrolled");
      
    }
}
addScrolled();

// // function to add active class
// function classBasedNav (){
// 	// e.preventDefault();(
// 		 $(this).siblings().removeClass("active");
// 		 $(this).addClass("active");
// 	}



// NOT FUNCTIONS BUT CLOSURES ?
function openMenu(){
	return body.addClass("sideNavOpen");
	
}

function openMusic(){
	return function(){
		body.addClass("music-open");
		body.removeClass("sideNavOpen");
	}
	
}

function closeMusic(){
	return function(){
		body.removeClass("music-open");
	}
}


function playAudio (){
	return function(){
		if(sound._src != null || sound._src != undefined){
			sound.play();
			console.log(`${sound._src} is currently playing`);
		}else{
			console.log(`${sound._src} is empty`);
		}
		music_nav.removeClass("paused");
		music_nav.addClass("play");
	}


}

function stopAudio(){
	return function(){
		sound.pause()
		music_nav.removeClass("play");
		music_nav.addClass("paused");
	}

}

function removeActive(){
	return function(){
		artistItem.removeClass("active");
	}
}


function allowSounds(){
	return function(){
		body.removeClass("show-permission");
		console.log("sound allowed")
	}
	
}

function noSounds(){
	return function(){
		sound.unload();
		body.removeClass("show-permission");
		body.addClass("no-audio");
		console.log("sound disallowed");
	}

}


function appMenu(){
	return function () {
		$(".mobile").addClass("menu-open");
	}
}

function closeAppMenu(){
	return function (){
		$(".mobile").removeClass("menu-open");
		$('.app-content').addClass('rotate-in');
		console.log("in close app menu")
		setTimeout(function(){
			$('.app-content').removeClass('rotate-a-bit');

		}, 2000)
	}

}

})(window,document,jQuery)









