# MotoLab — Instruções para o Codex

## 1. Contexto do projeto

Este repositório contém o protótipo da plataforma MotoLab, desenvolvido no
contexto de uma pesquisa de mestrado profissional em Inovação Tecnológica
da UNIFESP.

O MotoLab é uma iniciativa de pesquisa e desenvolvimento construída com
a participação de motoboys e motofretistas.

A pesquisa busca compreender as necessidades da categoria e desenvolver
uma solução tecnológica orientada às condições reais de trabalho desses
profissionais.

A AMVAPLN (Associação dos Motoboys do Vale do Paraíba e Litoral Norte)
é parceira na construção do projeto.

A UNIFESP é a instituição acadêmica responsável pelo projeto.

---

## 2. Estrutura do projeto

O projeto MotoLab é composto por dois subprojetos principais:

- `api-code-na-rua`: API backend da plataforma, desenvolvida com NestJS e
  TypeScript;
- `web-code-na-rua`: aplicação web frontend da plataforma, desenvolvida com
  Next.js, React e TypeScript.

Alterações que envolvam integração entre frontend e backend devem considerar
os contratos, tipos e comportamentos dos dois subprojetos.

As instruções adicionais existentes dentro de cada subprojeto também devem ser
respeitadas ao modificar arquivos no respectivo diretório.

---

## 3. Identidade do produto

Nome: MotoLab

Slogan utilizado no projeto:
"Pesquisa feita com quem vive o corre"

A identidade visual existente do MotoLab deve ser preservada.

Elementos principais da identidade:

- amarelo;
- preto;
- azul;
- branco;
- símbolo do capacete MotoLab.

Não criar uma nova identidade de marca sem solicitação explícita.

A AMVAPLN e a UNIFESP devem ser tratadas como identidades institucionais
associadas ao projeto, e não como parte do nome do produto.

---

## 4. Escopo da primeira versão do protótipo

A primeira versão do protótipo contempla SOMENTE as seguintes funcionalidades:

1. US05 — Botão de emergência
2. US10 — Reputação de estabelecimentos parceiros
3. US04 — Clube de vantagens
4. US06 — Sinalização de panes e acidentes

Estas são as funcionalidades prioritárias da primeira versão.

NÃO implementar funcionalidades futuras sem solicitação explícita.

---

## 5. Funcionalidades fora do escopo atual

As seguintes funcionalidades NÃO fazem parte da primeira versão:

- US03 — Acompanhamento legislativo técnico / assistente de IA;
- US08 — Pontos de apoio;
- US01 — Educação no trânsito;
- US09 — Recurso Corrida Justa;
- US07 — Oportunidades de emprego diversas;
- US02 — Formalização e Previdência.

Elas podem existir na documentação como funcionalidades futuras,
mas não devem ser adicionadas à interface principal nem implementadas
sem solicitação explícita.

IMPORTANTE:
A funcionalidade de apoio legislativo técnico com IA (US03) foi
explicitamente retirada da primeira versão do protótipo.

---

## 6. Home

A tela principal deve apresentar as quatro funcionalidades da primeira
versão:

- Emergência;
- Avaliação de estabelecimentos;
- Clube de vantagens;
- Panes e acidentes.

A funcionalidade de IA legislativa NÃO deve aparecer na Home desta versão.

A funcionalidade de emergência deve possuir destaque visual superior
às demais funcionalidades.

---

## 7. Princípios de UX

A interface deve priorizar:

- simplicidade;
- legibilidade;
- baixo esforço cognitivo;
- navegação rápida;
- linguagem direta;
- alto contraste;
- áreas de toque adequadas para dispositivos móveis;
- utilização em ambiente externo;
- consistência visual;
- acessibilidade.

O aplicativo deve ser compreensível mesmo para usuários com diferentes
níveis de letramento digital.

Evitar interfaces excessivamente complexas.

---

## 8. Emergência

