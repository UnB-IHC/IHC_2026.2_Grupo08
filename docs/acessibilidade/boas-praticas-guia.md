# 6. Boas práticas do Guia

!!! note "Como ler cada item"
    Marque o item quando o projeto **atende**. A fonte de cada item é o Guia de Boas Práticas para Acessibilidade Digital (páginas indicadas) e, quando houver, a NBR 17225. Sua marcação fica salva neste navegador.

Recomendações do Guia que a NBR não exige (ou só trata de forma indireta). Úteis, mas a conformidade com a norma não depende delas.

- [ ] **Modais:** Evitar modais; se inevitáveis: fechar por botão visível e rotulado e por Esc, tarefa simples, conteúdo breve, teste com leitor de tela. Nunca modal dentro de modal, de tela cheia, de várias etapas, de marketing ou aberto sozinho.
    <br><small class="fonte">Guia p.32–33 · Além da NBR (relacionado: NBR 5.1.6, 5.8.8) · Heurística [H3](../usabilidade/heuristicas.md#h3) e [H8](../usabilidade/heuristicas.md#h8)</small>
- [ ] **Captcha:** Usar captcha só quando realmente necessário, simples de entender e com alternativa para pessoas com deficiência (detecção automática ou pergunta fácil).
    <br><small class="fonte">Guia p.36 · NBR Anexo A (informativo) · relacionado: NBR 5.9.18</small>
- [ ] **Campo de busca e página de acessibilidade:** Verificar se há campo de busca sempre no mesmo lugar e uma página ou área de acessibilidade e dúvidas frequentes, fácil de achar no menu e por leitor de tela.
    <br><small class="fonte">Guia p.29, 42 · Além da NBR · Heurística [H7](../usabilidade/heuristicas.md#h7) e [H10](../usabilidade/heuristicas.md#h10)</small>
- [ ] **Tamanho e tipo de fonte:** Verificar se a fonte tem no mínimo 18 pt (ou 14 pt em negrito), nunca menor que o padrão do navegador, sem fontes rebuscadas ou manuscritas e sem textos longos em caixa alta ou condensados.
    <br><small class="fonte">Guia p.43–44 · Além da NBR e do WCAG</small>
- [ ] **Aparência de links:** Verificar se links têm duas pistas visuais (por exemplo, azul e sublinhado) e texto contínuo, sem reticências; link navega e botão executa ação, e a semântica não é definida pela aparência.
    <br><small class="fonte">Guia p.44–45 · relacionado: NBR 5.11.1, 5.7.2, 5.8.2</small>
- [ ] **Alto contraste e ajuste de fonte:** Se houver opção de alto contraste (dark mode) ou botões de aumentar fonte, verificar se têm espaçamento e área de clique adequados; o Guia os considera um conforto, não uma obrigação, pois o zoom do navegador já atende.
    <br><small class="fonte">Guia p.29, 42 · Opcional segundo o Guia · Heurística [H7](../usabilidade/heuristicas.md#h7)</small>
- [ ] **Alturas fixas e elementos ocultos:** Verificar se não há alturas fixas em caixas de texto (ferramenta automática não detecta) e se `display:none` e `visibility:hidden` não escondem da tecnologia assistiva o que deveria ser lido; para nome só lido, usar classe de “visualmente oculto”.
    <br><small class="fonte">Guia p.28, 46 · relacionado: NBR 5.12.7, 5.13.10</small>
- [ ] **Wireframes e mobile first:** Verificar se, já no wireframe, foram pensados zoom, contraste forçado, texto traduzido que fica maior e botões para pouca destreza motora, com design pensado primeiro para o celular.
    <br><small class="fonte">Guia p.38–39 · Além da NBR</small>
- [ ] **Animações e carrosséis:** Verificar se carrosséis e banners têm pausa, avançar/voltar e controle por teclado, e se não há animação de tela cheia nem efeito parallax; animações devem funcionar em velocidade reduzida e ter alternativa em imagem e texto.
    <br><small class="fonte">Guia p.35, 45 · relacionado: NBR 5.15.1, 5.15.2 · Heurística [H8](../usabilidade/heuristicas.md#h8) e [H3](../usabilidade/heuristicas.md#h3)</small>
- [ ] **Descrição de imagens:** Verificar se a descrição segue a fórmula tipo de imagem → quem/o quê → onde → ação, com verbos no presente, sem “a foto mostra”, sem adjetivos de valor e com cores citadas quando relevantes.
    <br><small class="fonte">Guia p.49 · complementa NBR 5.2.1</small>
- [ ] **Ícones:** Verificar se ícones vêm acompanhados de texto e se ícone clicável tem texto alternativo com a ação e o destino (por exemplo, “consultar pedidos”), sem descrever o desenho (“lupa”).
    <br><small class="fonte">Guia p.50 · relacionado: NBR 5.2.2 · Heurística [H6](../usabilidade/heuristicas.md#h6)</small>
- [ ] **Terminologia:** Verificar se o texto usa “pessoa com deficiência (PcD)” e complementa com o tipo (visual, auditiva, física, intelectual, múltipla), evitando “portador de deficiência”, “deficiente” e “pessoas especiais”; na dúvida, perguntar como a pessoa prefere ser chamada.
    <br><small class="fonte">Guia p.46–47 · Além da NBR · Heurística [H2](../usabilidade/heuristicas.md#h2)</small>
- [ ] **Textos curtos e diretos:** Verificar se as frases têm de 15 a 20 palavras, na ordem direta, com pontuação adequada, sem figuras de linguagem nem frases com senso de urgência.
    <br><small class="fonte">Guia p.48–49 · relacionado: NBR 5.12.12 · Heurística [H2](../usabilidade/heuristicas.md#h2)</small>
- [ ] **Vídeo: descritivo, legenda e Libras:** Verificar se cada vídeo tem descritivo curto; legenda aberta onde não dá para ativar legenda e fechada onde há controle; legenda com fonte grande e fundo de alto contraste; audiodescrição prevista no roteiro; e espaço reservado para a janela de Libras.
    <br><small class="fonte">Guia p.50–51 · relacionado: NBR 5.14.2, 5.14.4, 5.14.6</small>
- [ ] **Podcasts e efeitos sonoros:** Verificar se a transcrição inclui sons de fundo, efeitos e quem fala; se há avatar de Libras e versão em vídeo; e se efeitos sonoros e volume foram escolhidos com cautela (aparelhos auditivos, autismo).
    <br><small class="fonte">Guia p.48, 51 · relacionado: NBR 5.14.1, 5.14.7</small>
- [ ] **Hashtags e emojis:** Verificar se hashtags têm cada palavra em maiúscula (#MentoriaDeAcessibilidade) e se emojis são usados com moderação.
    <br><small class="fonte">Guia p.52 · Além da NBR</small>
- [ ] **Conteúdo em vários formatos:** Verificar se o conteúdo é oferecido em mais de um formato (texto, áudio, vídeo), para quem tem baixo letramento digital ou neurodiversidade.
    <br><small class="fonte">Guia p.45, 51 · relacionado: NBR 5.12.12 · Heurística [H7](../usabilidade/heuristicas.md#h7)</small>



--8<-- "includes/bibliografia.md"
