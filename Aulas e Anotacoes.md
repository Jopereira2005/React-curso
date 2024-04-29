# Curso | Curso React Matheus Battisti - Udemy

## Seção 01: Introdução

### Aula 01 - O que é o React

- React é uma biblibioteca JavaScript para desenvolvimento de aplicações front-end;
- Estas aplicações são chamadas de SPA (Single Pge Application);
- A arquitetura do React é baseado em componetes;
- Pode ser inserido em uma aplicação ou podemos criar a aplicação apenas com React;
- É mantido pelo Facebook;

### Aula 02 - O que é o Node.js

- O Node.js é uma runtime de JavaScript;
- Ou seja, uma biblioteca utilizada por um compilador durante a execução do programa.
- Que está contruída na V8 engine (engine em C++) da Google;
- Possibilitando criar softwares em JS no lado servidor;
- Temos então um código JS rodando em C++ para garantir alta performance;

### Aula 03 - O que é npm?

- O npm é um gerenciador de pacotes do Node;
- Vamos poder utilizar bibliotecas de terceiros, baixando elas pelo npm;
- E também executar determinados scripts no nosso programa;
- Dificilmente um software em Node.js mão utiliza o npm;
- Os módulos externos ficam numa pasta chamada node_modules;
- Ela deve ser descartável, ou seja, a cada instalação do projeto baixamos todos os pacotes novamente;

### Aula 04 - Instalação Node Windows

- O dowload do Node.js é feito no site oficial: nodejs.org;
- Valos baixar um arquivo .msi,que pe o instalador;
- É interessante saber que o npm vem junto do Node;
- Após a instalação podemos testar o Node e o npm em um terminal, para validar a instalação;
- Note que os binários precisam estar no PATH, este paasso está na instalação no Node;

### Aula 05 - Hello World em React

- Para criar as nossas aplicações em React vamos utilizar um executor de scripts do Node, que é o npx;
- Com o comando: npx create-react-app <nome> temos uma nova aplicação sendo gerada;
- npm create vite@latest <- cria a nova aplicação com o vite;
- Podemos iniciar a aplicação com npm start;

### Aula 06 - Estrutura base

- Há algumas pastas e arquivos chave para o desenvolvimento em React;
- node_modules: Onde as dependências do projeto ficam;
- public: Assets estáticos e HTML de incialização;
- src: Onde vamos programas as nossas apps;
- src/index.js: Arquivo de inicialização do React;
- src/App.js: Componente principal da aplicação;

### Desafio 01

1. Entre no nosso arquivo App.js e adicione mais algum elemento HTML da sua escolha;
2. Crie uma regra de estilos em App.css que altere a cor do seu elemento;
3. Vá até o arquivo index.html e altere o título da aplicação na meta tag;

## Seção 02: Fundamentos de React

### Aula 01 - Criando componentes

- Na maioria ods projetos os componentes ficam em uma pasta cahmada components, que devemos criar;
- Geralmente são nomeados com a camel case: FirstComponent.js;
- No arquivo criamos uma função, que contém código deste componente(a lógica e o template);
- E também precisamos exportar esta função, para reutilizá-lo;
- Vamos ver na pratica!

### Aula 02 - Importando componentes

- A importação é a maneira que temos para reutilizar componentes;
- Utilizamos a sintaxe. import X from ./components/x onde X é o nome do componente;
- Para colocar o componente importado em outro compon### Aula 02 - Importando componentes
- A importação é a maneira que temos para reutilizar componentes;
- Utilizamos a sintaxe. import X from ./components/x onde X é o nome do componente;
- Para colocar o componente importado em outro componente, precisamos colocá-lo em forma de tag: <FirstCompontenr/>;
- E então finalizamos o ciclo de importação;
- Vamos importar o FirstComponent em Appente, precisamos colocá-lo em forma de tag: <FirstCompontent/>;
- E então finalizamos o ciclo de importação;
- Vamos importar o FirstComponent em App;

### Aula 03 - JSX

