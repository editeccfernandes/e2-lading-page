
$(document).ready(function () {
	var document_height = $(document).height();
	var window_height = $(window).height();
	var window_scroll_top = $(window).scrollTop();
	$(function () {
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();
			if (scroll > 300) {
				$('.top').fadeIn(300);
				$('.navigation').addClass('visible');
				$('.small_logo').addClass('visible');

			} else if (scroll == 0) {
				$('.top').fadeOut(300);
				$('.navigation').removeClass('visible');
				$('.small_logo').removeClass('visible');

			} else {
				$('.top').fadeOut(300);
				$('.navigation').removeClass('visible');
				$('.small_logo').removeClass('visible');


			}
		});
	});
	$('.top button, .navigation__item__logo').on('click', function () {
		$(window).scrollTop(0);
	});
	$.fn.inviewport = function () {
		var offset_top = $(this).offset().top;
		var element_height = offset_top + $(this).outerHeight();
		var window_scroll_top = $(window).scrollTop();
		var viewport_bottom = window_scroll_top + $(window).height();
		return element_height > window_scroll_top && offset_top < viewport_bottom;
	};
	/*
	$(window).on('resize scroll', function() {
		if($('#destaques').inviewport()){
			$('#destaques-nav').addClass('bg--green')

		} else{
			$('#destaques-nav').removeClass('bg--green')
		}
		if ($('#about').inviewport()) {
			$('#about-nav').addClass(' bg--blue');
		} else {
			$('#about-nav').removeClass(' bg--blue');
		}
	});
	$(window).on('resize scroll', function() {
		if ($('#episodes').inviewport()) {
			$('#episodes-nav').addClass(' bg--red');
		} else {
			$('#episodes-nav').removeClass(' bg--red');
		}
	});
	$(window).on('resize scroll', function() {
		if ($('#contacts').inviewport()) {
			$('#contacts-nav').addClass(' bg--yellow');
		} else {
			$('#contacts-nav').removeClass(' bg--yellow');
		}
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() == 0) {
			$('#episodes-nav').removeClass(' bg--red');
			$('#contacts-nav').removeClass(' bg--green');
			$('#about-nav').removeClass(' bg--blue');
		}
	});*/
	var $title = $('.js-title');
	var copy = '.js-copy';
	$title.click(function() {
		$(this).next(copy).slideToggle();
		$(this).parent().siblings().children().next().slideUp();
		return false;
	}) 



		// menu click event
		$('.mobile-menu-button').on('click', function () {
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$('.mobile-menu-button-wrapper').addClass('active');
			}
			else {
				$('.mobile-menu-button-wrapper').removeClass('active');
			}
		});
		//Menu Mobile
		$('.mobile-menu-button-wrapper ul li').on('click', function () {
			$('.mobile-menu-button').toggleClass('active');
			if ($('.mobile-menu-button').hasClass('active')) {
				$('.mobile-menu-button-wrapper').addClass('active');
			}
			else {
				$('.mobile-menu-button-wrapper').removeClass('active');
			}

		})


	//COCKPIT
	fetch('http://e2bo.000webhostapp.com/api/singletons/get/destaque?token=fc9c9470cf6f558ec367aa436c61d1')
	.then(function(response) {
		return response.json();
	  })
	  .then(function(results) {
		//console.log(JSON.stringify(results));
		$('.destaques_headline').text(results.headline)
		$('.destaques_copy').text(results.copy)
		$('#destaques').css('background-image', 'url(uploads/'+results.image+')')
		$('.destaques_button').attr('href', results.link)
	  });
	
	});


	  function onGoogleLoad() {
		gapi.client.setApiKey('AIzaSyCj2GrDSBy6ISeGg3aWUM4mn3izlA1wgt0');
		gapi.client.load('youtube', 'v3', function () {
			var request = gapi.client.youtube.playlistItems.list({
				part: 'snippet',
				playlistId: 'PLqUL-W6mtUu5o9PfHL2QnJNG3nty2UKVS',
				maxResults: 4
			});
			request.execute(function (response) {
				for (var i = 0; i < response.items.length; i++) {
					//console.log(response);
					//console.log(response.items[i].snippet.title  + "https://www.youtube.com/watch?v="+ response.items[i].snippet.resourceId.videoId + response.items[i].snippet.thumbnails.default.url)
					$('.youtube--wrapper--col--thumbs')
						.append(`<div class="youtube--thumb--wrapper"> 
					<div class="youtube--thumb" data-youtubeid="${response.items[i].snippet.resourceId.videoId} "style="background-image: url(${response.items[i].snippet.thumbnails.default.url})">
						</div> <div class="youtube--thumb--caption"> ${response.items[i].snippet.title} 
						</div>
					</div>`);
					$('.youtube--thumb').on('click', function () {
						var id = $(this).attr('data-youtubeid');
						//console.log($('.youtube--wrapper--video iframe')[0].src = 'https://www.youtube.com/embed/'+ id)
						$('.youtube--wrapper--video iframe')[0].src = 'https://www.youtube.com/embed/' + id
					})
				}
				//console.log(response.items[0].snippet.resourceId.videoId)
				$('.youtube--wrapper--video').append(`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${response.items[0].snippet.resourceId.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><\/iframe>`)
			});
		});
	}