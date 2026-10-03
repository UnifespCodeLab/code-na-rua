# Design system do MotoLab

## 1. Objetivo

Este documento reúne os fundamentos visuais e as regras gerais de interface
do MotoLab. Ele deve orientar o desenho das telas e, futuramente, a criação de
componentes reutilizáveis, independentemente da tecnologia adotada.

O design system deve preservar a identidade visual existente do MotoLab e
atender prioritariamente às quatro funcionalidades da primeira versão:

1. US05 — Botão de emergência;
2. US10 — Reputação de estabelecimentos parceiros;
3. US04 — Clube de vantagens;
4. US06 — Sinalização de panes e acidentes.

Funcionalidades do backlog futuro não devem introduzir componentes ou padrões
na interface da primeira versão sem uma decisão explícita de produto.

## 2. Referências visuais

As referências atualmente disponíveis são:

- `docs/design/motolab.png`: prancha visual original;
- `docs/design/telas/`: telas individuais geradas a partir da prancha;
- `docs/design/identidade-visual.md`: espaço reservado para as regras formais
  de aplicação da marca.

As imagens orientam composição e linguagem visual, mas não substituem os
requisitos do produto. Quando houver divergência, o escopo definido no
`AGENTS.md` e na documentação de produto prevalece.

## 3. Princípios de design

### 3.1 Simplicidade

- Apresentar somente as informações necessárias para a tarefa atual.
- Evitar fluxos longos, controles redundantes e excesso de opções.
- Usar linguagem direta, familiar e em português.

### 3.2 Legibilidade em ambiente externo

- Priorizar contraste forte entre conteúdo e superfície.
- Evitar textos pequenos, pesos muito finos e informações dependentes apenas
  de diferenças sutis de cor.
- Considerar o uso sob luz solar, em movimento e em telas de diferentes
  qualidades.

### 3.3 Baixo esforço cognitivo

- Manter padrões de navegação e interação consistentes entre telas.
- Agrupar informações relacionadas e estabelecer hierarquia visual clara.
- Associar ícones a rótulos textuais quando o significado não for universal.

### 3.4 Ação rápida

- Destacar a ação principal de cada tela.
- Manter as ações mais importantes ao alcance e com área de toque adequada.
- Reduzir ao mínimo as etapas da funcionalidade de emergência.

### 3.5 Acessibilidade

- Não comunicar estado ou gravidade somente por cor.
- Oferecer rótulos claros para ícones, campos e ações.
- Preservar a ordem lógica de leitura e navegação.
- Permitir ampliação de texto sem perda de conteúdo ou funcionalidade.
- Prever estados de foco visíveis para navegação por teclado ou tecnologias
  assistivas, quando a plataforma oferecer esses meios de entrada.

### 3.6 Mobile first

- Projetar inicialmente para telas pequenas e orientação vertical.
- Usar áreas de toque de, no mínimo, 44 por 44 unidades lógicas; preferir
  48 por 48 nas ações principais.
- Adaptar o conteúdo para larguras maiores sem aumentar desnecessariamente o
  comprimento das linhas de texto.

## 4. Tokens de design

Tokens são nomes semânticos usados para evitar valores visuais espalhados pela
interface. Os nomes abaixo são independentes de framework. A tradução para
variáveis de código será definida depois da escolha da tecnologia.

### 4.1 Convenção de nomes

Usar nomes baseados na função, e não apenas na aparência:

- `color-background-primary` em vez de `white`;
- `color-text-primary` em vez de `black`;
- `color-emergency` em vez de `red`;
- `space-md` em vez de `16`.

Tokens primitivos, como os tons exatos da paleta, podem existir na
implementação. Os componentes devem consumir preferencialmente tokens
semânticos.

## 5. Cores

### 5.1 Paleta de identidade

| Token | Papel |
| --- | --- |
| `color-brand-primary` | Amarelo principal da marca e ações prioritárias |
| `color-brand-contrast` | Preto usado para contraste e identidade |
| `color-brand-secondary` | Azul usado em navegação e elementos secundários |
| `color-brand-surface` | Branco usado nas superfícies principais |

Os valores exatos em HEX, RGB ou HSL ainda precisam ser validados a partir dos
arquivos oficiais da marca. Eles não devem ser inferidos definitivamente das
imagens de referência, pois estas podem conter compressão ou variação de cor.

### 5.2 Cores de interface

| Token | Papel |
| --- | --- |
| `color-background-primary` | Fundo principal das telas |
| `color-background-secondary` | Fundo de agrupamentos e áreas auxiliares |
| `color-surface-primary` | Cards, campos e superfícies elevadas |
| `color-text-primary` | Títulos e conteúdo de maior importância |
| `color-text-secondary` | Descrições e metadados |
| `color-text-inverse` | Texto aplicado sobre fundos escuros |
| `color-border-default` | Bordas e divisores neutros |
| `color-icon-default` | Ícones neutros |
| `color-disabled` | Conteúdo ou controle indisponível |

