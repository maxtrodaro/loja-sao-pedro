var mobile = "nao";
if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	mobile = "sim";
}
console.log("Mobile? : " + mobile);

var MenuConfig = function () {
	$.get(`/api/catalog_system/pub/category/tree/1/`).done((response) => {
		response.map((res) => {
			nameCategory = res.name;
			urlCategory = res.url.split("/")[3];
			if (mobile === "sim") {
				$("#mob-header .menu-mobile .wrap ul > span").after(`
					<li class="pai">
						<a class="menu-item-texto">${nameCategory}</a>
						<div class="nivel-1" style="display: none">
							<div class="nivel-2">
								<h2>${nameCategory}</h2>
								<ul>
									${
										res.children &&
										res.children[0] &&
										`<li><a href=${res.children[0].url}>${res.children[0].name}</a></li>`
									}
									${
										res.children &&
										res.children[1] &&
										`<li><a href=${res.children[1].url}>${res.children[1].name}</a></li>`
									}
									${
										res.children &&
										res.children[2] &&
										`<li><a href=${res.children[2].url}>${res.children[2].name}</a></li>`
									}
									${
										res.children &&
										res.children[3] &&
										`<li><a href=${res.children[3].url}>${res.children[3].name}</a></li>`
									}
									${
										res.children &&
										res.children[4] &&
										`<li><a href=${res.children[4].url}>${res.children[4].name}</a></li>`
									}
									${
										res.children &&
										res.children[5] &&
										`<li><a href=${res.children[5].url}>${res.children[5].name}</a></li>`
									}
									${
										res.children &&
										res.children[6] &&
										`<li><a href=${res.children[6].url}>${res.children[6].name}</a></li>`
									}
									${
										res.children &&
										res.children[7] &&
										`<li><a href=${res.children[7].url}>${res.children[7].name}</a></li>`
									}
									${
										res.children &&
										res.children[8] &&
										`<li><a href=${res.children[8].url}>${res.children[8].name}</a></li>`
									}
									${
										res.children &&
										res.children[9] &&
										`<li><a href=${res.children[9].url}>${res.children[9].name}</a></li>`
									}
								</ul>
							</div>
						</div>
					</li>
				`);
			} else {
				$("#nav-menu .e-menu").append(`
				<li class="pai">
					<a class="menu-item-texto" href=${urlCategory}>${nameCategory}</a>
					<div class="nivel-1" style="display: none">
						<div class="nivel-2">
							<h2>${nameCategory}</h2>
							<ul>
								${
									res.children &&
									res.children[0] &&
									`<li><a href=${res.children[0].url}>${res.children[0].name}</a></li>`
								}
								${
									res.children &&
									res.children[1] &&
									`<li><a href=${res.children[1].url}>${res.children[1].name}</a></li>`
								}
								${
									res.children &&
									res.children[2] &&
									`<li><a href=${res.children[2].url}>${res.children[2].name}</a></li>`
								}
								${
									res.children &&
									res.children[3] &&
									`<li><a href=${res.children[3].url}>${res.children[3].name}</a></li>`
								}
								${
									res.children &&
									res.children[4] &&
									`<li><a href=${res.children[4].url}>${res.children[4].name}</a></li>`
								}
								${
									res.children &&
									res.children[5] &&
									`<li><a href=${res.children[5].url}>${res.children[5].name}</a></li>`
								}
								${
									res.children &&
									res.children[6] &&
									`<li><a href=${res.children[6].url}>${res.children[6].name}</a></li>`
								}
								${
									res.children &&
									res.children[7] &&
									`<li><a href=${res.children[7].url}>${res.children[7].name}</a></li>`
								}
								${
									res.children &&
									res.children[8] &&
									`<li><a href=${res.children[8].url}>${res.children[8].name}</a></li>`
								}
								${
									res.children &&
									res.children[9] &&
									`<li><a href=${res.children[9].url}>${res.children[9].name}</a></li>`
								}
							</ul>
						</div>
					</div>
				</li>
			`);
			}
		});
	});

	// $("#reference-menu").find(".brandFilter").remove();
	$("#reference-menu")
		.find("h3")
		.each(function () {
			var e = $(this);
			var lnk = e.html();
			var name = String(e.attr("class"));
			var txt = e.text();
			2;
			if (name != "undefined") {
				//preenche os departamentos
				name = name.replace(" even", "");
				console.log(name);
				console.log(lnk);

				if (e.next().find("li").length > 0) {
					$("#nav-menu")
						.find(">ul")
						.append(
							'<li class="pai ' +
								name +
								'">' +
								lnk +
								'<div class="nivel-1"><div class="nivel-2"><h2>' +
								txt +
								'</h2><ul></ul></div><div class="destaque-menu"></div></div></li>'
						);
				} else {
					$("#nav-menu")
						.find(">ul")
						.append('<li class="pai ' + name + '">' + lnk + "</li>");
				}
			}
		});

	//preenche categorias
	$("#reference-menu")
		.find("ul")
		.each(function () {
			var e = $(this);
			var ref = String(e.attr("class"));
			ref = ref.replace(" even", "");
			var content = e.html();
			console.log(content);
			if (content != "" && content != undefined) {
				$("#nav-menu")
					.find(">ul")
					.find(">li." + ref)
					.find(".nivel-2")
					.find("ul")
					.append(content);
			}
		});

	$("#nav-menu").find(">ul").addClass("ready");

	setTimeout(() => {
		var allDepartament = $("nav.nav-menu > ul.ready").html();
		$("nav.nav-menu > ul > li:nth-child(1)").before(
			'<li class="pai allDepartament"><p><svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" x="0px" y="0px" viewBox="0 0 5.04 4.08" style="enable-background:new 0 0 5.04 4.08;" xml:space="preserve"><g><rect class="st0" width="5.04" height="0.68"/><rect y="1.7" class="st0" width="5.04" height="0.68"/><rect y="3.4" class="st0" width="5.04" height="0.68"/></g></svg>Todos os departamentos</p><ul class="allDepartaments">' +
				allDepartament +
				"</ul></li>"
		);
		/*abrindo o submenu*/
		$("body").on("click", ".menu-mobile li.pai", function () {
			var esse = $(this);
			//classe que deixa o <ul> com scroll
			$(this).parent().addClass("active");
			//arrasta o submenu para tela
			esse.find(".nivel-1").addClass("active");
			setTimeout(function () {
				$(".close-sub").fadeIn();
			}, 200);
		});

		/*fechando o submenu*/
		$("body").on("click", ".close-sub", function () {
			var esse = $(this);
			$(".menu-mobile .wrap > ul").removeClass("active");
			$(".nivel-1.active").removeClass("active");
			setTimeout(function () {
				esse.fadeOut();
			}, 100);
		});
	}, 500);

	//verifica a necessidade de dividir categorias em colunas
	$("nav#nav-menu > ul > li .nivel-2").each(function () {
		var e = $(this);
		var l = e.find("ul").find("li").length;
		l = Math.round(Number(l / 3));
		console.log("DEU: " + l);

		if (l <= 4) {
			console.log("continue");
		} else if (l >= 5 && l <= 6) {
			e.find("ul").css("column-count", "2");
		} else if (l >= 5) {
			e.find("ul").css("column-count", "3");
		} else {
			console.log("erro ao separar em colunas o submenu");
		}
	});

	//preenche as imagens de destaque de cada submenu, se hover (Ex: nome-da-categoria.jpg)
	$("nav#nav-menu>ul>li.pai").each(function () {
		var e = $(this);
		var alt = e.attr("class");
		alt = alt.toString();
		alt = alt.split("pai ");
		alt = alt[1];
		console.log(alt);
		var imgName = alt;
		imgName = imgName + ".jpg";
		var img = new Image();
		img.alt = alt;
		img.onload = function () {
			if (
				!this.complete ||
				(typeof this.naturalWidth !== "undefined" && this.naturalWidth === 0)
			)
				return false;
			e.find(".nivel-1 .destaque-menu").append(img).addClass("img-on");
			return true;
		};
		img.onerror = function () {
			"undefined" !== typeof console &&
				console.log('Arquivo "' + imgName + '" não encontrado.');
		};
		img.src = "/arquivos/" + imgName;
		return true;
	});

	//preenche a coluna de categorias do rodape
	$("#nav-menu")
		.find(">ul")
		.find(">li")
		.each(function () {
			var e = $(this).html();
			$("footer#footer")
				.find(".int")
				.find("#footer-categories")
				.append("<li>" + e + "</li>");
		});

	//Preenche o menu mobile
	var ref = $("#nav-menu").find(">ul").html();
	var a = $(".menu-mobile").find("ul");
	a.append(
		ref +
			'<li class="linkCont01"><a href="/institucional/quem-somos">Quem somos</a></li><li class="linkCont02"><a href="/institucional/nossas-lojas">Nossas Lojas</a></li><li class="linkCont03"><a href="/institucional/contato">Contato</a></li>'
	);
	a.prepend('<span class="tit-menu">Categorias</span>');

	/*verifica se ha submenu. se houver, retira o href do <li> pai*/
	$(".menu-mobile li.pai").each(function () {
		var este = $(this);
		if (este.find(".nivel-1").length > 0) {
			este.addClass("temSub");
			este.find(">a").removeAttr("href");
			//acrescenta o titulo do submenu
			var l = este.find(">span").html();
			este.find(".nivel-1").prepend("<span>" + l + "</span>");
		}
	});
	$(".nivel-1").find(">span").addClass("tit-menu");

	/*SEARCH
	-----------------------------*/
	$("#icon-mobile-search").click(function (event) {
		$(".close-menu").trigger("click");
		$(this).toggleClass("active");
		$("#mob-header .search").slideToggle(200);
	});

	$(document).ajaxStop(function () {
		$(".ui-autocomplete .ui-menu-item a")
			.find("img")
			.each(function () {
				var src = $(this)
					.attr("src")
					.replace(/\-25-25/, "-150-150");
				$(this).attr("src", src);
			});
	});

	/*MENU MOBILE
	-----------------------------*/
	/*abrindo o menu*/
	$("body").on("click", "#burger-menu", function () {
		//fecha a busca mobile
		$("#icon-mobile-search.active").trigger("click");
		//arrasta o menu mobile para a tela
		$(".menu-mobile").animate(
			{
				left: "0",
			},
			200
		);
	});

	/*fechando o menu*/
	$("body").on("click", ".close-menu", function () {
		$(".menu-mobile").animate(
			{
				left: "-100%",
			},
			200
		);
		$(".menu-mobile > ul > li").animate(
			{
				left: "0",
			},
			200
		);
	});
};

