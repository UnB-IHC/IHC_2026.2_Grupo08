# Guia de contribuição

Obrigado por contribuir com o projeto **IHC 2026.2 · Grupo 08**. Este repositório contém apenas **documentação** (site MkDocs com checklists de acessibilidade, heurísticas de Nielsen e resultados da avaliação do Mercado Livre). Não há código de aplicação: o "teste" de uma contribuição é o site compilar sem erros e o texto estar correto.

## Sumário

- [Regras de ouro](#regras-de-ouro)
- [Configurando o ambiente](#configurando-o-ambiente)
- [Fluxo de trabalho](#fluxo-de-trabalho)
- [Padrão de branches](#padrão-de-branches)
- [Padrão de commits](#padrão-de-commits)
- [Passo a passo: do commit ao Pull Request](#passo-a-passo-do-commit-ao-pull-request)
- [Padrão de Pull Request](#padrão-de-pull-request)
- [Revisão e merge](#revisão-e-merge)
- [Convenções de escrita](#convenções-de-escrita)
- [Problemas comuns](#problemas-comuns)

## Regras de ouro

1. **Nunca faça push direto na `main`.** Todo push na `main` publica o site automaticamente (veja `.github/workflows/deploy.yml`). Tudo entra por Pull Request.
2. **Uma contribuição, um assunto.** PRs pequenos e focados são revisados mais rápido.
3. **Rode o site localmente antes de abrir o PR** e confirme que `mkdocs build --strict` passa sem avisos.
4. **Pelo menos uma pessoa do grupo revisa** antes do merge. Ninguém aprova o próprio PR.

## Configurando o ambiente

Siga a seção [Como rodar localmente](README.md#como-rodar-localmente) do README. Resumindo:

```bash
git clone https://github.com/UnB-IHC/IHC_2026.2_Grupo08.git
cd IHC_2026.2_Grupo08

python3 -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\Activate.ps1

pip install -r requirements.txt
mkdocs serve                     # http://127.0.0.1:8000
```

> **Sem permissão de escrita no repositório?** Faça um *fork* pelo botão **Fork** no GitHub, clone o seu fork e adicione o repositório original como `upstream`:
> ```bash
> git remote add upstream https://github.com/UnB-IHC/IHC_2026.2_Grupo08.git
> ```

## Fluxo de trabalho

```text
main ──●───────────────────────────●── (deploy automático)
        \                         /
         └─ docs/ajusta-heuristica ── commits ── Pull Request ── revisão
```

1. Atualize a `main` local.
2. Crie uma branch a partir dela.
3. Edite os arquivos e confira no `mkdocs serve`.
4. Faça commits pequenos e com mensagens claras.
5. Envie a branch e abra o Pull Request.
6. Responda aos comentários da revisão.
7. Após a aprovação, o merge é feito e o site é publicado.

## Padrão de branches

Formato: `tipo/descricao-curta-em-minusculas-com-hifens`

| Prefixo | Quando usar | Exemplo |
|---|---|---|
| `docs/` | Criar ou alterar conteúdo das páginas | `docs/checklist-operavel` |
| `resultado/` | Registrar problemas ou evidências da avaliação | `resultado/problemas-carrinho` |
| `fix/` | Corrigir erro de texto, link quebrado, referência errada | `fix/link-bibliografia` |
| `style/` | Mudanças em `extra.css` ou aparência | `style/contraste-botoes` |
| `feat/` | Funcionalidade do site (ex.: `checklist.js`, plugins) | `feat/exportar-pendentes` |
| `chore/` | Configuração, dependências, workflow | `chore/atualiza-mkdocs-material` |

## Padrão de commits

Usamos o padrão **Conventional Commits**, em português, no imperativo e sem ponto final.

```text
tipo(escopo): descrição curta (até ~72 caracteres)

Corpo opcional explicando o porquê da mudança.
```

**Tipos:** `docs`, `fix`, `feat`, `style`, `refactor`, `chore`.

**Escopos sugeridos** (opcionais, correspondem às áreas do site): `acessibilidade`, `usabilidade`, `resultados`, `metodologia`, `apoio`, `bibliografia`, `site`, `ci`.

**Exemplos**

```text
docs(resultados): registra problemas P01 a P03 do fluxo de carrinho
docs(acessibilidade): adiciona item sobre foco visível em operavel.md
fix(bibliografia): corrige link da referência RP62
style(site): aumenta contraste do texto das notas de rodapé
chore(ci): atualiza actions/setup-python para v5
```

**Boas práticas**

- Um commit = uma ideia. Evite "ajustes diversos".
- Não commite a pasta `site/`, `.venv/` nem arquivos temporários (o `.gitignore` já cobre os principais).
- Se o commit resolve uma issue, cite no corpo: `Closes #12`.

## Passo a passo: do commit ao Pull Request

### 1. Atualize a `main`

```bash
git checkout main
git pull origin main          # em fork: git pull upstream main
```

### 2. Crie sua branch

```bash
git checkout -b docs/checklist-operavel
```

### 3. Faça as alterações e visualize

```bash
mkdocs serve
```

Antes de commitar, valide o build:

```bash
mkdocs build --strict
```

Se aparecer qualquer `WARNING`, corrija antes de seguir.

### 4. Confira o que mudou

```bash
git status
git diff
```

### 5. Adicione e commite

```bash
git add docs/acessibilidade/operavel.md
git commit -m "docs(acessibilidade): adiciona item sobre foco visível"
```

Prefira `git add <arquivo>` a `git add .` para não incluir nada sem querer.

### 6. Envie a branch

```bash
git push -u origin docs/checklist-operavel
```

Em fork, o `origin` é o seu fork. Em um segundo envio da mesma branch basta `git push`.

### 7. Abra o Pull Request

**Pelo navegador**

1. Acesse o repositório no GitHub. Um banner amarelo **Compare & pull request** aparece após o push; clique nele. (Ou vá em **Pull requests → New pull request**.)
2. Confira: **base** = `main`, **compare** = sua branch.
3. Preencha o título e a descrição usando o [padrão abaixo](#padrão-de-pull-request). O modelo carrega automaticamente.
4. Em **Reviewers**, escolha pelo menos uma pessoa do grupo.
5. Clique em **Create pull request**. Se o trabalho ainda não está pronto, use **Create draft pull request**.

**Pela linha de comando (GitHub CLI)**

```bash
gh pr create --base main \
  --title "docs(acessibilidade): adiciona item sobre foco visível" \
  --body-file .github/PULL_REQUEST_TEMPLATE.md
```

### 8. Ajustes após a revisão

Faça os ajustes na mesma branch, commite e envie de novo. O PR se atualiza sozinho:

```bash
git add docs/acessibilidade/operavel.md
git commit -m "docs(acessibilidade): ajusta texto conforme revisão"
git push
```

### 9. Se a `main` avançou e há conflito

```bash
git fetch origin
git rebase origin/main        # ou: git merge origin/main
# resolva os conflitos nos arquivos, depois:
git add <arquivos-resolvidos>
git rebase --continue
git push --force-with-lease   # só necessário após rebase
```

### 10. Depois do merge

```bash
git checkout main
git pull origin main
git branch -d docs/checklist-operavel
```

## Padrão de Pull Request

### Título

Mesmo formato do commit: `tipo(escopo): descrição curta`.

### Descrição

O repositório já traz um modelo em `.github/PULL_REQUEST_TEMPLATE.md`, que o GitHub preenche automaticamente. Ele pede:

- **O que mudou** e **por quê**.
- **Tipo de mudança**.
- **Páginas afetadas**.
- **Como revisar** (onde olhar no site).
- **Capturas de tela**, quando houver mudança visual.
- **Checklist** de qualidade (build, links, referências, texto alternativo).

### Tamanho e escopo

- Prefira PRs que alterem **uma página ou um assunto**.
- Mudanças grandes (ex.: reescrever um checklist inteiro) devem ser divididas ou combinadas antes com o grupo.
- Não misture conteúdo novo com reformatação em massa.

## Revisão e merge

**Quem revisa deve verificar**

- O texto está claro, sem erros de português e no tom das demais páginas.
- Os links e as referências funcionam e estão numerados corretamente.
- O site compila (`mkdocs build --strict`) e a página renderiza bem no `mkdocs serve`.
- Evidências têm texto alternativo e numeração.
- Não há arquivos indevidos (`site/`, `.venv/`, prints sem uso).

**Merge**

- Use **Squash and merge** para manter o histórico da `main` limpo, com o título do PR como mensagem do commit.
- Quem abriu o PR faz o merge depois da aprovação. Apague a branch em seguida.
- Confirme na aba **Actions** que o deploy terminou com sucesso.

## Convenções de escrita

Estas regras vêm da estrutura atual do projeto. Siga o padrão das páginas existentes.

**Idioma e tom:** português do Brasil, linguagem clara e direta, uso de "pessoa" em vez de "usuário" quando o contexto permitir (como nas páginas atuais).

**Estrutura de pastas**

| Onde | O que vai lá |
|---|---|
| `docs/acessibilidade/` | Checklist de acessibilidade (Perceptível, Operável, Compreensível, Robusto, Processo e pessoas, Boas práticas) |
| `docs/usabilidade/` | Heurísticas de Nielsen |
| `docs/resultados/` | Problemas encontrados no Mercado Livre |
| `docs/apoio/` | Ferramentas e gestão de projetos |
| `docs/imagens/` | Logo; evidências em `docs/imagens/evidencias/` |
| `includes/bibliografia.md` | Bibliografia compartilhada entre páginas |

**Nova página:** crie o `.md` em `docs/` e registre na seção `nav` do `mkdocs.yml`. Use nomes de arquivo em minúsculas, sem acento e com hifens (`gestao-de-projetos.md`).

**Itens de checklist:** use `- [ ]` com o título em negrito e a fonte logo abaixo:

```markdown
- [ ] **Nome do critério:** Verificar se ... <a id="TEC1" href="#RP1">[1]</a>
    <br><small class="fonte">NBR 5.2 – Imagens (5.2.1) · Guia p.28 · Heurística [H6](../usabilidade/heuristicas.md#h6)</small>
```

**Referências:** a numeração `[n]` liga o texto (`TECn`) à referência no fim da página (`RPn`). Ao adicionar uma referência, crie os dois lados do link e não reutilize um número já existente na página. As páginas terminam com `--8<-- "includes/bibliografia.md"`; mantenha essa linha.

**Resultados:** registre cada problema como uma nova linha da tabela, com ID sequencial (`P04`, `P05`...), seguindo o [modelo de registro](docs/metodologia.md) e a escala de severidade de 0 a 4. Atualize o **Resumo por severidade**.

**Imagens e evidências**

- Salve em `docs/imagens/evidencias/` com nomes como `figura-01.png`.
- Sempre escreva texto alternativo descritivo: `![Botão de carrinho sem nome acessível](../imagens/evidencias/figura-01.png)`.
- Não suba imagens pesadas; reduza antes (idealmente abaixo de 500 KB).
- Como o projeto avalia acessibilidade, **a própria documentação deve ser acessível**: títulos em ordem, links com texto descritivo e imagens com alternativa textual.

**Links internos:** use caminhos relativos (`../usabilidade/heuristicas.md#h1`), nunca URLs absolutas do site publicado.

## Problemas comuns

| Sintoma | Solução |
|---|---|
| `mkdocs: command not found` | Ative o ambiente virtual (`source .venv/bin/activate`) e rode `pip install -r requirements.txt`. |
| Aviso de link quebrado no `--strict` | Confira o caminho relativo e se o arquivo está listado no `nav`. |
| `git push` rejeitado | Atualize sua branch: `git pull --rebase origin main` e envie de novo. |
| Commitei na `main` por engano | Antes do push: `git branch docs/minha-branch && git reset --hard origin/main && git checkout docs/minha-branch`. |
| Marcações do checklist sumiram | Elas ficam salvas no navegador (localStorage); outro navegador ou aba anônima começa vazio. |

## Dúvidas

Abra uma *issue* ou fale com o grupo antes de começar mudanças grandes. Ao contribuir, você concorda que seu trabalho será licenciado sob a [Licença MIT](LICENSE.md) do projeto.