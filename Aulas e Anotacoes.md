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
- Vamos ver na prática!;

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

