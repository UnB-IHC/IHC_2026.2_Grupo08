# Heurísticas de Nielsen

!!! note "Como ler cada item"
    Cada heurística traz o que verificar e a ligação com os critérios do WCAG e os itens da NBR, para que a inspeção de usabilidade e a de acessibilidade usem o mesmo roteiro. Marque o item quando o site **atende**; o que ficar sem marca é um possível problema para registrar em [Resultados](../resultados/mercado-livre.md). Sua marcação fica salva neste navegador.

## H1. Visibilidade do status do sistema {#h1}

O sistema mantém a pessoa informada sobre o que está acontecendo, com retorno adequado e em tempo hábil.

- [ ] A pessoa sempre sabe onde está (título da página, breadcrumb, item de menu atual) e em que etapa de um processo se encontra.
- [ ] Toda ação recebe retorno visível (carregando, enviado, salvo, erro), sem a pessoa precisar adivinhar.
- [ ] Mudanças de estado (pedido, carrinho, filtro aplicado) aparecem na hora e também chegam a quem usa leitor de tela.

<small class="fonte">Fonte: Nielsen (1994), H1 · WCAG relacionado: <a id="TEC32" href="#RP32">[32]</a>, <a id="TEC34" href="#RP34">[34]</a>, <a id="TEC35" href="#RP35">[35]</a>, <a id="TEC36" href="#RP36">[36]</a>, <a id="TEC63" href="#RP63">[63]</a>, <a id="TEC16" href="#RP16">[16]</a> · NBR 5.13.1, 5.7.13, 5.7.14, 5.1.1, 5.13.8, 5.11.1 · Guia p.35</small>

## H2. Compatibilidade com o mundo real {#h2}

A interface fala a língua da pessoa, com palavras, conceitos e metáforas que ela conhece, em ordem natural e lógica.

- [ ] Os textos usam termos do dia a dia do público, sem jargão técnico do sistema.
- [ ] Siglas, abreviações e termos incomuns são explicados quando necessário.
- [ ] As informações aparecem na ordem em que a tarefa acontece no mundo real.

<small class="fonte">Fonte: Nielsen (1994), H2 · WCAG relacionado: <a id="TEC47" href="#RP47">[47]</a>, <a id="TEC48" href="#RP48">[48]</a>, <a id="TEC49" href="#RP49">[49]</a>, <a id="TEC14" href="#RP14">[14]</a> · NBR 5.12.10, 5.12.11, 5.12.12, 5.10.1 · Guia p.48–49</small>

## H3. Controle e liberdade do usuário {#h3}

A pessoa precisa de “saídas de emergência” para desfazer ou abandonar o que fez sem querer, e deve controlar o que se move, aparece ou expira.

- [ ] Há como cancelar, voltar, desfazer ou limpar (filtros, itens do carrinho, pedido antes do envio).
- [ ] A pessoa controla o que se move, toca ou expira (pausar, parar, estender o tempo).
- [ ] Conteúdo que aparece sozinho (dicas, submenus, modais) pode ser dispensado sem perder o contexto, inclusive pelo teclado.

<small class="fonte">Fonte: Nielsen (1994), H3 · WCAG relacionado: <a id="TEC26" href="#RP26">[26]</a>, <a id="TEC28" href="#RP28">[28]</a>, <a id="TEC29" href="#RP29">[29]</a>, <a id="TEC39" href="#RP39">[39]</a>, <a id="TEC17" href="#RP17">[17]</a>, <a id="TEC23" href="#RP23">[23]</a>, <a id="TEC59" href="#RP59">[59]</a> · NBR 5.1.6, 5.16.2, 5.15.1, 5.8.11, 5.14.7, 5.1.8, 5.9.11 · Guia p.33, 35</small>

## H4. Consistência e padronização {#h4}

Elementos, ações e termos iguais devem ter o mesmo nome, aparência e comportamento, seguindo convenções conhecidas.

- [ ] O mesmo componente tem o mesmo nome, aparência e comportamento em todas as páginas.
- [ ] Segue convenções que a pessoa já conhece (busca no cabeçalho, carrinho, logotipo que leva ao início).
- [ ] Menus e canais de ajuda ficam sempre no mesmo lugar.

<small class="fonte">Fonte: Nielsen (1994), H4 · WCAG relacionado: <a id="TEC52" href="#RP52">[52]</a>, <a id="TEC53" href="#RP53">[53]</a>, <a id="TEC54" href="#RP54">[54]</a>, <a id="TEC40" href="#RP40">[40]</a> · NBR 5.7.15, 5.8.5, 5.7.16, 5.13.7 · Guia p.42</small>

## H5. Prevenção de erros {#h5}

Um design que evita o erro é melhor do que uma boa mensagem de erro: o problema deve ser impedido antes de acontecer.

- [ ] O formato esperado é indicado, campos obrigatórios são marcados e opções inválidas são restringidas (autocompletar, correção de busca, seleção obrigatória de variações).
- [ ] Ações importantes ou irreversíveis pedem confirmação ou permitem revisar e desfazer.
- [ ] Alvos de toque são grandes e espaçados, e nada muda de contexto sem aviso.

