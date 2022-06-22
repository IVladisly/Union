const button_nav_mobile = document.querySelector(".media-mobile-button").onclick = call_menu;
const close_nav_mobile_ = document.querySelector(".navigation__close-button").onclick = call_menu;
const menu_body = document.querySelector(".navigation__mobile");

function call_menu() {
	if (!menu_body.classList.contains("active")) {
		menu_body.classList.add('active');
		document.body.style.overflowY = "hidden";
	} else {
		menu_body.classList.remove('active');
		document.body.style.overflowY = "visible";
	}
}