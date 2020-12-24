Feature: Visitar Prosas

  # mais cenarios podem ser feitos. 
  # ou subdividir este cenario de teste em categorias menores, para testes mais detalhados
  Scenario: Visting Prosas.com
    Given Visitar o site
    Then Devo ser capaz de clicar no editar
    Then Devo ser capaz de ordenar por destaques
    Then Devo ser capaz de digitar um estado
    Then Devo ser capaz de filtrar por area de interesse
    Then Devo ser capaz de filtrar por financiamento
    Then Confirmo a minha busca
    Then Visualizo edital
    Then Visualizo descricao de valor 
    Then Visualizo descricao
    Then Visualizo pais