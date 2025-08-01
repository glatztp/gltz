import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/layout";
import { Button, Badge } from "../ui";
import { Input, Label } from "../ui/forms";
import {
  Download,
  Copy,
  CheckCircle,
  Code,
  Package,
  Terminal,
  FileCode,
  Palette,
  Rocket,
  Gear,
  Sparkle,
  Star,
  Users,
  Globe,
} from "phosphor-react";

export const DocumentationPage = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-secondary/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-primary/3 rounded-full blur-2xl animate-pulse delay-2000" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
          {/* Revolutionary Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8 sm:space-y-12"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="inline-block"
            >
              <Badge
                variant="outline"
                className="relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-black border-2 bg-background/95 backdrop-blur-md hover:bg-primary/10 transition-all duration-500 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-xl" />
                <Sparkle className="h-5 w-5 sm:h-6 sm:w-6 mr-3 animate-spin-slow text-primary" />
                <span className="relative bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  📚 Documentação Técnica Completa
                </span>
              </Badge>
            </motion.div>

            <div className="relative inline-flex items-center gap-6 sm:gap-8 p-8 sm:p-12 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-3xl border-2 border-blue-200/50 dark:border-blue-800/50 backdrop-blur-md shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="relative p-6 sm:p-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl shadow-blue-500/30"
              >
                <Package size={60} className="text-white" />
              </motion.div>
              <div className="relative text-left">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight p-2"
                >
                  @gltz-packages/ui
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mt-3 sm:mt-4 leading-relaxed font-medium"
                >
                  Biblioteca de componentes React/TypeScript{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                    revolucionária
                  </span>{" "}
                  e acessível
                </motion.p>
              </div>
            </div>

            {/* Enhanced Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CheckCircle size={18} className="mr-2" />
                v2.5.0 Estável
              </Badge>
              <Badge
                variant="outline"
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold border-2 border-primary/30 bg-background/80 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                📄 MIT License
              </Badge>
              <Badge
                variant="outline"
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold border-2 border-secondary/30 bg-background/80 backdrop-blur-sm hover:bg-secondary/5 transition-all duration-300 hover:scale-105"
              >
                🔷 TypeScript 5.0+
              </Badge>
              <Badge
                variant="outline"
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold border-2 border-primary/30 bg-background/80 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                ⚡ 180KB Gzipped
              </Badge>
              <Badge
                variant="outline"
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold border-2 border-secondary/30 bg-background/80 backdrop-blur-sm hover:bg-secondary/5 transition-all duration-300 hover:scale-105"
              >
                ⚛️ React 18+
              </Badge>
            </motion.div>

            {/* Revolutionary Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12"
            >
              {[
                {
                  value: "50+",
                  label: "Componentes",
                  icon: <Code size={24} />,
                  color: "blue",
                },
                {
                  value: "100%",
                  label: "TypeScript",
                  icon: <CheckCircle size={24} />,
                  color: "green",
                },
                {
                  value: "A11y",
                  label: "Acessível",
                  icon: <Users size={24} />,
                  color: "purple",
                },
                {
                  value: "SSR",
                  label: "Server-Side",
                  icon: <Globe size={24} />,
                  color: "orange",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-background/90 backdrop-blur-md border-2 border-primary/20 group-hover:border-primary/40 rounded-2xl p-6 sm:p-8 text-center shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                    <div className="flex justify-center mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br from-${stat.color}-400/20 to-${stat.color}-600/20 text-${stat.color}-600 dark:text-${stat.color}-400 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-muted-foreground font-bold">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Revolutionary Installation Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden border-2 border-blue-200/50 dark:border-blue-800/50 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/50 dark:to-indigo-950/50" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent" />

              <CardHeader className="relative border-b-2 border-blue-200/30 dark:border-blue-800/30 p-8 sm:p-10">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 sm:gap-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-lg scale-110 opacity-30" />
                    <div className="relative p-4 sm:p-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl">
                      <Download size={32} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2">
                      Instalação e Configuração Técnica
                    </CardTitle>
                    <CardDescription className="text-lg sm:text-xl text-muted-foreground font-medium">
                      Guia completo para integrar{" "}
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                        @gltz-packages/ui
                      </span>{" "}
                      no seu projeto
                    </CardDescription>
                  </div>
                </motion.div>
              </CardHeader>

              <CardContent className="relative p-8 sm:p-12 space-y-12 sm:space-y-16">
                {/* Enhanced Prerequisites */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative bg-gradient-to-br from-amber-50/80 to-orange-50/80 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-200/50 dark:border-amber-800/50 rounded-2xl p-8 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
                  <h3 className="relative font-black text-xl sm:text-2xl text-amber-800 dark:text-amber-200 mb-6 flex items-center gap-3">
                    ⚠️ Pré-requisitos do Sistema
                  </h3>
                  <div className="relative grid md:grid-cols-2 gap-6 text-base sm:text-lg">
                    <div className="space-y-3">
                      <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-amber-200/30">
                        <strong className="text-amber-700 dark:text-amber-300">
                          Node.js:
                        </strong>{" "}
                        ≥18.0.0 (LTS recomendado)
                      </div>
                      <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-amber-200/30">
                        <strong className="text-amber-700 dark:text-amber-300">
                          npm:
                        </strong>{" "}
                        ≥8.0.0 ou yarn ≥1.22.0
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-amber-200/30">
                        <strong className="text-amber-700 dark:text-amber-300">
                          React:
                        </strong>{" "}
                        ≥18.0.0 (React 19 suportado)
                      </div>
                      <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-amber-200/30">
                        <strong className="text-amber-700 dark:text-amber-300">
                          TypeScript:
                        </strong>{" "}
                        ≥5.0.0 (opcional, mas recomendado)
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Revolutionary NPM Installation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6 sm:space-y-8"
                >
                  <h3 className="font-black text-2xl sm:text-3xl flex items-center gap-3">
                    <Terminal
                      size={28}
                      className="text-blue-600 dark:text-blue-400"
                    />
                    1. Instalação via Package Manager
                  </h3>

                  <div className="grid gap-6 sm:gap-8">
                    {[
                      {
                        name: "NPM (Recomendado)",
                        command: "npm install @gltz-packages/ui",
                        color: "red",
                        description: "Gerenciador padrão do Node.js",
                      },
                      {
                        name: "Yarn",
                        command: "yarn add @gltz-packages/ui",
                        color: "blue",
                        description: "Rápido e confiável",
                      },
                      {
                        name: "pnpm",
                        command: "pnpm add @gltz-packages/ui",
                        color: "orange",
                        description: "Eficiente e rápido",
                      },
                    ].map((pkg, index) => (
                      <motion.div
                        key={pkg.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="relative bg-background/80 backdrop-blur-md border-2 border-primary/20 group-hover:border-primary/40 rounded-2xl p-6 sm:p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <span className="text-lg sm:text-xl font-black text-foreground">
                                {pkg.name}
                              </span>
                              <p className="text-sm sm:text-base text-muted-foreground font-medium">
                                {pkg.description}
                              </p>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard(pkg.command)}
                              className="group-hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                            >
                              <Copy size={16} />
                            </Button>
                          </div>
                          <div className="relative bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-4 sm:p-6 rounded-xl font-mono text-base sm:text-lg shadow-inner">
                            <span className="text-green-400 dark:text-green-600 font-bold">
                              $
                            </span>{" "}
                            {pkg.command}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Peer Dependencies */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    2. Dependências Obrigatórias (Peer Dependencies)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Estas dependências são <strong>obrigatórias</strong> e devem
                    ser instaladas em seu projeto:
                  </p>

                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-red-700 dark:text-red-300">
                        Instalar todas as dependências:
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() =>
                          copyToClipboard(
                            "npm install react react-dom lucide-react phosphor-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge"
                          )
                        }
                        className="h-6 px-2 text-xs"
                      >
                        <Copy size={12} />
                      </Button>
                    </div>
                    <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      npm install react react-dom lucide-react phosphor-react
                      @radix-ui/react-slot class-variance-authority clsx
                      tailwind-merge
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <h4 className="font-medium">Dependências Core:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>
                          • <code>react</code> ≥18.0.0
                        </li>
                        <li>
                          • <code>react-dom</code> ≥18.0.0
                        </li>
                        <li>
                          • <code>@radix-ui/react-slot</code>
                        </li>
                        <li>
                          • <code>class-variance-authority</code>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Dependências de Ícones:</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>
                          • <code>lucide-react</code> (ícones principais)
                        </li>
                        <li>
                          • <code>phosphor-react</code> (ícones extras)
                        </li>
                        <li>
                          • <code>clsx</code> (utilitário CSS)
                        </li>
                        <li>
                          • <code>tailwind-merge</code> (merge classes)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Configuração CSS */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <FileCode
                      size={20}
                      className="text-purple-600 dark:text-purple-400"
                    />
                    3. Configuração de Estilos CSS
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Importe os estilos CSS no ponto de entrada da sua aplicação:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          Next.js (pages/_app.tsx ou app/layout.tsx)
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            copyToClipboard(
                              "import '@gltz-packages/ui/dist/index.css';"
                            )
                          }
                          className="h-6 px-2 text-xs"
                        >
                          <Copy size={12} />
                        </Button>
                      </div>
                      <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-4 rounded-lg">
                        <pre className="text-sm font-mono">
                          {`// pages/_app.tsx ou app/layout.tsx
import '@gltz-packages/ui/dist/index.css';

export default function App() {
  // seu código...
}`}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">
                          Vite/React (main.tsx ou index.tsx)
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            copyToClipboard(
                              "import '@gltz-packages/ui/dist/index.css';"
                            )
                          }
                          className="h-6 px-2 text-xs"
                        >
                          <Copy size={12} />
                        </Button>
                      </div>
                      <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-4 rounded-lg">
                        <pre className="text-sm font-mono">
                          {`// main.tsx ou index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@gltz-packages/ui/dist/index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Verificação da Instalação */}
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                    ✅ Verificação da Instalação
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                    Teste se a instalação foi bem-sucedida criando um componente
                    simples:
                  </p>
                  <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-4 rounded-lg">
                    <pre className="text-sm font-mono">
                      {`import { Button, Card, CardContent } from '@gltz-packages/ui';

function TestComponent() {
  return (
    <Card>
      <CardContent className="p-6">
        <Button>Instalação bem-sucedida! 🎉</Button>
      </CardContent>
    </Card>
  );
}`}
                    </pre>
                  </div>
                </div>

                {/* Troubleshooting */}
                <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center gap-2">
                    🔧 Troubleshooting - Problemas Comuns
                  </h3>

                  <div className="space-y-4">
                    <div className="border-l-4 border-red-400 pl-4">
                      <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
                        Erro: "Missing field 'negated' on
                        ScannerOptions.sources"
                      </h4>
                      <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                        Este erro ocorre quando há conflito entre versões do
                        Tailwind CSS. Soluções:
                      </p>

                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium">
                            Solução 1: Usar apenas o CSS compilado (Recomendado)
                          </span>
                          <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-3 rounded mt-2">
                            <pre className="text-xs font-mono">
                              {`// ✅ Use apenas o CSS compilado, não configure Tailwind no seu projeto
import '@gltz-packages/ui/dist/index.css';

// ❌ NÃO faça isso se estiver usando nossa biblioteca:
// import './tailwind.css' // Remove se existir`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <span className="text-sm font-medium">
                            Solução 2: Atualizar Tailwind CSS (se necessário)
                          </span>
                          <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-3 rounded mt-2">
                            <pre className="text-xs font-mono">
                              {`npm install tailwindcss@latest postcss@latest autoprefixer@latest`}
                            </pre>
                          </div>
                        </div>

                        <div>
                          <span className="text-sm font-medium">
                            Solução 3: Configuração tailwind.config.js (para
                            projetos avançados)
                          </span>
                          <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-3 rounded mt-2">
                            <pre className="text-xs font-mono">
                              {`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // ❌ NÃO inclua node_modules da nossa biblioteca
    // "./node_modules/@gltz-packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-yellow-400 pl-4">
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                        Estilos não aparecem corretamente
                      </h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                        Verifique se você importou o CSS da biblioteca:
                      </p>
                      <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-3 rounded">
                        <pre className="text-xs font-mono">
                          {`// ✅ Correto - no topo do seu App.tsx ou main.tsx
import '@gltz-packages/ui/dist/index.css';`}
                        </pre>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-400 pl-4">
                      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                        Componentes não funcionam (TypeScript)
                      </h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                        Verifique as peer dependencies e tipos:
                      </p>
                      <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-3 rounded">
                        <pre className="text-xs font-mono">
                          {`npm install @types/react @types/react-dom`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Uso Básico e API Reference */}
          <Card className="overflow-hidden border-2 border-green-200 dark:border-green-800 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-b">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500 rounded-lg">
                  <Code size={24} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">
                    API Reference e Uso Avançado
                  </CardTitle>
                  <CardDescription className="text-base">
                    Documentação técnica completa com exemplos práticos
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Estrutura de Importação */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">
                  Estrutura de Importação e Tree Shaking
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nossa biblioteca suporta tree shaking automático. Importe
                  apenas os componentes que você precisa:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        ✅ Recomendado (Tree Shaking)
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() =>
                          copyToClipboard(
                            "import { Button, Card, Badge } from '@gltz-packages/ui';"
                          )
                        }
                        className="h-6 px-2 text-xs"
                      >
                        <Copy size={12} />
                      </Button>
                    </div>
                    <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-3 rounded-lg">
                      <pre className="text-xs font-mono">
                        {`// ✅ Otimizado - apenas importa o necessário
import { Button, Card, Badge } from '@gltz-packages/ui';`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-red-600 dark:text-red-400">
                        ❌ Não recomendado
                      </span>
                    </div>
                    <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-3 rounded-lg">
                      <pre className="text-xs font-mono">
                        {`// ❌ Importa toda a biblioteca
import * as UI from '@gltz-packages/ui';`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exemplo Técnico Avançado */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">
                  Exemplo de Implementação Completa
                </h3>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">
                      Exemplo funcional completo:
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        copyToClipboard(`import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Input,
  Label
} from '@gltz-packages/ui';

interface UserProps {
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export function UserCard({ name, email, role }: UserProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name, email });

  const handleSave = () => {
    console.log('Dados salvos:', formData);
    setIsEditing(false);
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin': return 'destructive';
      case 'user': return 'default';
      case 'guest': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <Card className="max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Perfil do Usuário</CardTitle>
          <Badge variant={getRoleBadgeVariant(role)}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {isEditing ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSave} size="sm">Salvar</Button>
              <Button variant="outline" onClick={() => setIsEditing(false)} size="sm">
                Cancelar
              </Button>
            </div>
          </>
        ) : (
          <>
            <div>
              <p className="font-medium">{formData.name}</p>
              <p className="text-sm text-muted-foreground">{formData.email}</p>
            </div>
            <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
              Editar Perfil
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}`)
                      }
                      className="h-6 px-2 text-xs"
                    >
                      <Copy size={12} />
                    </Button>
                  </div>
                  <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-xs font-mono">
                      {`import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Input,
  Label
} from '@gltz-packages/ui';

interface UserProps {
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export function UserCard({ name, email, role }: UserProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name, email });

  const handleSave = () => {
    console.log('Dados salvos:', formData);
    setIsEditing(false);
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'admin': return 'destructive';
      case 'user': return 'default';
      case 'guest': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <Card className="max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Perfil do Usuário</CardTitle>
          <Badge variant={getRoleBadgeVariant(role)}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {isEditing ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSave} size="sm">Salvar</Button>
              <Button variant="outline" onClick={() => setIsEditing(false)} size="sm">
                Cancelar
              </Button>
            </div>
          </>
        ) : (
          <>
            <div>
              <p className="font-medium">{formData.name}</p>
              <p className="text-sm text-muted-foreground">{formData.email}</p>
            </div>
            <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
              Editar Perfil
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Preview Interativo */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">
                  Preview Interativo dos Componentes
                </h3>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-2">
                        Demonstração Interativa
                      </h2>
                      <p className="text-muted-foreground">
                        Componentes funcionais em tempo real
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Variações de Botões:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="default" size="sm">
                            Padrão
                          </Button>
                          <Button variant="outline" size="sm">
                            Outline
                          </Button>
                          <Button variant="destructive" size="sm">
                            Destrutivo
                          </Button>
                          <Button variant="ghost" size="sm">
                            Ghost
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium">Badges Contextuais:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="default">Ativo</Badge>
                          <Badge variant="secondary">Pendente</Badge>
                          <Badge variant="outline">Rascunho</Badge>
                          <Badge className="bg-green-500 text-white">
                            Aprovado
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Formulário de Exemplo:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="demo-name">Nome Completo</Label>
                          <Input id="demo-name" placeholder="João Silva" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="demo-email">Email Profissional</Label>
                          <Input
                            id="demo-email"
                            type="email"
                            placeholder="joao@empresa.com"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Componentes Disponíveis */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Package
                  size={20}
                  className="text-purple-600 dark:text-purple-400"
                />
                <CardTitle>Componentes Disponíveis</CardTitle>
              </div>
              <CardDescription>
                Lista completa de componentes e como usá-los
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Botões */}
                <div>
                  <h3 className="font-semibold mb-3">Botões</h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="space-y-2 mb-3">
                      <Button variant="default" size="sm">
                        Pequeno
                      </Button>
                      <Button variant="outline" size="default">
                        Médio
                      </Button>
                      <Button variant="destructive" size="lg">
                        Grande
                      </Button>
                    </div>
                    <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-2 rounded text-xs">
                      <code>
                        {`<Button variant="default" size="md">
  Clique aqui
</Button>`}
                      </code>
                    </div>
                  </div>
                </div>

                {/* Cards */}
                <div>
                  <h3 className="font-semibold mb-3">Cards</h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <Card className="mb-3">
                      <CardHeader>
                        <CardTitle className="text-sm">
                          Título do Card
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs">Conteúdo aqui...</p>
                      </CardContent>
                    </Card>
                    <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-2 rounded text-xs">
                      <code>
                        {`<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Conteúdo...</p>
  </CardContent>
</Card>`}
                      </code>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div>
                  <h3 className="font-semibold mb-3">Badges</h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="space-x-1 mb-3">
                      <Badge variant="default">Padrão</Badge>
                      <Badge variant="secondary">Secundário</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                    <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-2 rounded text-xs">
                      <code>
                        {`<Badge variant="default">
  Padrão
</Badge>`}
                      </code>
                    </div>
                  </div>
                </div>

                {/* Inputs */}
                <div>
                  <h3 className="font-semibold mb-3">Inputs</h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="space-y-2 mb-3">
                      <Label htmlFor="demo">Email</Label>
                      <Input id="demo" placeholder="seu@email.com" />
                    </div>
                    <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-2 rounded text-xs">
                      <code>
                        {`<Label htmlFor="email">Email</Label>
<Input id="email" 
  placeholder="seu@email.com" />`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Frameworks */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Rocket
                  size={20}
                  className="text-orange-600 dark:text-orange-400"
                />
                <CardTitle>Frameworks Suportados</CardTitle>
              </div>
              <CardDescription>
                Como usar com diferentes frameworks React
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Next.js</h3>
                  <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-2 rounded text-xs">
                    <code>
                      {`// pages/_app.tsx
import '@gltz-packages/ui/styles.css';

// Uso normal dos componentes
import { Button } from '@gltz-packages/ui';`}
                    </code>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Vite</h3>
                  <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-2 rounded text-xs">
                    <code>
                      {`// main.tsx
import '@gltz-packages/ui/styles.css';

// Uso normal dos componentes
import { Button } from '@gltz-packages/ui';`}
                    </code>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Create React App</h3>
                  <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-2 rounded text-xs">
                    <code>
                      {`// App.tsx
import '@gltz-packages/ui/styles.css';

// Uso normal dos componentes
import { Button } from '@gltz-packages/ui';`}
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customização */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette
                  size={20}
                  className="text-pink-600 dark:text-pink-400"
                />
                <CardTitle>Customização e Temas</CardTitle>
              </div>
              <CardDescription>
                Como personalizar cores e criar temas personalizados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">
                  Variáveis CSS Customizáveis
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sobrescreva as variáveis CSS para personalizar as cores:
                </p>
                <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-4 rounded-lg relative">
                  <pre className="text-sm">
                    {`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --radius: 0.5rem;
}`}
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    onClick={() =>
                      copyToClipboard(`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --radius: 0.5rem;
}`)
                    }
                  >
                    <Copy size={14} />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Dark Mode</h3>
                <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-4 rounded-lg relative">
                  <pre className="text-sm">
                    {`.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
}`}
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    onClick={() =>
                      copyToClipboard(`.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
}`)
                    }
                  >
                    <Copy size={14} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuração Avançada */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Gear size={20} className="text-gray-600 dark:text-gray-400" />
                <CardTitle>Configuração Avançada</CardTitle>
              </div>
              <CardDescription>
                Configurações opcionais para melhor integração
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Tailwind CSS (Opcional)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Se você usar Tailwind CSS no seu projeto:
                </p>
                <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-4 rounded-lg relative">
                  <pre className="text-sm">
                    {`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@gltz-packages/ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    onClick={() =>
                      copyToClipboard(`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@gltz-packages/ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`)
                    }
                  >
                    <Copy size={14} />
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">TypeScript</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Todos os componentes incluem tipagens completas:
                </p>
                <div className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 p-4 rounded-lg relative">
                  <pre className="text-sm">
                    {`import { ButtonProps } from '@gltz-packages/ui';

interface CustomButtonProps extends ButtonProps {
  customProp?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  customProp, 
  children, 
  ...props 
}) => {
  return <Button {...props}>{children}</Button>;
};`}
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    onClick={() =>
                      copyToClipboard(`import { ButtonProps } from '@gltz-packages/ui';

interface CustomButtonProps extends ButtonProps {
  customProp?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  customProp, 
  children, 
  ...props 
}) => {
  return <Button {...props}>{children}</Button>;
};`)
                    }
                  >
                    <Copy size={14} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links e Recursos */}
          <Card>
            <CardHeader>
              <CardTitle>Links e Recursos</CardTitle>
              <CardDescription>
                Links úteis para desenvolvimento e suporte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">Documentação</h3>
                  <div className="space-y-2 text-sm">
                    <a
                      href="https://www.npmjs.com/package/@gltz-packages/ui"
                      className="text-blue-600 dark:text-blue-400 hover:underline block"
                    >
                      📦 NPM Package
                    </a>
                    <a
                      href="https://github.com/glatztp/gltz"
                      className="text-blue-600 dark:text-blue-400 hover:underline block"
                    >
                      🔗 GitHub Repository
                    </a>
                    <a
                      href="https://ui.gltz.dev"
                      className="text-blue-600 dark:text-blue-400 hover:underline block"
                    >
                      📚 Documentação Completa
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Suporte</h3>
                  <div className="space-y-2 text-sm">
                    <a
                      href="https://github.com/glatztp/gltz/issues"
                      className="text-blue-600 dark:text-blue-400 hover:underline block"
                    >
                      🐛 Reportar Bug
                    </a>
                    <a
                      href="https://github.com/glatztp/gltz/discussions"
                      className="text-blue-600 dark:text-blue-400 hover:underline block"
                    >
                      💬 Discussões
                    </a>
                    <a
                      href="mailto:gabriel@gltz.dev"
                      className="text-blue-600 dark:text-blue-400 hover:underline block"
                    >
                      ✉️ Contato Direto
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center py-8 border-t">
            <div className="flex justify-center gap-2 mt-2">
              <Badge variant="outline">MIT License</Badge>
              <Badge variant="outline">v2.0.0</Badge>
              <Badge variant="outline">React 18+</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
