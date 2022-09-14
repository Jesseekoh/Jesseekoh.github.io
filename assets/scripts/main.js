const app = () => {
	const navSlide = () => {
		const hamburgerMenu = document.querySelector('.hamburger-menu');
		const nav = document.querySelector('.nav-links');
		const navLink = document.querySelectorAll('.nav-item')
	
		hamburgerMenu.addEventListener('click', () => {
			nav.classList.toggle("nav-active");
			hamburgerMenu.classList.toggle('change');
			navLink.forEach((link) => {
				link.addEventListener('click', () => {
					nav.classList.remove('nav-active')
					hamburgerMenu.classList.remove('change')
				})
			})
		})
	}
	
	

	const makeNavRevealOnScrollUp = () => {
		const body = document.body;
		let lastScroll = 0;
		window.addEventListener('scroll', () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll <= 0) {
				body.classList.remove('scroll-up')
			}
			if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
				body.classList.remove('scroll-up');
				body.classList.add('scroll-down')
			}
			if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
				body.classList.remove('scroll-down');
				body.classList.add('scroll-up')
			}

			lastScroll = currentScroll
		})
	}

	navSlide();
	makeNavRevealOnScrollUp()
}


app()