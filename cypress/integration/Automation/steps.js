import addProduto from '../../support/pages/mainPage'

Given(/^que estou na pagina do site de compras$/, () => {
	addProduto.navegaSite();
});

When(/^encontro o produto que desejo e adiciono ao carrinho$/, () => {
	addProduto.procAddProduto();
});

Then(/^o produto é adicionado com sucesso$/, () => {
	addProduto.verificaShopCart();
});
