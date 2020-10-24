// call global objects into our function scope

(function(w,d,$,s,anime){

$(document).ready(function () {



})//end dom ready


$(window).load(function(){
		// first page load
		/*
		* Run only once of page load
		* @params 
		* @returns
		*/ 


		// lets animate the terminal
		// terminalAnim();




		typerWriter()

		//lets find out about our images

		$('main').imagesLoaded()
		  .always( function( instance ) {
		    console.log('all images loaded');
		  })
		  .done( function( instance ) {
		    console.log('all images successfully loaded');
		  })
		  .fail( function() {
		    console.log('all images loaded, at least one is broken');
		  })
		  .progress( function( instance, image ) {
		    var result = image.isLoaded ? 'loaded' : 'broken';
		    console.log( 'image is ' + result + ' for ' + image.img.src );
		  });

		
		setTimeout(
			function(){
				
				$('body').removeClass("loading")
				$('body').addClass("render")
			}, 1000);


		// initialize swiper and howler


		var mySwiper = new Swiper('.history',{
			slidesPerView:1,

		})

		// we want to run an animation on certain events
		// such as oninit and onslidechange
		// For  no other reason other than that we can
		var cvSwiper = new Swiper('.swiper-container.cv',{
			slidesPerView:1
		})

		 	let el = document.querySelectorAll('#whish li');
		 	let textanim = document.getElementsByClassName('animtext')

	 	anime({
	 		targets:textanim,
	 		translateY:0,
	 		delay:anime.stagger(100)
	 	})


	 // 	var tl = anime.timeline({
		//   easing: 'easeOutExpo',
		//   duration: 750
		// });

		// tl.add({
		// 	targets:textanim,
		// 	translateY:0
		// }, '-=20')

	


		cvSwiper.on('slideChange', function(){
				// lets run a function to start anime animation
				console.log("slide changes");

			})


		var sound = new Howl({
			src: ['../static/audio/I_cant_breate.mp3'],
			autoplay: false,
			loop: false,
			volume: 0.5,

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
					console.log(error);

				})

				console.log(error);
			}
		});

		
	})


// declare variables as many as possible
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
var closeMenu = $('#nav-icon1');
let nameAnim = $('.mydetails');
let closeCode = $('.code a');


// TYPEWRITER EFFECT SIMPLE
let i = 0;
let text = 'Hello There. This website will use sound in Chrome. Download my CV if it tickles your fancy.'
let speed = 100;

function typerWriter(){
	if(i < text.length){
		document.getElementById('oText').innerHTML += text.charAt(i);
		i++;
		setTimeout(typerWriter,speed)
	}
}



// animate CV
var cVtl = anime.timeline({
	easing:'easeOutExpo',
	duration:1000
})

// console.log(cVtl)renderedText


let cvVisible = anime({
	targets: '.renderedText',
	opacity:[0,1],
	duration:500
})



// lets get opacity to zero then add class d-none



// remove d-none and then transition opacity and then start animations




// ******** EVENTS LISTENERS *********** //
 
/*
* add permissions COOKIES
*	@TODO Refactor
*
*/ 

$("#no").on('click', function(){
	document.cookie = "allowsound=no;path=/;max-age=259200";
	body.removeClass("show-permission");
})
$("#yes").on('click', function(){
	document.cookie = "allowsound=yes;path=/;max-age=259200";
	body.removeClass("show-permission");
})

closeCode.on('click', function(e){
	e.preventDefault()
	cVtl.add({
		targets: '.terminalVisible',
		translateX: '-100%',
		opacity: 0
	})

	cvVisible.play()
})


openApps.on('click', openMusic());
pauseMusic.on('click', closeMusic());
playmusic.on('click', playAudio());
stopMusic.on('click', stopAudio()); 
appMenuItem.on('click', closeAppMenu());
$('.menu-1').on('click', appMenu());
$('._jsForm').on('click', function(){
	body.addClass('form-open');
	body.removeClass('sideNavOpen')
})

$('._jsFormClose').on('click', function(){
	body.removeClass('form-open');
})



	
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




// end event listeners


// declarative function?
let animateWords = function(){
	nameAnim.children().addClass("animate--in")
}



/**
 *  listen for scroll event 
 * @returns {DomElement}
 */ 
function addScrolled(){
	
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

/*
* Open menu
* @returns {Element} 
*/
function openMenu(){
	return body.addClass("sideNavOpen");
	
}


/*
* transition to another page
* @returns {Function}
*/
function openMusic(){
	return function(){
		body.removeClass("sideNavOpen");
		closeMenu.removeClass("open");
		setTimeout(function(){
			body.addClass("music-open");
		},1000)
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
			console.log(`I can't Breathe`);
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
		// $('.app-content').addClass('rotate-in');
		console.log("in close app menu")
		
	}

}





})(window,document,jQuery,Swiper,anime)









