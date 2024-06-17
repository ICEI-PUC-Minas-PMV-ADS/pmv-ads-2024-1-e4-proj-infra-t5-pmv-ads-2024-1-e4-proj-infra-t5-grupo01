# Plano de Testes de Software

# Plano de Testes de Software
<p align="justify">
 
| **Caso de Teste** 	| **CT-01 - Visualizar a página principal**                                                          	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-01 - A aplicação deve apresentar na página principal informações sobre a história da cafeteria.   |
| Objetivo do Teste 	| Verificar se a carga da página inicial está acontecendo corretamente.                               |
| Passos 	           | 1. Acessar o Navegador <br> 2. Informar o endereço do Site / Acessar o aplicativo mobile <br> 3. Visualizar a página principal    |
| Critério de Êxito  | Todos os textos, imagens e ícones devem ser carregados totalmente.                                  |

 
| **Caso de Teste** 	| **CT-02 - Visualizar o cardápio**                                                                  	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-02 -  A aplicação deve apresentar, para cada produto, uma imagem correspondente. (thumbnail) <br> RF-03 - A aplicação deve permitir ao usuário visualizar o cardápio completo da cafeteria com todos os detalhes.                                         |
| Objetivo do Teste 	| Verificar se a aplicação apresenta corretamente o cardápio.                                         |
| Passos 	           | 1. Acessar o Navegador <br> 2. Informar o endereço do Site / Acessar o aplicativo mobile <br> 3. Acessar o menu do cardápio <br> 4. Verificar se as imagens e as informações dos produtos estão carregando corretamente                                                                                   |
| Critério de Êxito  | As informações dos produtos devem ser exibidas corretamente no site e no mobile. <br> As imagens dos produtos devem estar relacionadas corretamente ao item.                                                                              |


| **Caso de Teste** 	| **CT-03 - Cadastrar produtos**                                                         |
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-04 - A aplicação deve permitir ao gestor cadastrar, alterar e remover produtos tanto no cardápio quanto no estoque e promoções.<br> RF-05 - A aplicação deve permitir que o usuário adicione e remova ingredientes, produtos e promoções.<br> RF-12 - A aplicação deve permitir o cadastro e atualização dos produtos de estoque pelos funcionários. |
| Objetivo do Teste 	| Verificar se os produtos são cadastrados, editados e excluídos.               |
| Passos 	           | 1. Acessar o Navegador <br> 2. Informar o endereço do Site <br> 3. Acessar o perfil de administrador <br> 4. Clicar em criar novo, clicar em editar e clicar em remover <br> 5. Adicionar, editar e remover as informações <br> 6. Salvar|
| Critério de Êxito  | Verificar se o usuário consegue adicionar, editar e remover novos produtos, promoções.<br> Verificar se o usuário consegue adicionar, editar e remover um produto.|
  
| **Caso de Teste** 	| **CT-04 - Realizar pedidos**                                                                       	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-06 - A aplicação permite que o usuário realize os seus pedidos diretamente por ele.              |
| Objetivo do Teste 	| Verificar se os produtos que o cliente seleciona estão sendo adicionados ao carrinho.               |
| Passos 	           | 1. Acessar o aplicativo mobile <br> 2. Logar com o seu usuário <br> 3. Acessar o cardápio <br> 4. Adicionar um produto no carrinho <br> 5. Clicar em Realizar Pedido                                                                                                            |
| Critério de Êxito  | Verificar se o usuário consegue adicionar um produto no carrinho.|
 
| **Caso de Teste** 	| **CT-05 - Relatório de estoque**                                                                              	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-07- A aplicação deve oferecer ao gestor uma funcionalidade de relatório de estoque dos produtos da cafeteria.|
| Objetivo do Teste 	| Geração de relatório para verificar o estoque.                                                      |
| Passos 	           | 1. Acessar o Navegador<br>2. Informar o endereço do Site<br>3. Acessar a aba de login<br>4. Preencher campo de usuário<br>5. Preencher o campo da senha<br>6. Clicar em Entrar<br>7. No menu, clicar em gerar relatório<br>8. Clicar no botão gerar                       |
| Critério de Êxito  | O relatório de estoque será gerado com sucesso                                     .                                  |

 | **Caso de Teste** 	| **CT-06 - Contatos**                                                                      	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-08 - A aplicação deve permitir visualizar as informações de contatos do desenvolvedor do site.                  |
| Objetivo do Teste 	| Verificar se o usuário consegue se ver os contados do site.                                               |
| Passos 	           | 1. Acessar o Navegador<br>2. Informar o endereço do Site<br>3. Acessar o rodapé do site <br>4. Verificar se os contatos aparecem|
| Critério de Êxito  | Irá aparecer uma página com os contatos do site  
 
 | **Caso de Teste** 	| **CT-07 - Relatório de Vendas**                                                                    |
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-09 - A aplicação deve oferecer ao gestor uma funcionalidade de relatório de vendas..             |
| Objetivo do Teste 	| Verificar se o administrador consegue gerar o relatório de vendas.                                  |
| Passos 	           | 1. Acessar o Navegador<br>2. Informar o endereço do Site<br>3. Acessar a aba de login de administrador<br>4. Clicar gerenciamento <br>5. Clicar em relatório de vendas<br>6. Gerar relatório|
| Critério de Êxito  | Irá gerar um relatório de vendas.   
 
