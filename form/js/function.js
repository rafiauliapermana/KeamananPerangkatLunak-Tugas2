function validasiEmail() {
	var rs = document.forms["formInput"]["username"].value;
	var atps=rs.indexOf("@");
	var dots=rs.lastIndexOf(".");
	if (atps<1 || dots<atps+2 || dots+2>=rs.length) {
		alert("Username tidak valid.");
		return false;
	} else {
		alert("Username valid.");
	}
}