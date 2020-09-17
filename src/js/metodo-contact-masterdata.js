function ContactCreate(dataEntity, co_client) {
	var co_description = $("#co_description").val();

	var jsonCO = {
		client: co_client.replace("CL-", ""),
		description: co_description,
	};

	var urlCO = "/api/dataentities/" + dataEntity + "/documents/";

	$.ajax({
		url: urlCO,
		type: "POST",
		cache: false,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		data: JSON.stringify(jsonCO),
		success: function (data) {
			console.log(data);
			ResetMessages();
			$("#co_message_success").show();
			$("#cl_first_name").val("");
			$("#cl_last_name").val("");
			$("#cl_email").val("");
			$("#cl_home_phone").val("");
			$("#cl_phone").val("");
			$("#co_description").val("");
		},
		error: function (data) {
			console.log(data);
			ResetMessages();
			$("#co_message_error").show();
		},
	});
}

function ContactCreateByEmail(storeName, dataEntity, cl_email) {
	var cl_url = "/api/dataentities/CL/search/?email=" + cl_email + "&_fields=id";

	$.ajax({
		url: cl_url,
		type: "GET",
		cache: false,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		success: function (data, textStatus, xhr) {
			console.log(data);
			if (xhr.status == "200" || xhr.status == "201") {
				ContactCreate(storeName, dataEntity, data[0].id);
			} else {
				ResetMessages();
				$("#co_message_error").show();
			}
		},
		error: function (data) {
			console.log(data);
			ResetMessages();
			$("#co_message_error").show();
		},
	});
}

function ClientCreate() {
	var storeName = $("#master_data_store_name").val();
	var dataEntity = $("#master_data_data_entity").val();

	var cl_first_name = $("#cl_first_name").val();
	var cl_last_name = $("#cl_last_name").val();
	var cl_email = $("#cl_email").val();
	var cl_home_phone = $("#cl_home_phone").val();
	var cl_phone = $("#cl_phone").val();

	var cl_json = {
		firstName: cl_first_name,
		lastName: cl_last_name,
		email: cl_email,
		homePhone: cl_home_phone,
		phone: cl_phone,
	};

	var cl_url = "/api/dataentities/CO/documents/";

	$.ajax({
		url: cl_url,
		type: "PATCH",
		cache: false,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		data: JSON.stringify(cl_json),

		success: function (data, textStatus, xhr) {
			console.log(data);
			if (xhr.status == "200" || xhr.status == "201") {
				ContactCreate(storeName, dataEntity, data.Id);
			} else if (xhr.status == "304") {
				ContactCreateByEmail(storeName, dataEntity, cl_email);
			} else {
				ResetMessages();
				$("#co_message_error").show();
			}
		},
		error: function (data) {
			console.log(data);
			ResetMessages();
			$("#co_message_error").show();
		},
	});
}

function ResetMessages() {
	$("#co_message_loading").hide();
	$("#co_message_validate").hide();
	$("#co_message_success").hide();
	$("#co_message_error").hide();
}

function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function FormValidate() {
	var isFormValidate = true;

	if ($("#cl_first_name").val() == "") {
		isFormValidate = false;
		$("#cl_first_name").focus();
	}
	if (isFormValidate && $("#cl_last_name").val() == "") {
		isFormValidate = false;
		$("#cl_last_name").focus();
	}
	if (isFormValidate && $("#cl_email").val() == "") {
		isFormValidate = false;
		$("#cl_email").focus();
	}
	if (isFormValidate && !IsEmail($("#cl_email").val())) {
		isFormValidate = false;
		$("#cl_email").val("");
		$("#cl_email").focus();
	}
	if (isFormValidate && $("#cl_home_phone").val() == "") {
		isFormValidate = false;
		$("#cl_home_phone").focus();
	}

	if (isFormValidate && $("#co_description").val() == "") {
		isFormValidate = false;
		$("#co_description").focus();
	}

	if (isFormValidate) {
		ResetMessages();
		$("#co_message_loading").show();
		ClientCreate();
	} else {
		ResetMessages();
		$("#co_message_validate").show();
	}

	return false;
}

function FormCreate(
	storeName,
	dataEntity,
	htmlElementId,
	messageLoading,
	messageValidation,
	messageSuccess,
	messageError
) {
	var htmlContent = "";

	htmlContent +=
		'<div id="co_message_loading" class="alert alert-info" style="display:none;">' +
		messageLoading +
		"</div>";
	htmlContent +=
		'<div id="co_message_validate" class="alert alert-warning" style="display:none;">' +
		messageValidation +
		"</div>";
	htmlContent +=
		'<div id="co_message_success" class="alert alert-success" style="display:none;">' +
		messageSuccess +
		"</div>";
	htmlContent +=
		'<div id="co_message_error" class="alert alert-danger" style="display:none;">' +
		messageError +
		"</div>";
	htmlContent +=
		'<form id="co_form" action="javascript:FormValidate()" enctype="multipart/form-data" method="put">';
	htmlContent += "<fieldset>";
	htmlContent +=
		'<input type="hidden" id="master_data_store_name" name="master_data_store_name" value="' +
		storeName +
		'" />';
	htmlContent +=
		'<input type="hidden" id="master_data_data_entity" name="master_data_data_entity" value="' +
		dataEntity +
		'" />';
	htmlContent += '<div class="line">';
	htmlContent += '<span class="col50 obr">';
	htmlContent += '<label for="cl_first_name">Nome *</label>';
	htmlContent +=
		'<input type="text" id="cl_first_name" name="cl_first_name" placeholder="Nome" require="require">';
	htmlContent += "</span>";
	htmlContent += '<span class="col50 obr">';
	htmlContent += '<label for="cl_last_name">Sobrenome</label>';
	htmlContent +=
		'<input type="text" id="cl_last_name" name="cl_last_name" placeholder="Sobrenome">';
	htmlContent += "</span>";
	htmlContent += "</div>";
	htmlContent += '<div class="line">';
	htmlContent += '<span class="col100 obr">';
	htmlContent += '<label for="cl_email">E-mail *</label>';
	htmlContent +=
		'<input type="text" id="cl_email" name="cl_email" placeholder="E-mail" require="require">';
	htmlContent += "</span>";
	htmlContent += "</div>";
	htmlContent += '<div class="line">';
	htmlContent += '<span class="col50">';
	htmlContent += '<label for="cl_home_phone">Telefone</label>';
	htmlContent +=
		'<input type="text" id="cl_home_phone" name="cl_home_phone" placeholder="Telefone">';
	htmlContent += "</span>";
	htmlContent += '<span class="col50">';
	htmlContent += '<label for="cl_phone">Celular</label>';
	htmlContent +=
		'<input type="text" id="cl_phone" name="cl_phone" placeholder="Celular">';
	htmlContent += "</span>";
	htmlContent += "</div>";
	htmlContent += '<div class="line">';
	htmlContent += '<span class="col100 obr">';
	htmlContent += "<h4>Sua Mensagem</h4>";
	htmlContent += '<label for="co_description">Mensagem *</label>';
	htmlContent +=
		'<textarea name="co_description" id="co_description" require="require"></textarea>';
	htmlContent += "</span>";
	htmlContent += "</div>";
	htmlContent +=
		'<div class="line enviar"><span><input id="commit" name="commit" type="submit" value="Enviar"></span></div>';
	htmlContent += "</fieldset>";
	htmlContent += "</form>";

	$("#" + htmlElementId).html(htmlContent);
}
