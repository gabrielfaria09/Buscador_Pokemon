# 🔴 Pokédex - Buscador de Pokémon

Uma aplicação web interativa, leve e elegante desenvolvida com **HTML5, CSS3 e JavaScript puro (Vanilla JS)**, que consome dados em tempo real da [PokeAPI](https://pokeapi.co/).

Este projeto foi construído como um desafio de desenvolvimento rápido (Roadmap de 3 Horas), com o objetivo de aprimorar conceitos de manipulação de DOM, CSS Flexbox/Grid, e consumo de APIs REST assíncronas utilizando `fetch` e `async/await`.

---

## ✨ Funcionalidades

- 🔍 **Busca Dinâmica:** Pesquise qualquer Pokémon pelo **nome** ou pelo **número da Pokédex (ID)**.
- 🎨 **Cards Estilizados:** Exibição da arte oficial do Pokémon com alta resolução.
- 🏷️ **Tipagem de Pokémon:** Identificação visual dos tipos (Fogo, Água, Grama, Elétrico, etc.).
- 📊 **Estatísticas de Base:** Visualização detalhada dos status do Pokémon (HP, Ataque, Defesa, Velocidade, etc.).
- ⚠️ **Tratamento de Erros:** Exibição de mensagem amigável quando o Pokémon pesquisado não for encontrado.
- 📱 **Layout Responsivo:** Adaptado perfeitamente para navegadores desktop e dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica do projeto.
- **CSS3:** Estilização moderna utilizando variables, Flexbox e CSS Grid para layouts fluidos.
- **JavaScript (ES6+):** Lógica da aplicação, manipulação do DOM e requisições HTTP assíncronas.
- **[PokeAPI](https://pokeapi.co/):** API RESTful pública e gratuita utilizada para obter os dados atualizados dos Pokémon.

---

## 📁 Estrutura do Projeto

```text
pokedex-app/
├── index.html        # Estrutura HTML da Pokédex
├── style.css         # Estilização visual, cores e responsividade
├── script.js         # Lógica de consumo da PokeAPI e renderização no DOM
└── README.md         # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/gabrielfaria09/Buscador_Pokemon.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd Buscador_Pokemon
   ```

3. **Abra a aplicação:**
   - Basta dar um duplo clique no arquivo `index.html` para abri-lo diretamente em seu navegador web.
   - Ou utilize a extensão **Live Server** do VS Code para uma experiência de desenvolvimento em tempo real.

---

## 💡 Aprendizados e Desafios

Durante o desenvolvimento deste projeto de 3 horas, os seguintes tópicos foram consolidados:

1. **Requisições Assíncronas com `async/await`:** Estruturação limpa e legível de chamadas HTTP para APIs externas.
2. **Tratamento de Exceções com `try...catch`:** Verificação de status de resposta (`response.ok`) e tratamento de erros 404 sem quebrar a aplicação.
3. **Injeção de Dados no DOM:** Atualização dinâmica de atributos de elementos HTML (`src`, `textContent`, `classList`).
4. **CSS Modular e Limpo:** Organização de estilos visuais com feedback imediato para o usuário.

---

## 📄 Licença

Este projeto está sob a licença livre acesso para estudo e manipulação.

---

<p center="align">
  Desenvolvido com ⚡ por <a href="https://github.com/gabrielfaria09">Gabriel Alves Faria</a>.
</p>
