<h1 align="center">
    <img 
        src="https://scontent.fpoa1-1.fna.fbcdn.net/v/t1.0-9/117305017_723271011552709_7969369902008808369_o.png?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_ohc=xuBOzPhI1x4AX_QSS-K&_nc_ht=scontent.fpoa1-1.fna&oh=cb9bc809b1fd6b7f420f6ccf8e99046e&oe=5FE54E91"
        alt="Boost your self"
        width="800"
    >
</h1>

<h1 align="center">
    <a href="https://app.rocketseat.com.br/starter">Starter</a>
    <img 
        src="https://xesque.rocketseat.dev/platform/1566444881250.png"
        alt="JavaScript ES6"
        width="40"
    >
</h1>

## 📌 Introdução

### O que significa o ES6, ES7, ES8?

O **ES** é uma sigla para [ECMAScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm) e o número depois é a versão, basicamente essa versão corresponde ao ano +1, ou seja o ES6 é o ECMAScript 2015.

### Afinal o que é o ECMAScript?

ECMAScript é o responsável por formular as novas regras e funcionalidades da linguagem JavaScript.

### Antes e depois do ES6

Para quem já programava em JavaScript antes do ES6 e depois, percebe que são duas linguagens completamente diferentes, você usa a mesma sintaxe, porém existem muitas funcionalidades novas que vieram com o pacote ES6.

### Babel 

O JavaScript avança muito rápido, já os navegadores são um pouco lentos para acompanhar está evolução. Então os navegadores podem não entender algumas funcionalidades do ES6, ES7, ES8. O Babel basicamente pega o código que você escreveu com as novas funcionalidades da linguagem e transpila (converte) para um código que todos navegadores entendam. 

### O que vamos ver sobre o ES6?

- [x] Webpack
- [x] Classes
- [x] Arrow functions
- [x] Desestruturação
- [x] Rest/Spread
- [x] Import/Export
- [x] Async/Await

## 🚀 Instalando Node & Yarn

Antes de começar os estudos, vamos precisar de duas ferramentas muito importantes, só com elas vamos conseguir instalar as dependências de nossos projetos.

### [Node.js](https://nodejs.org/en/download/)

Após você instalar o Node, você irá verificar se foi instalado corretamente **executando o seguinte comando no seu terminal:**

``` bash
node -v

## Este comando precisa retornar com a versão instalada do Node
```

### [Yarn](https://classic.yarnpkg.com/en/)

O Yarn é um gerenciador de pacotes do JavaScript. Após instalado, você também irá verificar **executando o seguinte comando no seu terminal:**

``` bash
yarn -v

## Este comando precisa retornar com a versão instalada do Yarn
```

## 🚀 Configurando o Babel

Primeiramente você vai criar um projeto, dentro da pasta **execute o seguinte comando:**

``` bash
yarn init -y

## O "-y" vai responder sim automaticamente para todas perguntas da instalação.
```

Após rodar este comando, será criado um arquivo chamado **package.json** na raíz de nosso projeto. Ele vai armazenar as informações de depêndencias da nossa aplicação.

O próximo passo é instalar as primeiras dependências do nosso projeto, **execute o seguinte comando usando o yarn:**

``` bash
yarn add @babel/cli @babel/preset-env @babel/core

## Assim serão instaladas as dependências, fique tranquilo, isso pode demorar um pouco.
```

Quando as dependências terminarem de ser instaladas serão criados dois arquivos o **yarn.lock** que é apenas uma forma de cache do yarn e uma pasta **node_modules**, está pasta irá armazenar todas as dependências do nosso projeto, essas dependências também poder ter dependências e assim por diante. Você não precisa se preocupar com esses dois arquivos.

> Se você vai usar o Git como controle de versão, essa é uma bora hora para criar o arquivo **.gitignore** e adicionar a pasta **node_modules.**

### Começando a configuração do Babel 

Primeiro, crie um arquivo na raíz do projeto com o nome de **.babelrc**

Dentro deste arquivo, **coloque o seguinte código:**

``` js
{
    "presets": ["@babel/preset-env"]
}
```

O preset-env basicamente vai entender qual ambiente estamos trabalhando, no caso no navegador e vai converter o código de forma que os navegadores entendam. 

Agora vamos criar dois arquivos, **index.html** e **main.js**

No arquivo **main.js**, vamos adicionar o seguinte código: 

``` js
class Test {
    method() {

    }
}
```

E no **package.json** vamos adicionar uma nova propriedade chamada ``"scripts"`` e vamos definir o nosso primeiro script. Esses mesmos são formas de executar comandos do terminal que façam mais de uma coisa.

**Como vai ficar a nova propriedade:**

``` json
"scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
}   
```

O script ``"dev"`` vai executar o Babel pegando o arquivo **main.js** e enviando convertido para outro arquivo chamando **bundle.js**

O parâmetro ``-w`` vai ficar monitorando nosso arquivo **main.js** e a cada mudança ele vai automaticamente converter e enviar para o **bundle.js**

Depois de salvarmos o arquivo, **vamos executar o seguinte comando no terminal:**

``` bash
yarn dev
```

### E finalmente, você irá reparar o novo arquivo **bundle.js**, seu conteúdo será o código do **main.js** convertido para versões mais antigas do JavaScript.







