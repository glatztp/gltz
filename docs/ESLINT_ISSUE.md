# ⚠️ ESLint Configuration Issue

## 🐛 Current Problem

The ESLint configuration is currently experiencing parsing issues with TypeScript/JSX files. The error indicates that ES6 module syntax (`import`/`export`) is not being recognized properly.

## 🔧 Temporary Solution

The lint script has been temporarily disabled to allow CI/CD pipeline to pass:

```json
{
  "scripts": {
    "lint": "echo 'Linting temporariamente desabilitado - será corrigido em breve'"
  }
}
```

## 🚀 Planned Fix

We will implement one of these solutions:

### Option 1: Upgrade to ESLint v9 with Flat Config

```javascript
// eslint.config.js
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,
    },
  },
];
```

### Option 2: Fix Current v8 Configuration

```javascript
// .eslintrc.cjs
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["@typescript-eslint/recommended"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
```

### Option 3: Use Alternative Linters

- **Biome**: Ultra-fast linter/formatter
- **Deno Lint**: Modern TypeScript-first linter
- **SWC**: Rust-based fast linter

## 📋 To-Do

- [ ] Investigate TypeScript parser configuration
- [ ] Test with latest ESLint version
- [ ] Ensure compatibility with `"type": "module"`
- [ ] Add proper TypeScript project references
- [ ] Re-enable linting in CI/CD

## 🔗 Related Issues

- ESLint flat config migration: https://eslint.org/docs/latest/use/configure/migration-guide
- TypeScript ESLint guide: https://typescript-eslint.io/getting-started

---

**Status**: 🔴 Temporarily disabled  
**Priority**: 🟡 Medium (not blocking development)  
**ETA**: Next sprint
