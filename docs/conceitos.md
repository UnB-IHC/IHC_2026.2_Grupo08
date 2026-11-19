# Antes de avaliar: conceitos importantes

Conceitos para levar em consideração na hora de desenvolver e avaliar um site.

| Conceito | Pergunta que ajuda a responder | Princípio mais ligado |
|---|---|---|
| UX, EX, CX e TX | Como é a experiência de ponta a ponta? | Todos |
| Personas e personas ecossistêmicas | Quem usa e em que situação? | Todos |
| Jornada e fluxo | Por onde a pessoa passa e onde trava? | Operável |
| Blueprint de serviço | O que acontece por trás da tela? | Robusto |
| Omnicanalidade | A experiência continua entre os canais? | Compreensível |
| Prototipação e codesign | Como testar e melhorar com quem usa? | Todos |
| Acessibilidade cognitiva | O conteúdo é fácil de entender? | Compreensível |
| Design de interface (UI) | A aparência ajuda ou atrapalha? | Perceptível |

!!! tip "Como usar"
    1. Leia a aba do conceito.
    2. Aplique a seção **Na hora de avaliar** nas telas inspecionadas.
    3. Registre o que encontrar no checklist do princípio correspondente.

=== "UX, EX, CX e TX"

    **O que é.** *UX* (experiência do usuário) é tudo o que a pessoa percebe, sente e consegue fazer ao usar um produto. Ela se divide em perspectivas:

    - **CX** (*customer experience*): a experiência de quem compra ou contrata.
    - **EX** (*employee experience*): a experiência de quem trabalha com o serviço (atendimento, logística, suporte).
    - **TX** (*total experience*): a soma das duas, mais parceiros e outros envolvidos.

    **Por que importa.** Um site pode ter boa interface e ainda assim entregar uma experiência ruim, se o atendimento é difícil de achar ou a devolução é confusa.

    **Na hora de avaliar.**

    - Olhe a experiência do início ao fim, não só uma tela isolada.
    - Inclua o pós-compra, a ajuda e a devolução, que são o ponto de contato com o atendimento.
    - Pergunte a cada tela: quem está usando, em que situação e com que dificuldade?

=== "Personas"

    **O que é.** Persona é um perfil fictício, construído a partir de pessoas reais, que representa um grupo de usuários com objetivos, hábitos e limitações semelhantes.

    **Por que importa.** Em acessibilidade, "a pessoa usuária" não é uma só. Quem usa leitor de tela, quem navega só com teclado, quem tem baixa visão ou quem tem pouca prática digital enxergam o mesmo site de formas muito diferentes.

    **Na hora de avaliar.**

    - Escolha pelo menos uma persona com limitação e avalie "com os olhos dela".
    - Exemplos usados no projeto: pessoa que usa só o teclado, pessoa que usa leitor de tela, pessoa idosa com pouca prática em compras online (perfil do participante do teste de usabilidade).
    - Registre, para cada problema, **qual persona ele afeta**.

    **Personas ecossistêmicas**

    São personas que representam também quem se relaciona com o serviço: atendentes, vendedores, entregadores, outros canais. O Mercado Livre é um ecossistema com compradores, vendedores e suporte, então um problema para um deles costuma aparecer para os outros.

    **Na hora de avaliar:** confira se a ajuda, o contato e as mensagens servem a quem compra *e* a quem precisa resolver um problema depois.

=== "Jornada e fluxo"

    **O que é.**

    - **Jornada do usuário** (*user journey*): o caminho da pessoa ao longo do tempo, com o que ela pensa, sente e espera em cada etapa.
    - **Fluxo do usuário** (*user flow*): os passos e as telas pelos quais ela passa para cumprir uma tarefa.

    A jornada olha para a **pessoa**; o fluxo olha para o **sistema**.

    **Por que importa.** A maioria dos problemas graves aparece em momentos de decisão: escolher entrega e pagamento, preencher endereço, entrar na conta.

    **Na hora de avaliar.**

    - Defina os fluxos a inspecionar. No projeto: página inicial, busca e listagem, página do produto, carrinho, compra e pagamento (até antes da confirmação), login e cadastro, minhas compras e acompanhamento do pedido.
    - Percorra cada fluxo **só com o teclado**, depois com leitor de tela e com zoom de 200%.
    - Anote em qual etapa a pessoa trava, se perde ou desiste.
    - Principal princípio ligado: **Operável** (teclado, foco, tempo, navegação).

