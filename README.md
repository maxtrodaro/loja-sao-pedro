# Developed by Eduardo Godoy and Bruno Galego

### Dependecies Version

NodeJS - Any version before 12.

Gulp - Version recommended 3.9.0

### Init

_npm install_ para instalar as dependencies ( em caso de erro, utilizar o comando _npm install --unsafe-perm_ )

_npm run start_ para rodar o projeto ( em caso de erro, utilizar o comando _sudo npm run start_ )

### Build project

_npm run gulp clean_ executar esse comando para limpar os resquícios da pasta dist

_npm run gulp copy_ executar para gerar uma pasta dist nova e com os arquivos buildados e minificados

#### Mixins

@mixin sombreado {
box-shadow: 0 2px 6.65px 0.35px rgba(0, 0, 0, 0.3);
}

@mixin font-size-rem($pixels) {
	font-size: ($pixels / 14) + rem;
}

#### Function Create

Criação de funçōes utilizadas apenas no arquivo.

```javascript
minhaFuncao = () => {};
```

- Função com paramêtros

```javascript
minhaFuncao = (parametro) => {};
```

- Init e Callback de funçōes

_Init_

```javascript
$(function () {
	minhaFuncao();
});
```

_Callback_

```javascript
minhaFuncao = () => {
	outraFuncao(parametro);
};
```

##### Slick

```javascript
    slickFunction = () => {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade: false,
        arrows: true,
        dots: false
    }
```

##### API Search

```javascript
const _productId = "";

$.ajax({
	headers: {
		Accept: "application/vnd.vtex.ds.v10+json",
		"Content-Type": "application/json",
	},
	url: `/api/catalog_system/pub/products/search/?fq=productId:${_productId}`,
	type: "GET",
	success: function (response) {},
	error: function (response) {},
});
```

##### SKU Variations

```javascript
const _productId = "";

$.ajax({
	headers: {
		Accept: "application/vnd.vtex.ds.v10+json",
		"Content-Type": "application/json",
	},
	url: `/api/catalog_system/pub/products/search/?fq=productId:${_productId}`,
	type: "GET",
	success: function (response) {
		const skus = response[0].items;
		skus.map(function (value) {
			console.log(value);
		});
	},
	error: function (response) {},
});
```
