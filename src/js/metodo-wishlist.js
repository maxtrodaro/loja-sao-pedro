/*WISHLIST
chamar nas páginas de lista
*/
var wishlist_vazio = function () {
	$(".content-wishlist-vazio").show();
	$(".content-wishlist").hide();
	$(".all-wishlist").removeClass("gt-load");
};

var wishlist_redirect = function () {
	if ($(".action-manage").length) {
		var redirectLista = $("li.action-manage:eq(0) a").attr("href");
		window.location.href = redirectLista;
		//$('li.action-manage:eq(0) a').click();
	} else {
		if ($("li.can-create").length) {
			setTimeout(wishlist_vazio, 1000);
		}
	}
};

var wishlist_produtos = function () {
	if ($("#giftlistproduct").length) {
		$(".products-wishlist").show();
		$(".all-wishlist").removeClass("gt-load");
		nameCW = $(".my_login p.welcome").text();
		nameCW = nameCW.trim();
		nameCW = nameCW.replace("Logout?", "");
		nameCW = nameCW.replace("Novo Usuário?", "");
		nameCW = nameCW.replace(".", "");
		$(".header-client h3").text(nameCW);
	} else {
		setTimeout(wishlist_vazio, 1000);
	}
};

$(document).ajaxStop(function () {
	if ($("body.wishlist.manage").length) {
		wishlist_redirect();
	}

	if ($("body.w-products").length) {
		wishlist_produtos();
	}
});
