# Contribuindo para o gltzUI 🚀

Obrigado por considerar contribuir com o gltzUI! Suas contribuições são muito bem-vindas e ajudam a tornar esta biblioteca ainda melhor.

## 📋 Sumário

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Funcionalidades](#sugerindo-funcionalidades)
- [Contribuindo com Código](#contribuindo-com-código)
- [Processo de Development](#processo-de-development)
- [Guia de Estilo](#guia-de-estilo)

## 📜 Código de Conduta

Este projeto adere ao [Código de Conduta do Contributor Covenant](CODE_OF_CONDUCT.md). Ao participar, você deve seguir este código.

## 🤝 Como Contribuir

Existem várias maneiras de contribuir:

### 🐛 Reportando Bugs

- Use o template de bug report
- Inclua informações detalhadas sobre o ambiente
- Forneça passos para reproduzir o problema
- Adicione screenshots quando aplicável

### 💡 Sugerindo Funcionalidades

- Use o template de feature request
- Descreva claramente o problema que a funcionalidade resolve
- Explique como deveria funcionar
- Considere implementações alternativas

### 📖 Melhorando Documentação

- Corrija erros de digitação
- Adicione exemplos mais claros
- Melhore explicações existentes
- Traduza conteúdo

### 🔧 Contribuindo com Código

- Correções de bugs
- Novos componentes
- Melhorias de performance
- Otimizações de acessibilidade

## 🐛 Reportando Bugs

Antes de reportar um bug, por favor:

1. **Verifique** se já não foi reportado
2. **Search** nas issues existentes
3. **Teste** na versão mais recente

### Template de Bug Report

```markdown
**Descrição do Bug**
Uma descrição clara e concisa do problema.

**Para Reproduzir**
Passos para reproduzir o comportamento:

1. Vá para '...'
2. Clique em '....'
3. Role para baixo até '....'
4. Veja o erro

**Comportamento Esperado**
Uma descrição clara do que você esperava que acontecesse.

**Screenshots**
Se aplicável, adicione screenshots para ajudar a explicar o problema.

**Ambiente:**

- OS: [e.g. iOS]
- Browser [e.g. chrome, safari]
- Versão [e.g. 22]
- gltzUI Versão [e.g. 1.0.0]

**Contexto Adicional**
Adicione qualquer outro contexto sobre o problema aqui.
```

## 💡 Sugerindo Funcionalidades

### Template de Feature Request

```markdown
**Sua feature request está relacionada a um problema? Descreva.**
Uma descrição clara e concisa do problema.

**Descreva a solução que você gostaria**
Uma descrição clara e concisa do que você quer que aconteça.

**Descreva alternativas que você considerou**
Uma descrição clara e concisa de soluções ou funcionalidades alternativas.

**Contexto adicional**
Adicione qualquer outro contexto ou screenshots sobre a feature request aqui.
```

## 🔧 Contribuindo com Código

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU_USERNAME/gltz.git
cd gltz

# Adicione o repositório original como upstream
git remote add upstream https://github.com/glatztp/gltz.git
```

### 2. Setup do Ambiente

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### 3. Crie uma Branch

```bash
# Crie uma branch para sua feature/bugfix
git checkout -b feature/minha-feature
# ou
git checkout -b bugfix/corrige-bug
```

### 4. Faça suas Mudanças

- Escreva código limpo e bem documentado
- Adicione testes quando apropriado
- Mantenha commits pequenos e focados
- Use mensagens de commit descritivas

### 5. Teste suas Mudanças

```bash
# Execute os testes
npm run test

# Verifique o linting
npm run lint

# Teste o build
npm run build
```

### 6. Commit e Push

```bash
# Adicione suas mudanças
git add .

# Commit com mensagem descritiva
git commit -m "feat: adiciona novo componente DatePicker"

# Push para seu fork
git push origin feature/minha-feature
```

### 7. Abra um Pull Request

- Use o template de PR
- Descreva suas mudanças claramente
- Inclua screenshots se aplicável
- Referencie issues relacionadas

## 🛠️ Processo de Development

### Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base
│   ├── layout/         # Componentes de layout
│   └── pages/          # Páginas da documentação
├── lib/                # Utilitários e helpers
├── styles/             # Estilos globais
└── types/              # Definições de tipos TypeScript
```

### Tecnologias Utilizadas

- **React** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Radix UI** - Primitivos acessíveis
- **Vite** - Build tool

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run lint         # ESLint
npm run lint:fix     # ESLint com auto-fix
npm run type-check   # Verificação de tipos
npm run test         # Testes unitários
npm run test:watch   # Testes em modo watch
npm run test:a11y    # Testes de acessibilidade
npm run test:visual  # Testes visuais
```

## 🎨 Guia de Estilo

### Código

#### TypeScript

- Use TypeScript para todos os arquivos
- Defina interfaces para props
- Use tipos explícitos quando necessário

```typescript
interface ButtonProps {
  variant?: "default" | "destructive" | "outline";
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
}
```

#### React Components

- Use componentes funcionais
- Prefira hooks ao invés de classes
- Mantenha componentes pequenos e focados

```tsx
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
```

#### Styling

- Use Tailwind CSS classes
- Crie variantes com `cva` (class-variance-authority)
- Mantenha consistência com o design system

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### Mensagens de Commit

Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

feat: adiciona novo componente
fix: corrige bug de acessibilidade
docs: atualiza README
style: formata código
refactor: melhora performance
test: adiciona testes unitários
chore: atualiza dependências
```

### Documentação

- Documente novos componentes
- Inclua exemplos de uso
- Mantenha JSDoc atualizado
- Adicione screenshots quando relevante

## 🏷️ Labels das Issues

| Label              | Descrição                           |
| ------------------ | ----------------------------------- |
| `bug`              | Algo não está funcionando           |
| `enhancement`      | Nova funcionalidade ou pedido       |
| `documentation`    | Melhorias ou adições à documentação |
| `good first issue` | Boa para novos contribuidores       |
| `help wanted`      | Ajuda extra é solicitada            |
| `question`         | Pergunta adicional ou discussão     |

## 🎉 Reconhecimento

Contribuidores são reconhecidos no README e no hall da fama do projeto. Muito obrigado por fazer o gltzUI melhor!

## 📞 Dúvidas?

Se tiver qualquer dúvida:

- Abra uma [Discussion](https://github.com/glatztp/gltz/discussions)

---

**Obrigado por contribuir! 🚀**
