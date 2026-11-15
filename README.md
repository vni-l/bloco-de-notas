# Bloco de Notas

Aplicativo desktop local para escrever rascunhos de notas. A interface atual tem uma barra lateral de navegação e uma área de edição com campos para título e conteúdo, além de um contador de palavras e caracteres.

## Stack

- Tauri 2 e Rust
- TypeScript, HTML e CSS, sem framework frontend
- Vite e pnpm

## Pré-requisitos

- Rust e Cargo
- Node.js e pnpm
- Dependências nativas necessárias para compilar Tauri 2 no sistema operacional utilizado; no Linux, consulte os pré-requisitos oficiais do Tauri.

## Preparar e executar

Na raiz do projeto, instale as dependências frontend:

```bash
pnpm install
```

Execute o aplicativo em desenvolvimento:

```bash
pnpm tauri dev
```

Gere a versão de distribuição configurada para o projeto:

```bash
pnpm tauri build
```

## Estado atual

A interface inicial própria está implementada. Título e conteúdo permanecem temporariamente em memória durante a sessão: ainda não são salvos em arquivos. A ação “Nova nota” limpa os campos; o aplicativo ainda não implementa abertura ou persistência de notas.