var openTarget = function () {
	$("body").on("click", ".os-show", function () {
		var link_elem = $(this).attr("rel");
		$("." + link_elem).slideToggle();
		if (link_elem == "move-menu") {
			MenuWidth();
		}
	});
};

//desconto no boleto da pagina de produto
var vistaBoleto = function () {
	var economiaBoletoP = "";
	var precoTotalP = "";
	var ecomomiaBoletoP2 = "";
	var precoTotalP = $(".valor-por strong").text();
	var percent = 5;
	percent = Number(percent / 100);

	if (percent > 0) {
		precoTotalP = precoTotalP.split("R$ ");
		precoTotalP = precoTotalP[1];
		precoTotalP = precoTotalP.split(",");
		precoTotalP = precoTotalP[0];
		precoTotalP = precoTotalP.replace(".", "");
		precoTotalP = parseFloat(precoTotalP);

		var economiaBoletoP = precoTotalP - precoTotalP * percent;
		economiaBoletoP = economiaBoletoP.toFixed(2);
		economiaBoletoP = economiaBoletoP.toString();
		economiaBoletoP = economiaBoletoP.replace(/[.]/g, ",");
		ecomomiaBoletoP2 = economiaBoletoP.replace(
			/\d(?=(?:\d{3})+(?:\D|$))/g,
			"$&."
		);
		$(".valor-dividido").after(
			'<span class="precoBoleto"><strong>R$ ' +
				ecomomiaBoletoP2 +
				"</strong> á vista no Boleto</span>"
		);
	}
};

//Preco no boleto vitrines
var shelfCash = function () {
	$(".prateleira li").each(function () {
		var esse = $(this);
		if (esse.find(".boletoVitrine").length < 1) {
			var economiaBoleto = "";
			var precoTotal = "";
			var ecomomiaBoleto2 = "";
			if (esse.find(".best-price").length > 0) {
				var precoTotal = esse.find(".best-price").text();
				var percent = 10;
				percent = Number(percent / 100);

				if (percent > 0) {
					precoTotal = precoTotal.split("R$ ");
					precoTotal = precoTotal[1];
					precoTotal = precoTotal.split(",");
					precoTotal = precoTotal[0];
					precoTotal = precoTotal.replace(".", "");
					precoTotal = parseFloat(precoTotal);

					var economiaBoleto = precoTotal - precoTotal * percent;

					economiaBoleto = parseFloat(economiaBoleto).toFixed(2);
					economiaBoleto = economiaBoleto.replace(/[.]/g, ",");
					ecomomiaBoleto2 = economiaBoleto.replace(
						/\d(?=(?:\d{3})+(?:\D|$))/g,
						"$&."
					);
					esse
						.find(".price")
						.append(
							'<em class="boletoVitrine"><span><strong>R$ ' +
								ecomomiaBoleto2 +
								"</strong> no boleto</span></em>"
						);
				}
			}
		}
	});
};

