document.querySelectorAll("[data-page]").forEach((button) => {
	button.addEventListener("click", () => {
		window.location.href = button.dataset.page;
	});
});

const revealButton = document.querySelector(".reveal-button");

if (revealButton) {
	const extraFact = document.getElementById("extra-fact");

	revealButton.addEventListener("click", () => {
		const isExpanded = revealButton.getAttribute("aria-expanded") === "true";
		revealButton.setAttribute("aria-expanded", String(!isExpanded));
		extraFact.hidden = isExpanded;
		revealButton.innerHTML = isExpanded
			? 'Afficher un fait étonnant <span aria-hidden="true">＋</span>'
			: 'Masquer le fait <span aria-hidden="true">−</span>';
	});
}