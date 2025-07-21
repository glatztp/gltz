import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  Switch,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../index";
import {
  Palette,
  Sun,
  Moon,
  Monitor,
  Eye,
  Download,
  Sparkle,
  Gear,
  Check,
  ArrowCounterClockwise,
  PaintBrush,
} from "phosphor-react";
import { useTheme } from "../providers/theme-provider";

const themes = {
  light: {
    name: "Claro",
    description: "Tema claro padrão",
    icon: <Sun className="h-4 w-4" />,
    preview: {
      background: "hsl(0 0% 99%)",
      foreground: "hsl(240 15% 9%)",
      primary: "hsl(217 91% 60%)",
      secondary: "hsl(220 14% 96%)",
      muted: "hsl(220 14% 96%)",
      accent: "hsl(217 91% 95%)",
      border: "hsl(220 13% 91%)",
    },
  },
  dark: {
    name: "Escuro",
    description: "Tema escuro para ambientes com pouca luz",
    icon: <Moon className="h-4 w-4" />,
    preview: {
      background: "hsl(240 15% 6%)",
      foreground: "hsl(0 0% 95%)",
      primary: "hsl(217 91% 65%)",
      secondary: "hsl(240 15% 12%)",
      muted: "hsl(240 15% 12%)",
      accent: "hsl(240 15% 12%)",
      border: "hsl(240 15% 18%)",
    },
  },
  system: {
    name: "Sistema",
    description: "Segue a preferência do sistema operacional",
    icon: <Monitor className="h-4 w-4" />,
    preview: {
      background: "hsl(0 0% 50%)",
      foreground: "hsl(0 0% 50%)",
      primary: "hsl(217 91% 60%)",
      secondary: "hsl(220 14% 80%)",
      muted: "hsl(220 14% 80%)",
      accent: "hsl(217 91% 80%)",
      border: "hsl(220 13% 70%)",
    },
  },
};

const colorSchemes = [
  {
    name: "Azul Padrão",
    id: "blue",
    primary: "hsl(217 91% 60%)",
    secondary: "hsl(220 14% 96%)",
    accent: "hsl(217 91% 95%)",
    hex: "#3b82f6",
  },
  {
    name: "Verde Esmeralda",
    id: "emerald",
    primary: "hsl(160 84% 39%)",
    secondary: "hsl(220 14% 96%)",
    accent: "hsl(160 84% 95%)",
    hex: "#10b981",
  },
  {
    name: "Roxo Violeta",
    id: "violet",
    primary: "hsl(262 83% 58%)",
    secondary: "hsl(220 14% 96%)",
    accent: "hsl(262 83% 95%)",
    hex: "#8b5cf6",
  },
  {
    name: "Rosa Suave",
    id: "rose",
    primary: "hsl(346 77% 49%)",
    secondary: "hsl(220 14% 96%)",
    accent: "hsl(346 77% 95%)",
    hex: "#f43f5e",
  },
  {
    name: "Laranja Energia",
    id: "orange",
    primary: "hsl(20 91% 48%)",
    secondary: "hsl(220 14% 96%)",
    accent: "hsl(189 85% 95%)",
    hex: "#f97316",
  },
  {
    name: "Ciano Moderno",
    id: "cyan",
    primary: "hsl(189 85% 43%)",
    secondary: "hsl(220 14% 96%)",
    accent: "hsl(20 91% 95%)",
    hex: "#06b6d4",
  },
];