//login (as duas funcoes)
var os_redir = function () {
	$("body").on("click", ".login-redir", function () {
		var redirPage = $(this).attr("rel");
		if ($(".my_login a#login").length) {
			$("html, body").animate(
				{
					scrollTop: 0,
				},
				0
			);
			vtexid.setScopeName(jsnomeSite);
			vtexid.start({
				returnUrl: redirPage,
				userEmail: "",
				locale: "pt-BR",
				forceReload: false,
			});
		} else {
			window.location.href = redirPage;
		}
	});
};

var os_login = function () {
	$("body").on("click", ".l-login", function () {
		if ($(".my_login a#login").length) {
			$("html, body").animate(
				{
					scrollTop: 0,
				},
				0
			);
			vtexid.setScopeName(jsnomeSite);
			vtexid.start({
				userEmail: "",
				locale: "pt-BR",
				forceReload: false,
			});
		}
	});
};

os_verificaLogin = function () {
	if ($(".my_login a#login").length) {
		$(".l-login").removeClass("logged");
		$(".l-login").addClass("no-logged");
	} else {
		$(".l-login").removeClass("no-logged");
		$(".l-login").addClass("logged");
	}
};

//Filtros laterais de categoria
var show_filter = function () {
	$(".show-filter").click(function () {
		$(".gtc-filtro").slideToggle("fast");
		$(this).toggleClass("filter-ativo");
		$(this).html(
			$(this).html() == "<span>Esconder filtros -</span>"
				? "<span>Mostrar filtros +</span>"
				: "<span>Esconder filtros -</span>"
		);
	});
};

//ordenacao de produtos na categoria
var order_by = function () {
	var catAtual = location.href;
	catAtual = catAtual.split(".com");
	var sinal = "&";
	var urlCat = catAtual[1];
	if (urlCat.search("O=") > 0) {
		urlCat = urlCat.split("O=");
		urlCat = urlCat[0];
	}
	if (urlCat.indexOf("?") <= 0) {
		sinal = "?";
	}

	urlCat = urlCat.replace(/&PS=24/gi, "");
	urlCat = urlCat.replace(/&&/gi, "&");
	var atualCat = urlCat + sinal + "PS=24&O=";

	$(".i-show-order a").each(function () {
		var altLink = $(this).attr("rel");
		altLink = atualCat + altLink;
		$(this).attr("href", altLink);
	});

	$(".show-order").click(function () {
		$(".d-show-order").slideToggle("fast");
		$(this).toggleClass("order-ativo");
		$(this).html(
			$(this).html() == "<span>Ordenar -</span>"
				? "<span>Ordenar +</span>"
				: "<span>Ordenar -</span>"
		);
	});
};

//insere background da cor no label do filtro por "Cor"
var ulColorThumbProduct = function (el) {
	$("ul.topic." + el)
		.find("li")
		.find("span")
		.find("input")
		.each(function () {
			var n = $(this).attr("specification");
			$(this)
				.next("label")
				.css("background", "url('/arquivos/" + n + ".jpg') no-repeat");
		});
};

//Carrossel na imagem principal da pagina de produto
var big_img_nav = {
	pos: 0,
	thumbs_qty: 0,
	thumbs_container: ".thumbs",
	container: "#include",
	init: function () {
		big_img_nav.set.nav_btns() && big_img_nav.set.events();
		return !0;
	},
	set: {
		nav_btns: function () {
			big_img_nav.thumbs_qty =
				jQuery(big_img_nav.thumbs_container).find("li").length || 0;
			if (1 > big_img_nav.qty) return !1;
			if (0 < jQuery(big_img_nav.container).find(".nav-wrapper").length)
				return !0;
			var a = jQuery("<div/>").addClass("nav-wrapper"),
				b = jQuery("<div/>").addClass("nav-container"),
				c = jQuery("<a/>").addClass("nav").addClass("nav-previous"),
				d = jQuery("<a/>").addClass("nav").addClass("nav-next");
			jQuery(b).append(c).append(d);
			jQuery(a).html(b);
			jQuery(big_img_nav.container).append(a);
			return !0;
		},
		events: function () {
			jQuery(big_img_nav.container)
				.find(".nav-previous")
				.not(".active")
				.addClass("active")
				.click(function () {
					big_img_nav.thumbs_qty =
						jQuery(big_img_nav.thumbs_container).find("li").length || 0;
					big_img_nav.pos--;
					0 > big_img_nav.pos && (big_img_nav.pos = big_img_nav.thumbs_qty - 1);
					big_img_nav.swap_img();
				});
			jQuery(big_img_nav.container)
				.find(".nav-next")
				.not(".active")
				.addClass("active")
				.click(function () {
					big_img_nav.thumbs_qty =
						jQuery(big_img_nav.thumbs_container).find("li").length || 0;
					big_img_nav.pos++;
					big_img_nav.pos > big_img_nav.thumbs_qty - 1 && (big_img_nav.pos = 0);
					big_img_nav.swap_img();
				});
			return !0;
		},
	},
	swap_img: function () {
		jQuery(big_img_nav.thumbs_container)
			.find("li")
			.eq(big_img_nav.pos)
			.find("a")
			.click();
		return !0;
	},
};

//ao clicar num elemento com a classe "nav-in-page" será redirecionado para a classe ou id no attr "rel"
var nav_page = function () {
	$("body").on("click", ".nav-in-page", function () {
		var link_elem = $(this).attr("rel");
		$("html, body").animate(
			{
				scrollTop: $("." + link_elem + ",#" + link_elem).offset().top - 40,
			},
			1000
		);
	});
};

