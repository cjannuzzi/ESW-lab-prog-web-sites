# Situação Problema: FAQ Interativo

Você foi contratado(a) para melhorar a seção de “Perguntas Frequentes” (FAQ) do site de um cliente.  
Atualmente, todas as perguntas e respostas estão estáticas e ocupam muito espaço, forçando o usuário a rolar demais a página.  
Seu desafio é criar um componente de FAQ em estilo **accordion**, onde:

- As respostas começam **ocultas**.
- Ao clicar numa pergunta, **aparece** ou **desaparece** suavemente a resposta.
- Opcional: quando uma resposta abre, as demais se fecham automaticamente.

**📝Requisitos mínimos**

1. **HTML** semântico para estruturar perguntas e respostas.
2. **CSS** para estilizar perguntas e respostas, incluindo transição suave.
3. **JavaScript** para “ouvir” cliques nas perguntas e alternar (mostrar/ocultar) as respostas.
4. **No mínimo** 3 perguntas.

**📂 Estrutura esperada dos arquivos**

```
/faq-accordion/
│
├─ index.html
├─ styles.css
└─ faq.js

```

**✅ Critérios de avaliação**

- Código limpo e legível, com comentários claros.
- Interface amigável: contraste de cores legível, cursor “pointer” em perguntas.
- Funcionamento correto do accordion em todos os navegadores modernos.
