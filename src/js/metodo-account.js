//alexandre trino
var os__enderecos = function () {
	$(".address-display-unit").wrap("<div class='show-content'></div>");
	var nAd = 1;
	$(".show-content").each(function () {
		var newTitle = $(".street", this).text();
		$(this).prepend(
			'<a class="item open-aba" rel="0' + nAd + '">' + newTitle + "</a>"
		);
		$(this).addClass("b-0" + nAd);
		$(".address-display-unit", this).addClass("aba a-0" + nAd);
		$("h5", this).remove();
		nAd = nAd + 1;
	});

	$(".address-display .show-content:eq(0)").addClass("ativo");
	$(".address-display .aba:eq(0)").addClass("show");
	$(".address-display .show-content:eq(0) a.item").removeClass("open-aba");
	$(".address-display .aba:eq(0)").slideDown();

	$("body").on("click", ".open-aba", function () {
		var thisAba = ".a-" + $(this).attr("rel");
		var thisBotao = ".b-" + $(this).attr("rel");
		$(".address-display .show").slideUp(function () {
			$(".address-display .show-content").removeClass("ativo");
			$(thisBotao).addClass("ativo");
			$(".address-display .show-content a.item").addClass("open-aba");
			$(".address-display .aba").removeClass("show");
			$(thisAba).addClass("show");

			$(thisBotao + " a.item").removeClass("open-aba");
			$(thisAba).slideDown();
		});
	});
};

var os__insere_nome = function () {
	var name_cliente = $(".profile-detail-display h5").text();
	$(".header-client h3 span").text(name_cliente);
};

/*modal*/
var os__modal = function (elemButtom) {
	$("body").on("click", elemButtom, function () {
		var open_modal = $(this).attr("href");
		$(open_modal).show();
		$("body").append('<div class="modal-backdrop"></div>');
		$("html, body").animate({ scrollTop: 150 }, 1000);
	});

	$(".modal-header").on("click", ".close", function () {
		$(".modal-backdrop").remove();
		$(".modal").hide("fast");
	});
};

/*order*/
var os__num_pedidos = function () {
	var totalPedido = $(".order-client .order-title").length;
	$(".header-client h3 span").text(totalPedido);
};

$(document).ready(function () {
	if ($("body.client-account").length) {
		os__enderecos();
		os__insere_nome();
		os__modal("#edit-data-link");
		os__modal(".address-update");
		os__modal(".delete");
	}
});

$(document).ajaxStop(function () {
	if ($("body.client-orders").length) {
		os__num_pedidos();
	}
});

$(window).load(function () {
	if ($("body.client-orders").length) {
		//remove os scripts padrão da plataforma
		$("link[href*='style.css']").remove();
		$("link[href*='bootstrap.min.css']").remove();
	}
});