//carrossel de thumbs da pagina de produto
var os_carrossel_thumb = function () {
	var totalThumb = $(".thumbs li").length;
	var inicioThumb = 0;
	var finalThumb = totalThumb;
	var lastThumb = totalThumb + 2;
	var thumbExibe = 0;
	var thumbEsconde = 0;

	if (totalThumb > 3) {
		$(".thumbs li").hide();
		$(".thumbs li:eq(0)").show();
		$(".thumbs li:eq(1)").show();
		$(".thumbs li:eq(2)").show();
		$(".thumbs").prepend(
			'<div class="os_prev arrow" style="display:none">Anterior</div><div class="os_next arrow" style="display:block">Proxima</div>'
		);
		$(".thumbs").addClass("thumb-slider");
	}

	$("body").on("click", ".os_next", function () {
		inicioThumb = inicioThumb + 1;
		thumbEsconde = inicioThumb - 1;
		thumbExibe = inicioThumb + 2;
		$(".os_prev").show();
		if (inicioThumb < totalThumb - 3) {
			$(".os_next").show();
		} else {
			$(".os_next").hide();
		}
		$(".thumbs li:eq(" + thumbExibe + ")").show(300);
		$(".thumbs li:eq(" + thumbEsconde + ")").hide(300);
	});

	$("body").on("click", ".os_prev", function () {
		inicioThumb = inicioThumb - 1;
		thumbExibe = inicioThumb;
		thumbEsconde = inicioThumb + 3;
		$(".os_next").show();
		if (inicioThumb <= 0) {
			$(this).hide();
		} else {
			$(this).show();
		}
		$(".thumbs li:eq(" + thumbExibe + ")").show(300);
		$(".thumbs li:eq(" + thumbEsconde + ")").hide(300);
	});

	$(".thumbs").show();
};

//navega a pagina para descricao curta
var descricao_curta = function () {
	if ($(".productDescriptionShort").length) {
		$(".productDescriptionShort").append(
			'<a class="nav-in-page btn-see" rel="description">Mais detalhes</a>'
		);
	}
};

//Lightbox
var os_lightbox = function (gdiv, gclasse) {
	//$('html, body').animate({scrollTop: 0}, 1000);
	wHeight = $(document).height();
	$("body").prepend(
		'<div class="ext-modal" style="height:' +
			wHeight +
			'px"><div class="int-modal ' +
			gclasse +
			'"><a id="iClose" class="close-modal">X</a>' +
			gdiv +
			"</div></div>"
	);
	$("body").on("click", ".close-modal", function () {
		$(".ext-modal").remove();
	});
};

//funcionalidade personalizada de espiar da prateleira (necessario: <a class="espiar icon" rel="$id">espiar</a>)
var espiar = function () {
	$("body").on("click", ".espiar", function () {
		var idUrl = $(this).attr("rel");
		htmlEspiar =
			'<iframe src="/quick-view/?idproduto=' +
			idUrl +
			'&KeepThis=true" frameborder="0" scrolling="auto"></iframe>';
		os_lightbox(htmlEspiar, "jn-espiar");
	});
};

//modifica a janela de alert do sistema
var setAlertBox = function () {
	window.alert = function (msg) {
		if ("undefined" == typeof msg && msg.length <= 0) return false;
		os_lightbox('<div class="alert-popup-msg">' + msg + "</div>", "jn-alert");
		return true;
	};
	return true;
};

//Hover de Menus's
var os_hover_menu = function (pai, filho) {
	jQuery(document).ready(function ($) {
		var navTimers = [];
		$(pai).hover(
			function () {
				var id = jQuery.data(this);
				var $this = $(this);
				navTimers[id] = setTimeout(function () {
					$this.children(filho).fadeIn(300);
					navTimers[id] = "";
				}, 300);
			},
			function () {
				var id = jQuery.data(this);
				if (navTimers[id] != "") {
					clearTimeout(navTimers[id]);
				} else {
					$(this).children(filho).hide();
				}
			}
		);
	});
};

//Cria um Tabs pelo elemento 'pai' da estrutura
var os_tabs = function (el) {
	$(el)
		.find("header.menu-tabs")
		.find("ul")
		.find("li:eq(0)")
		.addClass("current");
	$(el).find(".content-tabs").find(">section:eq(0)").fadeIn();

	$(el)
		.find("header.menu-tabs")
		.find("ul")
		.find("li")
		.click(function () {
			var ref = $(this).find("a").attr("href");
			$(el)
				.find("header.menu-tabs")
				.find("ul")
				.find("li")
				.removeClass("current");
			$(this).addClass("current");

			var a = $(el).find(".content-tabs " + ref);
			var b = a.hasClass("current");
			var c = $(el).find(".content-tabs").find(">section");

			if (b == false) {
				c.hide();
				a.fadeIn();
				c.removeClass("current");
				a.addClass("current");
			}

			return false;
		});
};

//Efeito de sanfona num menu estilo lista. Clica num item e abre o filho dele, fechando os demais
var os_sanfona = function (elem, buttom) {
	$(".sanfona .show-content:eq(0)").addClass("ativo");
	$(".sanfona .aba:eq(0)").addClass("show");
	$(".sanfona .show-content:eq(0) a.item").removeClass("open-aba");
	$(".sanfona .aba:eq(0)").slideDown();

	$("body").on("click", ".open-aba", function () {
		var thisAba = ".a-" + $(this).attr("rel");
		var thisBotao = ".b-" + $(this).attr("rel");
		$(".sanfona .show").slideUp(function () {
			$(".sanfona .show-content").removeClass("ativo");
			$(thisBotao).addClass("ativo");
			$(".sanfona .show-content a.item").addClass("open-aba");
			$(".sanfona .aba").removeClass("show");
			$(thisAba).addClass("show");

			$(thisBotao + " a.item").removeClass("open-aba");
			$(thisAba).slideDown();
		});
	});
};

var dropdown_product_infos = function () {
	$("#texts div").removeClass("active");
	$("#texts div").eq(0).addClass("active");
	$(".titles .title").eq(0).addClass("active");
	$(".titles .title").on("click", function () {
		if (!$(this).hasClass("active")) {
			var _data = $(this).attr("data-target");
			$(".titles .title").removeClass("active");
			$("#texts div").removeClass("active");

			$(this).addClass("active");
			$(this)
				.parents("body")
				.find("#texts div." + _data)
				.addClass("active");
		}
	});
};

