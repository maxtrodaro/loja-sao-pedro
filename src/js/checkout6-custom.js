// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.

$(document).ready(function () {
	$('.onda-v1 .ttu').each(function () {
		var text = $(this).html();
		$(this).html(text.replace('Retirar', 'Retirar na Loja'));
	});
});
