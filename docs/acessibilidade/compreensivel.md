# 3. Compreensível

!!! note "Como ler cada item"
    Marque o item quando o site **atende**. O que fica sem marca é um possível problema para registrar em [Resultados](../resultados/mercado-livre.md). Os números entre colchetes remetem às **Referências Bibliográficas** no fim da página (critérios do WCAG 2.2) e o símbolo ★ indica critério novo do WCAG 2.2. Sua marcação fica salva neste navegador.

As informações e o funcionamento da interface precisam ser claros, previsíveis e compreensíveis.

- [ ] **Idioma principal:** Verificar se o idioma principal está declarado corretamente no código da página. <a id="TEC45" href="#RP45">[45]</a>
    <br><small class="fonte">NBR 5.13 – Codificação e marcação semântica (5.13.2) · Complemento prático · Heurística [H2](../usabilidade/heuristicas.md#h2)</small>
- [ ] **Idioma de trechos:** Verificar se trechos em outro idioma estão identificados programaticamente, quando aplicável. <a id="TEC46" href="#RP46">[46]</a>
    <br><small class="fonte">NBR 5.13 – Codificação e marcação semântica (5.13.3) · Complemento prático · Heurística [H2](../usabilidade/heuristicas.md#h2)</small>
- [ ] **Termos, palavras incomuns e abreviações:** Verificar se siglas, abreviações e termos técnicos são explicados quando necessário para o público compreender o conteúdo. <a id="TEC47" href="#RP47">[47]</a>, <a id="TEC48" href="#RP48">[48]</a>
    <br><small class="fonte">NBR 5.12 – Conteúdo textual (5.12.10, 5.12.11 – Recomendações) · Complemento prático · Heurística [H2](../usabilidade/heuristicas.md#h2)</small>
- [ ] **Linguagem clara:** Revisar instruções, avisos e conteúdos para evitar ambiguidades, jargões desnecessários e frases excessivamente complexas. <a id="TEC49" href="#RP49">[49]</a> (referência de linguagem)
    <br><small class="fonte">NBR 5.12 – Conteúdo textual (5.12.12) · Guia p.48–49 · Heurística [H2](../usabilidade/heuristicas.md#h2)</small>
- [ ] **Comportamento previsível:** Verificar se mudar o foco ou selecionar um campo não provoca mudança de página ou envio inesperado sem aviso. <a id="TEC50" href="#RP50">[50]</a>, <a id="TEC51" href="#RP51">[51]</a>
    <br><small class="fonte">NBR 5.8 – Botões e controles (5.8.8 a 5.8.10) · Guia p.33 (parcial: modais não abrem sozinhos) · Heurística [H4](../usabilidade/heuristicas.md#h4) e [H5](../usabilidade/heuristicas.md#h5)</small>
- [ ] **Navegação e identificação consistentes:** Comparar páginas do mesmo site e verificar se menus, mecanismos de navegação e componentes equivalentes mantêm posição, nomes e funcionamento previsíveis. <a id="TEC52" href="#RP52">[52]</a>, <a id="TEC53" href="#RP53">[53]</a>
    <br><small class="fonte">NBR 5.7 – Links e navegação (5.7.15) e 5.8 – Botões e controles (5.8.4, 5.8.5) · Guia p.42 · Heurística [H4](../usabilidade/heuristicas.md#h4)</small>
- [ ] **Ajuda consistente:** Verificar se canais de ajuda disponíveis em várias páginas aparecem em posição consistente. <a id="TEC54" href="#RP54">[54]</a>★
    <br><small class="fonte">NBR 5.7 – Links e navegação (5.7.16) · Complemento prático · Heurística [H10](../usabilidade/heuristicas.md#h10) e [H4](../usabilidade/heuristicas.md#h4)</small>
- [ ] **Identificação de campos e instruções de preenchimento:** Verificar se cada campo possui rótulo associado programaticamente e, quando necessário, instruções claras, exemplos de formato e ajuda contextual para preencher e corrigir o formulário. <a id="TEC55" href="#RP55">[55]</a>, <a id="TEC56" href="#RP56">[56]</a>
    <br><small class="fonte">NBR 5.9 – Formulários e entrada de dados (5.9.1 a 5.9.5, 5.9.13) · Guia p.31–32 · Heurística [H6](../usabilidade/heuristicas.md#h6) e [H10](../usabilidade/heuristicas.md#h10)</small>
- [ ] **Rótulos e botões descritivos:** Verificar se botões, campos, opções e mensagens usam nomes e instruções específicos e compreensíveis. <a id="TEC11" href="#RP11">[11]</a>, <a href="#RP55">[55]</a>
    <br><small class="fonte">NBR 5.8 – Botões e controles (5.8.3) e 5.9 – Formulários e entrada de dados (5.9.1, 5.9.4) · Guia p.26 · Heurística [H6](../usabilidade/heuristicas.md#h6)</small>
- [ ] **Identificação de erros:** Verificar se erros são identificados em texto e associados ao campo correspondente. <a id="TEC57" href="#RP57">[57]</a>
    <br><small class="fonte">NBR 5.9 – Formulários e entrada de dados (5.9.9) · Guia p.33 · Heurística [H9](../usabilidade/heuristicas.md#h9)</small>
- [ ] **Sugestão de correção:** Verificar se mensagens de erro explicam como corrigir o dado inválido, sem depender apenas de cor ou ícone. <a id="TEC58" href="#RP58">[58]</a>
    <br><small class="fonte">NBR 5.9 – Formulários e entrada de dados (5.9.10) · Guia p.32 · Heurística [H9](../usabilidade/heuristicas.md#h9)</small>
- [ ] **Prevenção de erros importantes:** Verificar se transações importantes podem ser revisadas, confirmadas ou corrigidas antes da conclusão, conforme o critério. <a id="TEC59" href="#RP59">[59]</a>
    <br><small class="fonte">NBR 5.9 – Formulários e entrada de dados (5.9.11, 5.9.12) · Guia p.32 · Heurística [H5](../usabilidade/heuristicas.md#h5) e [H3](../usabilidade/heuristicas.md#h3)</small>
- [ ] **Evitar repetição de dados:** Verificar se dados já informados são preenchidos automaticamente ou disponibilizados para seleção, observadas as exceções. <a id="TEC60" href="#RP60">[60]</a>★
    <br><small class="fonte">NBR 5.9 – Formulários e entrada de dados (5.9.15) · Guia p.32 (parcial: formulários curtos e de preenchimento facilitado) · Heurística [H6](../usabilidade/heuristicas.md#h6)</small>
- [ ] **Autenticação acessível:** Verificar se há método alternativo ou suporte adequado para autenticação, respeitando as condições e exceções do critério. <a id="TEC61" href="#RP61">[61]</a>★
    <br><small class="fonte">NBR 5.9 – Formulários e entrada de dados (5.9.18; 5.9.17 – Recomendação) · Guia p.36 (parcial: captcha) · Heurística [H6](../usabilidade/heuristicas.md#h6)</small>

## Referências Bibliográficas

> <a id="RP11" href="#TEC11">11.</a> WCAG 2.2 Understanding Docs. SC 2.4.6 Headings and Labels (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html).

> <a id="RP45" href="#TEC45">45.</a> WCAG 2.2 Understanding Docs. SC 3.1.1 Language of Page (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html).

> <a id="RP46" href="#TEC46">46.</a> WCAG 2.2 Understanding Docs. SC 3.1.2 Language of Parts (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html).

> <a id="RP47" href="#TEC47">47.</a> WCAG 2.2 Understanding Docs. SC 3.1.3 Unusual Words (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html).

> <a id="RP48" href="#TEC48">48.</a> WCAG 2.2 Understanding Docs. SC 3.1.4 Abbreviations (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html](https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html).

> <a id="RP49" href="#TEC49">49.</a> WCAG 2.2 Understanding Docs. SC 3.1.5 Reading Level (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html](https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html).

> <a id="RP50" href="#TEC50">50.</a> WCAG 2.2 Understanding Docs. SC 3.2.1 On Focus (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html).

> <a id="RP51" href="#TEC51">51.</a> WCAG 2.2 Understanding Docs. SC 3.2.2 On Input (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/on-input.html](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html).

> <a id="RP52" href="#TEC52">52.</a> WCAG 2.2 Understanding Docs. SC 3.2.3 Consistent Navigation (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html).

> <a id="RP53" href="#TEC53">53.</a> WCAG 2.2 Understanding Docs. SC 3.2.4 Consistent Identification (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html).

> <a id="RP54" href="#TEC54">54.</a> WCAG 2.2 Understanding Docs. SC 3.2.6 Consistent Help (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html).

> <a id="RP55" href="#TEC55">55.</a> WCAG 2.2 Understanding Docs. SC 3.3.2 Labels or Instructions (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html).

> <a id="RP56" href="#TEC56">56.</a> WCAG 2.2 Understanding Docs. SC 3.3.5 Help (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/help.html](https://www.w3.org/WAI/WCAG22/Understanding/help.html).

> <a id="RP57" href="#TEC57">57.</a> WCAG 2.2 Understanding Docs. SC 3.3.1 Error Identification (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html).

> <a id="RP58" href="#TEC58">58.</a> WCAG 2.2 Understanding Docs. SC 3.3.3 Error Suggestion (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html).

> <a id="RP59" href="#TEC59">59.</a> WCAG 2.2 Understanding Docs. SC 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html).

> <a id="RP60" href="#TEC60">60.</a> WCAG 2.2 Understanding Docs. SC 3.3.7 Redundant Entry (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html).

> <a id="RP61" href="#TEC61">61.</a> WCAG 2.2 Understanding Docs. SC 3.3.8 Accessible Authentication (Minimum) (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html).


--8<-- "includes/bibliografia.md"
