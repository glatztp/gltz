import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui";
import { Badge } from "../ui";
import {
  Rocket,
  Clock,
  GitBranch,
  Star,
  Users,
  Zap,
  Palette,
  BookOpen,
  Code2,
  Github,
  ExternalLink,
} from "lucide-react";

interface ComingSoonPageProps {
  title: string;
  description: string;
  type: "docs" | "themes" | "playground";
}

export function ComingSoonPage({
  title,
  description,
  type,
}: ComingSoonPageProps) {
  const getFeatures = () => {
    switch (type) {
      case "docs":
        return [
          {
            icon: <BookOpen className="h-5 w-5" />,
            title: "Guias Completos",
            description: "Documentação detalhada de cada componente",
          },
          {
            icon: <Code2 className="h-5 w-5" />,
            title: "Exemplos de Código",
            description: "Code snippets e exemplos práticos",
          },
          {
            icon: <Zap className="h-5 w-5" />,
            title: "APIs Interativas",
            description: "Explorar propriedades e métodos",
          },
          {
            icon: <Users className="h-5 w-5" />,
            title: "Tutoriais",
            description: "Passo a passo para iniciantes",
          },
        ];
      case "themes":
        return [
          {
            icon: <Palette className="h-5 w-5" />,
            title: "Temas Personalizados",
            description: "Crie seus próprios temas visuais",
          },
          {
            icon: <Zap className="h-5 w-5" />,
            title: "CSS Variables",
            description: "Customização através de variáveis",
          },
          {
            icon: <Code2 className="h-5 w-5" />,
            title: "Builder Visual",
            description: "Interface para criar temas",
          },
          {
            icon: <Star className="h-5 w-5" />,
            title: "Galeria de Temas",
            description: "Temas criados pela comunidade",
          },
        ];
      case "playground":
        return [
          {
            icon: <Code2 className="h-5 w-5" />,
            title: "Editor ao Vivo",
            description: "Edite e veja mudanças em tempo real",
          },
          {
            icon: <Zap className="h-5 w-5" />,
            title: "Templates",
            description: "Exemplos pré-configurados",
          },
          {
            icon: <GitBranch className="h-5 w-5" />,
            title: "Compartilhamento",
            description: "Compartilhe seus experimentos",
          },
          {
            icon: <Rocket className="h-5 w-5" />,
            title: "Exportação",
            description: "Exporte código para seus projetos",
          },
        ];
      default:
        return [];
    }
  };

  const getRoadmapItems = () => {
    switch (type) {
      case "docs":
        return [
          { status: "done", title: "Estrutura base da documentação" },
          {
            status: "progress",
            title: "Documentação dos componentes principais",
          },
          { status: "todo", title: "Guias de instalação e configuração" },
          { status: "todo", title: "Exemplos e casos de uso" },
          { status: "todo", title: "API reference completa" },
        ];
      case "themes":
        return [
          { status: "done", title: "Sistema base de temas (dark/light)" },
          { status: "progress", title: "CSS variables customizáveis" },
          { status: "todo", title: "Builder visual de temas" },
          { status: "todo", title: "Galeria de temas da comunidade" },
          { status: "todo", title: "Exportação de temas" },
        ];
      case "playground":
        return [
          { status: "done", title: "Estrutura base dos componentes" },
          { status: "progress", title: "Editor de código integrado" },
          { status: "todo", title: "Preview em tempo real" },
          { status: "todo", title: "Templates e exemplos" },
          { status: "todo", title: "Compartilhamento de snippets" },
        ];
      default:
        return [];
    }
  };

  const features = getFeatures();
  const roadmapItems = getRoadmapItems();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "done":
        return "bg-green-500";
      case "progress":
        return "bg-yellow-500";
      case "todo":
        return "bg-gray-300";
      default:
        return "bg-gray-300";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "done":
        return "Concluído";
      case "progress":
        return "Em andamento";
      case "todo":
        return "Planejado";
      default:
        return "Planejado";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-12">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="h-4 w-4" />
            Em Desenvolvimento
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
            {title}
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="gap-2"
              onClick={() =>
                window.open("https://github.com/glatztp/gltz", "_blank")
              }
            >
              <Github className="h-5 w-5" />
              Acompanhar no GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() =>
                window.open("https://github.com/glatztp/gltz", "_blank")
              }
            >
              <Star className="h-5 w-5" />
              Deixar uma ⭐
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  Recursos Planejados
                </CardTitle>
                <CardDescription>
                  O que você pode esperar quando {title.toLowerCase()} estiver
                  pronto
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="text-primary mt-0.5">{feature.icon}</div>
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Roadmap */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-primary" />
                  Roadmap de Desenvolvimento
                </CardTitle>
                <CardDescription>
                  Acompanhe o progresso do desenvolvimento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {roadmapItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${getStatusColor(
                        item.status
                      )}`}
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {getStatusText(item.status)}
                    </Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Card className="inline-block">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Quer ser notificado?</h2>
              <p className="text-muted-foreground mb-6">
                Acompanhe o desenvolvimento e seja o primeiro a saber quando
                estiver pronto!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  className="gap-2"
                  onClick={() =>
                    window.open("https://github.com/glatztp/gltz", "_blank")
                  }
                >
                  <Github className="h-4 w-4" />
                  Watch no GitHub
                </Button>
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() =>
                    window.open(
                      "https://github.com/glatztp/gltz/issues/new",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="h-4 w-4" />
                  Sugerir Funcionalidade
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
