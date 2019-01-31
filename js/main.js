$(document).ready(function() {
	$('.article-slide').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
	})

	$(document).ready(function() {
		$('.ult-slide').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: true,
		})
	})
})

var img1 = document.querySelector('.img-slide-wr img:first-child')
var img2 = document.querySelector('.img-ult-wr img:first-child')

function loaded1() {
	let root = document.documentElement
	let height1 = img1.clientHeight
	root.style.setProperty('--imageheight1', height1 / 2 + 'px')
}

function loaded2() {
	let root = document.documentElement
	let height2 = img2.clientHeight
	root.style.setProperty('--imageheight2', height2 / 2 + 'px')
}

if (img1.complete) {
	loaded1()
} else {
	img1.addEventListener('load', loaded1)
	img1.addEventListener('error', function() {
		alert('error')
	})
}

if (img2.complete) {
	loaded2()
} else {
	img2.addEventListener('load', loaded2)
	img2.addEventListener('error', function() {
		alert('error')
	})
}
