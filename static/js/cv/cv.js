const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth:true,
	lerp:0.1
});


// auto Play videos
let options = {
	root:null,
	rootMargin:'0px',
	threshold:1.0
}

let v_id = ['vid0','vid1','vid2'];

	let callback = function(entries,observer){

for (var i = 0; i < v_id.length; i++) {
		entries.forEach(entry => {
			if(entry.target.id ===  v_id[i]){
			// console.log(v_id)
			if(entry.isIntersecting){
				entry.target.play()
				console.log("play")
			}
			else{
				entry.target.pause()
				console.log("pause")
			}

		}
	})
	}

}


let observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelectorAll("video"));


//Play video on click

