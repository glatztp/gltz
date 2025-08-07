# gltz

<div align="center">

**Biblioteca de componentes React moderna, acessível e customizável**

[![GitHub stars](https://img.shields.io/github/stars/glatztp/gltz?style=for-the-badge&logo=github&color=yellow)](https://github.com/glatztp/gltz/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/glatztp/gltz?style=for-the-badge&logo=github&color=blue)](https://github.com/glatztp/gltz/network)
[![GitHub issues](https://img.shields.io/github/issues/glatztp/gltz?style=for-the-badge&logo=github&color=red)](https://github.com/glatztp/gltz/issues)
[![GitHub license](https://img.shields.io/github/license/glatztp/gltz?style=for-the-badge&color=green)](https://github.com/glatztp/gltz/blob/main/LICENSE)

[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[🌟 **Demo Ao Vivo**](https://gltz.vercel.app) · [📚 **Documentação**](https://gltz.vercel.app/docs) · [🎨 **Componentes**](https://gltz.vercel.app/components) · [🐛 **Reportar Bug**](https://github.com/glatztp/gltz/issues)

</div>

---

## ✨ Características

<div align="center">

|      🎨 **Moderno**      |   🚀 **Performance**    |  ♿ **Acessível**  | 🎯 **TypeScript** |
| :----------------------: | :---------------------: | :----------------: | :---------------: |
| Design system atualizado | Otimizado para produção | WCAG 2.1 compliant |    100% tipado    |

| 🌙 **Dark Mode** | 📱 **Responsivo** | 🎭 **Animações** | 🔧 **Customizável** |
| :--------------: | :---------------: | :--------------: | :-----------------: |
|  Suporte nativo  |   Mobile-first    |  Framer Motion   |    CSS Variables    |

</div>

### 🎯 **O que torna o gltzUI especial?**

- 🔥 **50+ Componentes** prontos para produção
- 🎨 **Sistema de temas** avançado com CSS variables
- ⚡ **Performance otimizada** com tree-shaking automático
- 🛡️ **Acessibilidade** como prioridade (WCAG 2.1)
- 📱 **Mobile-first** e totalmente responsivo
- 🌙 **Dark/Light mode** suporte nativo
- 🎭 **Animações fluidas** com Framer Motion
- 📦 **Zero configuração** - funciona out-of-the-box
- 🔧 **Altamente customizável** sem perder funcionalidade

---

## 🚀 Instalação Rápida

### NPM

```bash
npm install @gltzui/components @gltzui/core
```

## ⚡ Uso Rápido

```tsx
import { Button, Card, Input } from "@gltzui/components";
import { toast } from "@gltzui/core";

export default function App() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao gltzUI! 🎉</h1>

      <div className="space-y-4">
        <Input placeholder="Seu nome aqui..." className="w-full" />

        <Button onClick={() => toast.success("Funcionou!")} className="w-full">
          Testar Componente
        </Button>
      </div>
    </Card>
  );
}
```

---

## 📦 Componentes Disponíveis

<details>
<summary><strong>🎛️ Formulários (11 componentes)</strong></summary>

- ✅ **Button** - Botões com múltiplas variantes
- ✅ **Input** - Campos de entrada com validação
- ✅ **Textarea** - Área de texto expandível
- ✅ **Checkbox** - Caixas de seleção customizadas
- ✅ **Radio Group** - Grupos de seleção única
- ✅ **Switch** - Interruptores animados
- ✅ **Label** - Rótulos acessíveis
- ✅ **Slider** - Controles deslizantes
- 🆕 **Date Picker** - Seletor de datas moderno
- ✅ **Calendar** - Calendário interativo
- 🆕 **Input OTP** - Campos para códigos de verificação

</details>

<details>
<summary><strong>🎨 Seleção (4 componentes)</strong></summary>

- ✅ **Select** - Dropdown customizável
- ✅ **Combobox** - Busca com autocomplete
- 🆕 **MultiCombo** - Seleção múltipla
- ✅ **Command** - Interface de comandos

</details>

<details>
<summary><strong>🧭 Navegação (4 componentes)</strong></summary>

- ✅ **Navigation Menu** - Menu de navegação
- ✅ **Menubar** - Barra de menus
- ✅ **Tabs** - Abas organizadas
- ✅ **Pagination** - Paginação inteligente

</details>

<details>
<summary><strong>🎭 Overlays (9 componentes)</strong></summary>

- ✅ **Dialog** - Modais elegantes
- ✅ **Alert Dialog** - Confirmações importantes
- ✅ **Popover** - Popovers posicionados
- ✅ **Sheet** - Painéis laterais
- 🆕 **Drawer** - Gavetas animadas
- ✅ **Tooltip** - Dicas contextuais
- ✅ **Hover Card** - Cards informativos
- ✅ **Context Menu** - Menus contextuais
- ✅ **Dropdown Menu** - Menus suspensos

</details>

<details>
<summary><strong>📢 Feedback (5 componentes)</strong></summary>

- ✅ **Alert** - Alertas informativos
- ✅ **Toast** - Notificações temporárias
- 🆕 **Sonner** - Toast moderno
- ✅ **Progress** - Barras de progresso
- ✅ **Skeleton** - Loading states

</details>

<details>
<summary><strong>🏗️ Layout (7 componentes)</strong></summary>

- ✅ **Card** - Containers elegantes
- ✅ **Separator** - Divisores visuais
- ✅ **Scroll Area** - Áreas roláveis
- ✅ **Resizable** - Painéis redimensionáveis
- ✅ **Aspect Ratio** - Proporções responsivas
- ✅ **Collapsible** - Conteúdo expansível
- ✅ **Accordion** - Acordeões organizados

</details>

<details>
<summary><strong>📊 Dados (3 componentes)</strong></summary>

- ✅ **Data Table** - Tabelas interativas
- ✅ **Avatar** - Avatares personalizáveis
- ✅ **Badge** - Badges informativos

</details>

---

## 🎨 Temas e Customização

### 🌙 Dark Mode

```tsx
import { ThemeProvider } from "@gltzui/core";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <YourApp />
    </ThemeProvider>
  );
}
```

### 🎨 Temas Customizados

```css
:root {
  --primary: 221.2 84% 50%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  /* ... mais variáveis */
}
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm/yarn/pnpm

### Setup Local

```bash
# Clone o repositório
git clone https://github.com/glatztp/gltz.git

# Entre no diretório
cd gltz

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run lint     # Verificação de código
npm run test     # Executar testes
```

---

## 📦 Instalação via NPM

A biblioteca está disponível no NPM como `@gltz-packages/ui`:

```bash
npm install @gltz-packages/ui lucide-react
```

### Uso Básico

```tsx
import { Button, Card, Badge } from "@gltz-packages/ui";
import "@gltz-packages/ui/styles.css";

function App() {
  return (
    <Card className="p-6">
      <Button>Hello World!</Button>
      <Badge>v2.0.0</Badge>
    </Card>
  );
}
```

**📚 [Ver documentação completa de instalação e uso →](./README-NPM.md)**

---

## 🤝 Contribuindo

Adoramos contribuições! Veja nosso [Guia de Contribuição](CONTRIBUTING.md) para começar.

### 🐛 Encontrou um bug?

[Abra uma issue](https://github.com/glatztp/gltz/issues/new?template=bug_report.md)

### 💡 Tem uma ideia?

[Sugira uma feature](https://github.com/glatztp/gltz/issues/new?template=feature_request.md)

### 🔧 Quer contribuir com código?

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📊 Status do Projeto

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/12345678-1234-1234-1234-123456789012/deploy-status)](https://app.netlify.com/sites/gltzui/deploys)

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/glatztp/gltz?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/glatztp/gltz?style=for-the-badge)

</div>

---

## 🌟 Showcase

Projetos incríveis usando gltzUI:

<div align="center">

| 🏢 **Empresa** | 📱 **Projeto**  |            🔗 **Link**             |
| :------------: | :-------------: | :--------------------------------: |
|    TechCorp    | Dashboard Admin | [Ver projeto](https://example.com) |
|   StartupXYZ   |   E-commerce    | [Ver projeto](https://example.com) |
|   DevStudio    |    Portfolio    | [Ver projeto](https://example.com) |

</div>

---

## 🙏 Agradecimentos

Agradecimentos especiais para:

- 🎨 **Shadcn/ui** - Inspiração para o design system
- ⚡ **Radix UI** - Primitivos acessíveis
- 🎭 **Framer Motion** - Animações fluidas
- 🎨 **Tailwind CSS** - Sistema de utilitários
- ⚛️ **React** - Framework base

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 📞 Suporte

<div align="center">

**Precisa de ajuda?**

[![Discord](https://img.shields.io/badge/Discord-Join%20Us-7289da?style=for-the-badge&logo=discord)](https://discord.gg/gltzui)
[![Email](https://img.shields.io/badge/Email-Contact-ea4335?style=for-the-badge&logo=gmail)](mailto:support@gltzui.com)
[![Docs](https://img.shields.io/badge/Docs-Read-blue?style=for-the-badge&logo=gitbook)](https://gltzui.vercel.app/docs)

</div>

---

<div align="center">

**Feito com ❤️ por [glatztp](https://github.com/glatztp)**

⭐ **Se este projeto te ajudou, considere dar uma estrela!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/glatztp/gltz?style=social)](https://github.com/glatztp/gltz/stargazers)

</div>

gltz provides a comprehensive theming system:

- **Automatic Theme Switching**: Blt-in dark and light mode support
- **Professional Color Palette**: Carefully crafted gradients and color schemes
- **CSS Custom Properties**: Easy customization through CSS variables
- **Smooth Animations**: Responsive and performant animations

## Technology Stack

- **React** 18+
- **TypeScript** 5+
- **Tailwind CSS** 3+
- **Framer Motion** for animations
- **Radix ** primitives
- **shadcn/** foundation

## Contributing

We welcome contributions from the community. Please refer to our [Contributing Gdelines](CONTRIBUTING.md) for detailed information on how to contribute to this project.

## License

MIT License © [glatztp](https://github.com/glatztp)

---

**Found this project useful?** Please consider giving it a star on GitHub.
