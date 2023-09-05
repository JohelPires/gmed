# To do

## Backend:

-   [x] sistema anti-deletamento causa problemas se a pessoa tentar inserir o mesmo medicamento que foi deletado
-   [x] Popular a tabela de classe terapeutica
-   [x] listar medicamentos deve fazer os inner join e mostrar nomes em vez de números
-   [ ] Endpoints:
    -   [x] CRUD medicamentos
    -   [x] CRUD laboratorios
    -   [x] CRUD principios ativos
    -   [x] get classes terapeuticas
    -   [ ] endpoints de dashboard
-   [x] registro deve ser unico
-   [ ] opção excluir usuario
-   [x] cnpj e nome do laboratorio devem ser únicos

## se sobrar tempo:

-   [ ] CRUD classes terapeuticas
-   [ ] sistema de recuperação de dados deletados usando o 'paranoid' do sequelize

## Front-end:

-   [ ] filtro deve listar apenas existentes
-   [ ] bulk create principios ativos separados por vírgula
-   [x] procurar medicamento
-   [-] busca avançada
-   [x] filtrar por laboratorio, pa, ct
-   [x] lista de classes terapeuticas
-   [x] lógica das badges
-   [x] carregar classes terapeuticas
-   [x] carregar principios ativos
-   [x] carregar laboratórios
-   [x] botao/modal visualizar
-   [x] botao/modal editar
-   [x] botao/modal ou caixa de diálogo excluir
-   [ ] um botao editar dentro do modal de visualizar
-   [ ] validação de campos do 'adicionar medicamento'
-   [ ] validação de campos do 'editar medicamento'
-   [ ] validação de campos do 'laboratório'
-   [ ] alterações no banco são notificadas ao usuário usando bootstrap toasts
-   [x] clicando no nome do medicamento abre a visualização
-   [ ] clicando no nome do laboratório/ct/pa abre a lista de medicamentos filtrada
-   [ ] icones dos botoes
-   [ ] verificar se banco está sendo acessado duas vezes em todo reload
-   [ ] handling erro ao deletar um laboratório com medicamentos cadastrados
-   [ ] tag de medicamento em falta
-   [ ] talvez legendas para as tags

## Dashboard

-   [x] grafico de medicamentos por laboratorio
-   [ ] grafico de quantidade de medicamentos por laboratório
-   [ ] limitar o grafico de medicamentos por laboratorio para os 9 maiores
-   [x] grafico de vencimento
-   [ ] grafico de medicamentos por principio ativo
