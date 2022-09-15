const app = () => {
	const body = document.body;
	const navBar = document.querySelector("nav");
	const hamburgerMenu = document.querySelector('.hamburger-menu');
	const navLinks = document.querySelector('.nav-links');
	const navLink = document.querySelectorAll('.nav-item');

	const navSlide = () => {

		hamburgerMenu.addEventListener('click', () => {
			navLinks.classList.toggle("nav-active");
			hamburgerMenu.classList.toggle('change');
			body.classList.toggle('scroll-disabled')
			navLink.forEach((link) => {
				link.addEventListener('click', () => {
					navLinks.classList.remove('nav-active');
					hamburgerMenu.classList.remove('change');
					body.classList.remove('scroll-disabled');
				})
			})
		})
	}



	const makeNavRevealOnScrollUp = () => {

		let lastScroll = 0;
		window.addEventListener('scroll', () => {
			const currentScroll = window.pageYOffset;
			if (navLinks.classList.contains('nav-active')) {
				body.classList = ''
				// body.style.overflowY = 'hidden'
			} else if (currentScroll <= 0) {
				body.classList.remove('scroll-up')
			} else if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
				body.classList.remove('scroll-up');
				body.classList.add('scroll-down')
			} else if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
				body.classList.remove('scroll-down');
				body.classList.add('scroll-up')
			}

			lastScroll = currentScroll
		})
	}

	const fixBuggyNav = () => {
		const x = window.matchMedia("min-width: 768px");
		console.log('hello');
	}

	navSlide();
	makeNavRevealOnScrollUp();
	screen.orientation.onchange =  (e) => {
		// console.log(e);
		if (window.matchMedia('(min-width: 768px)').matches) {
			console.log('hello')

		}
	}

}


app()