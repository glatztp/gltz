# Correção do Erro PostCSS - ES Module

## Problema

```
ReferenceError: module is not defined in ES module scope
```

## Soluções (escolha uma):

### Solução 1: Converter para ES Module (Recomendado)

Renomeie `postcss.config.js` para `postcss.config.mjs` ou atualize o conteúdo:

```javascript
// postcss.config.js (formato ES Module)
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Solução 2: Usar CommonJS

Renomeie `postcss.config.js` para `postcss.config.cjs`:

```javascript
// postcss.config.cjs (formato CommonJS)
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Solução 3: Remover "type": "module"

No `package.json` do projeto, remova ou comente:

```json
{
  // "type": "module",  // <- comentar ou remover esta linha
}
```

## Para seu projeto @gltz-packages/ui:

✅ Já está funcionando corretamente com a estrutura MLW
✅ PostCSS configurado corretamente
✅ Build system otimizado