| **Caso de Teste** 	| **CT-08 - Cadastrar usuário**                                                                      	|
|--------------------|-----------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-10 - A aplicação deve permitir que qualquer usuário possa se cadastrar no site e no mobile.                  |
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar no site.                                               |
| Passos 	           | 1. Acessar o Navegador<br>2. Informar o endereço do Site / Acessar o aplicativo mobile <br>3. Acessar a aba de login<br>4. Clicar em cadastrar<br>5. Informar os dados necessários<br>6. Salvar dados|
| Critério de Êxito  | Irá aparecer uma mensagem como: O cadastro foi realizado com sucesso.                                                               |
 
| **Caso de Teste** 	| **CT-09  - Login de usuário**                                                           	             |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-11 - A aplicação deve permitir que os usuários realizem seus pedidos após a realização do login                |
| Objetivo do Teste 	| Verificar se o usuário consegue ver os dados do próprio cadastro.                                                                    |
| Passos 	           | 1. Acessar o aplicativo mobile<br> 2. Acessar a aba de login<br>3. Preencher o campo de usuário<br>4. Preencher o campo da senha<br>5. Clicar em Entrar |
| Critério de Êxito  | As informações fornecidas pelo usuário devem ser compatíveis com as do cadastro.<br> A aplicação deverá realizar o login com sucesso.|
 
| **Caso de Teste** 	| **CT-10  - Atualização de estoque**                                                           	             |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------|
|	Requisito Associado| RF-12 - A aplicação deve permitir o cadastro e atualização dos produtos de estoque pelos funcionários. |
| Objetivo do Teste 	| Verificar se o usuário consegue adicionar, editar e excluir os produtos no estoque.                                                                                         |
| Passos 	           | 1. Acessar o Navegador<br>2. Informar o endereço do Site<br>3. Acessar a aba de login como administrador <br>4. Ir na aba gerenciamento <br>5. ir na aba de cadastrar produtos <br>6. Clicar em salvar |
| Critério de Êxito  | As informações do estoque devem ser adicionadas, editadas e excluídas com sucesso.|
 




 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)





# Plano de Testes de Software: Aplicativo BluCoffee 

## Objetivo:

O objetivo deste plano de testes é garantir que o aplicativo BluCoffee, uma plataforma acessível e interativa para recursos de uma cafeteria, seja desenvolvido e entregue com alta qualidade, garantindo funcionalidades adequadas, desempenho otimizado e uma experiência do usuário satisfatória.

## Escopo:
O plano de testes cobrirá todas as principais funcionalidades do aplicativo BluCoffee, incluindo:

1.Registro e login de usuários.</br>
2.Visualização do cardápio.</br>
3.Realização de pedidos.</br>
4.Processamento de pagamentos.</br>
5.Gerenciamento de informações do usuário.</br>

# Testes:

### Testes de Unidade: </br>
Testar individualmente cada componente do aplicativo, garantindo que funcionem corretamente de acordo com suas especificações.

### Testes de Integração:</br>
Testar a integração entre diferentes componentes do aplicativo para garantir que trabalhem juntos sem problemas.

### Testes de Sistema: </br>
Testar o aplicativo como um todo para garantir que todas as funcionalidades estejam operando conforme o esperado.

### Testes de Usabilidade: </br>
Avaliar a facilidade de uso do aplicativo, a clareza das instruções e a navegabilidade para garantir uma experiência do usuário intuitiva.

### Testes de Desempenho: </br>
Avaliar o desempenho do aplicativo em diferentes condições de carga para garantir que ele responda de forma rápida e eficiente.

## Critérios de Aceitação: </br>

Todas as funcionalidades do aplicativo devem estar operando conforme as especificações.</br>
O aplicativo deve ser intuitivo e fácil de usar para os usuários.</br>
O desempenho do aplicativo deve ser satisfatório em diferentes condições.</br>

## Plano de Contingência:

Em caso de descoberta de problemas graves durante os testes, a equipe de desenvolvimento será notificada imediatamente para correção.</br>
Se os problemas persistirem e afetarem significativamente a qualidade ou funcionalidade do aplicativo, consideraremos adiar o lançamento até que os problemas sejam resolvidos.

## Responsabilidades:
A equipe de desenvolvimento é responsável por fornecer versões do aplicativo para teste.</br>
A equipe de teste é responsável por executar os testes conforme planejado e relatar quaisquer problemas encontrados à equipe de desenvolvimento.</br>
Este plano de testes será revisado e ajustado conforme necessário durante o processo de desenvolvimento para garantir a cobertura adequada e a qualidade do aplicativo BluCoffee.</br>



