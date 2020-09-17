var filterBrands = {
	init: function () {
		var e =
			'<div class="_FilterBrands"><input type="text" placeholder="Encontre uma marca" id="brand__filter" /></div>';
		$(".filtro_marca > div").before(e),
			$(".refino.Atacado").eq(0).length > 0 &&
				$(".refino.Atacado")
					.eq(0)
					.insertBefore($(".refino-marca.filtro_marca")),
			$("body").on(
				{
					input: function () {
						var e = $(this).val().toLowerCase();
						e.length > 0
							? $(".filtro_marca > div > label").filter(function (t, r) {
									var a = $(r).text().toLowerCase();
									a.indexOf(e) > -1
										? $(r).removeClass("_hidden")
										: $(r).addClass("_hidden");
							  })
							: $(".filtro_marca > div > label").removeClass("_hidden");
					},
				},
				"#brand__filter"
			);
	},
	lockAndUnlockFilter: function () {
		$(".search-multiple-navigator input").click(function () {
			$(".search-multiple-navigator input").each(function () {
				// $(this).attr('disabled',true);
			});
			setTimeout(function () {
				$(".search-multiple-navigator input").each(function () {
					// $(this).attr('disabled',false);
				});
			}, 2000);
		});
	},
};
$(window).load(function () {
	$(".multi-search-checkbox").vtexSmartResearch(), filterBrands.init();
	filterBrands.lockAndUnlockFilter();
});
var viewport = window.innerWidth;
"function" != typeof String.prototype.replaceSpecialChars &&
	(String.prototype.replaceSpecialChars = function () {
		var e = {
			ç: "c",
			æ: "ae",
			œ: "oe",
			á: "a",
			é: "e",
			í: "i",
			ó: "o",
			ú: "u",
			à: "a",
			è: "e",
			ì: "i",
			ò: "o",
			ù: "u",
			ä: "a",
			ë: "e",
			ï: "i",
			ö: "o",
			ü: "u",
			ÿ: "y",
			â: "a",
			ê: "e",
			î: "i",
			ô: "o",
			û: "u",
			å: "a",
			ã: "a",
			ø: "o",
			õ: "o",
			u: "u",
			Á: "A",
			É: "E",
			Í: "I",
			Ó: "O",
			Ú: "U",
			Ê: "E",
			Ô: "O",
			Ü: "U",
			Ã: "A",
			Õ: "O",
			À: "A",
			Ç: "C",
		};
		return this.replace(/[\u00e0-\u00fa]/g, function (t) {
			return "undefined" != typeof e[t] ? e[t] : t;
		});
	}),
	"function" != typeof String.prototype.trim &&
		(String.prototype.trim = function () {
			return this.replace(/^\s+|\s+$/g, "");
		}),
	(jQuery.fn.vtexSmartResearch = function (e) {
		$this = jQuery(this);
		var t = function (e, t) {
				"object" == typeof console &&
					console.log("[Smart Research - " + (t || "Erro") + "] " + e);
			},
			r = {
				pageLimit: null,
				loadContent: ".prateleira[id^=ResultItems]",
				shelfClass: ".prateleira",
				filtersMenu: ".search-multiple-navigator",
				linksMenu: ".search-single-navigator",
				menuDepartament: ".navigation .menu-departamento",
				mergeMenu: !0,
				insertMenuAfter: ".search-multiple-navigator h3:first",
				emptySearchElem: jQuery('<div class="vtexsr-emptySearch"></div>'),
				elemLoading:
					'<div id="scrollLoading"><img src="/arquivos/loading-prod.gif" /> <h5>Carregando mais produtos...</h5> </div>',
				returnTopText: '<i class="fa fa-chevron-up"></i>',
				emptySearchMsg:
					"<h3>Esta combinação de filtros não retornou nenhum resultado!</h3>",
				filterErrorMsg: "Houve um erro ao tentar filtrar a página!",
				searchUrl: null,
				usePopup: !1,
				showLinks: !0,
				popupAutoCloseSeconds: 3,
				filterScrollTop: function (e) {
					return $(".prateleira").offset().top - $("header").height();
				},
				callback: function () {},
				getShelfHeight: function (e) {
					return e.scrollTop() + e.height();
				},
				shelfCallback: function () {},
				ajaxCallback: function () {},
				emptySearchCallback: function () {},
				authorizeScroll: function () {
					return !0;
				},
				authorizeUpdate: function () {
					return !0;
				},
				labelCallback: function (e) {},
			},
			a = jQuery.extend(r, e),
			n = ("object" == typeof console, jQuery("")),
			i = jQuery(a.elemLoading),
			o = 2,
			l = !0,
			s = jQuery(window),
			u = (jQuery(document), jQuery("html,body")),
			c = jQuery("body"),
			f = "",
			d = "",
			p = "",
			h = !1,
			m = jQuery(a.loadContent),
			g = jQuery(a.filtersMenu),
			v = {
				requests: 0,
				filters: 0,
				isEmpty: !1,
			},
			y = {},
			b = {
				getUrl: function (e) {
					var t = e || !1;
					return t
						? f.replace(/PageNumber=[0-9]*/, "PageNumber=" + o)
						: (p + d).replace(/PageNumber=[0-9]*/, "PageNumber=" + T);
				},
				getSearchUrl: function () {
					var e, r, a;
					return (
						jQuery("script:not([src])").each(function () {
							if (
								((r = jQuery(this)[0].innerHTML),
								(a = /\/buscapagina\?.+&PageNumber=/i),
								r.search(/\/buscapagina\?/i) > -1)
							)
								return (e = a.exec(r)), !1;
						}),
						"undefined" != typeof e && "undefined" != typeof e[0]
							? e[0]
							: (t(
									"Não foi possível localizar a url de busca da página.\n Tente adicionar o .js ao final da página. \n[Método: getSearchUrl]"
							  ),
							  "")
					);
				},
				scrollToTop: function () {
					var e = c.find("#returnToTop");
					e.length < 1 &&
						((e = jQuery(
							'<div id="backToTop" class="hidden-xs hidden-sm"><a href="#">' +
								a.returnTopText +
								'<span class="backToTop"></span></a></div>'
						)),
						c.append(e));
					var t = s.height();
					s.bind("resize", function () {
						t = s.height();
					}),
						s.bind("scroll", function () {
							s.scrollTop() > t
								? e.stop(!0).fadeTo(300, 1, function () {
										e.show();
								  })
								: e.stop(!0).fadeTo(300, 0, function () {
										e.hide();
								  });
						}),
						e.bind("click", function () {
							return (
								u.animate(
									{
										scrollTop: 0,
									},
									"slow"
								),
								!1
							);
						});
				},
				infinitScroll: function () {
					var e, r, n, s;
					(e = c.find(".pager:first").attr("id")),
						(s = (e || "").split("_").pop()),
						(r = null !== a.pageLimit ? a.pageLimit : window["pagecount_" + s]),
						(n = !0),
						"undefined" == typeof r && (r = 99999999),
						r > 1 &&
							m &&
							m.after(
								"<div class='btn-load-more confira-todos-produtos'><span>Carregar mais produtos</span></div>"
							),
						$("body").on("click", ".btn-load-more", function (e) {
							var s = m;
							if (!(!h && o <= r && l && a.authorizeScroll(v)))
								if ($(".no-more-results").length === 0) {
									return (
										m.append(
											"<div class='no-more-results'><span>Todos os produtos já foram carregados!</span></div>"
										),
										m.find(".btn-load-more").fadeOut("fast"),
										!1
									);
								}
							if (s.scrollTop() + s.height() >= a.getShelfHeight(m) && n) {
								m.find(".btn-load-more").fadeOut("fast");
								var u = m.find(a.shelfClass).filter(":last");
								u.after(i),
									(n = !1),
									(k = jQuery.ajax({
										url: b.getUrl(!0),
										success: function (e) {
											e.trim().length < 1
												? ((l = !1),
												  t(
														"Não existem mais resultados a partir da página: " +
															(o - 1),
														"Aviso"
												  ),
												  m.find(".btn-load-more").fadeOut("fast"),
												  console.log(
														"Não existem mais resultados a partir da página: " +
															(o - 1),
														"Aviso"
												  ))
												: u.after(e),
												m.find(".btn-load-more").fadeIn("fast"),
												(n = !0),
												i.remove(),
												v.requests++,
												a.ajaxCallback(v);
										},
									})),
									o++;
							}
						});
				},
			};
		if (
			((f = p = null !== a.searchUrl ? a.searchUrl : b.getSearchUrl()),
			$this.length < 1)
		)
			return (
				a.showLinks && jQuery(a.linksMenu).css("visibility", "visible").show(),
				b.infinitScroll(),
				b.scrollToTop(),
				$this
			);
		if (m.length < 1)
			return (
				t(
					"Elemento para destino da requisição não foi encontrado \n (" +
						m.selector +
						")"
				),
				!1
			);
		g.length < 1 &&
			t("O menu de filtros não foi encontrado \n (" + g.selector + ")");
		var C = (document.location.href, jQuery(a.linksMenu)),
			j = jQuery('<div class="vtexSr-overlay"></div>'),
			x = jQuery(a.menuDepartament),
			S = m.offset(),
			T = 1,
			Q = null,
			k = null;
		a.emptySearchElem.append(a.emptySearchMsg), m.before(j);
		var M = {
			exec: function () {
				M.setFilterMenu(),
					M.fieldsetFormat(),
					$this.each(function () {
						var e = jQuery(this),
							t = e.parent();
						e.is(":checked") &&
							((d += "&" + (e.attr("rel") || "")), t.addClass("sr_selected")),
							M.adjustText(e),
							t.append(
								'<span class="sr_box"></span><span class="sr_box2"></span>'
							),
							e.bind("change", function () {
								M.inputAction(),
									e.is(":checked") ? M.addFilter(e) : M.removeFilter(e),
									(v.filters = $this.filter(":checked").length);
							});
					}),
					"" !== d && M.addFilter(n);
			},
			mergeMenu: function () {
				if (!a.mergeMenu) return !1;
				var e = x;
				e.insertAfter(a.insertMenuAfter), M.departamentMenuFormat(e);
			},
			mergeMenuList: function () {
				var e = 0;
				g.find("h3,h4").each(function () {
					var t = C.find("h3,h4").eq(e).next("ul");
					t.insertAfter(jQuery(this)), M.departamentMenuFormat(t), e++;
				});
			},
			departamentMenuFormat: function (e) {
				e.find("a").each(function () {
					var e = jQuery(this);
					e.text(M.removeCounter(e.text()));
				});
			},
			fieldsetFormat: function () {
				(y.fieldsetCount = 0),
					(y.tmpCurrentLabel = {}),
					g.find("fieldset").each(function () {
						var e = jQuery(this),
							t = e.find("label"),
							r =
								"filtro_" +
								(e.find("h5:first").text() || "")
									.toLowerCase()
									.replaceSpecialChars()
									.replace(/\s/g, "-");
						if (((y[r] = {}), t.length < 1)) return void e.hide();
						if ((e.addClass(r), "filtro_faixa-de-preco" == r)) {
							var n = [];
							t.each(function (t) {
								var i = jQuery(this),
									o = i.find("input").val() || "",
									l =
										"sr_" +
										o.toLowerCase().replaceSpecialChars().replace(/\s/g, "-"),
									s = i.text();
								(s = s.substring(0, s.length - 4)),
									n.push(s),
									(y.tmpCurrentLabel = {
										fieldsetParent: [e, r],
										elem: i,
									}),
									(y[r][t.toString()] = {
										className: l,
										title: o,
									}),
									i.addClass(l).attr({
										title: o,
										index: t,
									}),
									a.labelCallback(y);
							});
							n.length - 1;
						} else
							t.each(function (t) {
								var n = jQuery(this),
									i = n.find("input").val() || "",
									o =
										"sr_" +
										i.toLowerCase().replaceSpecialChars().replace(/\s/g, "-");
								(y.tmpCurrentLabel = {
									fieldsetParent: [e, r],
									elem: n,
								}),
									(y[r][t.toString()] = {
										className: o,
										title: i,
									}),
									n.addClass(o).attr({
										title: i,
										index: t,
									}),
									a.labelCallback(y);
							});
						y.fieldsetCount++;
					});
			},
			inputAction: function () {
				null !== k && k.abort(), null !== Q && Q.abort(), (o = 2), (l = !0);
			},
			addFilter: function (e) {
				(d += "&" + (e.attr("rel") || "")),
					j.fadeTo(300, 0.6),
					(f = b.getUrl()),
					(Q = jQuery.ajax({
						url: f,
						success: M.filterAjaxSuccess,
						error: M.filterAjaxError,
					})),
					e.parent().addClass("sr_selected");
			},
			removeFilter: function (e) {
				var t = e.attr("rel") || "";
				j.fadeTo(300, 0.6),
					"" !== t && (d = d.replace("&" + t, "")),
					(f = b.getUrl()),
					(Q = jQuery.ajax({
						url: f,
						success: M.filterAjaxSuccess,
						error: M.filterAjaxError,
					})),
					e.parent().removeClass("sr_selected");
			},
			filterAjaxSuccess: function (e) {
				var t = jQuery(e);
				j.fadeTo(300, 0, function () {
					jQuery(this).hide();
				}),
					M.updateContent(t),
					v.requests++,
					a.ajaxCallback(v),
					u.animate(
						{
							scrollTop: a.filterScrollTop(
								S || {
									top: 0,
									left: 0,
								}
							),
						},
						600
					);
			},
			filterAjaxError: function () {
				j.fadeTo(300, 0, function () {
					jQuery(this).hide();
				}),
					alert(a.filterErrorMsg),
					t(
						"Houve um erro ao tentar fazer a requisição da página com filtros."
					);
			},
			updateContent: function (e) {
				if (((h = !0), !a.authorizeUpdate(v))) return !1;
				var t = e.filter(a.shelfClass),
					r = m.find(a.shelfClass);
				(r.length > 0 ? r : a.emptySearchElem).slideUp(600, function () {
					jQuery(this).remove(),
						a.usePopup
							? c.find(".boxPopUp2").vtexPopUp2()
							: a.emptySearchElem.remove(),
						t.length > 0
							? (t.hide(),
							  m.append(t),
							  a.shelfCallback(),
							  t.slideDown(600, function () {
									h = !1;
							  }),
							  (v.isEmpty = !1))
							: ((v.isEmpty = !0),
							  a.usePopup
									? a.emptySearchElem
											.addClass(
												"freeContent autoClose ac_" + a.popupAutoCloseSeconds
											)
											.vtexPopUp2()
											.stop(!0)
											.show()
									: (m.append(a.emptySearchElem),
									  a.emptySearchElem
											.show()
											.css("height", "auto")
											.fadeTo(300, 0.2, function () {
												a.emptySearchElem.fadeTo(300, 1);
											})),
							  a.emptySearchCallback(v));
				});
			},
			adjustText: function (e) {
				var t = e.parent(),
					r = t.text();
				(qtt = ""), (r = M.removeCounter(r)), t.text(r).prepend(e);
			},
			removeCounter: function (e) {
				return e.replace(/\([0-9]+\)/gi, function (e) {
					return (qtt = e.replace(/\(|\)/, "")), "";
				});
			},
			setFilterMenu: function () {
				g.length > 0 && (C.hide(), g.show());
			},
		};
		c.hasClass("departamento")
			? M.mergeMenu()
			: (c.hasClass("categoria") || c.hasClass("resultado-busca")) &&
			  M.mergeMenuList(),
			M.exec(),
			b.infinitScroll(),
			b.scrollToTop(),
			a.callback(),
			g.css("visibility", "visible");
	}),
	$(function () {});
