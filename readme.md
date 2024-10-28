<h1 align="center">
  Omnicalculator 🧮
</h1>

<div align="center">
   <a href="https://github.com/JohnPetros">
      <img alt="Made by JohnPetros" src="https://img.shields.io/badge/made%20by-JohnPetros-blueviolet">
   </a>
   <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/JohnPetros/omnicalculator">
   <a href="https://github.com/JohnPetros/omnicalculator/commits/main">
      <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/JohnPetros/omnicalculator">
   </a>
  </a>
   </a>
   <a href="https://github.com/JohnPetros/omnicalculator/blob/main/LICENSE.md">
      <img alt="GitHub License" src="https://img.shields.io/github/license/JohnPetros/omnicalculator">
   </a>
    <img alt="Stargazers" src="https://img.shields.io/github/stars/JohnPetros/omnicalculator?style=social">
</div>
<br>

## 🖥️ Sobre o Projeto

Omnicalculator é um projeto de estudo que visa ser uma SPA (Single page application), ou seja, uma aplicação que em vez de tradicionalmente carregar novas páginas quando o usuário acessa uma rota, o conteúdo do site é reescrito dinamicamente a medida que o usuário interage com ele.

Para implementar a funcionalidade de roteamento utilizei JavaScript puro, bem como o [Webpack](https://webpack.js.org/) para agrupar e minificar arquivos do projeto, transpilar código JS para browers mais antigos utilizando [Babel](https://babeljs.io/) e transformar arquivos SCSS para CSS em tempo de execução.

O projeto consiste de 5 aplicações menores, cada uma com função de fazer algum cálulo específico com no input do usuário, sendo eles: Índice de massa corporal, média escolar, faixa etária, frete e folha de pagamento. As funcionalidades citadas foram propostas de uma ativadade da máteria de Desenvolvimento Web II ministrada pelo professor Cláudio na Fatec de São José dos Campos.

O Design do projeto é inteiramente inspirado no desafio [Mortgage repayment calculator](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73) do [Frontend Mentor](https://www.frontendmentor.io/home), uma plataforma online na qual você pode aprimorar suas habilidades no Front-end.


### ⏹️ Demonstração

<table align="center">
  <tr>
    <td align="center">
    <span>Calculadora de IMC<br/></span>
    <img src="documentation/images/home-page.png"  width="900" height="600" alt="Demonstração da página principal" />
    </td>
  </tr>  
  <tr>
    <td align="center">
    <span>Calculadora de média escolar<br/></span>
    <img src="documentation/images/home-page.png"  width="900" height="600" alt="Demonstração da página principal" />
    </td>
  </tr>  
  <tr>
    <td align="center">
    <span>Calculadora de faixa etária<br/></span>
    <img src="documentation/images/home-page.png"  width="900" height="600" alt="Demonstração da página principal" />
    </td>
  </tr>  
  <tr>
    <td align="center">
    <span>Calculadora de frete<br/></span>
    <img src="documentation/images/home-page.png"  width="900" height="600" alt="Demonstração da página principal" />
    </td>
  </tr>  
   <tr>
    <td align="center">
    <span>Calculadora de folha de pagamento<br/></span>
    <img src="documentation/images/home-page.png"  width="900" height="600" alt="Demonstração da página principal" />
    </td>
  </tr>  
</table>
---

## ✨ Funcionalidades

### Calculadora de IMC

- [x] Deve ser possível inserir
  - nome
  - altura (cm)
  - peso (Kg)
- [x] Deve ser calculado o IMC do usuário com base na altura e peso fornecidos
- [x] Deve ser mostrado para o usuário o resultado do cálculo e o status de peso seguindo conforme seguintes critérios: 
  - IMC < 16: Baixo peso muito grave
  - IMC entre 16 e 16,99: Baixo peso grave
  - IMC entre 17 e 18,49: Baixo peso
  - IMC entre 18,50 e 24,99: Peso normal
  - IMC entre 25 e 29,99: Sobrepeso
  - IMC entre 30 e 34,99: Obesidade grau I
  - IMC entre 35 e 39,99: Obesidade grau II
  - IMC ≥ 40: Obesidade grau III

### Calculadora de faixa etária
- [x] Deve ser possível inserir nome e idade
- [x] Deve haver validação de dados garantindo que a idade seja sempre um número inteiro.
- [x] Com base na idade informada, a aplicação deve classificar o usuário em uma das seguintes faixas etárias:
  - 0 ≤ idade < 15: Criança
  - 15 ≤ idade < 30: Jovem
  - 30 ≤ idade < 60: Adulto
  - idade ≥ 60: Idoso
  
### Calculadora de média escolar
- [x] Deve ser possível inserir por padrão 5 notas com seus respectivos pesos.
- [x] Deve ser validado se a nota e o peso são de fato valores numéricos, mostrando uma mensagem de erro caso contrário.
- [x] Deve ser possível inserir mais campos de notas e pesos.
- [x] Deve ser feito um cálculo de média ponderada com bases nos dados fornecidos pelo usuário.
- [x] Deve ser mostrado o resultado do cálculo juntamente com o nota escolar do aluno com base na média calculada:
  - Acima de 9 a 10: A 
  - Acima de 8 a 9: B 
  - Acima de 7 a 8: C 
  - Acima de 6 a 7: D 
  - Acima de 5 a 6: E 
  - 0 (zero) a 5: F 

### Calculadora de frete

- [x] Deve ser possível inserir:
  - Número de peças a serem transportadas
  - Se há adicionamento de rastreio ou não (Se a resposta for "Sim", adicione uma taxa fixa de R$ 200,00 ao custo total do frete.)
  - Região de entrega (§ Sudeste, Sul ou Centro-Oeste)
  - Preço do combustível (R$)
  - Distância (Km)
- [x] Com base no número de peças deve ser considerado:
  - Para até 1.000 peças: O valor do frete será calculado por peça, de acordo com a tabela de preços por região.
  - Para mais de 1.000 peças: As primeiras 1.000 peças serão cobradas pelo valor normal da região e as peças que excederem 1.000 terão um desconto no valor por peça, conforme a tabela de preço por região.
  - Tabela de Valores de Frete por Peça:
    - Região 1 (Sudeste): R$ 1,20 por peça
    - Região 2 (Sul): R$ 1,10 por peça
    - Região 3 (Centro-Oeste): R$ 1,15 por peça 
[x] Deve ser aplicado um desconto por peça (para peças que excederem 1.000 unidades):
  - Região 1 (Sudeste): 12% de desconto
  - Região 2 (Sul): 10% de desconto
  - Região 3 (Centro-Oeste): 8% de desconto
[x] Deve ser calculado e exibido o custo total do frete, incluindo ou não a taxa de rastreamento.
[x] Deve ser possível calcular o frete para múltiplos destinos ou volumes de uma só vez.

### Calculadora de folha de pagamento

- [x] Deve ser possível inserir:
  - Código do funcionário (número inteiro)
  - Número de horas trabalhadas no mês (número inteiro)
  - Turno de trabalho (caractere: "M" para matutino, "V" para vespertino, "N" para noturno)
  - Categoria do funcionário (caractere: "F" para funcionário, "G" para gerente)
  - Valor do salário-mínimo (número real), uma vez que ele pode variar de estado para estado.
- [x] Deve ser possível calcular o valor da hora trabalhada com base no cargo e turno:
  - Funcionário (F):
    - Matutino (M): Valor da hora = 0,1 × salário-mínimo
    - Vespertino (V): Valor da hora = 0,12 × salário-mínimo
    - Noturno (N): Valor da hora = 0,15 × salário-mínimo
  - Gerente (G):
    - Matutino (M): Valor da hora = 0,2 × salário-mínimo
    - Vespertino (V): Valor da hora = 0,25 × salário-mínimo
    - Noturno (N): Valor da hora = 0,3 × salário-mínimo
- [x] Deve ser possível calcular o salário do Auxílio-alimentação com base no salário inicial calculado utilizando o comando de seleção composto encadeado, conforme as regras a seguir:
  - Salário inicial
    - Até 800,00: 25% do salário inicial.
    - Acima de 800,00 e até 1200,00: 20% do salário inicial.
    - Acima de 1200,00: 15% do salário inicial.
- [x] Deve ser exibido como resultado:
  - Código do funcionário
  - Número de horas trabalhadas
  - Valor da hora trabalhada
  - Salário inicial
  - Auxílio-alimentação
  - Salário final (salário inicial + auxílio-alimentação)
- [x] Deve ser possível calcular e armazenar os resultados de vários funcionários ao mesmo tempo.
- [x] Deve ser exibido o salário total pago pela empresa para todos os funcionários processados.


## ⚙️ Arquitetura

### 🛠️ Tecnologias, ferramentas e serviços externos

Este projeto foi desenvolvido usando as seguintes tecnologias:

✔️ **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** Para adicionar interatividade do site e implementar as funcionalidades e roteamento

✔️ **[Webpack](https://webpack.js.org/)** Para fazer a build da aplicação, agrupar arquivos JavaScript e converter arquivos SASS para CSS.

✔️ **[HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)** para a contrução do template das páginas.

✔️ **[SASS](https://sass-lang.com/)** Para a estilização dos componentes da página

✔️ **[Phosphor Icons](https://phosphoricons.com/)** - para renderização de ícones estilizados

> Para mais detalhes acerca das dependências do projeto, como versões específicas, veja o arquivo [package.json](https://github.com/JohnPetros/omnicalculator/blob/main/package.json)


### 🚚 Continous Delivery

Por meio do [Github Actions](https://github.com/features/actions) O build e o deploy da aplicação do projeto é feito automaticamente sempre que há um novo push na branch *main*, entrentando é possível realizar esse processo manualmente executando o comando `npm run deploy`.
O deploy da aplicação foi realizado no [Github Pages](https://pages.github.com/), o que significa que você pode acessar a aplicação funcionando por meio deste [link](https://johnpetros.github.io/omnicalculator/).

---

## 🚀 Como rodar a aplicação?

### 🔧 Pré-requisitos

Antes de baixar o projeto você necessecitará ter instalado na sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en)
- [Yarn](https://yarnpkg.com/), [NPM](https://www.npmjs.com/) [PNPM](https://pnpm.io/pt/) (Eu usarei npm)

> Além disto é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/)

### 📟 Rodando a aplicação

```bash

# Clone este repositório
git clone https://github.com/JohnPetros/omnicalculator.git

# Acesse a pasta do projeto
cd omnicalculator

# Instale as dependências
npm install

# Gere o código necessário para executar projeto
npm run build

# Execute a aplicação em modo de desenvolvimento
npm run dev

```

---

## 💪 Como contribuir

```bash

# Fork este repositório
$ git clone https://github.com/JohnPetros/omnicalculator.git

# Cria uma branch com a sua feature
$ git checkout -b minha-feature

# Commit suas mudanças:
$ git commit -m '✨ feat: Minha feature'

# Push sua branch:
$ git push origin minha-feature

```

> Você deve substituir 'minha-feature' pelo nome da feature que você está adicionando

> Veja a [minha lista de emojis para cada tipo de commit](https://gist.github.com/JohnPetros/1f63f8cf07c719c5d2c5e011e2eac770) que eu estou utilizando para manter a consistência entre as mensagens de commit 

> Você também pode abrir um [nova issue](https://github.com/JohnPetros/omnicalculator/issues) a respeito de algum problema, dúvida ou sugestão para o projeto. Ficarei feliz em poder ajudar, assim como melhorar este projeto de alguma forma.

---

## 📝 Licença

Esta aplicação está sob licença do MIT. Consulte o [Arquivo de licença](LICENSE) para obter mais detalhes sobre.

---

<p align="center">
  Feito com 💜 por John Petros 👋🏻
</p>
