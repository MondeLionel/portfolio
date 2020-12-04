// call global objects into our function scope

(function(w,d,$,s,anime,Howler,Splitting){

$(document).ready(function () {
 console.log('dom ready');


})//end dom ready


$(window).on('load',function(){


		//lets find out about our images

		$('document').imagesLoaded()
		  .always( function( instance ) {
		    console.log('all images loaded');
		  })
		  .done( function( instance ) {
		    console.log('all images successfully loaded');
		    $('body').removeClass("loading")
		    $('body').addClass("render")
		    bgAnim.play()
		    tl.play()
		    navtl.play()
		    brandTl.play()



		  })
		  .fail( function() {
		    console.log('all images loaded, at least one is broken');
		  })
		  .progress( function( instance, image ) {
		    var result = image.isLoaded ? 'loaded' : 'broken';
		    console.log( 'image is ' + result + ' for ' + image.img.src );
		  });

		
		// setTimeout(
		// 	function(){
				
		// 		// $('body').removeClass("loading")
		// 		$('body').addClass("render")
		// 	}, 5000);

		// Front Page text animation with Anime.js

		// @TODO refactor to gsap spiltText plugin
		// @TODO  add threejs 3d scene on later versions

		
	


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

		 	
	
		cvSwiper.on('slideChange', function(){
				// lets run a function to start anime animation
				console.log("slide changes");

			})


		let borzoiSwiper = new Swiper('.borzoi',{
			direction:'horizontal',
			parallax:true
		})

		borzoiSwiper.on("slideChange", function(){
			// borzoiTl.play()
		})

		borzoiSwiper.on("init", function(){
			
		})





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
let contentContainer = $('.mianContent');
let mainContainer = $('.mainHeader')[0];
let sun =  $('.sunMoon');
let myImg =  $('.mainImage');
let myImgWr =  $('.imgWrapper');
let svgCircle = $('.circle svg');
let shenihan = $('.shn');




/*////////////////////////////// */







var mainAnim = Splitting({
	/* target: String selector, Element, Array of Elements, or NodeList */
	target: ".animText",
	/* by: String of the plugin name */
	by: "words",
	/* key: Optional String to prefix the CSS variables */
	key: null
});

var headerAnim = Splitting({
	/* target: String selector, Element, Array of Elements, or NodeList */
	target: ".myLogo",
	/* by: String of the plugin name */
	by: "chars",
	/* key: Optional String to prefix the CSS variables */
	key: null
});


var borzoiContent = Splitting({
	target: ".animate--in",
	by:"chars",
	key:null
})

var sound = new Howl({
	src: ['../static/audio/see_dee.mp3'],
	autoplay: false,
	loop: false,
	volume: 0.5,

	onload:function(){
		console.log("sound loaded");
		$('.music-wrapper').removeClass('hiddenPlayer')

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



/*// main copy animation //*/

var bgAnim = anime({
	targets:'.bg',
	scale:[1.5, 1],
	easing:'easeOutExpo',
	delay:20,
	duration:2000

})
var tl = anime.timeline({
	targets: '.word',
	delay: function(el, i) { return (i * 100) + 1500 },
	duration: 500,
	easing: 'easeOutExpo',
	direction: '',
	loop: false
});

tl
.add({
	translateY: [150, 0],
		  // override the easing parameter
		  easing: 'easeOutExpo',
		})




/*// side Nav animation //*/
var navtl = anime.timeline({
	targets: '.cool-nav a span',
	delay: function(el, i) { return (i * 100) + 1500 },
	duration: 2500,
	easing: 'easeOutExpo',
	direction: '',
	loop: false
});

navtl
.add({
	translateY: [120, 0],
		  // override the easing parameter
		  easing: 'easeOutExpo',
		})



/*// Brand logo animation //*/
var brandTl = anime.timeline({
		  targets: '.myLogo [data-char]', //add split char
		  delay: function(el, i) { return (i * 100) + 500 },
		  duration: 700,
		  easing: 'easeOutExpo',
		
		  loop: false
		});

brandTl.add({translateY: [120, 0]})


/*// rotator cuff animation //*/
var rotateTl = anime.timeline({
		  targets: '.circle svg', 
		  duration: 10000,
		  easing: 'linear',
		  loop: true
		});

rotateTl.add({rotate:360})





// BORZOI ANIMATION

var borzoiTl = anime.timeline({
	targets:'h1 .animate--in .char',
	duration:1000,
	delay: anime.stagger(10),
	easing: 'easeInQuad',
	autoplay:false
})

borzoiTl.add({
	translateY:[120,0]
})
borzoiTl.add({
	targets:'.nav--borzoi .myLogo',
	translateY:[120,0]

})


/*////////////////////////////// */






// Mousemove shandis on body
if(document.documentURI.endsWith("/") === true){
let mainText = $('.hover');
let cursor = $('.cursor')[0];

// const textMove = function(e){
// 	const text = $('.animText');
// 	const { offsetX:x, offsetY:y } = e, 
// 	{ offsetWidth: width, offsetHeight:height } = this,
// 	move = 25,
// 	xMove = x/ width * (move*40+2) - move,
// 	yMove =  y/ height * (move*40+2) - move;

// 	// text.style.transform = `translate(${xMove}px, ${yMove}px); `
// 	text.css("transform",'translate(' + xMove + 10 + 'px ' + yMove +'px)')
// 	if(e.type === 'mouseleave') { 
// 		$('.cursor').css("padding", 10 + "px"); 
// 		text.css("transform", '');
// 	}
// 	 $('.cursor').css("padding", 30 + "px")
// 	// console.log(cursor)

// 	console.log(xMove,yMove)
// }




// const editCursor = e => {
// 	const { clientX:x, clientY:y} =e;

// 	cursor.style.left= x + 'px';
// 	cursor.style.top = y + 'px';

// }

// mainText.each(function(index, item){
// 	// console.log(index, item)
// 	item.addEventListener('mousemove', textMove)
// })

// mainText.each(function(index, item){
// 	// console.log(index, item)
// 	item.addEventListener('mouseleave', textMove)
// })

// // mainText.each(b => b.addEventListener('mouseleave', cusormove))
// window.addEventListener('mousemove', editCursor);



}

// function LoadIns(){

// }



/*
	 when we hover on the body on menu open the container becomes a 3d card
*/ 
	// anchor link click on sidebar on menu click event
$('._jsSideNav').on('click', function(){

	// we will reverse the load-in animations
	if(bgAnim.began){
		bgAnim.reverse()
	}
	console.log(bgAnim)
	tl.reverse()
	navtl.reverse()
	brandTl.reverse()

	body.toggleClass('sideNavOpen');
	$('#nav-icon1').toggleClass('open');

})


if(document.documentURI.endsWith("cv") === true){
	let i = 0;
	let text = 'Hello There. This website will use sound in Chrome. Download my CV if it tickles your fancy.'
	let text2 = ['Loading assets','Done!']
	let speed = 100;

	function typerWriter(){
		if(i < text.length){
			document.getElementById('oText').innerHTML += text.charAt(i);
			i++;
			setTimeout(typerWriter,speed)
		}
	}

	typerWriter()
	text2.map(function(text,index){
			$('.outPut')[0].innerHTML = text
			console.log(index)
		})
}




$('.closeTerminal').on('click',function(){
	$('.codeBlock').removeClass('terminal')
})


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



let el = document.querySelectorAll('#whish li');
let textanim = document.getElementsByClassName('animtext')

anime({
	targets:textanim,
	translateY:0,
	delay:anime.stagger(100)
})




// @TODO lets get opacity to zero then add class d-none
// @TODO remove d-none and then transition opacity and then start animations




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

shenihan.on('click', function(e){
	e.preventDefault()
	body.toggleClass("shenanigans--open")
	console.log("shenanigans")


	// play animation timeline
	borzoiTl.pause()
	borzoiTl.play()

})
// openApps.on('click', openMusic());
pauseMusic.on('click', closeMusic());
playmusic.on('click', playAudio());
stopMusic.on('click', stopAudio()); 
// appMenuItem.on('click', closeAppMenu());
$('.menu-1').on('click', appMenu());
$('._jsForm').on('click', function(){
	body.addClass('form-open');
	body.removeClass('sideNavOpen')
})

$('._jsFormClose').on('click', function(){
	body.removeClass('form-open');
})

	
$('.hidePlayer').on('click', removeActive())
	// item.on('click', itemSelected())
	// proximity menu open
	// check for null values
	
	// if (window.innerWidth > 900){
	// 	var movementStrength = 6;
	// 	if(main_content != null || main_content != undefined){
	// 		main_content.on("mousemove", function(e){
	// 			if (e.clientX < 618 && e.clientX > 200 && e.clientY > 428){
	// 				proximity.addClass("show");
	// 				var xtrans = movementStrength*100 / e.clientX *100 - proximity.width();
	// 				var xtrans = Math.floor(xtrans);
	// 				proximity.css("transform","translateX(" + xtrans + "px)");
	// 				// console.log(Math.floor(xtrans));
	// 			}else{
	// 				proximity.removeClass("show");
	// 			}
	// 		})
	// 	}
	// }else{
	// 	proximity.addClass("d-none")
	// }


$(document).on("scroll", function() {
    addScrolled();
  });

// app menu
// end event listeners






/*////////////////////////////// */








// declarative function?
let animateWords = function(){
	nameAnim.children().addClass("animate--in")
}



/**
 *  listen for scroll event 
 * @returns {DomElement}
 */ 
// function addScrolled(){
	
//   if ($(document).scrollTop() > 10) {
//     $('body').addClass("scrolled");
      
//     } else {
//       $('body').removeClass("scrolled");
      
//     }
// }
// addScrolled();




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
			svgCircle.css('opacity','0');

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
		svgCircle.css('opacity','1');
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





})(window,document,jQuery,Swiper,anime,Howler,Splitting)









