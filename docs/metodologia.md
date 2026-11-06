# Metodologia

## Objeto de avaliação

O objeto de estudo é o site do **Mercado Livre** ([mercadolivre.com.br](https://www.mercadolivre.com.br/)), avaliado nas versões desktop e mobile.

!!! note "Registre a data da avaliação"
    Sites de e-commerce mudam com frequência. Anote a data, o navegador e o dispositivo usados em cada inspeção para que os resultados possam ser reproduzidos.

## Fluxos inspecionados

Sugestão de roteiro. Ajuste conforme o escopo combinado com a docente.

- [ ] Página inicial
- [ ] Busca e listagem de resultados (com filtros e ordenação)
- [ ] Página de detalhe do produto
- [ ] Carrinho
- [ ] Compra e pagamento (até a etapa anterior à confirmação)
- [ ] Login e cadastro
- [ ] Minhas compras e acompanhamento do pedido
- [ ] Versão mobile dos fluxos acima

## Métodos

| Método | Referência | Onde está no site |
|---|---|---|
| Inspeção de acessibilidade | WCAG 2.2, ABNT NBR 17225 e Guia de Boas Práticas (UK–Brasil) | [Acessibilidade](acessibilidade/visao-geral.md) |
| Avaliação heurística | 10 heurísticas de Nielsen | [Heurísticas](usabilidade/heuristicas.md) |

Cada item de acessibilidade indica a heurística relacionada, e cada heurística indica os critérios do WCAG e os itens da NBR. Assim, a inspeção de usabilidade e a de acessibilidade usam o mesmo roteiro.

### Como aplicar

1. Cada avaliador percorre os fluxos **sozinho**, com os checklists abertos, e marca o que o site atende.
2. Cada item sem marca vira um registro na página de [Resultados](resultados/mercado-livre.md), seguindo o modelo abaixo. O botão **Copiar pendentes** de cada página ajuda nessa etapa.
3. O grupo se reúne, **consolida** os achados, remove duplicados e chega a uma severidade final de consenso.
4. Para cada problema, o grupo propõe uma recomendação de melhoria.

## Como registrar e priorizar o que for encontrado

Vale para a inspeção de usabilidade e para o checklist de acessibilidade.

### Modelo de registro de cada problema

- Tarefa ou tela inspecionada
- Heurística ferida (H1 a H10)
- Critério do WCAG e item da NBR (quando houver)
- O que acontece e quem é afetado (persona)
- Severidade (0 a 4)
- Evidência (número da figura)

### Escala de severidade de Nielsen

| Nota | Significado |
|:---:|---|
| 0 | Não concordo que seja um problema de usabilidade. |
| 1 | Problema cosmético: corrigir apenas se houver tempo extra. |
| 2 | Problema menor: correção de baixa prioridade. |
| 3 | Problema maior: correção de alta prioridade. |
| 4 | Catástrofe de usabilidade: correção obrigatória antes do lançamento. |

<small class="fonte">Fonte: Nielsen (1993; 1994), conforme a avaliação heurística do Grupo 08.</small>

### Proposta para combinar severidade e checklist

A decidir pelo grupo.

- [ ] Falha em item classificado como **Requisito** pela NBR (níveis A e AA do WCAG) parte de severidade 3 e sobe para 4 quando impede concluir a tarefa (por exemplo, não conseguir finalizar a compra só com o teclado). Falha em **Recomendação** (nível AAA) parte de 1 ou 2.

<small class="fonte">Fonte: Proposta do Grupo 08 · NBR §4 (Requisito x Recomendação).</small>

## Ferramentas de apoio

Veja a lista completa em [Ferramentas](apoio/ferramentas.md). As automáticas (WAVE, axe, Lighthouse) encontram só uma parte dos problemas. Complemente sempre com **navegação só pelo teclado**, **zoom de 200%** e, se possível, um **leitor de tela**.

--8<-- "includes/bibliografia.md"
