# Como usar @glacien/ui

## Instalação Rápida

```bash
npm install @glacien/ui
```

## Importação de Estilos

**⚠️ IMPORTANTE:** Importe o CSS compilado no seu projeto:

```tsx
// No seu main.tsx, index.tsx ou _app.tsx
import "@glacien/ui/dist/index.css";
```

## Uso Básico

```tsx
import { Button, Card, CardContent } from "@glacien/ui";

function App() {
  return (
    <Card>
      <CardContent className="p-6">
        <Button>Meu primeiro botão!</Button>
      </CardContent>
    </Card>
  );
}
```

## Troubleshooting

### Erro: "Missing field 'negated' on ScannerOptions.sources"

Este erro ocorre quando há conflito com Tailwind CSS. **Soluções:**

1. **Use apenas o CSS compilado (Recomendado):**

   ```tsx
   // ✅ Faça isso
   import "@glacien/ui/dist/index.css";

   // ❌ NÃO configure Tailwind no seu projeto se usar nossa lib
   ```

2. **Se você já usa Tailwind, atualize para a versão mais recente:**

   ```bash
   npm install tailwindcss@latest postcss@latest autoprefixer@latest
   ```

3. **Configure seu tailwind.config.js para não incluir nossa biblioteca:**
   ```js
   module.exports = {
     content: [
       "./src/**/*.{js,ts,jsx,tsx}",
       // ❌ NÃO inclua nossa biblioteca aqui
       // "./node_modules/@glacien/ui/**/*.{js,ts,jsx,tsx}"
     ],
     // ...
   };
   ```

### Estilos não aparecem

Verifique se você importou o CSS:

```tsx
import "@glacien/ui/dist/index.css";
```

### Erros de TypeScript

Instale os tipos do React:

```bash
npm install @types/react @types/react-dom
```

## Componentes Disponíveis

- `Button` - Botões com várias variantes
- `Card` - Cartões com cabeçalho, conteúdo e rodapé
- `Input` - Campos de entrada
- `Label` - Rótulos para formulários
- `Badge` - Etiquetas e badges
- `Dialog` - Modais e diálogos
- `Tabs` - Abas e navegação por abas
- `Accordion` - Acordeões expansíveis
- E muito mais...

## Suporte

- GitHub: https://github.com/glatztp/glacien
- NPM: https://www.npmjs.com/package/@glacien/ui
