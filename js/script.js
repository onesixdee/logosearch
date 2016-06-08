$(document).ready(function() {


// function Image(imgfade, imgcolor) {

// 	this.imageFade = imgfade;
// 	this.imageColor = imgcolor;

// 	this.imageSwap = function(){
// 		console.log(this,'this')
// 			$(this.imageFade).fadeOut(200, function(){
// 		$(this).attr('src', this.imageColor).fadeIn(200)

// 		})
// 	}
// }

	$('#search-btn').click(function(){
		var programSelected = $('#program').val()
		var educationSelected = $('#education').val()

		if (programSelected === "scholarships" && educationSelected === "highschool") {
			loanFadeOut()
			kindergartenFadeOut()
			scholarshipsFadeIn()
			highschoolFadeIn()
		}
		else if (programSelected === "scholarships" && educationSelected === "kindergarten") {
			highschoolFadeOut()
			loanFadeOut()
			scholarshipsFadeIn()
			kindergartenFadeIn()
		}
		else if (programSelected === "loan programs" && educationSelected === "highschool"){
			scholarshipsFadeOut()
			kindergartenFadeOut()
			loanFadeIn()
			highschoolFadeIn()
		}
		else if (programSelected === "loan programs" && educationSelected === "kindergarten") {
			highschoolFadeOut()
			scholarshipsFadeOut()
			loanFadeIn()
			kindergartenFadeIn()
		}
		else if (programSelected === "search all" || educationSelected === "search all") {
			scholarshipsFadeIn()
			loanFadeIn()
			highschoolFadeIn()
			kindergartenFadeIn()
		}
		 if (programSelected === "scholarships"){
			kindergartenFadeOut()
			highschoolFadeOut()
			loanFadeOut()
			scholarshipsFadeIn()
	
			var scholarship = new Image('.scholarships-acm','images/acm-color.png');
			console.log(scholarship)
			scholarship.imageSwap()

		} 
		else if (programSelected === "loan programs"){
			kindergartenFadeOut()
			highschoolFadeOut()
			scholarshipsFadeOut()
			loanFadeIn()

			// var loans = new Image('.loans-aci','images/aci-color.png');
			// console.log(loans)
			// loans.imageSwap()
		}	
		else if (educationSelected === "highschool") {
			scholarshipsFadeOut()
			loanFadeOut()
			kindergartenFadeOut()
			highschoolFadeIn()
		}
		else if (educationSelected === "kindergarten"){
			scholarshipsFadeOut()
			loanFadeOut()
			highschoolFadeOut()
			kindergartenFadeIn()
		} 
		else {
			scholarshipsFadeIn()
			loanFadeIn()
			highschoolFadeIn()
			kindergartenFadeIn()
		}
	})

function scholarshipsFadeIn() {
	$('.scholarships-acm').fadeOut(200, function(){
		$(this).attr('src', 'images/acm-color.png').fadeIn(200)
	})
	$('.scholarships-aci').fadeOut(200, function(){
		$(this).attr('src', 'images/aci-color.png').fadeIn(200)
	})
}

function scholarshipsFadeOut(){
	$('.scholarships-acm').fadeOut(200, function(){
		$(this).attr('src', 'images/acm-fade.png').fadeIn(200)
	})

	$('.scholarships-aci').fadeOut(200, function(){
		$(this).attr('src', 'images/aci-fade.png').fadeIn(200)
	})
}

function loanFadeIn() {
	$('.loans-aci').fadeOut(200, function(){
		$(this).attr('src', 'images/aci-color.png').fadeIn(200)
	})
	$('.loans-afe').fadeOut(200, function(){
		$(this).attr('src', 'images/AFE-color.png').fadeIn(200)
	})	
}

function loanFadeOut(){
	$('.loans-aci').fadeOut(200, function(){
		$(this).attr('src', 'images/aci-fade.png').fadeIn(200)
	})
	$('.loans-afe').fadeOut(200, function(){
		$(this).attr('src', 'images/AFE-fade.png').fadeIn(200)
	})	
}

function highschoolFadeIn(){
	$('.highschool-aci').fadeOut(200, function(){
		$(this).attr('src', 'images/aci-color.png').fadeIn(200)
	})
	$('.highschool-acm').fadeOut(200, function(){
		$(this).attr('src', 'images/acm-color.png').fadeIn(200)
	})
}

function highschoolFadeOut() {
	$('.highschool-aci').fadeOut(200, function(){
		$(this).attr('src', 'images/aci-fade.png').fadeIn(200)
	})
	$('.highschool-acm').fadeOut(200, function(){
		$(this).attr('src', 'images/acm-fade.png').fadeIn(200)
	})
}

function kindergartenFadeIn() {
	$('.kindergarten-acm').fadeOut(200, function(){
		$(this).attr('src', 'images/acm-color.png').fadeIn(200)
	})
	$('.kindergarten-afe').fadeOut(200, function(){
		$(this).attr('src', 'images/AFE-color.png').fadeIn(200)
	})
}

function kindergartenFadeOut() {
	$('.kindergarten-acm').fadeOut(200, function(){
		$(this).attr('src', 'images/acm-fade.png').fadeIn(200)
	})
	$('.kindergarten-afe').fadeOut(200, function(){
		$(this).attr('src', 'images/AFE-fade.png').fadeIn(200)
	})
}

})


