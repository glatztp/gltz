import React, { useState, useEffect } from "react";
import {
  Download,
  Copy,
  RefreshCw,
  Code,
  Eye,
  Component,
  Zap,
  Layout,
  Palette,
  Settings,
  Monitor,
  Smartphone,
  Tablet,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import * as ComponentExports from "../../index";

// Templates pré-definidos com componentes renderizados
const TEMPLATES = {
  button: {
    name: "Button Showcase",
    description: "Demonstração completa dos botões disponíveis",
    category: "Basic",
    difficulty: "Iniciante",
    component: () => (
      <div className="space-y-6 p-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">Variantes</h3>
          <div className="flex flex-wrap gap-3">
            <ComponentExports.Button>Default</ComponentExports.Button>
            <ComponentExports.Button variant="secondary">
              Secondary
            </ComponentExports.Button>
            <ComponentExports.Button variant="destructive">
              Destructive
            </ComponentExports.Button>
            <ComponentExports.Button variant="outline">
              Outline
            </ComponentExports.Button>
            <ComponentExports.Button variant="ghost">
              Ghost
            </ComponentExports.Button>
            <ComponentExports.Button variant="link">
              Link
            </ComponentExports.Button>
          </div>
        </div>

        <ComponentExports.Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">Tamanhos</h3>
          <div className="flex flex-wrap items-center gap-3">
            <ComponentExports.Button size="sm">Small</ComponentExports.Button>
            <ComponentExports.Button>Default</ComponentExports.Button>
            <ComponentExports.Button size="lg">Large</ComponentExports.Button>
          </div>
        </div>

        <ComponentExports.Separator />

        <div>
          <h3 className="text-lg font-semibold mb-3">Estados</h3>
          <div className="flex flex-wrap gap-3">
            <ComponentExports.Button>Normal</ComponentExports.Button>
            <ComponentExports.Button disabled>Disabled</ComponentExports.Button>
            <ComponentExports.Button>
              <Download className="h-4 w-4 mr-2" />
              Com Ícone
            </ComponentExports.Button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="space-y-6">
  <div>
    <h3 className="text-lg font-semibold mb-3">Variantes</h3>
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  </div>
  
  <Separator />
  
  <div>
    <h3 className="text-lg font-semibold mb-3">Tamanhos</h3>
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  </div>
</div>`,
    imports: ["Button", "Separator"],
  },

  card: {
    name: "Card Component",
    description: "Cards elegantes para organizar conteúdo",
    category: "Layout",
    difficulty: "Iniciante",
    component: () => (
      <div className="grid gap-6 p-4">
        <ComponentExports.Card className="w-full max-w-md">
          <ComponentExports.CardHeader>
            <ComponentExports.CardTitle>Card Básico</ComponentExports.CardTitle>
            <ComponentExports.CardDescription>
              Um card simples com título e descrição
            </ComponentExports.CardDescription>
          </ComponentExports.CardHeader>
          <ComponentExports.CardContent>
            <p className="text-sm text-muted-foreground">
              Este é o conteúdo do card. Pode conter qualquer tipo de
              informação.
            </p>
            <ComponentExports.Button className="mt-4">
              Ação Principal
            </ComponentExports.Button>
          </ComponentExports.CardContent>
        </ComponentExports.Card>

        <ComponentExports.Card className="w-full max-w-md">
          <ComponentExports.CardHeader>
            <ComponentExports.CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Card com Ícone
            </ComponentExports.CardTitle>
          </ComponentExports.CardHeader>
          <ComponentExports.CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Configuração 1</span>
                <ComponentExports.Badge>Ativo</ComponentExports.Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Configuração 2</span>
                <ComponentExports.Badge variant="secondary">
                  Inativo
                </ComponentExports.Badge>
              </div>
            </div>
          </ComponentExports.CardContent>
        </ComponentExports.Card>
      </div>
    ),
    code: `<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Card Básico</CardTitle>
    <CardDescription>
      Um card simples com título e descrição
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Este é o conteúdo do card.
    </p>
    <Button className="mt-4">
      Ação Principal
    </Button>
  </CardContent>
</Card>`,
    imports: [
      "Card",
      "CardHeader",
      "CardTitle",
      "CardDescription",
      "CardContent",
      "Button",
    ],
  },

  form: {
    name: "Form Complete",
    description: "Formulário completo com validação visual",
    category: "Forms",
    difficulty: "Intermediário",
    component: () => (
      <ComponentExports.Card className="w-full max-w-md p-4">
        <ComponentExports.CardHeader>
          <ComponentExports.CardTitle>
            Cadastro de Usuário
          </ComponentExports.CardTitle>
          <ComponentExports.CardDescription>
            Preencha os dados para criar sua conta
          </ComponentExports.CardDescription>
        </ComponentExports.CardHeader>
        <ComponentExports.CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <ComponentExports.Label htmlFor="nome">
                Nome
              </ComponentExports.Label>
              <ComponentExports.Input id="nome" placeholder="João" />
            </div>
            <div className="space-y-2">
              <ComponentExports.Label htmlFor="sobrenome">
                Sobrenome
              </ComponentExports.Label>
              <ComponentExports.Input id="sobrenome" placeholder="Silva" />
            </div>
          </div>

          <div className="space-y-2">
            <ComponentExports.Label htmlFor="email">
              Email
            </ComponentExports.Label>
            <ComponentExports.Input
              id="email"
              type="email"
              placeholder="joao@exemplo.com"
            />
          </div>

          <div className="space-y-2">
            <ComponentExports.Label>País</ComponentExports.Label>
            <ComponentExports.Select>
              <ComponentExports.SelectTrigger>
                <ComponentExports.SelectValue placeholder="Selecione um país" />
              </ComponentExports.SelectTrigger>
              <ComponentExports.SelectContent>
                <ComponentExports.SelectItem value="br">
                  🇧🇷 Brasil
                </ComponentExports.SelectItem>
                <ComponentExports.SelectItem value="us">
                  🇺🇸 Estados Unidos
                </ComponentExports.SelectItem>
                <ComponentExports.SelectItem value="ca">
                  🇨🇦 Canadá
                </ComponentExports.SelectItem>
              </ComponentExports.SelectContent>
            </ComponentExports.Select>
          </div>

          <div className="flex items-center space-x-2">
            <ComponentExports.Switch id="terms" />
            <ComponentExports.Label htmlFor="terms" className="text-sm">
              Aceito os termos e condições
            </ComponentExports.Label>
          </div>

          <div className="flex gap-2">
            <ComponentExports.Button className="flex-1">
              Criar Conta
            </ComponentExports.Button>
            <ComponentExports.Button variant="outline">
              Cancelar
            </ComponentExports.Button>
          </div>
        </ComponentExports.CardContent>
      </ComponentExports.Card>
    ),
    code: `<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Cadastro de Usuário</CardTitle>
    <CardDescription>
      Preencha os dados para criar sua conta
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" placeholder="João" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="sobrenome">Sobrenome</Label>
        <Input id="sobrenome" placeholder="Silva" />
      </div>
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="joao@exemplo.com" />
    </div>
    
    <div className="space-y-2">
      <Label>País</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecione um país" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="br">🇧🇷 Brasil</SelectItem>
          <SelectItem value="us">🇺🇸 Estados Unidos</SelectItem>
          <SelectItem value="ca">🇨🇦 Canadá</SelectItem>
        </SelectContent>
      </Select>
    </div>
    
    <div className="flex items-center space-x-2">
      <Switch id="terms" />
      <Label htmlFor="terms" className="text-sm">
        Aceito os termos e condições
      </Label>
    </div>
    
    <div className="flex gap-2">
      <Button className="flex-1">Criar Conta</Button>
      <Button variant="outline">Cancelar</Button>
    </div>
  </CardContent>
</Card>`,
    imports: [
      "Card",
      "CardHeader",
      "CardTitle",
      "CardDescription",
      "CardContent",
      "Label",
      "Input",
      "Select",
      "SelectTrigger",
      "SelectValue",
      "SelectContent",
      "SelectItem",
      "Switch",
      "Button",
    ],
  },

  dashboard: {
    name: "Dashboard Layout",
    description: "Layout completo de dashboard com métricas",
    category: "Complex",
    difficulty: "Avançado",
    component: () => (
      <div className="space-y-6 p-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ComponentExports.Card>
            <ComponentExports.CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <ComponentExports.CardTitle className="text-sm font-medium">
                Total Revenue
              </ComponentExports.CardTitle>
              <ComponentExports.Badge variant="outline">
                +20.1%
              </ComponentExports.Badge>
            </ComponentExports.CardHeader>
            <ComponentExports.CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </ComponentExports.CardContent>
          </ComponentExports.Card>

          <ComponentExports.Card>
            <ComponentExports.CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <ComponentExports.CardTitle className="text-sm font-medium">
                Subscriptions
              </ComponentExports.CardTitle>
              <ComponentExports.Badge>+180.1%</ComponentExports.Badge>
            </ComponentExports.CardHeader>
            <ComponentExports.CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </ComponentExports.CardContent>
          </ComponentExports.Card>

          <ComponentExports.Card>
            <ComponentExports.CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <ComponentExports.CardTitle className="text-sm font-medium">
                Active Now
              </ComponentExports.CardTitle>
              <ComponentExports.Badge variant="secondary">
                +201
              </ComponentExports.Badge>
            </ComponentExports.CardHeader>
            <ComponentExports.CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </ComponentExports.CardContent>
          </ComponentExports.Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ComponentExports.Card>
            <ComponentExports.CardHeader>
              <ComponentExports.CardTitle>
                Recent Activity
              </ComponentExports.CardTitle>
            </ComponentExports.CardHeader>
            <ComponentExports.CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">New user registered</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Payment processed</p>
                  <p className="text-xs text-muted-foreground">5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">System maintenance</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
            </ComponentExports.CardContent>
          </ComponentExports.Card>

          <ComponentExports.Card>
            <ComponentExports.CardHeader>
              <ComponentExports.CardTitle>
                Quick Actions
              </ComponentExports.CardTitle>
            </ComponentExports.CardHeader>
            <ComponentExports.CardContent className="space-y-3">
              <ComponentExports.Button className="w-full justify-start">
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark all as read
              </ComponentExports.Button>
              <ComponentExports.Button
                variant="outline"
                className="w-full justify-start"
              >
                <Download className="h-4 w-4 mr-2" />
                Export data
              </ComponentExports.Button>
              <ComponentExports.Button
                variant="outline"
                className="w-full justify-start"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </ComponentExports.Button>
            </ComponentExports.CardContent>
          </ComponentExports.Card>
        </div>
      </div>
    ),
    code: `<div className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Total Revenue
        </CardTitle>
        <Badge variant="outline">+20.1%</Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
    
    {/* More cards... */}
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="space-y-1">
            <p className="text-sm font-medium">New user registered</p>
            <p className="text-xs text-muted-foreground">2 minutes ago</p>
          </div>
        </div>
        {/* More activity items... */}
      </CardContent>
    </Card>
  </div>
</div>`,
    imports: [
      "Card",
      "CardHeader",
      "CardTitle",
      "CardContent",
      "Badge",
      "Button",
    ],
  },
};

export function PlaygroundPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("button");
  const [viewMode, setViewMode] = useState("desktop");
  const [previewKey, setPreviewKey] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentTemplate = TEMPLATES[selectedTemplate as keyof typeof TEMPLATES];

  const handleRefresh = () => {
    setPreviewKey((prev) => prev + 1);
  };

  const handleCopyCode = async () => {
    const fullCode = `import React from 'react';
import { ${currentTemplate.imports.join(", ")} } from '@gltz-packages/ui';

export function Component() {
  return (
    ${currentTemplate.code}
  );
}`;

    try {
      await navigator.clipboard.writeText(fullCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    const fullCode = `import React from 'react';
import { ${currentTemplate.imports.join(", ")} } from '@gltz-packages/ui';

export function Component() {
  return (
    ${currentTemplate.code}
  );
}`;

    const blob = new Blob([fullCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedTemplate}-component.tsx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getViewModeClass = () => {
    switch (viewMode) {
      case "mobile":
        return "max-w-sm mx-auto";
      case "tablet":
        return "max-w-2xl mx-auto";
      case "desktop":
      default:
        return "w-full";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
              <Code className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Component Playground
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Experimente, teste e explore componentes em tempo real
            </p>
          </div>
        </div>

        {/* Controls */}
        <ComponentExports.Card className="border-2">
          <ComponentExports.CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Component className="h-5 w-5 text-primary" />
                  <ComponentExports.Label className="font-medium">
                    Template:
                  </ComponentExports.Label>
                </div>
                <ComponentExports.Select
                  value={selectedTemplate}
                  onValueChange={setSelectedTemplate}
                >
                  <ComponentExports.SelectTrigger className="w-64">
                    <ComponentExports.SelectValue />
                  </ComponentExports.SelectTrigger>
                  <ComponentExports.SelectContent>
                    {Object.entries(TEMPLATES).map(([key, template]) => (
                      <ComponentExports.SelectItem key={key} value={key}>
                        <div className="flex items-center gap-2">
                          <span>{template.name}</span>
                          <ComponentExports.Badge
                            variant="outline"
                            className="text-xs"
                          >
                            {template.category}
                          </ComponentExports.Badge>
                        </div>
                      </ComponentExports.SelectItem>
                    ))}
                  </ComponentExports.SelectContent>
                </ComponentExports.Select>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 border rounded-lg p-1">
                  <ComponentExports.Button
                    variant={viewMode === "mobile" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("mobile")}
                    className="h-8 w-8 p-0"
                  >
                    <Smartphone className="h-4 w-4" />
                  </ComponentExports.Button>
                  <ComponentExports.Button
                    variant={viewMode === "tablet" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("tablet")}
                    className="h-8 w-8 p-0"
                  >
                    <Tablet className="h-4 w-4" />
                  </ComponentExports.Button>
                  <ComponentExports.Button
                    variant={viewMode === "desktop" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("desktop")}
                    className="h-8 w-8 p-0"
                  >
                    <Monitor className="h-4 w-4" />
                  </ComponentExports.Button>
                </div>

                <ComponentExports.Separator
                  orientation="vertical"
                  className="h-8"
                />

                <ComponentExports.Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                >
                  <RefreshCw className="h-4 w-4" />
                </ComponentExports.Button>
                <ComponentExports.Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyCode}
                  className={copied ? "text-green-600" : ""}
                >
                  {copied ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </ComponentExports.Button>
                <ComponentExports.Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                >
                  <Download className="h-4 w-4" />
                </ComponentExports.Button>
              </div>
            </div>
          </ComponentExports.CardContent>
        </ComponentExports.Card>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Preview */}
          <ComponentExports.Card className="order-2 lg:order-1">
            <ComponentExports.CardHeader>
              <div className="flex items-center justify-between">
                <ComponentExports.CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Live Preview
                </ComponentExports.CardTitle>
                <div className="flex items-center gap-2">
                  <ComponentExports.Badge variant="outline">
                    {currentTemplate.difficulty}
                  </ComponentExports.Badge>
                  <ComponentExports.Badge
                    variant="secondary"
                    className="bg-green-500/10 text-green-700 dark:text-green-400"
                  >
                    Live
                  </ComponentExports.Badge>
                </div>
              </div>
            </ComponentExports.CardHeader>
            <ComponentExports.CardContent className="p-0">
              <div className="min-h-[500px] bg-gradient-to-br from-muted/30 to-muted/10 border-t">
                <div
                  className={`h-full p-6 transition-all duration-300 ${getViewModeClass()}`}
                >
                  <div
                    key={previewKey}
                    className="h-full flex items-start justify-center"
                  >
                    {currentTemplate.component()}
                  </div>
                </div>
              </div>
            </ComponentExports.CardContent>
          </ComponentExports.Card>

          {/* Code & Info */}
          <div className="order-1 lg:order-2 space-y-6">
            <ComponentExports.Tabs defaultValue="code" className="w-full">
              <ComponentExports.TabsList className="grid w-full grid-cols-2">
                <ComponentExports.TabsTrigger
                  value="code"
                  className="flex items-center gap-2"
                >
                  <Code className="h-4 w-4" />
                  Code
                </ComponentExports.TabsTrigger>
                <ComponentExports.TabsTrigger
                  value="info"
                  className="flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Info
                </ComponentExports.TabsTrigger>
              </ComponentExports.TabsList>

              <ComponentExports.TabsContent value="code" className="mt-6">
                <ComponentExports.Card>
                  <ComponentExports.CardHeader>
                    <ComponentExports.CardTitle className="text-lg">
                      Source Code
                    </ComponentExports.CardTitle>
                  </ComponentExports.CardHeader>
                  <ComponentExports.CardContent>
                    <div className="relative">
                      <pre className="text-sm bg-muted/50 border rounded-lg p-4 overflow-x-auto">
                        <code className="text-muted-foreground">
                          {currentTemplate.code}
                        </code>
                      </pre>
                    </div>
                  </ComponentExports.CardContent>
                </ComponentExports.Card>
              </ComponentExports.TabsContent>

              <ComponentExports.TabsContent value="info" className="mt-6">
                <ComponentExports.Card>
                  <ComponentExports.CardHeader>
                    <ComponentExports.CardTitle className="text-lg">
                      Template Information
                    </ComponentExports.CardTitle>
                  </ComponentExports.CardHeader>
                  <ComponentExports.CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Descrição</h4>
                      <p className="text-sm text-muted-foreground">
                        {currentTemplate.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">
                        Componentes Utilizados
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentTemplate.imports.map((component) => (
                          <ComponentExports.Badge
                            key={component}
                            variant="outline"
                            className="text-xs"
                          >
                            {component}
                          </ComponentExports.Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                        <h4 className="font-medium text-sm">Live Preview</h4>
                        <p className="text-xs text-muted-foreground">
                          Atualização instantânea
                        </p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <Layout className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <h4 className="font-medium text-sm">Responsive</h4>
                        <p className="text-xs text-muted-foreground">
                          Testável em vários tamanhos
                        </p>
                      </div>
                    </div>
                  </ComponentExports.CardContent>
                </ComponentExports.Card>
              </ComponentExports.TabsContent>
            </ComponentExports.Tabs>
          </div>
        </div>

        {/* Quick Tips */}
        <ComponentExports.Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
          <ComponentExports.CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 flex-shrink-0">
                <AlertTriangle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                  Dica de Uso
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Use os botões de visualização (📱 📱 🖥️) para testar a
                  responsividade dos componentes. Copie o código e cole
                  diretamente em seu projeto!
                </p>
              </div>
            </div>
          </ComponentExports.CardContent>
        </ComponentExports.Card>
      </div>
    </div>
  );
}
