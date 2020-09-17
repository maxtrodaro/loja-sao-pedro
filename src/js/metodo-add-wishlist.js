// Document : wishlist . gutvalente@gmail.com
// chamar no espiar e nas págias que tem o botão wishlist (catalogo  e produto)

var wishilist_after_insert = function () {
	var urlLista = $(".glis-save .glis-edit-link").attr("href");
	//var idLista = urlLista.replace('/giftlist/product','/minha-lista/produtos');
	$(".wishlist-image").addClass("add-after");
	$(".wishlist-all").removeClass("list-load");
	$(".wishlist-content").html(
		'<div class="gt-glis-save"><p class="glis-save-inserted">Produto adicionado na sua lista de desejos</p><a href="' +
			urlLista +
			'" class="glis-edit-link" target="_top">Acessar minha lista</a><p class="ou">ou</p><a class="close-wishlist continuar-add">Continuar navegando</a></div>'
	);
};

var config_wishlist = function () {
	var classButton = "";

	if ($(".glis-existing-title").length) {
		classButton = ".glis-ul .glis-submit-list";
	} else {
		var data = new Date();
		dia = data.getDate();
		mes = data.getMonth();
		ano2 = data.getYear();
		hora = data.getHours();
		min = data.getMinutes();
		seg = data.getSeconds();
		mseg = data.getMilliseconds();
		var id_list = dia + "" + mes + "" + hora + "" + min + "" + seg + "" + mseg;
		$("input.glis-form-name").val(id_list);
		classButton = ".glis-create-form-submit .glis-submit-new";
	}

	$(".add-wishlist").attr("rel", classButton);
	$(".wishlist-all").removeClass("list-load");

	if ($(".save-success").length) {
		setTimeout(wishilist_after_insert, 1000);
	}
};

var add_wishlist = function () {
	var imgProd = $("#image-main").attr("src");
	var nameProd = $(".fn.productName").text();
	var brandProd = $(".brandName a").text();
	$(".wishlist-brand").html(brandProd);
	$(".wishlist-name").html(nameProd);
	$(".wishlist-image").html(
		'<img src="' +
			imgProd +
			'" alt="' +
			nameProd +
			'" /><span class="ico-heart"></span>'
	);

	$("body").on("click", ".add-wishlist", function () {
		var paramButton = $(this).attr("rel");
		console.log("click: " + paramButton);
		$(".wishlist-content").html("");
		$(".wishlist-all").addClass("list-load");
		$(paramButton).click();
	});
};

function closeIframe() {
	$(".ext-modal").remove();
}

//ADD LISTA: QUICK-VIEW
var add_janela = function (gdiv) {
	wHeight = $(document).height();
	var max_modal = $(window).width();

	if (max_modal >= 768) {
		$("html, body").animate({ scrollTop: 0 }, 500);
	}

	$("body").prepend(
		'<div class="ext-modal" style="height:' +
			wHeight +
			'px"><div class="tpl-modal jn-wishlist"><a class="close-modal">Fechar</a>' +
			gdiv +
			"</div></div>"
	);
	$("body").on("click", ".close-modal", function () {
		$(".ext-modal").remove();
	});
};

/// IMPORTANTE: Colocar o controle de saudação dentro de uma, ex: <div class="my_login"><vtex.cmc:welcomeMessage /></div>

var direciona_add = function () {
	if ($(".my_login a#login").length) {
		//nao logado
		$(".my_login").attr("rel", "no");
	} else {
		//logado
		$(".my_login").attr("rel", "yes");
	}
	$(".list-prod, .info-product").addClass("loaded");
};

/// IMPORTANTE: na página de produto chama o link wishslist dentro de uma tag, ex:  <div class="move"><a class="btn-wishlist ico" title="Wishlist">Wishlist</a></div>

var add_produto_lista = function () {
	if ($("body.produto").length) {
		var idSkuAdd = $("#___rc-p-id").val();
		$(".btn-wishlist").attr("rel", idSkuAdd);
	}

	$("body").on("click", ".btn-wishlist", function () {
		var idUrl = $(this).attr("rel");

		/*ALTERAR CONFORME A LOJA*/
		var lidEspiar = "f52f519f-0a0d-4489-bbe1-f667788559fa";

		if ($("p.welcome a#login").length > 0) {
			htmlWishlist =
				'<div class="wishlist-all"><div class="wishlist-login"><h2><strong>Ops!</strong> É necessário estar logado para adicionar produtos em sua lista de desejos</h2><div><a class="login-add">Clique aqui se identificar</a></div></div></div>';
		} else {
			htmlWishlist =
				'<iframe id="ifradd" src="/quick-view/?idproduto=' +
				idUrl +
				"&KeepThis=true&lid=" +
				lidEspiar +
				'" frameborder="0" scrolling="no"></iframe>';
		}
		add_janela(htmlWishlist);
	});

	$("body").on("click", ".login-add", function () {
		$(".ext-modal").remove();
		$(".my_login a#login").click();
	});
};

$(document).ready(function () {
	add_produto_lista();
	if ($("body.add-prod-lista").length) {
		add_wishlist();
	}
});

$(document).ajaxStop(function () {
	direciona_add();

	if ($("body.add-prod-lista").length) {
		config_wishlist();
	}
});