var qtd_produto = function () {
	$("ul.topic li label").live("click", function () {
		$(".sku-selector-container").removeClass("selecione_antes");
	});

	//aumenta quantidade
	$("body").on("click", "#qtd-product .qtd-product__plus", function () {
		var qtd_Futura = parseInt($(".qtd-product__input").val()) + 1;
		var url_Passada = $("a.buy-button").attr("href");
		var skuSelecionado = url_Passada.substr(0, 3);

		if (skuSelecionado == "/ch") {
			url_Atual = url_Passada.split("&qty=");
			url_Futura =
				url_Atual[0] + "&qty=" + qtd_Futura + "&seller=1&redirect=true&sc=1";
			$("a.buy-button").attr("href", url_Futura);
			$(".qtd-product__input").val(qtd_Futura);
			$("#calculoFrete .quantity input").val(qtd_Futura);
			// $('.glis-selected-amount').html(qtd_Futura);
		} else {
			alert("Por favor, selecione o modelo desejado");
			$(".sku-selector-container").addClass("selecione_antes");
		}
	});
	//remove qtd
	$("body").on("click", "#qtd-product .qtd-product__minus", function () {
		var campoMin = parseInt($(".qtd-product__input").val());
		if (campoMin > 1) {
			var qtd_Futura = parseInt($(".qtd-product__input").val()) - 1;
			var url_Passada = $("a.buy-button").attr("href");
			var skuSelecionado = url_Passada.substr(0, 3);

			if (skuSelecionado == "/ch") {
				url_Atual = url_Passada.split("&qty=");
				url_Futura =
					url_Atual[0] + "&qty=" + qtd_Futura + "&seller=1&redirect=true&sc=1";
				$("a.buy-button").attr("href", url_Futura);
				$(".qtd-product__input").val(qtd_Futura);
				$("#calculoFrete .quantity input").val(qtd_Futura);
				// $('.glis-selected-amount').html(qtd_Futura);
			} else {
				alert("Por favor, selecione o modelo desejado");
				$(".sku-selector-container").addClass("selecione_antes");
			}
		}
	});
};

/*visualizacao de produtos em 'tabela' e 'lista' nas pags do template de categoria*/
var visualizacao = function () {
	$(".sub:eq(0)")
		.find(".resultado-busca-filtro")
		.append(
			'<div class="visualizacao"><div class="visu lista"><span class="icon"></span></div><div class="visu tabela ativo"><span class="icon"></span></div></div>'
		);
	$("body").addClass("tableView");
	$("body").on("click", ".visualizacao .visu.tabela", function () {
		$(".visualizacao").find(".visu").removeClass("ativo");
		$(this).addClass("ativo");
		$("body").removeClass("listView").addClass("tableView");
	});
	$("body").on("click", ".visualizacao .visu.lista", function () {
		$(".visualizacao").find(".visu").removeClass("ativo");
		$(this).addClass("ativo");
		$("body").removeClass("tableView").addClass("listView");
	});

	$(".sub:eq(0)")
		.find(".resultado-busca-filtro")
		.prepend('<div id="search-term"><h1></h1><span class="qtdP"></span></div>');

	//nome da categoria atual e produtos encontrados
	var qtd = $(".resultado-busca-numero").find(".value").html();
	if (typeof qtd == "undefined") {
		qtd = 0;
	}

	$("#search-term").find("h1").html(vtxctx.categoryName);
	$("#search-term")
		.find("span.qtdP")
		.html("(" + qtd + ") itens encontrados");
};

//insere uma classe na no html de estrelas de avaliacao media do produto pra poder estilizar com css
/*parametro de deferencia: definir o pai do elemento que foi inserido o controle*/
var starsReview = function (el) {
	var avaliacaoVitrine = $(el);
	//Função para converter a nota de avaliação do produto em estrelas
	if (avaliacaoVitrine.length) {
		if (avaliacaoVitrine.text() == "50") {
			avaliacaoVitrine.removeClass().addClass("ratingStar cincoEstrelas");
		} else {
			if (avaliacaoVitrine.text() == "40") {
				avaliacaoVitrine.removeClass().addClass("ratingStar quatroEstrelas");
			} else {
				if (avaliacaoVitrine.text() == "30") {
					avaliacaoVitrine.removeClass().addClass("ratingStar tresEstrelas");
				} else {
					if (avaliacaoVitrine.text() == "20") {
						avaliacaoVitrine.removeClass().addClass("ratingStar duasEstrelas");
					} else {
						if (avaliacaoVitrine.text() == "10") {
							avaliacaoVitrine.removeClass().addClass("ratingStar umaEstrela");
						} else {
							avaliacaoVitrine
								.removeClass()
								.addClass("ratingStar zeroEstrelas");
						}
					}
				}
			}
		}
	}
};

//Comprar pela prateleira
var comprar_prateleira = function () {
	$(".tem-sku").each(function () {
		if ($("a.btn-add-buy-button-asynchronous", this).length) {
			var temSku = $("a.btn-add-buy-button-asynchronous", this).attr("href");
			var numTemSku = temSku.indexOf("seller");
			if (numTemSku > 0) {
				$(this).closest("li").find(".bt-comprar").show();
				$(this).closest("li").find(".bt-escolher").remove();
			} else {
				$(this).closest("li").find(".bt-comprar").remove();
				$(this).closest("li").find(".bt-escolher").show();
			}
		}
	});
};

/*minicart fix*/
var mini_Cart = function () {
	$("th.cartSkuQuantity").html("Qtd");
	$(".cartFooter a.cartCheckout").html("Finalizar pedido");
	var strQtd = $(".cart-info:eq(0) .amount-items-em").text();
	var numQtd = parseInt(strQtd);
	var pluQtd = "itens";
	if (numQtd == 1) {
		pluQtd = "item";
	}

	if (numQtd == 0) {
		$(".vtexsc-cart").html(
			'<p class="mini-cart-vazio"><b>Ops!</b><span>Seu carrinho de compras está vazio.</span><a href="/">Ir às compras</a></p>'
		);
		$(".top-link.compras").addClass("top-cart-ativo");
	}
};

//constroi o topo flutuante
var floatBar = function () {
	//constroi o topo flutuante
	setTimeout(function () {
		$("#header .logo").clone().appendTo(".move-logo"); //logo
		$("#header #topbar").clone().appendTo(".move-topbar"); //topbar
		$("#header nav").clone().appendTo(".move-menu .int"); //menu
	}, 1000);

	//deixa fixo na rolagem
	var ms = $("#top-fixed");
	$(window).scroll(function () {
		rol = $(window).scrollTop();

		if (rol > 155) {
			ms.addClass("ativo");
		} else {
			ms.removeClass("ativo");
		}
	});
};