### 5.3 Cores semânticas

| Token | Significado | Uso esperado |
| --- | --- | --- |
| `color-success` | Sucesso | Confirmação e conclusão positiva |
| `color-attention` | Atenção | Informação que requer observação |
| `color-alert` | Alerta | Pane, risco não emergencial ou condição importante |
| `color-emergency` | Emergência | Pedido imediato de ajuda ou acidente crítico |
| `color-error` | Erro | Falha de validação ou operação |
| `color-info` | Informação | Orientações e mensagens informativas |

O vermelho de emergência deve ser reservado à US05 e a situações realmente
críticas. Erros comuns de formulário devem usar uma variação própria e não
competir visualmente com a emergência.

Todas as mensagens semânticas devem combinar cor com texto, ícone ou ambos.

## 6. Tipografia

### 6.1 Família

A família preferencial é **Inter**. Enquanto a arquitetura técnica não estiver
definida, deve ser prevista uma fonte sem serifa de sistema como alternativa.

### 6.2 Escala tipográfica inicial

| Token | Tamanho | Peso sugerido | Uso |
| --- | ---: | ---: | --- |
| `text-display` | 32 | 700 | Mensagens de máximo destaque |
| `text-heading-lg` | 28 | 700 | Título principal da tela |
| `text-heading-md` | 24 | 700 | Título de seção |
| `text-heading-sm` | 20 | 600 | Título de card ou agrupamento |
| `text-body-lg` | 18 | 400 | Texto de leitura em destaque |
| `text-body-md` | 16 | 400 | Texto padrão e campos |
| `text-body-sm` | 14 | 400 | Metadados e apoio |
| `text-caption` | 12 | 400 | Legendas curtas e informações auxiliares |
| `text-button` | 16 | 600 | Rótulos de botões |

Os tamanhos são uma escala inicial em unidades lógicas e devem ser validados
na tecnologia e nos dispositivos escolhidos. O texto corrido deve utilizar
altura de linha confortável, preferencialmente entre 1,4 e 1,6 vezes o tamanho
da fonte.

Regras gerais:

- não usar peso abaixo de 400 em conteúdo funcional;
- evitar texto integralmente em letras maiúsculas, exceto em chamadas curtas;
- não truncar instruções ou mensagens críticas;
- respeitar as preferências de ampliação de texto do usuário.

## 7. Espaçamento e grade

Adotar uma escala baseada em múltiplos de 4:

| Token | Valor | Uso típico |
| --- | ---: | --- |
| `space-2xs` | 4 | Separação interna mínima |
| `space-xs` | 8 | Espaço entre ícone e rótulo |
| `space-sm` | 12 | Elementos próximos |
| `space-md` | 16 | Espaçamento padrão |
| `space-lg` | 24 | Separação entre grupos |
| `space-xl` | 32 | Separação entre seções |
| `space-2xl` | 48 | Respiro de maior destaque |

Diretrizes:

- usar `space-md` como margem lateral mínima das telas pequenas;
- manter espaçamento interno consistente entre cards equivalentes;
- aumentar o espaço entre grupos diferentes, não entre elementos do mesmo
  grupo;
- evitar valores fora da escala sem justificativa documentada.

## 8. Forma, bordas e elevação

### 8.1 Raios de borda

| Token | Valor inicial | Uso |
| --- | ---: | --- |
| `radius-sm` | 8 | Chips e elementos compactos |
| `radius-md` | 12 | Campos e botões |
| `radius-lg` | 16 | Cards e painéis |
| `radius-pill` | 999 | Tags e controles em formato de cápsula |

### 8.2 Bordas

- Usar bordas neutras para delimitar campos, cards e agrupamentos.
- Usar borda mais evidente para foco, seleção, erro ou emergência.
- Não depender apenas de sombra para separar componentes do fundo.

### 8.3 Elevação

Manter poucos níveis de elevação:

- `elevation-none`: conteúdo no mesmo plano da superfície;
- `elevation-sm`: cards e campos sobre o fundo;
- `elevation-md`: navegação fixa, menus ou controles flutuantes;
- `elevation-lg`: diálogos e conteúdo temporário sobreposto.

Sombras devem ser discretas e acompanhadas de borda quando necessário para
garantir separação em telas de baixo contraste.

## 9. Iconografia

- Usar ícones simples, reconhecíveis e com espessura visual consistente.
- Adotar uma única família de ícones sempre que possível.
- Usar tamanhos padronizados de 16, 20, 24 e 32 unidades lógicas.
- Manter pelo menos 24 unidades para ícones de ações principais.
- Incluir rótulo textual quando o significado puder ser ambíguo.
- Fornecer descrição acessível para ícones interativos sem texto visível.
- Não diferenciar pane e acidente apenas pelo ícone ou pela cor: incluir texto.

## 10. Estados de interação

Todo componente interativo deve prever, quando aplicável:

- padrão;
- pressionado;
- foco visível;
- selecionado;
- desabilitado;
- carregando;
- sucesso;
- erro.

