<div align="center">

# @gltz-packages/ui

**Enterprise-Grade React Component Library for Modern Applications**

A comprehensive, accessible, and highly customizable React component library built with modern web standards, TypeScript, and industry best practices.

[![npm version](https://img.shields.io/npm/v/@gltz-packages/ui?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/@gltz-packages/ui)
[![Downloads](https://img.shields.io/npm/dm/@gltz-packages/ui?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/@gltz-packages/ui)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@gltz-packages/ui?style=flat-square)](https://bundlephobia.com/package/@gltz-packages/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[📖 **Documentation**](https://gltz.vercel.app/docs) • [🚀 **Live Demo**](https://gltz.vercel.app) • [📦 **NPM Package**](https://www.npmjs.com/package/@gltz-packages/ui) • [🐛 **Report Issues**](https://github.com/glatztp/gltz/issues) • [💬 **Discussions**](https://github.com/glatztp/gltz/discussions)

</div>

---

## Overview

@gltz-packages/ui is a production-ready React component library designed for enterprise applications. Built on modern web standards with accessibility, performance, and developer experience as core principles.

### Key Features

- **50+ Professional Components** - Comprehensive set of UI components for enterprise applications
- **Full TypeScript Support** - Complete type safety with excellent IntelliSense support
- **Accessibility First** - WCAG 2.1 AA compliant components with full keyboard navigation
- **Theme System** - Advanced theming with CSS custom properties and dark mode support
- **Framework Agnostic** - Compatible with Next.js, Vite, Create React App, Remix, and Gatsby
- **Tree Shakeable** - Optimized bundle size with selective imports
- **Production Ready** - Battle-tested in enterprise environments
- **Developer Experience** - Comprehensive documentation, examples, and TypeScript definitions

### Architecture

Built on a foundation of industry-leading technologies:

<div align="center">

<img src="https://gltz.vercel.app/logo.svg" alt="GLTZ UI Logo" width="120" />

# @gltz-packages/ui

![Alt](https://repobeats.axiom.co/api/embed/daa29dc86cb7b8844337c5528be01db2239880ad.svg "Repobeats analytics image")

**A maior e mais profissional biblioteca de componentes React para aplicações modernas.**

[![npm version](https://img.shields.io/npm/v/@gltz-packages/ui?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/@gltz-packages/ui)
[![Downloads](https://img.shields.io/npm/dm/@gltz-packages/ui?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/@gltz-packages/ui)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[📖 **Documentação**](https://gltz.vercel.app/docs) • [🚀 **Live Demo**](https://gltz.vercel.app) • [📦 **NPM**](https://www.npmjs.com/package/@gltz-packages/ui) • [🐛 **Reportar Issues**](https://github.com/glatztp/gltz/issues) • [💬 **Discussões**](https://github.com/glatztp/gltz/discussions)

</div>

---

## Sobre

@gltz-packages/ui é uma biblioteca robusta de componentes React, criada para elevar o padrão de aplicações web modernas. São dezenas de componentes profissionais, acessíveis, altamente customizáveis e prontos para produção, com foco em performance, experiência do desenvolvedor e design consistente.

- **+50 componentes**: UI, navegação, formulários, overlays, feedback, layout, dados e mais
- **Acessibilidade**: Totalmente compatível com WCAG 2.1 AA
- **Theming avançado**: Suporte completo a dark mode e customização via CSS variables
- **TypeScript first**: Tipagem rigorosa e IntelliSense completo
- **Compatível**: Next.js, Vite, CRA, Remix, Gatsby e outros
- **Tree-shakeable**: Importação seletiva para bundles leves
- **Documentação completa**: Exemplos, playground e guias detalhados

---

## Principais Diferenciais

- **Componentes Profissionais**: Design enterprise, responsivo e pronto para produção
- **Customização Total**: Props avançadas, variantes, integração fácil com tokens de design
- **Performance**: Otimizado para SSR, lazy loading e animações fluidas
- **Acessibilidade Real**: Foco em navegação por teclado, ARIA, contraste e testes automatizados
- **Integração Simples**: Instale e use em qualquer stack React moderna

---

## Instalação

```bash
npm install @gltz-packages/ui lucide-react
# ou
yarn add @gltz-packages/ui lucide-react
# ou
pnpm add @gltz-packages/ui lucide-react
```

Veja a [documentação de instalação](https://gltz.vercel.app/docs/installation) para exemplos de setup em Next.js, Vite, CRA, Remix e Gatsby.

---

## Exemplo Rápido

```tsx
import { Button, Card, Input } from "@gltz-packages/ui";

export default function App() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao GLTZ UI</h1>
      <Input placeholder="Seu e-mail" className="mb-4" />
      <Button className="w-full">Começar</Button>
    </Card>
  );
}
```

---

## Componentes

@gltz-packages/ui oferece uma coleção completa de componentes para todas as necessidades:

- **Formulários**: Button, Input, Textarea, Checkbox, Radio, Switch, Label, Slider, DatePicker, Calendar, Input OTP
- **Navegação**: NavigationMenu, Menubar, Tabs, Pagination, Breadcrumb, Command
- **Overlays**: Dialog, AlertDialog, Popover, Tooltip, Sheet, Drawer, HoverCard, ContextMenu, DropdownMenu, Combobox
- **Feedback**: Alert, Toast, Sonner, Progress, Skeleton, Badge
- **Layout**: Card, Separator, ScrollArea, Accordion, Collapsible, Resizable, AspectRatio, Container
- **Dados**: DataTable, Avatar, Table, List, Timeline

Veja a [lista completa de componentes](https://gltz.vercel.app/docs/components) com exemplos e playground.

---

## Theming & Customização

- **Dark Mode**: Suporte nativo e detecção automática
- **Tokens de Design**: Customização via CSS variables
- **Exemplo**:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --background: 0 0% 100%;
  --radius: 0.5rem;
}
```

---

## Acessibilidade

Todos os componentes seguem as melhores práticas de acessibilidade:

- Navegação por teclado
- ARIA roles e labels
- Contraste de cores
- Foco visível
- Testes automatizados com axe-core

---

## Performance

- Importação seletiva (tree-shaking)
- Lazy loading para componentes pesados
- Animações otimizadas com Framer Motion
- Bundle size monitorado via Bundlephobia

---

## Como Contribuir

Contribuições são bem-vindas! Veja o [Guia de Contribuição](CONTRIBUTING.md) para detalhes.

- [Abrir Issue](https://github.com/glatztp/gltz/issues/new?template=bug_report.md)
- [Sugerir Feature](https://github.com/glatztp/gltz/issues/new?template=feature_request.md)
- [Pull Requests](https://github.com/glatztp/gltz/pulls)

---

## Estatísticas

- **+50 componentes**
- **100% TypeScript**
- **Cobertura de testes crescente**
- **Milhares de downloads mensais**
- **Utilizado em projetos enterprise e startups**

---

## Licença

MIT License © 2025 [glatztp](https://github.com/glatztp)

---

<div align="center">

**Feito com profissionalismo por [glatztp](https://github.com/glatztp)**

⭐ Se este projeto te ajudou, deixe uma estrela no GitHub! ⭐

[![GitHub stars](https://img.shields.io/github/stars/glatztp/gltz?style=social)](https://github.com/glatztp/gltz/stargazers)

</div>
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {

- {
  @apply border-border;
  }
  body {
  @apply bg-background text-foreground;
  }
  }

````

</details>

<details>
<summary><strong>Vite + React</strong></summary>

**1. Create a new Vite project:**
```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install @gltz-packages/ui lucide-react tailwindcss postcss autoprefixer
npx tailwindcss init -p
````

**2. Configure Tailwind CSS** (`tailwind.config.js`):

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@gltz-packages/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ... same configuration as Next.js
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

**3. Add styles** (`src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
/* ... same CSS variables as Next.js */
```

</details>

<details>
<summary><strong>Create React App</strong></summary>

**1. Create a new CRA project:**

```bash
npx create-react-app my-app --template typescript
cd my-app
npm install @gltz-packages/ui lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**2. Configure Tailwind CSS** (`tailwind.config.js`):

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/@gltz-packages/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ... same configuration as Next.js
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

**3. Add styles** (`src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
/* ... same CSS variables as Next.js */
```

</details>

### Basic Usage Example

```tsx
import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Separator,
} from "@gltz-packages/ui";

export default function App() {
  return (
    <div className="container mx-auto p-8 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to GLTZ UI</CardTitle>
          <CardDescription>
            A comprehensive React component library for modern applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <Separator />
          <Button className="w-full" size="lg">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## Component Library

@gltz-packages/ui provides a comprehensive collection of 50+ components organized into logical categories for enterprise application development.

### Form Components (12 Components)

Professional form controls with built-in validation and accessibility features.

| Component       | Description                                       | Features                                                         |
| --------------- | ------------------------------------------------- | ---------------------------------------------------------------- |
| **Button**      | Versatile button component with multiple variants | 6 variants, 4 sizes, loading states, icon support                |
| **Input**       | Text input with validation support                | Type variants, validation states, icons, controlled/uncontrolled |
| **Textarea**    | Multi-line text input with auto-resize            | Character counting, auto-resize, validation                      |
| **Checkbox**    | Accessible checkbox with custom styling           | Indeterminate state, custom icons, form integration              |
| **Radio Group** | Radio button group component                      | Horizontal/vertical layout, validation                           |
| **Switch**      | Toggle switch component                           | Sizes, disabled state, controlled                                |
| **Label**       | Accessible form label                             | Auto-association, required indicators                            |
| **Slider**      | Range slider component                            | Single/double handles, custom marks, validation                  |
| **Select**      | Dropdown selection component                      | Multi-select, searchable, custom options                         |
| **Date Picker** | Modern date selection                             | Range selection, presets, time picker                            |
| **Calendar**    | Full calendar component                           | Multi-date selection, custom day rendering                       |
| **Input OTP**   | One-time password input                           | Auto-focus, paste support, customizable length                   |

### Navigation Components (6 Components)

Comprehensive navigation solutions for complex applications.

| Component           | Description                  | Features                                      |
| ------------------- | ---------------------------- | --------------------------------------------- |
| **Navigation Menu** | Hierarchical navigation menu | Nested menus, responsive, keyboard navigation |
| **Menubar**         | Application menu bar         | Context menus, keyboard shortcuts             |
| **Breadcrumb**      | Navigation breadcrumb        | Custom separators, collapsible                |
| **Tabs**            | Tabbed interface component   | Vertical/horizontal, lazy loading             |
| **Pagination**      | Data pagination controls     | Customizable ranges, jump to page             |
| **Command**         | Command palette interface    | Keyboard shortcuts, search, grouping          |

### Overlay Components (10 Components)

Modal and overlay components for enhanced user interactions.

| Component         | Description                 | Features                                        |
| ----------------- | --------------------------- | ----------------------------------------------- |
| **Dialog**        | Modal dialog component      | Nested modals, scroll locking, focus management |
| **Alert Dialog**  | Confirmation dialog         | Custom actions, accessibility                   |
| **Popover**       | Positioned popover content  | Auto-positioning, arrow, trigger options        |
| **Tooltip**       | Contextual tooltip          | Delay configuration, rich content, positioning  |
| **Sheet**         | Slide-out panel             | Multiple sides, sizes, backdrop                 |
| **Drawer**        | Mobile-friendly drawer      | Swipe gestures, snap points                     |
| **Hover Card**    | Hover-triggered card        | Delay, rich content, positioning                |
| **Context Menu**  | Right-click context menu    | Nested menus, keyboard navigation               |
| **Dropdown Menu** | Dropdown menu component     | Checkable items, separators, icons              |
| **Combobox**      | Searchable select component | Async search, custom filtering                  |

### Feedback Components (6 Components)

User feedback and status indication components.

| Component    | Description                | Features                                    |
| ------------ | -------------------------- | ------------------------------------------- |
| **Alert**    | Contextual alert messages  | 4 variants, dismissible, custom icons       |
| **Toast**    | Notification toast system  | Queue management, positioning, actions      |
| **Sonner**   | Modern toast notifications | Rich content, promise handling              |
| **Progress** | Progress indication        | Determinate/indeterminate, circular variant |
| **Skeleton** | Loading state placeholders | Custom shapes, animation controls           |
| **Badge**    | Status and labeling badges | Multiple variants, sizes, removable         |

### Layout Components (8 Components)

Structural components for organizing application layout.

| Component        | Description                       | Features                                      |
| ---------------- | --------------------------------- | --------------------------------------------- |
| **Card**         | Content container card            | Header, content, footer sections              |
| **Separator**    | Visual content separator          | Horizontal/vertical, custom styling           |
| **Scroll Area**  | Custom scrollable area            | Custom scrollbars, horizontal/vertical        |
| **Accordion**    | Collapsible content sections      | Multiple/single expansion, custom triggers    |
| **Collapsible**  | Simple collapsible content        | Smooth animations, trigger customization      |
| **Resizable**    | Resizable panel layout            | Horizontal/vertical, constraints, persistence |
| **Aspect Ratio** | Responsive aspect ratio container | Common ratios, custom values                  |
| **Container**    | Responsive container component    | Breakpoint-based max-widths                   |

### Data Display Components (5 Components)

Components for displaying and organizing data.

| Component      | Description               | Features                                  |
| -------------- | ------------------------- | ----------------------------------------- |
| **Data Table** | Feature-rich data table   | Sorting, filtering, pagination, selection |
| **Avatar**     | User avatar component     | Image, fallback, status indicator, sizes  |
| **Table**      | Basic table components    | Responsive, striped, hover states         |
| **List**       | Structured list component | Ordered/unordered, custom styling         |
| **Timeline**   | Event timeline component  | Vertical/horizontal, custom markers       |

---

## Theming & Customization

### Design System

@gltz-packages/ui implements a comprehensive design system with consistent spacing, typography, and color scales.

#### Color Palette

The library uses HSL color space for maximum flexibility and includes semantic color tokens:

```css
:root {
  /* Primary Colors */
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;

  /* Secondary Colors */
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;

  /* Semantic Colors */
  --destructive: 0 84.2% 60.2%;
  --warning: 38 92% 50%;
  --success: 142 71% 45%;

  /* UI Colors */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
}
```

#### Dark Mode Support

Automatic dark mode support with system preference detection:

```tsx
import { ThemeProvider } from "@gltz-packages/ui";

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem attribute="class">
      <YourApp />
    </ThemeProvider>
  );
}
```

#### Custom Themes

Create custom themes by overriding CSS custom properties:

```css
[data-theme="corporate"] {
  --primary: 210 100% 40%;
  --primary-foreground: 0 0% 100%;
  --secondary: 210 40% 94%;
  --secondary-foreground: 210 100% 15%;
  --accent: 210 100% 95%;
  --accent-foreground: 210 100% 20%;
}
```

#### Typography Scale

Consistent typography scale with responsive sizing:

```css
:root {
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* Type Scale */
  --text-xs: 0.75rem; /* 12px */
  --text-sm: 0.875rem; /* 14px */
  --text-base: 1rem; /* 16px */
  --text-lg: 1.125rem; /* 18px */
  --text-xl: 1.25rem; /* 20px */
  --text-2xl: 1.5rem; /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem; /* 36px */
}
```

#### Spacing System

Consistent spacing scale based on 4px units:

```css
:root {
  --spacing-0: 0;
  --spacing-1: 0.25rem; /* 4px */
  --spacing-2: 0.5rem; /* 8px */
  --spacing-3: 0.75rem; /* 12px */
  --spacing-4: 1rem; /* 16px */
  --spacing-5: 1.25rem; /* 20px */
  --spacing-6: 1.5rem; /* 24px */
  --spacing-8: 2rem; /* 32px */
  --spacing-10: 2.5rem; /* 40px */
  --spacing-12: 3rem; /* 48px */
  --spacing-16: 4rem; /* 64px */
  --spacing-20: 5rem; /* 80px */
  --spacing-24: 6rem; /* 96px */
}
```

---

## Accessibility

@gltz-packages/ui is built with accessibility as a first-class citizen, ensuring all components meet WCAG 2.1 AA standards.

### Accessibility Features

- **Keyboard Navigation** - Full keyboard support with logical tab order
- **Screen Reader Support** - ARIA labels, descriptions, and live regions
- **Focus Management** - Visible focus indicators and focus trapping
- **High Contrast Mode** - Support for Windows High Contrast Mode
- **Reduced Motion** - Respects `prefers-reduced-motion` setting
- **Color Contrast** - All color combinations meet AA contrast ratios

### ARIA Implementation

Components include comprehensive ARIA support:

```tsx
// Button with accessible loading state
<Button disabled aria-describedby="loading-text">
  {loading && <span id="loading-text" className="sr-only">Loading</span>}
  {loading ? <Loader2 className="animate-spin" /> : "Submit"}
</Button>

// Form with proper labeling
<div>
  <Label htmlFor="email" className="required">Email</Label>
  <Input
    id="email"
    type="email"
    required
    aria-describedby="email-error"
    aria-invalid={hasError}
  />
  {hasError && (
    <div id="email-error" role="alert">
      Please enter a valid email address
    </div>
  )}
</div>
```

### Testing Accessibility

We recommend using these tools to test accessibility:

```bash
# Install axe-core for automated testing
npm install -D @axe-core/react

# Install testing utilities
npm install -D @testing-library/jest-dom @testing-library/user-event
```

```tsx
import { axe, toHaveNoViolations } from "@axe-core/jest-axe";
import { render } from "@testing-library/react";

expect.extend(toHaveNoViolations);

test("Button is accessible", async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## Performance

@gltz-packages/ui is optimized for production environments with several performance considerations.

### Bundle Size Optimization

- **Tree Shaking** - Import only the components you use
- **Code Splitting** - Lazy load heavy components
- **Bundle Analysis** - Monitor bundle impact

```tsx
// ✅ Good - Tree shaking friendly
import { Button, Card } from "@gltz-packages/ui";

// ❌ Avoid - Imports entire library
import * as UI from "@gltz-packages/ui";
```

### Performance Monitoring

Monitor your bundle size impact:

```bash
# Analyze bundle size
npm install -D webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js

# Check individual component sizes
npm install -D bundlephobia-cli
npx bundlephobia @gltz-packages/ui
```

### Component Performance

Components are optimized with:

- **React.memo** - Prevent unnecessary re-renders
- **useCallback/useMemo** - Memoize expensive operations
- **Virtualization** - Large lists use virtual scrolling
- **Lazy Loading** - Heavy components load on demand

### Animation Performance

Animations use GPU acceleration:

```css
/* Hardware accelerated animations */
.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
  transform: translateZ(0); /* GPU acceleration */
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in {
    animation: none;
    transition: none;
  }
}
```

---

## Testing

@gltz-packages/ui provides comprehensive testing utilities and examples.

### Testing Setup

Install testing dependencies:

```bash
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

Configure Jest:

```javascript
// jest.config.js
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom",
  moduleNameMapping: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
```

```javascript
// src/setupTests.js
import "@testing-library/jest-dom";
```

### Component Testing Examples

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@gltz-packages/ui";

describe("Button Component", () => {
  test("renders with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  test("handles click events", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);
    await user.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("shows loading state", () => {
    render(<Button loading>Loading...</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByRole("button")).toHaveAttribute("aria-disabled", "true");
  });
});
```

### Visual Testing

Use Storybook for visual regression testing:

```bash
# Install Storybook
npx storybook@latest init

# Install visual testing addon
npm install -D @storybook/addon-visual-tests
```

### Accessibility Testing

```tsx
import { axe, toHaveNoViolations } from "@axe-core/jest-axe";

expect.extend(toHaveNoViolations);

test("Form is accessible", async () => {
  const { container } = render(
    <form>
      <Label htmlFor="name">Name</Label>
      <Input id="name" required />
      <Button type="submit">Submit</Button>
    </form>
  );

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## Migration & Upgrade Guide

### From Version 1.x to 2.x

Major changes in version 2.0:

1. **Breaking Changes:**

   - Renamed `variant` prop values for consistency
   - Updated CSS custom property names
   - Removed deprecated components

2. **New Features:**

   - Enhanced TypeScript definitions
   - New component variants
   - Improved accessibility support

3. **Migration Steps:**

```bash
# Update package
npm install @gltz-packages/ui@^2.0.0

# Update CSS custom properties
# Old
--primary-500: 59 130 246;
# New
--primary: 217.2 91.2% 59.8%;
```

```tsx
// Update component props
// Old
<Button color="primary" size="md">Click me</Button>
// New
<Button variant="default" size="default">Click me</Button>
```

### Codemods

Use automated migration tools:

```bash
npx @gltz-packages/codemods v1-to-v2 src/
```

---

## Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) for detailed information.

### Development Setup

1. **Clone the repository:**

```bash
git clone https://github.com/glatztp/gltz.git
cd gltz
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start development server:**

```bash
npm run dev
```

4. **Run tests:**

```bash
npm test
```

5. **Build the library:**

```bash
npm run build
```

### Project Structure

```
gltz/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Core UI components
│   │   ├── layout/         # Layout components
│   │   └── providers/      # Context providers
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── styles/             # CSS and styling
│   └── types/              # TypeScript definitions
├── docs/                   # Documentation
├── tests/                  # Test suites
├── .storybook/            # Storybook configuration
└── build/                 # Build output
```

### Code Standards

- **TypeScript** - All code must be written in TypeScript
- **ESLint** - Follow the configured ESLint rules
- **Prettier** - Code formatting is handled by Prettier
- **Testing** - All components must have comprehensive tests
- **Documentation** - Include JSDoc comments and Storybook stories

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: add new DatePicker component"
git commit -m "fix: resolve button focus issue"
git commit -m "docs: update installation guide"
```

---

## Community & Support

### Getting Help

- **Documentation**: [https://gltz.vercel.app/docs](https://gltz.vercel.app/docs)
- **GitHub Issues**: [Report bugs or request features](https://github.com/glatztp/gltz/issues)
- **GitHub Discussions**: [Community discussions](https://github.com/glatztp/gltz/discussions)
- **Stack Overflow**: Tag your questions with `gltz-ui`

### Community Guidelines

- Be respectful and inclusive
- Provide clear, reproducible examples
- Search existing issues before creating new ones
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

### Enterprise Support

For enterprise customers, we offer:

- **Priority Support** - Dedicated support channel
- **Custom Components** - Bespoke component development
- **Training & Consulting** - Team training and architecture consulting
- **SLA Agreements** - Service level agreements

Contact us at: enterprise@gltz.dev

---

## Roadmap

### Version 2.3 (Q3 2025)

- **New Components**: Calendar improvements, Rich Text Editor, File Upload
- **Accessibility**: Enhanced screen reader support, keyboard navigation
- **Performance**: Bundle size optimization, lazy loading improvements
- **Developer Experience**: Better TypeScript definitions, improved docs

### Version 2.4 (Q4 2025)

- **Advanced Data Table**: Virtual scrolling, advanced filtering
- **Chart Components**: Integration with popular charting libraries
- **Mobile Optimization**: Touch gestures, responsive improvements
- **Testing**: Visual regression testing, accessibility testing tools

### Long-term Goals

- **React 19 Support** - Full compatibility with React 19
- **Server Components** - React Server Components support
- **Figma Integration** - Design tokens sync with Figma
- **CLI Tools** - Component generation and project setup tools

---

## Changelog

### Version 2.2.1 (Current)

#### Added

- New `MultiCombobox` component for multi-selection
- Enhanced `DatePicker` with range selection
- Dark mode improvements across all components
- Bundle size optimizations

#### Fixed

- Accessibility issues in `Dialog` component
- TypeScript definitions for theme provider
- Focus management in `Popover` component

#### Changed

- Updated dependencies to latest versions
- Improved documentation with more examples
- Enhanced Storybook stories

[View full changelog](CHANGELOG.md)

---

## License

MIT License © 2025 [glatztp](https://github.com/glatztp)

```
MIT License

Copyright (c) 2025 glatztp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Acknowledgments

Special thanks to the open-source community and these amazing projects:

- **[Radix UI](https://radix-ui.com)** - Accessible component primitives
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com)** - Design inspiration and patterns
- **[Framer Motion](https://framer.com/motion)** - Animation library
- **[Lucide](https://lucide.dev)** - Beautiful icon set
- **[React](https://react.dev)** - The foundation of our library

---

<div align="center">

**Built with ❤️ by [glatztp](https://github.com/glatztp)**

⭐ **If you find this project useful, please consider giving it a star on GitHub!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/glatztp/gltz?style=social)](https://github.com/glatztp/gltz/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/glatztp/gltz?style=social)](https://github.com/glatztp/gltz/network)
[![GitHub watchers](https://img.shields.io/github/watchers/glatztp/gltz?style=social)](https://github.com/glatztp/gltz/watchers)

</div>