var fixLabelMultiple = function () {
	$("span.sr_text").each(function () {
		var qtd = "";
		var nome = "";
		qtd = $(this).html();
		if (/\(/.test(qtd)) {
			qtd = qtd.split("(");
			nome = qtd[0];
			qtd = qtd[1];
			qtd = qtd.split(")");
			qtd = qtd[0];
			$(this).html(nome + '<span class="qtd-filter">' + qtd + "</span>");
		}
	});
};

var resumeItemsFilter = function () {
	// Estilizar a quantidade
	$(".menu-departamento h4 a, .menu-departamento ul li a").each(function () {
		var qtd = "";
		var nome = "";
		qtd = $(this).html();
		if (/\(/.test(qtd)) {
			qtd = qtd.split("(");
			nome = qtd[0];
			qtd = qtd[1];
			qtd = qtd.split(")");
			qtd = qtd[0];
			$(this).html(nome + '<span class="qtd-filter">' + qtd + "</span>");
		}
	});
};

//filtros-departamentos
var config_filtro = function () {
	$(".menu-navegue a:eq(0)").html("Navegue");
	$(".menu-navegue a:eq(1)").html("Refinar");
	$(".menu-navegue a").removeAttr("href");

	$("#sidebar .menu-departamento h3+h4+ul").hide();
	$("#sidebar .menu-departamento ul").hide();
	$("#sidebar .menu-departamento fieldset div").hide();
	$("#sidebar .menu-departamento h4").last().addClass("last");

	$("#sidebar h4").each(function () {
		if ($(this).next("ul").find("li").length) {
			$(this).append('<div class="drop"></div>');
		}
	});

	$("#sidebar h5").each(function () {
		if ($(this).next("div").find("label").length) {
			$(this).append('<div class="drop"></div>');
		}
	});

	$("body").on("click", ".search-single-navigator .drop", function () {
		$(this).parent().toggleClass("ativo");
		$(this).parent().next("ul").slideToggle("fast");
	});

	$("body").on("click", ".search-multiple-navigator .drop", function () {
		$(this).parent().toggleClass("ativo");
		$(this).parent().next("div").slideToggle("fast");
	});

	$("#sidebar").append('<div id="search_filter"></div>');
	$("#sidebar .bt-refinar").appendTo("#search_filter");
	$(".bt-refinar").html("Refinar");
};

var comprar_qtd_ajax = function () {
	$("body").on("click", ".show-action .bt-comprar a", function (event) {
		var currentSKU = $(this);
		var idSKU = $(this).attr("rel");
		var qtdSKU = $("#qtd_" + idSKU).val();
		var htmlErrorBuyP =
			'<h2>Erro</h2><p class="errorBuy">Confira se selecionou um tamanho e tente comprar novamente</p><a class="close-modal">fechar janela</a>';
		var htmlSucessBuyP =
			'<h2>Produto adicionado!</h2><a class="close-modal">continuar comprando</a><a class="finalizar" href="/checkout/#/cart">finalizar pedido</a>';
		var xHeight = $(document).height();

		$("body").on("click", ".close-modal", function () {
			$(".gt-ext-modal").remove();
			$(".int-modal").remove();
		});

		if (qtdSKU > 0) {
			var urlCart =
				"/checkout/cart/add?sku=" +
				idSKU +
				"&qty=" +
				qtdSKU +
				"&seller=1&sc=1&redirect=false";
			console.log(urlCart);
			$(this).html("Aguarde...");

			$.ajax({
				url: urlCart,
				success: function () {
					$("body").prepend(
						'<div class="gt-ext-modal" style="height:' + xHeight + 'px"></div>'
					);
					currentSKU
						.closest("li")
						.prepend(
							'<div class="int-modal jn-comprar">' + htmlSucessBuyP + "</div>"
						);
					currentSKU.html("&#10004; Produto adicionado");
					currentSKU.parent().parent().parent().addClass("comprado");
					currentSKU.addClass("comprado");

					//atualiza o minicart
					vtexjs.checkout.getOrderForm();
				},
				error: function (error) {
					currentSKU.html("adicionar ao carrinho");
					console.log("Erro: comprar prateleira: " + error);
				},
			});
		} else {
			alert("Digite uma quantidade maior do que Zero");
		}

		event.preventDefault();
	});

	$(function () {
		$("body").on("keydown", ".val-qtd-pt", function (e) {
			-1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) ||
				(/65|67|86|88/.test(e.keyCode) &&
					(!0 === e.ctrlKey || !0 === e.metaKey)) ||
				(35 <= e.keyCode && 40 >= e.keyCode) ||
				((e.shiftKey || 48 > e.keyCode || 57 < e.keyCode) &&
					(96 > e.keyCode || 105 < e.keyCode) &&
					e.preventDefault());
		});
	});
};

/*Ver mais / Ver menos no MENU LATERAL da VTEX*/
var verMaisLateral = function () {
	$(".menu-departameto ul").each(function () {
		var $this = $(this);
		if ($this.children().length == 0) $this.hide();

		if ($this.find("li").length > 6) {
			$this.find("li:gt(5)").hide().addClass("hide_items");
			$this
				.find(".listradoMenor")
				.before(
					"<li class='menu_show_all'>veja mais</li><li class='menu_hidden_all hide'>recolher</li>"
				);

			$this.find(".menu_show_all").bind("click", function () {
				$this.find(".hide_items").fadeIn(250);
				jQuery(this).hide();
				$this.find(".menu_hidden_all").show();
			});

			$this.find(".menu_hidden_all").bind("click", function () {
				$this.find(".menu_show_all").show();
				$(this).hide();
				$this.find(".hide_items").fadeOut(250);
			});
		}
	});
};

//insere background da cor no label do filtro por "Cor"
var thumbColorFilter = function () {
	/* Inserindo imagem no Filtro de cores */
	$(".filtro_cor > div label").each(function () {
		var cor = $(this).attr("title");
		cor = cor.replace(/ /g, "-");
		cor = cor.replace("/", "-");
		cor = cor.replace(",", "-");
		$(this).css("background", "url('/arquivos/" + cor + ".jpg') no-repeat");
	});
	$("body").on("click", ".filtro_cor label", function () {
		if ($(this).find("input").attr("checked") == "true") {
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
};

var abrePopupNewz = function abrePopup() {
	$("#popupNews, #bgOverlay").fadeIn(600);
	$(".fechar_news").click(function () {
		$("#popupNews, #bgOverlay").fadeOut(600);
	});
	//os_lightbox('<div class=""></div>','popup-welcome');
};

var slickProductMobile = function () {
	$("#image-product #show .thumbs").slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
	});
};

$(function () {
	$("body").on("click", "#mobile-actions .logged", function () {
		$(this).find(">ul").slideToggle();
	});

	nav_page();
	openTarget();

	//adiciona classe a tag <body> referente ao dispositivo acessado mobile ou nao
	if (mobile == "nao") {
		$("body").addClass("no-mobile");
	} else {
		$("body").addClass("mobile");
		$(".shelf-img.shelf-back").remove();
	}

	/*comprar pela prateleira*/
	comprar_qtd_ajax();

	//ao fechar o espiar por dentro do iframe, fecha o popup na tela pai
	$("body").on("click", ".close-wishlist", function () {
		window.top.window.closeIframe();
	});

	//aumenta e diminui a quantidade na prateleira
	//quantidade_prateleira();

	/*minicart*/
	if ($("#miniC").length) {
		$("#miniC").minicart({
			showMinicart: true,
			showTotalizers: true,
		});
	}

	MenuConfig();

	//muda informacoes do minicart quando esta vazio
	mini_Cart();

	//menu principal
	if (mobile == "nao") {
		os_hover_menu("#header li.pai", ".nivel-1");
	}

	//remove li complementar das vitrines
	$(".helperComplement").remove();

	//topo flutuante
	floatBar();

	if ($("body.duvidas-frequentes").length) {
		//aplica efeito de sanfona nas perguntas
		os_sanfona();
	}

	if ($("body.home").length) {
		//seta o cookie para fazer o modal de newsletter
		/*
		var REcookie = docCookies.getItem(name="jaentrou");
		if(REcookie != 1){
		    abrePopupNewz();
		    docCookies.setItem("jaentrou", 1);
		};
		*/

		//tabs colecoes
		os_tabs("#tabs-home-01");
		os_tabs("#tabs-home-02");
		os_tabs("#tabs-home-03");

		//carrossel banners principais
		$("#responsiveSlider > div").responsiveSlides({
			auto: true, // Boolean: Animate automatically, true or false
			speed: 300, // Integer: Speed of the transition, in milliseconds
			timeout: 4000, // Integer: Time between slide transitions, in milliseconds
			pager: true, // Boolean: Show pager, true or false
			nav: false, // Boolean: Show navigation, true or false
			random: false, // Boolean: Randomize the order of the slides, true or false
			pause: false, // Boolean: Pause on hover, true or false
			pauseControls: true, // Boolean: Pause when hovering controls, true or false
			prevText: "Próximo", // String: Text for the "previous" button
			nextText: "Anterior", // String: Text for the "next" button
			maxwidth: "", // Integer: Max-width of the slideshow, in pixels
			navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
			manualControls: "", // Selector: Declare custom pager navigation
			namespace: "rslides", // String: Change the default namespace used
			before: function () {}, // Function: Before callback
			after: function () {}, // Function: After callback
		});

		$(".shelf-carousel.collection > div > ul").slick({
			dots: false,
			slidesToShow: 5,
			lazyLoad: "ondemand",
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
					},
				},
			],
		});

		$("#shelf-02 > div > ul").slick({
			dots: false,
			slidesToShow: 5,
			lazyLoad: "ondemand",
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						dots: true,
						arrows: false,
					},
				},
			],
		});

		$("#shelf-03 > div > ul").slick({
			dots: false,
			slidesToShow: 5,
			lazyLoad: "ondemand",
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						dots: true,
						arrows: false,
					},
				},
			],
		});

		$("#shelf-05 > div > ul").slick({
			dots: false,
			slidesToShow: 5,
			lazyLoad: "ondemand",
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						dots: true,
						arrows: false,
					},
				},
			],
		});

		$("#shelf-06 > div > ul").slick({
			dots: false,
			slidesToShow: 5,
			lazyLoad: "ondemand",
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						dots: true,
						arrows: false,
					},
				},
			],
		});

		$("#shelf-07 > div > ul").slick({
			dots: false,
			slidesToShow: 5,
			lazyLoad: "ondemand",
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						dots: true,
						arrows: false,
					},
				},
			],
		});

		$("#shelf-08 > div > ul").slick({
			dots: false,
			slidesToShow: 5,
			lazyLoad: "ondemand",
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						dots: true,
						arrows: false,
					},
				},
			],
		});

		$("#shelf-09 > div > ul").slick({
			dots: false,
			slidesToShow: 5,
			lazyLoad: "ondemand",
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						dots: true,
						arrows: false,
					},
				},
			],
		});

		$("#shelf-10 > div > ul").slick({
			dots: false,
			slidesToShow: 5,
			lazyLoad: "ondemand",
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						dots: true,
						arrows: false,
					},
				},
			],
		});

		setTimeout(function () {
			$("#shelf-04 > div > ul").slick({
				dots: true,
				slidesToShow: 2,
				responsive: [
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
						},
					},
				],
			});
		}, 300);

		setTimeout(function () {
			$(".tabs-home").each(function () {
				$(this).find(".content-tabs").find(">section+section").hide();
			});
		}, 1000);

		$("#carousel-brands > div").slick({
			dots: false,
			slidesToShow: 5,
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 5,
					},
				},
				{
					breakpoint: 680,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						dots: true,
						arrows: false,
					},
				},
			],
		});

		//correcao de bug no tabs de carrossel
		/*$(window).on('load',function(){
		    var width = $('section#shelf-01 .slick-track').width();
		    var widthLi = $('section#shelf-01 .slick-track li').first().width();
		    $('.slick-track li').attr('style','');
		    $('.slick-track').css('width',width + 'px');
		    $('.slick-track li').css('width',widthLi + 'px');
		});*/
	}

	if ($("body.institucional").length) {
		//destaca a pagina atual relacionada ao item de menu lateral
		var ref = window.location.hash;
		ref = ref.replace("#", "");
		ref = Number(ref) + 1;
		$("#sidebar ul li:nth-child(" + ref + ")")
			.find("a")
			.addClass("active");

		//preenche o menu lateral
		$("ul.col.col25.eq03.conteudo-footer")
			.find("li")
			.each(function () {
				var e = $(this).html();
				$("ul#menu-institucional").append("<li>" + e + "</li>");
			});
	}

	if ($("body.categoria").length) {
		//filtro laterais de categoria
		show_filter();

		//ordenacao de produtos na categoria
		order_by();

		/*visualizacao de produtos em 'tabela' e 'lista' nas pags do template de categoria*/
		visualizacao();

		//troca ordem dos itens no sidebar
		var c = $("#sidebar").find(".menu-departamento").find("> div");
		c.find(".search-single-navigator").prependTo(c);
		c.find(".search-multiple-navigator").appendTo(c);

		//muda o texto da primeira opcao de ordenacao dos produtos
		$(".resultado-busca-filtro select option:first-child").text("Ordene");

		//verifica se o menu lateral tem filtro. caso nao tenha, esconde
		if ($(".search-multiple-navigator").find("h5").length < 1) {
			$(".search-multiple-navigator, #search_filter").remove();
		}

		if (mobile == "nao") {
			config_filtro();
		}

		//trocar texto "selecione" para "ordenar por"
		$(".resultado-busca-filtro select option:first-child").each(function () {
			var text = $(this).html();
			$(this).html(text.replace("Selecione", "Ordenar por"));
		});
	}

	if ($("body.produto").length) {
		if ($(".btn-buy .notifyme").is(":visible")) {
			$("#productSelect").hide();
			$("#buy-product > p").hide();
			$("#qtd-product").hide();
			$("#buy-product .btn-buy").addClass("outOfStock");
			$(".notifyme #notifymeButtonOK").val("Lembrar-me");
		}

		/*carrossel na foto principal do produto (controle)*/
		//big_img_nav();

		/*carrossel de thumbs da pagina de produto*/
		//os_carrossel_thumb();

		//comprar com quantidade
		qtd_produto();

		$("a.buy-button").text("Adicionar ao carrinho");

		if (mobile == "sim") {
			$(document).on("change", function () {
				if ($("#prices .valor-dividido.price-installments").is(":visible")) {
					$("#prices .descricao-preco").css("padding-bottom", "50px");
				}
			});

			if ($(".btn-buy .notifyme").is(":visible")) {
				$("#buy-product").css("margin-top", "200px");
			}

			$(document).on("change", function () {
				if ($("#buy-product .success").is(":visible")) {
					$("#buy-product").css("margin-top", "80px");
				}
			});

			slickProductMobile();

			$("#productSelect .skuList label").on("click", function () {
				$("#image-product #show .thumbs")
					.removeAttr("class")
					.addClass("thumbs");
				setTimeout(function () {
					slickProductMobile();
				}, 1000);
			});
		}

		dropdown_product_infos();

		//imagem no thumb de produto
		ulColorThumbProduct("Cores");

		//compartilhamento
		var i = $("img#image-main").attr("src"); //caminho da imagem
		var d = $(".fn.productName").text(); //nome do produto

		var shareFace =
			"https://www.facebook.com/sharer.php?u=" +
			window.location.href +
			"&picture=" +
			i +
			"";
		var shareTwitter =
			"https://twitter.com/intent/tweet?original_referer=" +
			window.location.href +
			"";
		var shareGPlus =
			"https://plus.google.com/share?url=" + window.location.href + "";

		$("li.facebook").find(">a").attr("href", shareFace);
		$("li.twitter").find(">a").attr("href", shareTwitter);
		$("li.google-plus").find(">a").attr("href", shareGPlus);

		//compartilhamento do pinterest
		$("body").on("click", ".pinterest", function () {
			var url =
				"https://br.pinterest.com/pin/create/button/?description=" +
				d +
				"&media=&url=" +
				window.location.href +
				"%2Fp&media=" +
				i +
				"";
			window.open(
				url,
				"_blank",
				"width=480px,height=480px;left=10%,top:10%,toolbar=no,titlebar=no,status=no,menubar=no,location=no,fullscreen=yes"
			);
		});

		//inclui botão de tabela de medidas
		var h = $("td.Tabela-de-Medidas").html();
		if (typeof h != "undefined") {
			if (h.length > 0) {
				$("#productSelect").eq(0).prepend('<div id="bt-medidas"></div>');
				$("body").on("click", "#bt-medidas", function () {
					os_lightbox(h, "medidas-modal");
				});
			}
		} else {
			console.log("não tem tabela");
		}

		//insere thumb de cor por imagem
		ulColorThumbProduct("Cor");

		//trigger para exibir o calculo de frete
		$(".shipping-value").trigger("click");
	}
});

