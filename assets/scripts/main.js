const app = () => {
	const hamburger = document.querySelector(".hamburger");
	const header = document.querySelector("header");
	const navMenu = document.querySelector(".nav-menu");
	const navBar = document.querySelector("nav");
	const body = document.body;

	hamburger.addEventListener("click", mobileMenu);

	function mobileMenu() {
		hamburger.classList.toggle("active");
		navMenu.classList.toggle("active");
		body.classList.toggle("scroll-disabled");
	}

	const navLink = document.querySelectorAll(".nav-link");

	navLink.forEach((n) =>
		n.addEventListener("click", () => {
			hamburger.classList.remove("active");
			navMenu.classList.remove("active");
			body.classList.remove("scroll-disabled");
		})
	);

	const makeNavRevealOnScrollUp = () => {
		let lastScroll = 0;
		window.addEventListener("scroll", () => {
			const currentScroll = window.pageYOffset;
			if (navMenu.classList.contains("active")) {
				body.classList = "";
				// body.style.overflowY = 'hidden'
			} else if (currentScroll <= 0) {
				body.classList.remove("scroll-up");
			} else if (
				currentScroll > lastScroll &&
				!body.classList.contains("scroll-down")
			) {
				body.classList.remove("scroll-up");
				body.classList.add("scroll-down");
			} else if (
				currentScroll < lastScroll &&
				body.classList.contains("scroll-down")
			) {
				body.classList.remove("scroll-down");
				body.classList.add("scroll-up");
			}

			lastScroll = currentScroll;
		});
	};

	const fixBuggyNav = () => {
		window.addEventListener("orientationchange", () => {
			if (
				screen.orientation.type === "landscape-primary" &&
				window.matchMedia("(min-width: 768)")
			) {
				console.log("hello");
				navMenu.classList.remove("active");
				body.classList.remove("scroll-disabled");
				hamburger.classList.remove("active");
			}
		});
	};

	const changeNavStyleOnScroll = () => {
		window.onscroll = () => {
			const gap = 50;
			const homeSection = document.querySelector("#home");
			if (
				document.body.scrollTop > homeSection.clientHeight - 10 ||
				document.documentElement.scrollTop > gap
			) {
				header.classList.add("inverse");
			} else {
				header.classList.remove("inverse");
			}
		};
	};

	changeNavStyleOnScroll();
	fixBuggyNav();
	makeNavRevealOnScrollUp();
};

app();