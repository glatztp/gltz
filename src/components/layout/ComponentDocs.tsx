import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui";
import { Badge } from "../ui";
import { Card, CardContent, CardHeader, CardTitle } from "../ui";
import { Separator } from "../ui";
import {
  Download,
  Copy,
  Check,
  BookOpen,
  Code,
  Palette,
  Zap,
  Package,
  Terminal,
  FileText,
  ExternalLink,
} from "lucide-react";

interface ComponentDocsProps {
  componentName: string;
  description?: string;
  installCommand?: string;
  importCode?: string;
  basicUsage?: string;
  features?: string[];
  variants?: string[];
  props?: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
  }>;
  examples?: Array<{
    title: string;
    code: string;
    description: string;
  }>;
}

export function ComponentDocs({
  componentName,
  description,
  installCommand,
  importCode,
  basicUsage,
  features,
  variants = [],
  props = [],
  examples = [],
}: ComponentDocsProps) {
  const [copiedStates, setCopiedStates] = React.useState<{
    [key: string]: boolean;
  }>({});

  // Default data for Button component
  const getDefaultData = () => {
    if (componentName === "Button") {
      return {
        description:
          "Botão versátil com múltiplas variantes, tamanhos e estados para interações do usuário.",
        installCommand: "npm install @gltzui/components",
        importCode: `import { Button } from "@gltzui/components";`,
        basicUsage: `<Button variant="default" size="default">
  Clique aqui
</Button>`,
        features: [
          "6 variantes visuais (default, secondary, outline, ghost, link, destructive)",
          "4 tamanhos disponíveis (sm, default, lg, icon)",
          "Suporte a ícones à esquerda e direita",
          "Estados de loading e disabled",
          "Acessibilidade completa com ARIA",
          "Animações suaves e micro-interações",
          "Customização via CSS variables",
          "TypeScript com tipagem completa",
        ],
      };
    }
    return {
      description: description || "",
      installCommand: installCommand || "",
      importCode: importCode || "",
      basicUsage: basicUsage || "",
      features: features || [],
    };
  };

  const defaultData = getDefaultData();
  const finalDescription = description || defaultData.description;
  const finalInstallCommand = installCommand || defaultData.installCommand;
  const finalImportCode = importCode || defaultData.importCode;
  const finalBasicUsage = basicUsage || defaultData.basicUsage;
  const finalFeatures = features || defaultData.features;

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error("Falha ao copiar:", err);
    }
  };

  const CopyButton = ({
    text,
    copyKey,
    size = "sm",
  }: {
    text: string;
    copyKey: string;
    size?: "sm" | "default";
  }) => (
    <Button
      size={size}
      variant="outline"
      onClick={() => copyToClipboard(text, copyKey)}
      className="gap-2"
    >
      {copiedStates[copyKey] ? (
        <Check className="h-3 w-3 text-green-500" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
      {copiedStates[copyKey] ? "Copiado!" : "Copiar"}
    </Button>
  );

  return (
    <div className="w-72 border-l bg-background/50 backdrop-blur-sm overflow-y-auto">
      <div className="p-6 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">{componentName}</h2>
            <Badge variant="outline" className="text-xs">
              Documentação
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {finalDescription}
          </p>
        </div>

        <Separator />

        {/* Quick Start */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              Quick Start
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Instalação */}
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Package className="h-3 w-3" />
                1. Instalação
              </h4>
              <div className="relative">
                <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                  <code>{installCommand}</code>
                </pre>
                <div className="absolute top-1 right-1">
                  <CopyButton
                    text={finalInstallCommand}
                    copyKey="install"
                    size="sm"
                  />
                </div>
              </div>
            </div>

            {/* Import */}
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Code className="h-3 w-3" />
                2. Importação
              </h4>
              <div className="relative">
                <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                  <code>{importCode}</code>
                </pre>
                <div className="absolute top-1 right-1">
                  <CopyButton
                    text={finalImportCode}
                    copyKey="import"
                    size="sm"
                  />
                </div>
              </div>
            </div>

            {/* Uso Básico */}
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Terminal className="h-3 w-3" />
                3. Uso Básico
              </h4>
              <div className="relative">
                <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                  <code>{basicUsage}</code>
                </pre>
                <div className="absolute top-1 right-1">
                  <CopyButton
                    text={finalBasicUsage}
                    copyKey="usage"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Palette className="h-4 w-4 text-primary" />
              Recursos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {finalFeatures.map((feature, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <Check className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Variantes */}
        {variants.length > 0 && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Variantes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {variant}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Props API */}
        {props.length > 0 && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                Props API
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {props.map((prop, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary/20 pl-3"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <code className="text-sm font-mono bg-muted px-1 rounded">
                        {prop.name}
                      </code>
                      <Badge variant="outline" className="text-xs">
                        {prop.type}
                      </Badge>
                      {prop.default && (
                        <span className="text-xs text-muted-foreground">
                          = {prop.default}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {prop.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Exemplos */}
        {examples.length > 0 && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {examples.map((example, index) => (
                <div key={index}>
                  <h4 className="text-sm font-medium mb-2">{example.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    {example.description}
                  </p>
                  <div className="relative">
                    <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                    <div className="absolute top-1 right-1">
                      <CopyButton
                        text={example.code}
                        copyKey={`example-${index}`}
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Links Úteis */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Links Úteis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2"
            >
              <ExternalLink className="h-3 w-3" />
              Ver no GitHub
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2"
            >
              <ExternalLink className="h-3 w-3" />
              Reportar Issue
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2"
            >
              <ExternalLink className="h-3 w-3" />
              Contribuir
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
