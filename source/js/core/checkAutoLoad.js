TouchUI.prototype.core.checkAutoLoad = function() {

	// This should always start TouchUI
	if(
		document.location.hash === "#touch" ||
		document.location.href.indexOf("?touch") > 0 ||
		this.DOM.cookies.get("active") === "true"
	) {

		return true;

	} else if(
		this.canLoadAutomatically &&
		this.DOM.cookies.get("active") !== "false"
	) {

		if($(window).width() < 980) {
			return true;
		}

		if(this.isTouch) {
			return true;
		}

	}

	return false;

}