$(document).ready(function() {


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
		else if (programSelected === "scholarships"){
			kindergartenFadeOut()
			highschoolFadeOut()
			loanFadeOut()
			scholarshipsFadeIn()
		} 
		else if (programSelected === "loan programs"){
			kindergartenFadeOut()
			highschoolFadeOut()
			scholarshipsFadeOut()
			loanFadeIn()
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
		$(this).attr('src', 'images/afe-color.png').fadeIn(200)
	})	
}

function loanFadeOut(){
	$('.loans-aci').fadeOut(200, function(){
		$(this).attr('src', 'images/aci-fade.png').fadeIn(200)
	})
	$('.loans-afe').fadeOut(200, function(){
		$(this).attr('src', 'images/afe-fade.png').fadeIn(200)
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
		$(this).attr('src', 'images/afe-color.png').fadeIn(200)
	})
}

function kindergartenFadeOut() {
	$('.kindergarten-acm').fadeOut(200, function(){
		$(this).attr('src', 'images/acm-fade.png').fadeIn(200)
	})
	$('.kindergarten-afe').fadeOut(200, function(){
		$(this).attr('src', 'images/afe-fade.png').fadeIn(200)
	})
}

})