export function ThemesPage() {
  const { theme, colorScheme, setTheme, setColorScheme, actualTheme } =
    useTheme();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Copiar cor para clipboard
  const copyColor = async (color: string, type: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(`${type}-${color}`);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (error) {
      console.error("Erro ao copiar cor:", error);
    }
  };

  // Resetar para padrões
  const resetToDefaults = () => {
    setTheme("system");
    setColorScheme("blue");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary">
                <Palette className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Sistema de Temas
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Personalize a aparência da biblioteca com temas e esquemas de
              cores. Todas as mudanças são aplicadas em tempo real.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Badge variant="secondary" className="text-sm">
                <Sparkle className="h-3 w-3 mr-1" />
                Tempo Real
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <PaintBrush className="h-3 w-3 mr-1" />
                Customizável
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Palette className="h-3 w-3 mr-1" />
                Acessível
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="themes" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="themes">Temas</TabsTrigger>
              <TabsTrigger value="colors">Cores</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>

            {/* Aba de Temas */}
            <TabsContent value="themes" className="mt-8">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sun className="h-5 w-5" />
                      Modo de Tema
                    </CardTitle>
                    <CardDescription>
                      Escolha entre claro, escuro ou automático baseado no
                      sistema
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {Object.entries(themes).map(([key, themeObj]) => (
                        <motion.div
                          key={key}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Card
                            className={`cursor-pointer transition-all duration-200 ${
                              theme === key
                                ? "ring-2 ring-primary border-primary"
                                : "hover:border-primary/50"
                            }`}
                            onClick={() => setTheme(key as any)}
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                  {themeObj.icon}
                                </div>
                                <div>
                                  <h3 className="font-semibold">
                                    {themeObj.name}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {themeObj.description}
                                  </p>
                                </div>
                                {theme === key && (
                                  <Check className="h-5 w-5 text-primary ml-auto" />
                                )}
                              </div>

                              {/* Preview do tema */}
                              <div className="space-y-2">
                                <div
                                  className="h-8 rounded border flex items-center px-3 text-xs"
                                  style={{
                                    backgroundColor:
                                      themeObj.preview.background,
                                    color: themeObj.preview.foreground,
                                    borderColor: themeObj.preview.border,
                                  }}
                                >
                                  Exemplo de texto
                                </div>
                                <div className="flex gap-1">
                                  <div
                                    className="h-4 w-4 rounded"
                                    style={{
                                      backgroundColor: themeObj.preview.primary,
                                    }}
                                  />
                                  <div
                                    className="h-4 w-4 rounded"
                                    style={{
                                      backgroundColor:
                                        themeObj.preview.secondary,
                                    }}
                                  />
                                  <div
                                    className="h-4 w-4 rounded"
                                    style={{
                                      backgroundColor: themeObj.preview.accent,
                                    }}
                                  />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Aba de Cores */}
            <TabsContent value="colors" className="mt-8">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      Esquemas de Cores
                    </CardTitle>
                    <CardDescription>
                      Personalize as cores primárias e de destaque da interface
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {colorSchemes.map((scheme) => (
                        <motion.div
                          key={scheme.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Card
                            className={`cursor-pointer transition-all duration-200 ${
                              colorScheme === scheme.id
                                ? "ring-2 ring-primary border-primary"
                                : "hover:border-primary/50"
                            }`}
                            onClick={() => setColorScheme(scheme.id as any)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="font-semibold text-sm">
                                  {scheme.name}
                                </h3>
                                {colorScheme === scheme.id && (
                                  <Check className="h-4 w-4 text-primary" />
                                )}
                              </div>

                              <div className="space-y-2">
                                {/* Preview das cores */}
                                <div className="flex gap-1">
                                  <div
                                    className="h-8 flex-1 rounded cursor-pointer hover:scale-105 transition-transform"
                                    style={{ backgroundColor: scheme.hex }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      copyColor(scheme.hex, "primary");
                                    }}
                                    title="Clique para copiar"
                                  />
                                  <div
                                    className="h-8 flex-1 rounded cursor-pointer hover:scale-105 transition-transform"
                                    style={{
                                      backgroundColor: scheme.secondary,
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      copyColor(scheme.secondary, "secondary");
                                    }}
                                    title="Clique para copiar"
                                  />
                                  <div
                                    className="h-8 flex-1 rounded cursor-pointer hover:scale-105 transition-transform"
                                    style={{ backgroundColor: scheme.accent }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      copyColor(scheme.accent, "accent");
                                    }}
                                    title="Clique para copiar"
                                  />
                                </div>

                                {/* Labels das cores */}
                                <div className="flex text-xs text-muted-foreground gap-1">
                                  <span className="flex-1 text-center">
                                    Primária
                                  </span>
                                  <span className="flex-1 text-center">
                                    Secundária
                                  </span>
                                  <span className="flex-1 text-center">
                                    Destaque
                                  </span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>

                    {copiedColor && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm flex items-center gap-2"
                      >
                        <Check className="h-4 w-4" />
                        Cor copiada para a área de transferência!
                      </motion.div>
                    )}
                  </CardContent>
                </Card>

                {/* Controles Avançados */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gear className="h-5 w-5" />
                      Controles Avançados
                    </CardTitle>
                    <CardDescription>
                      Configurações adicionais e ferramentas de personalização
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Animações de Tema</h4>
                        <p className="text-sm text-muted-foreground">
                          Ativar transições suaves ao trocar temas
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Alto Contraste</h4>
                        <p className="text-sm text-muted-foreground">
                          Melhorar contraste para acessibilidade
                        </p>
                      </div>
                      <Switch />
                    </div>

                    <Separator />

                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        onClick={resetToDefaults}
                        className="flex items-center gap-2"
                      >
                        <ArrowCounterClockwise className="h-4 w-4" />
                        Restaurar Padrões
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => {
                          const config = {
                            theme: theme,
                            colorScheme: colorScheme,
                          };
                          navigator.clipboard.writeText(
                            JSON.stringify(config, null, 2)
                          );
                        }}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Exportar Config
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Aba de Preview */}
            <TabsContent value="preview" className="mt-8">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      Preview dos Componentes
                    </CardTitle>
                    <CardDescription>
                      Veja como o tema atual afeta diferentes componentes da
                      biblioteca
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Preview de Botões */}
                    <div>
                      <h4 className="font-medium mb-3">Botões</h4>
                      <div className="flex flex-wrap gap-3">
                        <Button>Primário</Button>
                        <Button variant="secondary">Secundário</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="destructive">Destrutivo</Button>
                      </div>
                    </div>

                    <Separator />

                    {/* Preview de Cards */}
                    <div>
                      <h4 className="font-medium mb-3">Cards e Badges</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle>Exemplo de Card</CardTitle>
                              <Badge>Novo</Badge>
                            </div>
                            <CardDescription>
                              Este é um exemplo de como os cards aparecem com o
                              tema atual
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Conteúdo do card com cores aplicadas
                              automaticamente.
                            </p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Configurações</CardTitle>
                            <CardDescription>
                              Controles e switches
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Notificações</span>
                              <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Modo Escuro</span>
                              <Switch checked={theme === "dark"} />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <Separator />

                    {/* Preview de Estados */}
                    <div>
                      <h4 className="font-medium mb-3">Estados e Feedback</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                          ✅ Operação concluída com sucesso
                        </div>
                        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
                          ⚠️ Atenção: verifique as configurações
                        </div>
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                          ❌ Erro: não foi possível completar a ação
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
