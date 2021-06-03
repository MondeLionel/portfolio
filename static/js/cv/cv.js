const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth:true,
	lerp:0.1
});


// auto Play videos
let options = {
	root:null,
	rootMargin:'10px',
	threshold:1.0
}
let video = document.querySelector("video");


	let callback = function(entries,observer){
console.log("callback")
		entries.forEach(entry => {
			if(entry.target.id === "jap"){
			console.log(entry.target.id)
				if(entry.isIntersecting){
					entry.target.play()
					console.log("playing")
				}
				else{
					entry.target.pause()
					console.log("pause")
				}

		}
	})
	

}


let observer = new IntersectionObserver(callback, options);

observer.observe(video);




//Play video on click

const arsenalSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.756 192.756"><path fill-rule="evenodd" clip-rule="evenodd" fill="none" d="M0 0h192.756v192.756H0V0z"/><path d="M50.913 45.107v.14m13.983 18.118h.372" fill="none" stroke="#9ea176" stroke-width=".929" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/><path d="M150.469 83.016v-.65c.883-16.91-1.533-36.05-7.342-57.467-31.682-10.267-62.901-10.312-93.655-.139-10.499 39.023-9.755 72.007 2.277 98.998.139.232.232.465.372.744 0 0 1.068 2.045 3.159 6.225h-.046c.279.557.65 1.162.976 1.766 8.919 15.842 22.252 29.453 39.952 40.789 29.779-18.955 47.339-44.18 52.728-75.725.047-.371.094-.742.186-1.068h-.047l1.44-13.473z" fill-rule="evenodd" clip-rule="evenodd" fill="#c6232d"/><path d="M160.178 26.386C117.438 8.454 74.883 8.5 32.562 26.525c-19.093 70.428 2.23 121.53 63.924 153.26 61.555-31.963 82.785-83.111 63.692-153.399zm-14.123-.511c3.531 1.208 6.922 2.463 10.174 3.856v.093c5.018 19.187 6.969 36.886 5.762 53.192H109.68c-4.043-2.416-8.502-3.577-13.426-3.577l-.929.046c-4.6.093-8.781 1.255-12.498 3.531H57.602c-1.719.046-3.159.604-4.274 1.719-1.115.929-1.719 2.137-1.858 3.53h-2.694c-2.417 2.509-2.417 4.971 0 7.433h2.694c.092 1.348.697 2.602 1.858 3.717 1.208 1.068 2.602 1.625 4.135 1.672.093 0 .14 0 .232.047l12.404-.65a27.892 27.892 0 00-.557 5.668c0 1.301.046 2.461.186 3.484-4.553 6.131-10.406 11.055-17.607 14.865l-2.137 1.115c-1.672.789-3.624 1.578-5.807 2.416-15.703-26.574-18.351-59.326-7.898-98.348 3.205-1.395 6.504-2.648 9.849-3.811l3.345-1.114c30.754-10.174 61.974-10.128 93.655.139l2.927.977zm-57.792 80.508c0 .697.046 1.303.139 1.812l-11.15 6.457c-1.115-2.508-1.672-5.248-1.672-8.223 0-3.02.557-5.76 1.672-8.27l11.15 6.459a10.452 10.452 0 00-.139 1.765zm7.944-3.438h.093c.418 0 .883.047 1.301.232.186.047.51.232.975.605l.186.186c.512.51.836 1.115.977 1.904l-.047 1.207c-.139.605-.465 1.162-.93 1.719-.092 0-.139.047-.186.141-.418.324-.789.557-1.162.697a4.619 4.619 0 01-1.114.139l-1.022-.139a2.886 2.886 0 01-1.208-.697c-.093-.047-.139-.094-.139-.141-.557-.557-.883-1.113-.929-1.719l-.093-.697.046-.51a2.919 2.919 0 01.976-1.904c0-.094.046-.141.139-.141.372-.324.697-.557 1.022-.65.186-.091.558-.185 1.115-.232zm-2.37-4.273c-1.161.371-2.183.977-3.02 1.859l-11.149-6.505a14.81 14.81 0 011.998-2.276c3.391-3.438 7.433-5.436 12.171-5.946v12.868zm-12.171 22.392a22.854 22.854 0 01-2.044-2.322l11.196-6.459a8.834 8.834 0 003.02 1.812v12.916c-4.692-.511-8.734-2.509-12.172-5.947zm-6.643 1.348c.464.604 1.208 1.486 2.323 2.646 5.25 5.203 11.521 7.805 18.908 7.805 7.34 0 13.659-2.602 18.862-7.805 5.203-5.248 7.852-11.566 7.852-18.906 0-1.023-.047-1.998-.141-2.975l10.824-2.322c2.137-.604 3.299-1.812 3.484-3.531l23.229-1.579c-6.41 33.681-27.734 60.022-64.063 78.976-.094 0-.14.047-.14.094l-.372-.188c-21.695-11.566-37.955-25.596-48.825-42.135 1.672-.232 3.67-.604 6.039-1.16l2.23-.605c5.946-1.719 12.543-4.506 19.79-8.315zm23.6 4.645v-12.914c1.254-.418 2.275-1.021 3.158-1.812l11.242 6.457c-.416.512-1.068 1.256-1.996 2.277-3.484 3.484-7.619 5.482-12.404 5.992zm14.4-33.031l-11.195 6.458c-.975-.883-2.045-1.533-3.205-1.859V85.804c4.738.464 8.873 2.416 12.404 5.946.928.975 1.58 1.719 1.996 2.276zm2.372 4.089a20.316 20.316 0 011.625 6.504l.047 1.811c0 3.066-.604 5.854-1.719 8.41l-11.197-6.551.141-.559.092-1.348c0-.463-.092-1.068-.186-1.811l11.197-6.456z" fill-rule="evenodd" clip-rule="evenodd" fill="#9ea176"/><path d="M104.291 107.73l12.729-3.111a20.316 20.316 0 00-1.625-6.504l-11.197 6.457c.094.742.186 1.348.186 1.811l-.093 1.347zm-2.463-7.246l11.195-6.458c-.416-.557-1.068-1.301-1.996-2.276-3.531-3.53-7.666-5.482-12.404-5.946v12.821c1.16.326 2.231.977 3.205 1.859zm-3.252 3.299c-.465-.373-.789-.559-.975-.605-.418-.186-.883-.232-1.301-.232h-.094c-.557.047-.929.141-1.114.232-.325.094-.651.326-1.022.65-.093 0-.139.047-.139.141a2.926 2.926 0 00-.976 1.904l-.046.51.093.697c.046.605.372 1.162.929 1.719 0 .047.046.094.139.141.326.324.743.557 1.208.697l1.022.139c.371 0 .743-.047 1.114-.139.373-.141.744-.373 1.162-.697.047-.094.094-.141.186-.141.465-.557.791-1.113.93-1.719l.047-1.207c-.141-.789-.465-1.395-.977-1.904l-.186-.186zm-7.758-3.252c.836-.883 1.858-1.488 3.02-1.859V85.804c-4.738.511-8.78 2.508-12.171 5.946-.604.558-1.3 1.301-1.998 2.276l11.149 6.505zm-2.555 5.852c0-.65.046-1.207.139-1.764l-11.15-6.459c-1.115 2.51-1.672 5.25-1.672 8.27 0 2.975.557 5.715 1.672 8.223l11.15-6.457a10.262 10.262 0 01-.139-1.813z" fill-rule="evenodd" clip-rule="evenodd" fill="#9ea176"/><path d="M152.326 95.838v.093c-5.621 32.333-24.297 58.627-56.026 78.79 36.282-18.953 57.653-45.342 64.11-79.254l-8.084.371zm-99.555 35.074l-5.807 1.58c10.871 16.539 27.13 30.568 48.825 42.135-19.047-12.217-33.356-26.805-43.018-43.715zM156.229 29.73c-3.252-1.393-6.643-2.648-10.174-3.856 6.039 20.674 8.549 39.906 7.572 57.606l8.316-.093c1.254-16.492-.65-34.332-5.715-53.564v-.093h.001zM46.127 25.875c-3.345 1.162-6.644 2.416-9.849 3.811-10.406 38.976-7.712 71.868 8.13 98.719l5.76-2.369C36.464 98.254 35.117 64.852 46.127 25.875z" fill-rule="evenodd" clip-rule="evenodd" fill="#355170"/><path d="M59.553 40.137l-8.594 1.161c.558 1.069.558 2.369-.046 3.809v.14c-1.999 6.364-4.274 12.404-6.922 18.118h6.178l1.069-4.646h5.9l.836 4.646h6.922c-2.138-7.34-3.903-15.098-5.343-23.228zM56.44 54.863h-3.902l2.509-7.479 1.393 7.479z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/><path d="M55.047 47.384l1.393 7.479h-3.902l2.509-7.479zm-4.134-2.137c-1.999 6.364-4.274 12.404-6.922 18.118h6.178l1.069-4.646h5.9l.836 4.646h6.922c-2.137-7.34-3.903-15.098-5.343-23.228l-8.594 1.161c.558 1.069.558 2.369-.046 3.809" fill="none" stroke="#9ea176" stroke-width=".929" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/><path d="M71.771 63.365c-1.115-9.199.604-13.426 5.203-12.683l.372-4.181c-1.812-.743-3.81.279-5.946 3.16l.139-2.787-5.574.232c.511 5.667.278 11.103-.697 16.26h6.503v-.001z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/><path d="M76.974 50.682c-4.6-.743-6.318 3.484-5.203 12.683h-6.504c.976-5.157 1.208-10.592.697-16.26l5.574-.232-.139 2.787c2.137-2.88 4.134-3.902 5.946-3.16l-.371 4.182z" fill="none" stroke="#9ea176" stroke-width=".929" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/><path d="M138.994 63.365h6.504c-1.395-6.829-2.416-14.169-3.02-21.974l-6.133-1.161a107.086 107.086 0 012.649 23.135z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/><path d="M145.498 63.365c-1.395-6.829-2.416-14.169-3.02-21.974l-6.133-1.161a107.023 107.023 0 012.648 23.135h6.505z" fill="none" stroke="#9ea176" stroke-width=".929" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/><path d="M105.127 60.206l-1.58-1.765c-3.529 2.74-6.039 2.276-7.526-1.301 1.999-.836 5.018-2.044 9.012-3.67 0-1.905-.604-3.716-1.811-5.435-1.256-1.719-2.975-2.555-5.25-2.602-2.277-.046-4.274.836-6.086 2.602-1.719 1.766-2.555 3.902-2.555 6.457 0 2.462.836 4.6 2.555 6.411 1.255 1.254 2.648 2.09 4.182 2.462h4.227c1.533-.372 2.928-1.208 4.182-2.462l.65-.697zm-7.525-11.615c1.764.465 2.367 1.626 1.811 3.484l-4.274 1.766c-.372-2.926.418-4.692 2.463-5.25z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/><path d="M99.412 52.076c.557-1.858-.047-3.019-1.811-3.484-2.045.558-2.834 2.323-2.463 5.25l4.274-1.766zm5.621 1.394c-3.994 1.625-7.014 2.834-9.012 3.67 1.487 3.578 3.997 4.042 7.526 1.301l1.58 1.765-.65.697c-1.254 1.254-2.648 2.09-4.182 2.462-.789.139-1.486.232-2.09.232-.697 0-1.394-.093-2.137-.232-1.534-.372-2.927-1.208-4.182-2.462-1.719-1.812-2.555-3.949-2.555-6.411 0-2.555.836-4.691 2.555-6.457 1.812-1.766 3.81-2.648 6.086-2.602 2.275.047 3.994.883 5.25 2.602 1.208 1.718 1.811 3.53 1.811 5.435z" fill="none" stroke="#9ea176" stroke-width=".929" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/><path d="M121.572 63.365c-.744-4.088-1.021-8.502-.93-13.24-2.416-4.553-5.668-5.11-9.756-1.534l-.465-2.322-5.203-.093c1.256 4.738 1.488 10.499.791 17.189h6.039c-.604-3.624-.744-7.666-.465-11.986 1.348-2.091 2.555-2.091 3.623 0a85.923 85.923 0 010 11.986h6.366z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/><path d="M112.049 63.365h-6.039m15.562 0h-6.365m0 0a85.923 85.923 0 000-11.986c-1.068-2.091-2.275-2.091-3.623 0-.279 4.32-.139 8.362.465 11.986m-6.039 0c.697-6.69.465-12.451-.791-17.189l5.203.093.465 2.322c4.088-3.576 7.34-3.019 9.756 1.534-.092 4.738.186 9.151.93 13.24" fill="none" stroke="#9ea176" stroke-width=".929" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/><path d="M88.124 49.893v-3.252c-4.831-1.766-8.455-.837-10.964 2.787l-.139.14c-1.162 1.951-.697 3.67 1.394 5.063 4.46 1.765 6.411 3.159 5.761 4.181l-.093.232c-1.765 1.858-4.367 1.301-7.805-1.579l-.093 4.599c1.301.604 2.416 1.022 3.345 1.301 1.811.464 3.531.464 5.11 0 1.44-.511 2.834-1.486 4.182-2.927 2.137-3.669.232-6.689-5.668-9.059-1.858-.79-1.858-1.579-.046-2.323 1.16-.232 2.832.001 5.016.837z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/><path d="M84.082 59.044c-1.765 1.858-4.367 1.301-7.805-1.579l-.093 4.599c1.301.604 2.416 1.022 3.345 1.301 1.811.464 3.531.464 5.11 0 1.44-.511 2.834-1.486 4.182-2.927 2.137-3.669.232-6.689-5.668-9.059-1.858-.79-1.858-1.579-.046-2.323 1.162-.232 2.833 0 5.017.836V46.64c-4.831-1.766-8.455-.837-10.964 2.787l-.139.14c-1.162 1.951-.697 3.67 1.394 5.063 4.46 1.765 6.411 3.159 5.761 4.181" fill="none" stroke="#9ea176" stroke-width=".929" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/><path d="M122.779 47.337c0 1.022 0 2.463.094 4.414 4.367-2.695 6.875-2.648 7.525.324-6.363 1.301-9.152 3.624-8.455 6.969.512 2.276 1.395 3.717 2.648 4.321 1.58.743 3.346.743 5.389 0l1.533-.976 1.115 1.068h5.203v-.092c-1.209-3.252-1.812-7.248-1.859-11.986-1.298-3.949-5.712-5.296-13.193-4.042zm7.991 7.758l.234 4.554c-2.324 1.021-3.578.417-3.857-1.766.465-2.044 1.627-2.973 3.484-2.788h.139z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/><path d="M122.873 51.751c4.367-2.695 6.875-2.648 7.525.324-6.363 1.301-9.152 3.624-8.455 6.969.512 2.276 1.395 3.717 2.648 4.321 1.58.743 3.346.743 5.389 0l1.533-.976 1.115 1.068h5.203c-1.209-3.344-1.812-7.34-1.859-12.078-1.299-3.949-5.713-5.296-13.193-4.042h-.045l.139 4.414zm7.897 3.344l.234 4.554c-2.324 1.021-3.578.417-3.857-1.766.465-2.044 1.627-2.973 3.484-2.788" fill="none" stroke="#9ea176" stroke-width=".929" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/><path d="M152.691 83.016H109.68c-4.043-2.416-8.502-3.577-13.426-3.577l-.929.046c-4.6.093-8.781 1.255-12.498 3.531H57.602c-1.719.046-3.159.604-4.274 1.719-1.115.929-1.719 2.137-1.858 3.53h-2.694c-2.417 2.509-2.417 4.971 0 7.433h2.694c.092 1.348.697 2.602 1.858 3.717 1.208 1.068 2.602 1.625 4.135 1.672.093 0 .14 0 .232.047l12.404-.65a27.892 27.892 0 00-.557 5.668c0 1.301.046 2.461.186 3.484-4.481 6.035-10.224 10.902-17.271 14.686-.543.275-1.124.656-1.571.867m37.377-18.806c0 .697.046 1.303.139 1.812l-11.15 6.457c-1.115-2.508-1.672-5.248-1.672-8.223 0-3.02.557-5.76 1.672-8.27l11.15 6.459a10.452 10.452 0 00-.139 1.765zm7.944-3.438h.093c.418 0 .883.047 1.301.232.186.047.51.232.975.605l.186.186c.512.51.836 1.115.977 1.904l-.047 1.207c-.139.605-.465 1.162-.93 1.719-.092 0-.139.047-.186.141-.418.324-.789.557-1.162.697a4.619 4.619 0 01-1.114.139l-1.022-.139a2.886 2.886 0 01-1.208-.697c-.093-.047-.139-.094-.139-.141-.557-.557-.883-1.113-.929-1.719l-.093-.697.046-.51a2.919 2.919 0 01.976-1.904c0-.094.046-.141.139-.141.372-.324.697-.557 1.022-.65.186-.091.558-.185 1.115-.232zm-2.37-4.273c-1.161.371-2.183.977-3.02 1.859l-11.149-6.505a14.81 14.81 0 011.998-2.276c3.391-3.438 7.433-5.436 12.171-5.946v12.868zm-12.171 22.392a22.854 22.854 0 01-2.044-2.322l11.196-6.459a8.834 8.834 0 003.02 1.812v12.916c-4.692-.511-8.734-2.509-12.172-5.947zM53.894 131.07c.688-.178 1.206-.287 1.757-.465 5.837-1.729 12.294-4.475 19.372-8.193.464.604 1.208 1.486 2.323 2.646 5.25 5.203 11.521 7.805 18.908 7.805 7.34 0 13.659-2.602 18.862-7.805 5.203-5.248 7.852-11.566 7.852-18.906 0-1.023-.047-1.998-.141-2.975l10.824-2.322c2.137-.604 3.299-1.812 3.484-3.531l14.41-1.012m-52.922 30.745v-12.914c1.254-.418 2.275-1.021 3.158-1.812l11.242 6.457c-.416.512-1.068 1.256-1.996 2.277-3.484 3.484-7.619 5.482-12.404 5.992zm14.4-33.031l-11.195 6.458c-.975-.883-2.045-1.533-3.205-1.859V85.804c4.738.464 8.873 2.416 12.404 5.946.928.975 1.58 1.719 1.996 2.276zm2.372 4.089a20.316 20.316 0 011.625 6.504l.047 1.811c0 3.066-.604 5.854-1.719 8.41l-11.197-6.551.141-.559.092-1.348c0-.463-.092-1.068-.186-1.811l11.197-6.456z" fill="none" stroke="#fff" stroke-width=".949" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/></svg>`


const arsenalLogoDiv = document.getElementById("arsenal");

arsenalLogoDiv.style = `width:150px; display:block; margin:0 auto; position:absolute; bottom:0; right:-8em;`
arsenalLogoDiv.innerHTML = arsenalSVG;


anime({
  targets: '#arsenal svg path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 20 },
  direction: 'alternate',
  loop: true
});