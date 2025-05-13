# Situação Problema: Cardápio Interativo de Restaurante

Você foi contratado(a) por um restaurante que quer deixar o cardápio online mais dinâmico e enxuto.  
Atualmente o site mostra todos os detalhes de cada prato de uma vez só, o que deixa a página longa e cansativa de ler.

## Seu desafio

- Criar uma seção de **cardápio** em que cada prato aparece apenas com o **nome** e uma **imagem pequena ou grande**.
- Ao clicar no nome ou imagem de um prato, **desliza** (abre) uma área com **descrição**, **ingredientes** e **preço**.
- Ao clicar de novo, essa área **fecha**.
- (Bônus) Quando um prato abre, todos os outros pratos que estavam abertos devem **fechar** automaticamente.

## Requisitos técnicos

1. **HTML**
   - Uma lista de `.menu-item`, cada uma com `<h3 class="dish-name">` e `<img class="dish-thumb">` seguidos de `<div class="dish-details hidden">`.
2. **CSS**
   - Estilo básico para os itens e transição suave (`max-height`, `opacity`).
   - Classe `.hidden` para esconder o conteúdo.
3. **JavaScript**
   - Usar `querySelectorAll` para buscar todos os títulos e thumb-images.
   - Em cada elemento, usar `addEventListener('click', …)` para alternar `.hidden` na `.dish-details`.
   - (Opcional) Fechar os outros detalhes antes de abrir o clicado.

<br>

## Estrutura esperada dos arquivos

```
/cardapio/
│
├─ index.html
├─ styles.css
└─ script.js

```

## Critérios de avaliação

- Código **limpo** e **comentado** (mesmo nível de didática que no FAQ).
- Interface **responsiva** e **acessível** (cursor pointer, contraste de cores).
- Funcionamento **correto** do slide de abertura/fechamento em todos os navegadores modernos.
