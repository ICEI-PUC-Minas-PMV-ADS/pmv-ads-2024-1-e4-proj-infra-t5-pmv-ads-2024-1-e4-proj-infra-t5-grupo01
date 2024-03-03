# Especificações do Projeto

## Personas

<p>A persona representa o cliente ideal, sendo um modelo que encapsula todas as características do cliente ideal. Ela é construída com base em dados e atributos de clientes reais, como comportamento, informações demográficas, desafios e objetivos. Portanto, ao definir uma persona, nosso objetivo é compreender os conflitos ou problemas enfrentados pelo cliente, de modo a determinar como o sistema que está sendo projetado pode ajudá-lo.</p>

As personas elaboradas neste projeto abrangem as seguintes características:
</br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-pmv-ads-2024-1-e4-proj-infra-t5-grupo01/assets/108854732/c871b3b0-fce7-4ac0-a58b-b1ae8222dd8d)
</br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-pmv-ads-2024-1-e4-proj-infra-t5-grupo01/assets/108854732/cf8315b5-fbdd-4769-af84-90b2314a7c88)
</br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-pmv-ads-2024-1-e4-proj-infra-t5-grupo01/assets/108854732/9b0e6a4f-91ee-4834-85b7-6296dc2f2df3)
</br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-pmv-ads-2024-1-e4-proj-infra-t5-grupo01/assets/108854732/dc647cf9-3866-4a88-9ca9-9c5ebc67bac8)
</br>



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Luana Sousa | Poder ver as imagens dos produtos prontos antes de escolher    | Sou capaz de perceber se a apresentação do produto me agrada. |
|Luana Sousa | Encontrar locais novos que pratiquem a gastronomia inclusiva  | Porque tenho restrições alimentares e não tenho muitas opções confiáveis. |
|Luana Sousa | Ajudar as pessoas a encontrarem opções saborosas e saudáveis    | Não existem muitas opções disponíveis e que sejam de conhecimento amplo. |
|Silvia Almeida | Entrar em contato facilmente com o estabelecimento   | Possa ter um canal direto em caso de necessidade. |
|Silvia Almeida | Encontrar uma cafeteria cujo tempo de entrega não seja tão longo   | Porque as opções que conheço ficam mais distantes da minha casa e tem um tempo de entrega alargado. |
|Tereza Solana | Gerar relatórios sobre as vendas realizadas      | Para que eu consiga ter uma melhor visibilidade do meu negócio |
|Tereza Solana | Ter informações atualizadas sobre meu estoque    | Consiga fazer uma melhor gestão e evitar surpresas que impactam no funcionamento.|
|Tereza Solana | Investir na modalidade de delivery    | Atualmente tenho um alto custo para manter o atendimento presencial. |
|Fábio Gome  | Ter opções de delivery de estabelecimentos que ofereçam comidas sem glúten e lactose  | As opções que conheço só tem atendimento presencial e existem dias que é inviável sair de casa. |
|Fábio Gomes | Ter confiança nos alimentos sem glúten e lactose produzidos pelos restaurantes    | já comi em locais que, apesar de se intitularem inclusivos, na realidade não cuidavam 100% desse aspecto. |
|Fábio Gomes | Apoiar uma causa social de forma constante   | Tenho consciência da quantidade de pessoas que necessitam.|


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

O escopo funcional do projeto é delineado pelos requisitos funcionais, os quais detalham as diversas interações dos usuários, e pelos requisitos não funcionais, que descrevem os aspectos gerais que o sistema deve apresentar. A seguir, apresentamos esses requisitos.

### Requisitos Funcionais

<p>A tabela a seguir lista os requisitos do projeto, indicando a ordem de prioridade para sua entrega.</p>

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve apresentar na página principal informações sobre a história da cafeteria | BAIXA | 
|RF-002| A aplicação deve apresentar, para cada produto, uma imagem correspondente. (thumbnail)  | ALTA |
|RF-003| A aplicação deve permitir ao usuário visualizar o cardápio completo do estabelecimento com todos os detalhes dos ingredientes  | ALTA |
|RF-004| A aplicação deve permitir ao gestor cadastrar, alterar e remover os produtos   | ALTA |
|RF-005| A aplicação deve permitir que o usuário adicione e remova promoções  | MÉDIA |
|RF-006| A aplicação permite que o usuário realize os seus pedidos diretamente por ele  | ALTA |
|RF-007| A aplicação deve oferecer ao gestor uma funcionalidade de relatório de estoque dos produtos   | ALTA |
|RF-008| A aplicação deve permitir visualizar as informações de contatos do mantenedor do site   | BAIXA |
|RF-009| A aplicação deve oferecer ao gestor uma funcionalidade de relatório de vendas   | ALTA |
|RF-010| A aplicação deve permitir que qualquer usuário possa se cadastrar no site   | BAIXA |
|RF-011| A aplicação deve permitir que os usuários realizem seus pedidos após a realização do login   | ALTA |
|RF-012| A aplicação deve permitir o cadastro e atualização dos produtos de estoque pelos funcionários | MÉDIA |



### Requisitos não Funcionais

A tabela abaixo enumera os requisitos não funcionais que o projeto deve cumprir:


|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser publicada em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku) | ALTA | 
|RNF-002| A aplicação deverá ser responsiva permitindo a visualização em diferentes telas de forma adequada |  ALTA |
|RNF-003| A aplicação deve ter bom nível de contraste entre os elementos da tela em conformidade |  ALTA |
|RNF-004| A aplicação deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |  ALTA |
|RNF-005| A aplicação não permite o recebimento de cadastros de usuários com dados necessários em branco |  ALTA |
|RNF-006| A aplicação deverá informar o erro de cadastro e login para o usuário caso os dados inseridos não estejam no banco de dados |  ALTA |
|RNF-007| A aplicação deverá realizar backup dos dados principais de cadastros dos clientes para um banco de dados em nuvem |  ALTA |
|RNF-008| A aplicação será desenvolvida através das linguagens JavaScript e TypeScript e utilizar como armazenamento dos dados o banco de dados Firestore do Google |  ALTA |


## Restrições

As questões que impõem limitações à execução deste projeto e que representam diretrizes claras para seu desenvolvimento são apresentadas na tabela a seguir:

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre letivo |
|02| A aplicação distrubuída deve se restringir às linguagens JavaScritp e TypeScript e ao banco de dados Firestore   |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho    |
|04| A aplicação distribuída não deve demandar pagamento   |


## Diagrama de Casos de Uso

O diagrama de casos de uso abaixo resume as interações dos atores com a aplicação:


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t5-pmv-ads-2024-1-e4-proj-infra-t5-grupo01/assets/111924209/1bf5e8d8-7c7d-414e-9420-7c3f4935b306)

link para documentação no excel: https://sgapucminasbr-my.sharepoint.com/:x:/g/personal/1425096_sga_pucminas_br/EROsgkA4qt9NjJpohiLB5kABB5TeAmVp67UJxjqTb_D4gw?e=SmPeOU




# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
