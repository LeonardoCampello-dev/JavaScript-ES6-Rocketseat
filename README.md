<h1 align="center">
    <img 
        src="https://scontent.fpoa1-1.fna.fbcdn.net/v/t1.0-9/117305017_723271011552709_7969369902008808369_o.png?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_ohc=xuBOzPhI1x4AX_QSS-K&_nc_ht=scontent.fpoa1-1.fna&oh=cb9bc809b1fd6b7f420f6ccf8e99046e&oe=5FE54E91"
        width="800"
    >
</h1>

<h1 align="center">
    <a href="https://app.rocketseat.com.br/starter">Starter</a>
    <img 
        src="https://xesque.rocketseat.dev/platform/1566444881250.png"
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

<h2 align="center">🚀 Instalando Node & Yarn</h2>

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

<h2 align="center">🚀 Configurando o Babel</h2>

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

<h2 align="center">
    <img 
        src="./.github/babel-config.png" 
        width="500"
    >
</h2>

O preset-env basicamente vai entender qual ambiente estamos trabalhando, no caso no navegador e vai converter o código de forma que os navegadores entendam. 

Agora vamos criar dois arquivos, **index.html** e **main.js**

No arquivo **main.js**, vamos adicionar o seguinte código: 

<h2 align="center">
    <img 
        src="./.github/first-bundle.png" 
        width="500"
    >
</h2>


E no **package.json** vamos adicionar uma nova propriedade chamada ``"scripts"`` e vamos definir o nosso primeiro script. Esses mesmos são formas de executar comandos do terminal que façam mais de uma coisa.

**Como vai ficar a nova propriedade:**

<h2 align="center">
    <img 
        src="./.github/yarn-dev.png" 
        width="500"
    >
</h2>

O script ``"dev"`` vai executar o Babel pegando o arquivo **main.js** e enviando convertido para outro arquivo chamando **bundle.js**

O parâmetro ``-w`` vai ficar monitorando nosso arquivo **main.js** e a cada mudança ele vai automaticamente converter e enviar para o **bundle.js**

Depois de salvarmos o arquivo, **vamos executar o seguinte comando no terminal:**

``` bash
yarn dev
```

E finalmente, você irá reparar o novo arquivo **bundle.js**, seu conteúdo será o código do **main.js** convertido para versões mais antigas do JavaScript.

<h2 align="center">🚀 Classes</h2>

Antigamente não era possível usar classes em JavaScript, hoje você pode usar tranquilamente.

**Agora vamos ver exemplos do uso de classes:**

<h2 align="center">
    <img 
        src="./.github/class.png" 
        width="500"
    >
</h2>

No código acima declaramos uma classe chamada ``TodoList`` e definimos dois métodos. 

O primeiro método é o ``constructor()`` ele vai ser o primeiro método executado toda vez que um objeto for instanciado a partir da classe. E no nosso constructor estamos iniciando a variável ``todos`` que recebe um array vazio inicialmente.

O segundo método se chama ``addTodo()`` e nele estamos adicionando um novo item ao array criado no constructor.

Após isso, nos vamos instanciar essa classe na variável ``myList``, usando a palavra chave ``new``

E por último estamos pegando um botão de nosso HTML e adicionando uma função de clique. Toda vez que clicamos no botão será chamado o método ``myList.addTodo()`` 

### Herança

<h2 align="center">
    <img 
        src="./.github/class-extends.png" 
        width="500"
    >
</h2>

No código acima criamos uma nova classe chamada ``List`` e adicionamos métodos com a mesma função do exemplo anterior.

Agora na classe ``TodoList`` nós estamos extendendo os métodos e propriedades da classe ``List`` usando a palavra chave ``extends``

Nós teremos o mesmo funcionamento de antes, a diferença é que estamos herdendo propriedades de outra classe.

**Agora vamos supor que nós queiramos adicionar mais informações na classe que herdou a outra, por exemplo um nome de usuário.**

<h2 align="center">
    <img 
        src="./.github/class-super.png" 
        width="500"
    >
</h2>

Para chamar o constructor da classe pai e criar novas propriedades nós usamos o método ``super()``

### Métodos estáticos

Com os métodos estáticos, nós não precisamos usar o ``new`` para chamar algum método da classe.

<h2 align="center">
    <img 
        src="./.github/class-static-error.png" 
        width="500"
    >
</h2>

No código acima um erro seria retornado, quando definimos um método estático **ele não tem acesso ao restante da classe**, então ele não vai enxergar o ``this.todos``

Normalmente usamos este tipo de método para passar uma informação e ele retornar outra, independente do restante da classe.

<h2 align="center">
    <img 
        src="./.github/class-static.png" 
        width="500"
    >
</h2>

No código acima criamos uma classe chamada ``Math`` com o método ``sum`` que basicamente pega dois valores e retorna a soma.

Após isso chamamos o método passando os dois valores e ele nos retorna a soma. Você pode reparar que não precisamos instanciar nenhum objeto pois o método é estático.

<h2 align="center">🚀 Const & Let</h2>

Se você programa o JavaScript básico, provavelmente conhece a palavra-chave ``var`` para declarar variáveis. Porém a partir do ES6 nós temos outras duas formas de declarar uma variável, usando a palavra ``let`` ou ``const``

<h2 align="center">
    <img 
        src="./.github/const.png" 
        width="300"
    >
</h2>

### Const

``const`` é uma constante, e não pode ter seu valor reatribuído, no exemplo acima o código retornaria um erro, pois estamos tentando reatribuir um novo valor.


<h2 align="center">
    <img 
        src="./.github/const-m.png" 
        width="500"
    >
</h2>

### Let

``let`` é uma variável de escopo.

<h2 align="center">
    <img 
        src="./.github/let.png" 
        width="500"
    >
</h2>

No código acima, temos um exemplo de uso deste tipo de variável. Podemos perceber que diferente da ``const`` ela pode ter seu valor reatribuído.

Como dito ``let`` é uma variável de escopo, a cada abertura e fechamento de chaves consideramos um escopo. Ou seja como a variável ``y`` está dentro do escopo da função, se tentarmos dar um ``console.log(y)`` fora da função, nós **não vamos conseguir acessar o valor**.