<small class="fonte">Fonte: Nielsen (1994), H5 · WCAG relacionado: <a href="#RP59">[59]</a>, <a id="TEC50" href="#RP50">[50]</a>, <a id="TEC51" href="#RP51">[51]</a>, <a id="TEC43" href="#RP43">[43]</a>, <a id="TEC27" href="#RP27">[27]</a>, <a id="TEC30" href="#RP30">[30]</a> · NBR 5.9.12, 5.8.9, 5.8.10, 5.8.7, 5.1.10, 5.15.3 · Guia p.32, 36</small>

## H6. Reconhecimento em vez de memorização {#h6}

A pessoa não deve ter de lembrar de informações de uma tela para outra: opções e dados devem estar visíveis ou fáceis de recuperar.

- [ ] Opções, ações e informações ficam visíveis ou fáceis de recuperar (“visto recentemente”, últimas buscas).
- [ ] Dados já informados são reaproveitados, e senhas ou códigos não exigem memorizar ou transcrever sem apoio.
- [ ] Rótulos e ícones se identificam sem depender de lembrança (ícone com texto, nomes claros).

<small class="fonte">Fonte: Nielsen (1994), H6 · WCAG relacionado: <a id="TEC60" href="#RP60">[60]</a>, <a id="TEC61" href="#RP61">[61]</a>, <a id="TEC15" href="#RP15">[15]</a>, <a id="TEC11" href="#RP11">[11]</a>, <a id="TEC55" href="#RP55">[55]</a> · NBR 5.9.15, 5.9.18, 5.9.8, 5.9.4, 5.9.1 · Guia p.50</small>

## H7. Flexibilidade e eficiência de uso {#h7}

Aceleradores e caminhos alternativos ajudam quem tem experiência sem atrapalhar quem é novo, e a interface se adapta à pessoa.

- [ ] Há atalhos e caminhos rápidos (comprar agora, filtros, ordenação, atalhos de teclado) sem atrapalhar quem é novo.
- [ ] A interface se adapta à pessoa: zoom, orientação, teclado, toque e gestos com alternativa.
- [ ] É possível pular blocos repetidos e encontrar o conteúdo por mais de um caminho.

<small class="fonte">Fonte: Nielsen (1994), H7 · WCAG relacionado: <a id="TEC25" href="#RP25">[25]</a>, <a id="TEC31" href="#RP31">[31]</a>, <a href="#RP34">[34]</a>, <a id="TEC13" href="#RP13">[13]</a>, <a id="TEC19" href="#RP19">[19]</a>, <a id="TEC20" href="#RP20">[20]</a>, <a id="TEC38" href="#RP38">[38]</a>, <a id="TEC42" href="#RP42">[42]</a> · NBR 5.1.12, 5.7.11, 5.7.13, 5.10.3, 5.12.7, 5.10.4, 5.8.12, 5.8.13 · Guia p.27, 29</small>

## H8. Estética e design minimalista {#h8}

A interface não deve ter informação irrelevante que dispute a atenção com o que é essencial.

- [ ] Cada tela mostra só o que é relevante para a tarefa, sem excesso de anúncios, banners ou blocos concorrentes.
- [ ] O fluxo crítico tem foco (por exemplo, checkout sem o menu principal).
- [ ] Movimento e decoração não disputam atenção: animações são controláveis e imagens decorativas são ignoradas por leitor de tela.

<small class="fonte">Fonte: Nielsen (1994), H8 · WCAG relacionado: <a href="#RP29">[29]</a>, <a id="TEC24" href="#RP24">[24]</a>, <a id="TEC1" href="#RP1">[1]</a>, <a id="TEC22" href="#RP22">[22]</a> · NBR 5.15.1, 5.12.6, 5.2.3, 5.12.1 · Guia p.35, 43, 45</small>

## H9. Ajuda para reconhecer, diagnosticar e recuperar-se de erros {#h9}

Mensagens de erro devem usar linguagem clara, apontar o problema com precisão e sugerir uma solução.

- [ ] A mensagem usa linguagem clara (sem códigos), diz o que deu errado e em qual campo.
- [ ] A mensagem sugere como corrigir e leva a pessoa ao ponto do problema (por exemplo, recusa de pagamento com opção de trocar o método).
- [ ] O erro não depende só de cor e é anunciado a quem usa leitor de tela.

<small class="fonte">Fonte: Nielsen (1994), H9 · WCAG relacionado: <a id="TEC57" href="#RP57">[57]</a>, <a id="TEC58" href="#RP58">[58]</a>, <a href="#RP16">[16]</a>, <a href="#RP63">[63]</a> · NBR 5.9.9, 5.9.10, 5.11.1, 5.13.8 · Guia p.32–33</small>

## H10. Ajuda e documentação {#h10}

Mesmo um sistema intuitivo precisa de ajuda: ela deve ser fácil de achar, orientada a tarefas e objetiva.

