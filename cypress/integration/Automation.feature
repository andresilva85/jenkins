Feature: Adicionar produto ao carrinho de compras
    Como usuário, desejo navegar ao site de compras
    E escolher um produto, adicionando ao carrinho de compras

    Scenario: Adicionando produto ao carrinho
        Given que estou na pagina do site de compras
        When encontro o produto que desejo e adiciono ao carrinho
        Then o produto é adicionado com sucesso  