=== "Blueprint de serviço"

    **O que é.** Blueprint (mapeamento de serviços) é um diagrama que mostra, lado a lado, o que a pessoa **vê** (*frontstage*) e o que acontece **por trás** (*backstage*): processos, equipes e sistemas. Uma "linha de visibilidade" separa os dois lados. É uma referência da área de design de serviços (por exemplo, o livro de Morgan Miller sobre blueprint).

    **Por que importa.** Muitos problemas de acessibilidade têm causa nos bastidores. Um exemplo do projeto: botões com nome em espanhol aparecem porque o componente é compartilhado com o Mercado Livre de outros países e não foi traduzido.

    **Na hora de avaliar.**

    - Separe o **sintoma** (o que a pessoa vê) da **causa provável** (o que o sistema faz).
    - Observe o que o sistema faz sem avisar, como recarregar a página ao ligar um filtro ou mudar o foco do teclado.
    - Registre a causa provável junto com a recomendação, para que o time de desenvolvimento saiba onde corrigir.
    - Principal princípio ligado: **Robusto** (nomes, estados e código compatíveis com tecnologias assistivas).

=== "Omnicanalidade"

    **O que é.** Omnicanalidade é a integração dos canais (site, aplicativo, atendimento, loja física) para que a experiência seja contínua: a pessoa muda de canal sem recomeçar do zero. Difere da multicanalidade, em que os canais existem, mas funcionam separados.

    **Por que importa.** Quem compra pelo celular e acompanha o pedido no computador, ou pede ajuda pelo chat, espera encontrar o mesmo carrinho, o mesmo histórico e as mesmas informações.

    **Na hora de avaliar.**

    - Confira se o carrinho, o pedido e a conta são os mesmos entre páginas e canais.
    - Verifique se a ajuda e o contato estão sempre no mesmo lugar e com o mesmo nome (no Mercado Livre, a posição do link de ajuda muda entre páginas).
    - Veja se informações essenciais (prazo, frete, devolução) são iguais em todos os pontos.
    - Principal princípio ligado: **Compreensível** (consistência e previsibilidade).

=== "Prototipação e codesign"

    **O que é.**

    - **Prototipação:** criar versões simples ou detalhadas de uma tela (por exemplo, no Figma) para testar uma ideia antes de construir.
    - **Codesign:** criar a solução **junto com** quem vai usá-la, usando ferramentas como o canvas de codesign.

    **Por que importa.** Corrigir no protótipo custa pouco; corrigir depois do site no ar custa muito. E quem usa de verdade enxerga problemas que a equipe não vê.

    **Na hora de avaliar.**

    - Cada problema registrado vem com uma **recomendação de melhoria**, que pode ser mostrada como "antes e depois".
    - As propostas do grupo são organizadas em seis temas e priorizadas (alta e média). Veja a página de Resultados.
    - O **teste de usabilidade** com usuário real (participante P1) é a forma de ouvir quem usa e confirmar se a melhoria funciona.
    - Depois de qualquer correção, **repita a avaliação** nas mesmas telas e compare.

=== "Acessibilidade cognitiva"

    **O que é.** É a qualidade de um conteúdo que pode ser entendido e usado por pessoas com diferentes capacidades de atenção, memória, leitura e raciocínio, inclusive pessoas idosas, com pouca prática digital ou em situação de pressa.

    **Por que importa.** Linguagem difícil, prazos curtos e mensagens vagas excluem muita gente, mesmo sem nenhuma deficiência.

    **Na hora de avaliar, procure:**

    - siglas e termos sem explicação (exemplos encontrados: FULL, CDI, "Prêmio do seguro");
    - mensagens de erro genéricas, que não dizem como corrigir ("Revise o dado digitado");
    - textos longos, sem divisão em tópicos, na Central de ajuda;
    - mudanças de contexto sem aviso, como uma página que recarrega ao marcar um filtro;
    - tempo-limite sem aviso (como o CAPTCHA);
    - excesso de selos, banners e promoções que disputam a atenção.

    Principal princípio ligado: **Compreensível**.

=== "Interface (UI)"

    **O que é.** A camada visual do produto: cores, tipografia, espaçamento, ícones, botões, formulários e a forma como os componentes se organizam.

    **Por que importa.** Uma interface bonita pode ser ilegível para quem tem baixa visão ou não distingue cores, e confusa para quem navega pelo teclado.

    **Na hora de avaliar, verifique:**

    - **contraste** de texto e de componentes (mínimo de 4,5:1 para texto comum);
    - **foco visível** ao navegar com Tab;
    - **tamanho** e espaçamento dos alvos de clique;
    - **ordem dos títulos** (H1, H2, H3) e texto alternativo nas imagens;
    - **consistência** de nomes, ícones e aparência dos componentes;
    - links distinguíveis do texto comum (por exemplo, sublinhados).

    Principal princípio ligado: **Perceptível**.

## Cada conceito no seu princípio

| Princípio | Conceitos que mais ajudam |
|---|---|
| Perceptível | Interface (UI), personas com baixa visão |
| Operável | Fluxo do usuário, prototipação, personas de teclado |
| Compreensível | Acessibilidade cognitiva, omnicanalidade, jornada |
| Robusto | Blueprint de serviço, leitor de tela |
| Processo e pessoas | UX, EX, CX e TX, personas ecossistêmicas, codesign |