- JSX é o HTML do React;
- Onde vamos declarar as tagas de HTML que serão exibidas no anvegador;
- Ficam no return do componente;
- Temos algumas diferençãs do HTML, por exemplo: class será className;
- Tisso se dá pelas intruções semelhantes de JS e HTML, pois JSX é JavaScript, então algumas terão nomes diferentes;
- O JSX pode ter apneas um elemento pai;

### Aula 04 - Template Expressions

- Template Expressions é o recurso que nos permite executar JS no JSX e também interpolar variáveis;
- Isso será muito útil ao longo dos seus projetos em React;
- A sintaxe é: { algum Código em JS };
- Tudo que está entre chaves é processado em JavaScript e nos retorna um resultado;


### Aula 05 - Hierarquia de componentes

- O componentes que criamos podem ser reutilizados em vários componentes;
- E ainda componentes podem formar uma hierarquia, sendo importados uns dentro dos outros, como fizemos em App;

### Aula 06 - Evento de click

- Os eventos para o front-end são essenciais;
- Em várias situações vamos precisar do click, como ao enviar formulários;
- No React os eventos já estão 'prontos', podemos utilizar onClick para ativar uma função ao clicar em um elemento;
- Esta função ao clicar em um elemento;
- Esta função é criada na própria função do componente;
- As funções geralmente tem o padão handleAlgumaCoisa; 

### Aula 07 Funções no evento

- Quando as funções são simples, podemos realizar a lógica no próprio evento;
- Isso torna nosso código mais 'complicado', por atrelar lógica com HTML;
- Mas em algumas situações é aplicável;

### Aula 08 - Funções de renderização

- Podemos criar funções que retornanm JSX;
- Isso serve para criar situações que dependem de outra condições
- Ou seja, o JSX a ser renderizado pode variar por alguma variável, por exemplo;

## Seção 03: React Avançado

### Aula 01 - Imagens no React

- As umagens pública do nosso projeto podem ficar na pasta public;
- De lá elas podem ser chamadas pelas tags img diretamente pelo /nome.jpg;
- Pois a pasta public fica linkada com src das imagens;

### Aula 02 - Imagens em assets

- A pasta public pode ser utilizada para colocar imagens, como fizemos na aula passada;
- Mas um padrão bem utilizada para as imagens dos projetos é colocar em uma pasta chamada assets, em src;
- Ou seja, voce vai encontrar projetos com as duas abordagens;
- Em assets precisamos importar as imagens, e o src é dinâmico com nome de importação;

### Aula 03 - O que são hooks?

- Recurso do React que tem diversas funções;
- Como: guardar e alterar o estado de algum dado na nossa aplicação;
- Todods os hooks começam com use, por exemplo: useState;
- Podemos criar os nossos hooks, isso é chamado de custom hook;
- Os hooks precisam ser importados;
- Geralmente são úteis em todas as aplicações, utlizaremnos diveros ao longo do curso;

### Aula 04 - useState hook

- O hook de useState é um dos mais utilizados;
- Utilizamos parar gerenciar o estado de algum dado, variavéis não funcionam corretamente, o componente não re-renderiza;
- Para guardar o dado definimos o nome da variável e para alterar vamos utilizar setNome, onde nome é o nome do nosso dados;


### Aula 05 - Renderização de lsita

- Uma outra função bem comum é renderizar listas de dados no template;
- Faremos isso com os dados com tipo array;
- Utilizando o método map para nos auxiliar;
- Alem dos dados podemos inserir JSX em interação;

### Aula 06 - A propriedade key

- Iterar lista sem a propriedade key nos gera um warning, podemos verificar isso no console;
- O React precisa de uma chave única em cada um dos itens iterados;
- Isso server para ajudá-lo na renderização do componente;
- Geralmente teremos um array de objetos e podemos colocar key como alguma chave única, como o id de algum dado;
- Em último caso devemos utilizar o index do metodo map;

### Aula 08 - Previous State

- Previous state é um recurso que nos permite pegar o dado em seu valor original dentro de um set dado;
- Isso é muito usado para modificar listas, pois temos o valor antigo e transformamos em um valor novo;
- O primeiro argumento de um set sempre será o previous state;