O estado desabilitado deve continuar legível. Operações em andamento devem
impedir acionamentos repetidos quando houver risco de duplicação.

## 11. Diretrizes iniciais de componentes

### 11.1 Botões

Variantes previstas:

- **Primário:** ação principal da tela, normalmente com amarelo da marca;
- **Secundário:** alternativa à ação principal, com menor destaque;
- **Texto:** ação contextual de baixa ênfase;
- **Emergência:** ação crítica em vermelho, exclusiva de situações urgentes;
- **Destrutivo:** ação como sair ou remover, visualmente distinta da emergência;
- **Ícone:** ação compacta com nome acessível.

Regras:

- usar rótulos com verbos claros;
- manter altura mínima de 48 unidades nas ações principais;
- exibir indicador durante carregamento;
- não apresentar duas ações primárias concorrentes no mesmo contexto;
- não reutilizar o botão de emergência como botão de erro ou exclusão.

### 11.2 Cards

- Usar cards para agrupar conteúdo relacionado, não como decoração.
- Manter hierarquia consistente entre título, descrição, metadados e ação.
- Permitir que o card inteiro seja acionável somente quando houver um único
  destino claro.
- Exibir foco e estado pressionado quando o card for interativo.

Variantes inicialmente previstas:

- card de funcionalidade;
- card de emergência;
- card de parceiro ou benefício;
- card de estabelecimento;
- card de ocorrência;
- card de localização;
- card de métrica.

### 11.3 Formulários

- Exibir rótulo persistente; placeholder não substitui o rótulo.
- Informar claramente campos opcionais.
- Validar próximo ao campo e explicar como corrigir o problema.
- Preservar os dados preenchidos após erros recuperáveis.
- Usar teclado e formato de entrada adequados ao tipo do dado.
- Solicitar câmera, fotografia ou localização somente no contexto em que forem
  necessários e explicar a finalidade.

Componentes inicialmente previstos:

- campo de texto;
- campo de senha;
- campo de busca;
- área de texto;
- seletor de tipo de ocorrência;
- avaliação por estrelas;
- seletor de fotografia;
- seletor ou visualizador de localização;
- chips de filtro.

### 11.4 Alertas e mensagens

Estados previstos:

- informativo;
- sucesso;
- atenção;
- alerta;
- erro;
- emergência.

Mensagens devem conter um título curto, uma explicação objetiva e uma ação
quando ela for necessária. Alertas temporários não devem desaparecer antes que
o usuário consiga lê-los.

O alerta de emergência é um padrão próprio e não deve ser usado para mensagens
rotineiras do sistema.

## 12. Navegação e estruturas de tela

Estruturas iniciais previstas:

- abertura;
- autenticação;
- Home;
- tela de formulário;
- tela de lista e busca;
- tela de emergência;
- perfil.

A navegação principal deve ser simples e consistente. A Home deve apresentar
somente as quatro funcionalidades da primeira versão, com maior destaque para
Emergência.

Itens auxiliares, como autenticação e perfil, podem sustentar a experiência,
mas não devem introduzir funcionalidades do backlog futuro.

## 13. Conteúdo e linguagem

- Usar português simples e frases curtas.
- Preferir verbos de ação: “Enviar avaliação”, “Registrar ocorrência”.
- Evitar jargão técnico e linguagem institucional em tarefas cotidianas.
- Explicar por que dados sensíveis, como localização e fotografia, são
  solicitados.
- Manter nomenclatura consistente em todas as telas.
- Não usar tom culpabilizador em erros ou situações de emergência.

## 14. Checklist de validação

Antes de considerar uma tela ou componente pronto, verificar:

- pertence ao escopo da primeira versão;
- utiliza tokens em vez de valores isolados;
- possui hierarquia visual clara;
- mantém texto legível e contraste suficiente;
- oferece áreas de toque adequadas;
- não depende somente de cor para comunicar significado;
- prevê estados de interação, carregamento, vazio e erro quando aplicáveis;
- possui rótulos e descrições acessíveis;
- mantém o vermelho reservado a emergência e situações críticas;
- funciona em tela pequena e com ampliação de texto;
- segue os mesmos padrões das telas e componentes equivalentes.

## 15. Pendências para validação

As seguintes decisões ainda dependem de confirmação ou da definição da
arquitetura técnica:

- valores oficiais da paleta em HEX, RGB ou HSL;
- arquivos oficiais e regras de redução do logotipo;
- fonte Inter hospedada, embarcada ou fornecida pela plataforma;
- critérios mensuráveis de contraste;
- breakpoints e larguras máximas;
- comportamento específico de foco, gesto e navegação;
- biblioteca oficial de ícones;
- animações e duração das transições;
- comportamento de câmera, upload e localização;
- componentes nativos ou biblioteca de interface a ser adotada.

Essas pendências devem ser resolvidas antes de transformar os fundamentos em
tokens e componentes de código definitivos.
