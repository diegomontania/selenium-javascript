# Selenium e Javascript

Projeto básico para testes de interface de usuário, utilizando a metodologia de testes BDD (Behavior Driver Driven) com o framework [cucumber.js](https://github.com/cucumber/cucumber-js) e [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) para javascript.

# Instalação e configuração do ambiente

- Instalar [node.js](https://nodejs.org/en/download/) na maquina onde serão executado os testes
- Abra o projeto no [visual code](https://code.visualstudio.com/download) e faça as instalações de dependências do projeto pelo terminal, utilize : `npm install`
- Crie uma pasta com nome 'seleniumWebdrivers' no seu disco local C: `C:\seleniumWebdrivers`
- Dentro do projeto, retire do zip o arquivo `chromedriver.exe` e mova-o para dentro da pasta criada anteriormente
- Crie uma variável de ambiente no windows, essa será a responsável pelo caminho na máquina onde o chrome driver está instalado.
	> Windows > Digite "Edit the system enviroment variable" > Enviroment variables :

	- Em user variable for 'xxxxx'
	- > Clique em 'Path' > Edit > Novo > 'C:\seleniumWebdrivers' > ok

## Rodando os testes

- Caso esteja tudo configurado corretamente utilize : `npm test` no terminal.
	> Debuging, selecione : `'Run script: test'`
- Os resultados de sucesso e falha sairam diretamente no terminal do visual studio code.

## Agradecimentos 
O projeto base utilizado para sincronizar o cumcuber e o selenium foi disponibilizao pelo desenvolvedor : [blh0021](https://github.com/blh0021)

Onde foram necessarias pequenas modificações para fazer o projeto funcionar com debuging habilitado.

Link original : https://github.com/testcookbook/js-cucumber-selenium.git

