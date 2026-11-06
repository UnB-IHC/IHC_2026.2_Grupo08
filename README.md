<div align="center">

<!-- LOGO: substitua o arquivo docs/imagens/logo.svg (ou .png) pela logo do grupo -->
<img src="docs/imagens/logo.svg" alt="Logo do projeto IHC 2026.2 Grupo 08" width="160">

# IHC 2026.2 · Grupo 08

**Avaliação de acessibilidade e usabilidade do Mercado Livre**

[![Site publicado](https://img.shields.io/badge/site-GitHub%20Pages-FFE600?style=for-the-badge&labelColor=2D3277)](https://SEU-USUARIO.github.io/IHC_2026.2_Grupo08/)
[![MkDocs Material](https://img.shields.io/badge/MkDocs-Material-FFE600?style=for-the-badge&labelColor=2D3277)](https://squidfunk.github.io/mkdocs-material/)
[![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-FFE600?style=for-the-badge&labelColor=2D3277)](LICENSE.md)

</div>

---

Repositório de documentação do projeto da disciplina de **Interação Humano-Computador (IHC) · 2026.2** da **Universidade de Brasília (UnB)**, contendo o **Checklist de Avaliação de Acessibilidade (WCAG)** e **Usabilidade (Heurísticas de Nielsen)** aplicado ao site do **Mercado Livre**.

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Conteúdo](#conteúdo)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Como rodar localmente](#como-rodar-localmente)
- [Deploy](#deploy)
- [Equipe](#equipe)
- [Licença](#licença)

## Sobre o projeto

O objetivo é analisar e avaliar o Mercado Livre sob duas perspectivas:

- **Acessibilidade:** inspeção com base no **WCAG 2.2**, na **ABNT NBR 17225** e no **Guia de Boas Práticas para Acessibilidade Digital** (UK–Brasil).
- **Usabilidade:** avaliação heurística com as **10 heurísticas de Nielsen**.

Os achados são registrados com evidência, severidade (escala de 0 a 4) e recomendação de melhoria. Tudo é publicado como um site de documentação feito com [MkDocs](https://www.mkdocs.org/) e o tema [Material](https://squidfunk.github.io/mkdocs-material/).

## Conteúdo

| Seção | Descrição |
|---|---|
| Metodologia | Fluxos inspecionados, ferramentas e escala de severidade |
| Acessibilidade | Checklist interativo com 95 itens (Perceptível, Operável, Compreensível, Robusto, Processo e pessoas, Boas práticas do Guia) |
| Usabilidade (Nielsen) | As 10 heurísticas (30 itens), ligadas aos critérios do WCAG e da NBR |
| Resultados | Problemas encontrados no Mercado Livre e recomendações |
| Apoio | Ferramentas de acessibilidade e gestão de projetos |

Os checklists são **interativos**: cada página mostra o progresso, salva as marcações no navegador, filtra os itens pendentes e copia a lista de pendentes para usar nos Resultados.

## Estrutura do repositório

```text
.
├── .github/workflows/deploy.yml   # Publicação automática no GitHub Pages
├── docs/
│   ├── index.md                   # Página inicial
│   ├── metodologia.md
│   ├── acessibilidade/            # Checklist de acessibilidade (WCAG, NBR, Guia)
│   ├── usabilidade/               # Heurísticas de Nielsen
│   ├── resultados/                # Avaliação do Mercado Livre
│   ├── apoio/                     # Ferramentas e gestão de projetos
│   ├── imagens/                   # Logo e evidências
│   ├── javascripts/checklist.js   # Interatividade dos checklists
│   └── stylesheets/extra.css      # Tema amarelo
├── includes/bibliografia.md       # Bibliografia compartilhada pelas páginas
├── mkdocs.yml                     # Configuração do site
├── requirements.txt               # Dependências Python
└── README.md
```

## Como rodar localmente

### Pré-requisitos

- [Python](https://www.python.org/downloads/) 3.9 ou superior
- [Git](https://git-scm.com/downloads)

### Passo a passo

**1. Clone o repositório**

```bash
git clone https://github.com/SEU-USUARIO/IHC_2026.2_Grupo08.git
cd IHC_2026.2_Grupo08
```

**2. Crie e ative um ambiente virtual** (recomendado)

```bash
# Linux e macOS
python3 -m venv .venv
source .venv/bin/activate
```

```powershell
# Windows (PowerShell)
python -m venv .venv
.venv\Scripts\Activate.ps1
```

**3. Instale as dependências**

```bash
pip install -r requirements.txt
```

**4. Inicie o servidor de desenvolvimento**

```bash
mkdocs serve
```

**5. Abra no navegador**

Acesse [http://127.0.0.1:8000](http://127.0.0.1:8000). O site recarrega sozinho a cada alteração salva em `docs/`.

### Gerar o build estático (opcional)

```bash
mkdocs build
```

Os arquivos finais ficam na pasta `site/`, que não é versionada.


## Equipe

<table>
  <tr>
    <td align="center"><a href="https://github.com/Tutzs"><img style="border-radius: 50%;" src="https://github.com/Tutzs.png" width="100" alt="Foto de perfil de Arthur"/><br /><sub><b>Arthur</b></sub></a></td>
    <td align="center"><a href="https://github.com/iiBrenda"><img style="border-radius: 50%;" src="https://github.com/iiBrenda.png" width="100" alt="Foto de perfil de Brenda Maria"/><br /><sub><b>Brenda Maria</b></sub></a></td>
    <td align="center"><a href="https://github.com/Eduard0803"><img style="border-radius: 50%;" src="https://github.com/Eduard0803.png" width="100" alt="Foto de perfil de Eduardo Belarmino"/><br /><sub><b>Eduardo Belarmino</b></sub></a></td>
    <td align="center"><a href="https://github.com/eduardoferre"><img style="border-radius: 50%;" src="https://github.com/eduardoferre.png" width="100" alt="Foto de perfil de Eduardo Ferreira"/><br /><sub><b>Eduardo Ferreira</b></sub></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/flaviarebelato"><img style="border-radius: 50%;" src="https://github.com/flaviarebelato.png" width="100" alt="Foto de perfil de Flavia Rebelato"/><br /><sub><b>Flavia Rebelato</b></sub></a></td>
    <td align="center"><a href="https://github.com/Fortaah"><img style="border-radius: 50%;" src="https://github.com/Fortaah.png" width="100" alt="Foto de perfil de João Pedro"/><br /><sub><b>João Pedro</b></sub></a></td>
    <td align="center"><a href="https://github.com/pedro123900"><img style="border-radius: 50%;" src="https://github.com/pedro123900.png" width="100" alt="Foto de perfil de Pedro Silva"/><br /><sub><b>Pedro Silva</b></sub></a></td>
    <td align="center"><a href="https://github.com/vitoraraujoooo"><img style="border-radius: 50%;" src="https://github.com/vitoraraujoooo.png" width="100" alt="Foto de perfil de Vitor Araújo"/><br /><sub><b>Vitor Araújo</b></sub></a></td>
  </tr>
</table>

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