$(document).ajaxStop(function () {
	/*login*/
	os_login();
	os_redir();
	os_verificaLogin();

	/*minicart*/
	mini_Cart();

	//arredonda porcentagem de desconto na vitrine
	$(".prateleira ul li .flag.discount").each(function () {
		var e = $(this);
		var tem = e.length > 0 ? true : false;
		if (tem) {
			if (!e.parent().hasClass("rounded")) {
				var valor = e.html();
				if (valor != 0) {
					valor = valor.replace(" %", "");
					valor = valor.replace(",", ".");
					valor = Math.round(valor);
					valor = valor + "%";
					e.html("<span>" + valor + "</span>OFF");
					e.parent().addClass("rounded");
					e.show();
				}
			}
		}
	});

	$(document).on("click", "footer#footer .col25.eq03", function () {
		$(this).find("h4").toggleClass("active");
		$(this).find(".mobile").toggleClass("active");
	});

	function send() {
		var usuario = {
			email: $("#email").val(),
			isNewsletterOptIn: true,
		};

		$(".newsletter").hide();
		$("#mensagem").html("Enviando...");

		$.ajax({
			url: "/api/dataentities/NW/documents",
			type: "put",
			dataType: "json",
			contentType: "application/json",
			success: function (data) {
				$("#mensagem").html("Cadastro realizado com sucesso!");
			},
			data: JSON.stringify(usuario),
		});
	}

	$(document).on("click", ".newsletter button", function () {
		send();
	});

	$(".prateleira li .ratingStar").each(function () {
		starsReview($(this));
	});

	/*verificar comprar pela prateleira */
	comprar_prateleira();

	if ($("body.categoria").length) {
		resumeItemsFilter();
		fixLabelMultiple();
	}

	$(".shelf-carousel.collection > div > ul").slick({
		dots: false,
		slidesToShow: 5,
		lazyLoad: "ondemand",
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});
});

$(window).load(function () {
	$("#topbar > li #miniC a.cartCheckout").attr("href", "/checkout/#/cart");
	if ($("body.produto").length) {
		$("#btnFreteSimulacao").click(function () {
			$(".cep-busca").hide();
			if (mobile == "sim") {
				$("#buy-product .btn-buy").css("top", "320px");
			}
		});

		//inclui um texto no input de CEP
		$("input#txtCep").attr("placeholder", "Digite o CEP");
	}

	if ($("body.categoria").length) {
		//insere background da cor no label do filtro por "Cor"
		thumbColorFilter();
	}
});