US05 é uma funcionalidade crítica.

O botão de emergência deve:

- estar disponível na tela principal;
- possuir destaque visual;
- utilizar vermelho como cor semântica de emergência;
- permitir acionamento rápido;
- evitar etapas desnecessárias;
- seguir os requisitos funcionais e não funcionais documentados.

Não utilizar vermelho como cor dominante para outras funcionalidades,
pois isso reduz sua associação com situações críticas.

---

## 9. Avaliação de estabelecimentos

US10 deve permitir que o motoboy avalie sua experiência em
estabelecimentos parceiros.

A avaliação deve considerar, conforme os requisitos do projeto:

- tempo de espera;
- atendimento;
- respeito ao entregador;
- organização da retirada;
- estrutura disponível para o entregador;
- comentário opcional.

A interface deve apresentar os critérios de forma clara e simples.

---

## 10. Clube de vantagens

US04 deve permitir:

- visualizar parceiros;
- consultar benefícios;
- pesquisar benefícios;
- filtrar por categoria;
- visualizar localização;
- avaliar benefícios conforme especificação do projeto.

A interface deve priorizar descoberta rápida dos benefícios.

---

## 11. Panes e acidentes

US06 deve permitir:

- registrar uma ocorrência;
- selecionar o tipo de ocorrência;
- registrar localização;
- adicionar fotografia;
- inserir informações complementares;
- visualizar ocorrências próximas;
- acompanhar/encerrar ocorrência conforme especificação.

A funcionalidade deve diferenciar claramente pane mecânica de acidente.

---

## 12. Design system

O design deve seguir a identidade visual do MotoLab.

Paleta base:

- Amarelo: cor primária da marca;
- Preto: contraste e identidade;
- Azul: elementos secundários e navegação;
- Branco: superfícies;
- Cinza: textos secundários.

Cores semânticas:

- verde = sucesso;
- amarelo = atenção;
- laranja = alerta;
- vermelho = emergência.

Tipografia preferencial:
Inter.

Priorizar:

- cards simples;
- bordas arredondadas moderadas;
- espaçamento consistente;
- ícones simples;
- componentes reutilizáveis;
- responsividade mobile.

---

## 13. Arquitetura

Antes de criar novos componentes, verificar os componentes existentes
no projeto.

Evitar duplicação.

Preferir componentes reutilizáveis.

Todos os componentes do frontend devem ser criados e mantidos em
`web-code-na-rua/components`. As páginas e demais módulos do frontend devem
importá-los a partir dessa pasta, preferencialmente por meio do alias
`@/components` configurado no projeto Next.js.

Respeitar a arquitetura e as tecnologias já existentes no projeto.

Não substituir frameworks, bibliotecas ou padrões arquiteturais existentes
sem solicitação explícita.

---

## 14. Processo de desenvolvimento

Antes de implementar uma funcionalidade:

1. analisar o código existente;
2. consultar a documentação em /docs;
3. identificar componentes reutilizáveis;
4. propor alterações quando houver decisões arquiteturais relevantes;
5. implementar;
6. executar os testes/verificações disponíveis;
7. verificar se a implementação corresponde aos requisitos documentados.

Não inventar requisitos.

Quando houver conflito entre código, documentação e solicitação atual,
sinalizar o conflito antes de tomar uma decisão estrutural.

---

## 15. Documentação

Os arquivos em /docs representam o contexto funcional e de design do projeto.

Consultar os documentos relevantes antes de implementar alterações
significativas.

Não alterar decisões de produto documentadas sem solicitação explícita.

---

## 16. Regra fundamental

O objetivo do protótipo não é implementar todas as funcionalidades
concebidas durante a pesquisa.

O objetivo atual é implementar corretamente a primeira versão,
composta pelas quatro funcionalidades prioritárias:

US05
US10
US04
US06

Funcionalidades futuras devem permanecer fora do escopo até nova
solicitação.