- [ ] Há central de ajuda, FAQ ou contato fácil de achar, organizada pelas tarefas principais.
- [ ] A ajuda e os canais de contato ficam no mesmo lugar em todas as páginas e funcionam por teclado e leitor de tela.
- [ ] As instruções aparecem no ponto em que a dúvida surge (ajuda contextual, exemplos de formato).

<small class="fonte">Fonte: Nielsen (1994), H10 · WCAG relacionado: <a href="#RP54">[54]</a>, <a id="TEC56" href="#RP56">[56]</a>, <a href="#RP55">[55]</a> · NBR 5.7.16, 5.9.13, 5.9.5 · Guia p.29</small>

## Referências Bibliográficas

> <a id="RP1" href="#TEC1">1.</a> WCAG 2.2 Understanding Docs. SC 1.1.1 Non-text Content (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html).

> <a id="RP11" href="#TEC11">11.</a> WCAG 2.2 Understanding Docs. SC 2.4.6 Headings and Labels (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html).

> <a id="RP13" href="#TEC13">13.</a> WCAG 2.2 Understanding Docs. SC 1.3.4 Orientation (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/orientation.html](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html).

> <a id="RP14" href="#TEC14">14.</a> WCAG 2.2 Understanding Docs. SC 1.3.3 Sensory Characteristics (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html).

> <a id="RP15" href="#TEC15">15.</a> WCAG 2.2 Understanding Docs. SC 1.3.5 Identify Input Purpose (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html).

> <a id="RP16" href="#TEC16">16.</a> WCAG 2.2 Understanding Docs. SC 1.4.1 Use of Color (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).

> <a id="RP17" href="#TEC17">17.</a> WCAG 2.2 Understanding Docs. SC 1.4.2 Audio Control (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html).

> <a id="RP19" href="#TEC19">19.</a> WCAG 2.2 Understanding Docs. SC 1.4.4 Resize Text (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html).

> <a id="RP20" href="#TEC20">20.</a> WCAG 2.2 Understanding Docs. SC 1.4.10 Reflow (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/reflow.html](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).

> <a id="RP22" href="#TEC22">22.</a> WCAG 2.2 Understanding Docs. SC 1.4.12 Text Spacing (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html).

> <a id="RP23" href="#TEC23">23.</a> WCAG 2.2 Understanding Docs. SC 1.4.13 Content on Hover or Focus (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html).

> <a id="RP24" href="#TEC24">24.</a> WCAG 2.2 Understanding Docs. SC 1.4.8 Visual Presentation (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html).

> <a id="RP25" href="#TEC25">25.</a> WCAG 2.2 Understanding Docs. SC 2.1.1 Keyboard (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html).

> <a id="RP26" href="#TEC26">26.</a> WCAG 2.2 Understanding Docs. SC 2.1.2 No Keyboard Trap (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html).

> <a id="RP27" href="#TEC27">27.</a> WCAG 2.2 Understanding Docs. SC 2.1.4 Character Key Shortcuts (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html).

> <a id="RP28" href="#TEC28">28.</a> WCAG 2.2 Understanding Docs. SC 2.2.1 Timing Adjustable (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html).

> <a id="RP29" href="#TEC29">29.</a> WCAG 2.2 Understanding Docs. SC 2.2.2 Pause, Stop, Hide (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).

> <a id="RP30" href="#TEC30">30.</a> WCAG 2.2 Understanding Docs. SC 2.3.1 Three Flashes or Below Threshold (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html).

> <a id="RP31" href="#TEC31">31.</a> WCAG 2.2 Understanding Docs. SC 2.4.1 Bypass Blocks (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html).

> <a id="RP32" href="#TEC32">32.</a> WCAG 2.2 Understanding Docs. SC 2.4.2 Page Titled (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html).

> <a id="RP34" href="#TEC34">34.</a> WCAG 2.2 Understanding Docs. SC 2.4.5 Multiple Ways (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html).

> <a id="RP35" href="#TEC35">35.</a> WCAG 2.2 Understanding Docs. SC 2.4.8 Location (Level AAA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/location.html](https://www.w3.org/WAI/WCAG22/Understanding/location.html).

> <a id="RP36" href="#TEC36">36.</a> WCAG 2.2 Understanding Docs. SC 2.4.7 Focus Visible (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html).

> <a id="RP38" href="#TEC38">38.</a> WCAG 2.2 Understanding Docs. SC 2.5.1 Pointer Gestures (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html).

> <a id="RP39" href="#TEC39">39.</a> WCAG 2.2 Understanding Docs. SC 2.5.2 Pointer Cancellation (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html).

> <a id="RP40" href="#TEC40">40.</a> WCAG 2.2 Understanding Docs. SC 2.5.3 Label in Name (Level A). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).

> <a id="RP42" href="#TEC42">42.</a> WCAG 2.2 Understanding Docs. SC 2.5.7 Dragging Movements (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html).

> <a id="RP43" href="#TEC43">43.</a> WCAG 2.2 Understanding Docs. SC 2.5.8 Target Size (Minimum) (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

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

> <a id="RP63" href="#TEC63">63.</a> WCAG 2.2 Understanding Docs. SC 4.1.3 Status Messages (Level AA). Disponível em: [https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html).


--8<-- "includes/bibliografia.md"
