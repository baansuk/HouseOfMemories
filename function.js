const facade = document.querySelectorAll('.facade');

		facade.forEach((e) => {
			e.addEventListener('mouseenter', () => {
				e.style.opacity = '0.0';
			});

			e.addEventListener('mouseleave', () => {
				e.style.opacity = '1.0';
			});
		});