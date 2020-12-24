var assert = require('assert');
const {By, Capabilities, Key, until } = require('selenium-webdriver');

// armazena url atual
const URL_SITE = "https://prosas.com.br/home?locale=ptbr";

// tempo em milisegundos, para elementos aguardarem carregamento
const TEMPO_ESPERA_ELEMENTO_PAGINA = 2000;

// valores que serao retornados verdadeiros ou falsos do teste
const VALOR_TEXTO_DESCRICAO = "R$ 1.000.000,00";
const TEXTO_PARCERIA = "Parceria - Governo";
const TEXTO_PAIS = "Brasil";
const TEXTO_PAGINA_EDITAL = "Edital Divulgação";

module.exports = function ()
{
  // Scenario: Visitar Prosas.com
  this.Given(/^Visitar o site$/, function() {
    return this.driver.get(URL_SITE);
  });

  this.Then(/^Devo ser capaz de clicar no editar$/, function () {
    return this.driver.findElement(By.css(".text-center > ul > li:nth-child(1) > .ng-binding")).click();
  });

  this.Then(/^Devo ser capaz de ordenar por destaques$/, function () {
    this.driver.sleep(1000); //aguarda carregamento
    this.driver.wait(until.elementLocated(By.css("#select_value_label_6 > span:nth-child(1)")), TEMPO_ESPERA_ELEMENTO_PAGINA).click();
    return this.driver.findElement(By.css(".md-select-backdrop")).click();
  });

  this.Then(/^Devo ser capaz de digitar um estado$/, function () {
    this.driver.wait(until.elementLocated(By.id("fl-input-10")), TEMPO_ESPERA_ELEMENTO_PAGINA).sendKeys("Rio de Janeiro - RJ");
    return this.driver.wait(until.elementLocated(By.css("section:nth-child(8) > a > .ng-binding")), TEMPO_ESPERA_ELEMENTO_PAGINA).click();
  });

  this.Then(/^Devo ser capaz de filtrar por area de interesse$/, function () {
    this.driver.wait(until.elementLocated(By.css(".ng-scope:nth-child(3) > .green > .md-container")), TEMPO_ESPERA_ELEMENTO_PAGINA).click();
    return this.driver.findElement(By.css(".btn-verde")).click();
  });

  this.Then(/^Devo ser capaz de filtrar por financiamento$/, function () {
    this.driver.wait(until.elementLocated(By.css("section:nth-child(9) .material-icons")), TEMPO_ESPERA_ELEMENTO_PAGINA).click();
    this.driver.wait(until.elementLocated(By.css(".ng-scope:nth-child(2) > .green > .md-container")), TEMPO_ESPERA_ELEMENTO_PAGINA).click();
    this.driver.findElement(By.css(".btn-verde")).click();
    return this.driver.findElement(By.css(".top5 > .btn-azul")).click();
  });

  this.Then(/^Confirmo a minha busca$/, function () {
    this.driver.sleep(2000); 
    this.driver.findElement(By.css(".subtitulo")).click();
  });

  // Scenario: Vejo a tela do edital
  // nos cenarios abaixo, caso ocorra algum erro de mudança de layout
  // os seletores não encontraram os elementos. Logo, falhando nos testes.
  this.Then(/^Visualizo edital$/, async function() {
    this.driver.sleep(3000);
    var textoTituloEdital = await this.driver.wait(
        until.elementLocated(By.xpath("//p[contains(.,'"+ TEXTO_PAGINA_EDITAL +"')]")),
        TEMPO_ESPERA_ELEMENTO_PAGINA).getText();

    return assert.strictEqual(textoTituloEdital, TEXTO_PAGINA_EDITAL);
  });

  this.Then(/^Visualizo descricao de valor$/, async function() {
    var textoValorDescricao = await this.driver.wait(
      until.elementLocated(By.xpath("//p[contains(.,'"+ VALOR_TEXTO_DESCRICAO +"')]")),
      TEMPO_ESPERA_ELEMENTO_PAGINA).getText();

    return assert.strictEqual(textoValorDescricao, VALOR_TEXTO_DESCRICAO);
  });

  this.Then(/^Visualizo descricao$/, async function() {
    var textoParceria = await this.driver.wait(
      until.elementLocated(By.xpath("//p[contains(.,'"+ TEXTO_PARCERIA +"')]")),
      TEMPO_ESPERA_ELEMENTO_PAGINA).getText();

    return assert.strictEqual(textoParceria, TEXTO_PARCERIA);
  });

  this.Then(/^Visualizo pais$/, async function() {
    var textoPais = await this.driver.wait(
      until.elementLocated(By.xpath("//p[contains(.,'"+ TEXTO_PAIS +"')]")),
      TEMPO_ESPERA_ELEMENTO_PAGINA).getText();
      
    return assert.strictEqual(textoPais, TEXTO_PAIS);
  });

 }; //fecha module.exports
