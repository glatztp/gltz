# Como publicar a gltz-UI no npm

## Pré-requisitos

1. Conta no npm (criar em [npmjs.com](https://www.npmjs.com))
2. npm CLI instalado e logado:
   ```bash
   npm login
   ```

## Processo de Publicação

### 1. Verificação final

```bash
# Verificar se o build está funcionando
npm run build

# Verificar se os arquivos estão corretos
ls dist/
```

### 2. Preparar para publicação

```bash
# Verificar o que será publicado
npm pack --dry-run

# Isso mostrará exatamente quais arquivos serão incluídos no pacote
```

### 3. Publicar

```bash
# Primeira publicação
npm publish

# Para versões futuras, incrementar a versão primeiro
npm version patch  # ou minor, ou major
npm publish
```

## Estrutura final do pacote

Após o build, a pasta `dist/` contém:

```
dist/
├── index.js          # Build CommonJS
├── index.esm.js      # Build ES Modules
├── index.d.ts        # Tipos TypeScript principais
├── styles.css        # Estilos compilados e minificados
└── components/       # Tipos dos componentes individuais
    └── ui/
        ├── button.d.ts
        ├── card.d.ts
        ├── input.d.ts
        └── badge.d.ts
```

## Como usar após publicação

### Instalação

```bash
npm install gltz-ui
```

### Uso

```tsx
import { Button, Card, Input } from "gltz-ui";
import "gltz-ui/dist/styles.css";

function App() {
  return (
    <Card>
      <Input placeholder="Digite algo" />
      <Button>Clique aqui</Button>
    </Card>
  );
}
```

## Versionamento

- **patch** (1.0.1): Bug fixes, correções pequenas
- **minor** (1.1.0): Novos componentes, funcionalidades não-breaking
- **major** (2.0.0): Mudanças que quebram compatibilidade

## Comandos úteis

```bash
# Ver informações do pacote
npm view gltz-ui

# Ver dependentes do pacote
npm view gltz-ui dependents

# Despublicar (só nas primeiras 24h)
npm unpublish gltz-ui@1.0.0
```
