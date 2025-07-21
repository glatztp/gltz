import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui";
import { Badge } from "../ui";
import { Card, CardContent } from "../ui";
import { NavigationHeader } from "../layout/NavigationHeader";
import { ComponentsSidebar } from "../layout/ComponentsSidebar";
import { ComponentDocs } from "../layout/ComponentDocs";
import { ComingSoonPage } from "./coming-soon-page";
import {
  Zap,
  Palette,
  Accessibility,
  Code2,
  Sparkles,
  Shield,
  Rocket,
  Github,
  BookOpen,
  Download,
  Star,
  Users,
  Globe,
} from "lucide-react";

// Importar as páginas dos componentes
import { AlertPage } from "./alert-page";
import { AlertDialogPage } from "./alert-dialog-page";
import { AspectRatioPage } from "./aspect-ratio-page";
import { AvatarPage } from "./avatar-page";
import { BadgePage } from "./badge-page";
import { ButtonPage } from "./button-page";
import { CalendarPage } from "./calendar-page";
import { CardPage } from "./card-page";
import { CheckboxPage } from "./checkbox-page";
import { ComboboxPage } from "./combobox-page";
import { CommandPage } from "./command-page";
import { ContextMenuPage } from "./context-menu-page";
import { DataTablePage } from "./data-table-page";
import { DatePickerPage } from "./date-picker-page";
import { DialogPage } from "./dialog-page";
import { DrawerPage } from "./drawer-page";
import { DropdownMenuPage } from "./dropdown-menu-page";
import { FormPage } from "./form-page";
import { HoverCardPage } from "./hover-card-page";
import { InputPage } from "./input-page";
import { InputOTPPage } from "./input-otp-page";
import { LabelPage } from "./label-page";
import { MenubarPage } from "./menubar-page";
import { NavigationMenuPage } from "./navigation-menu-page";
import { PaginationPage } from "./pagination-page";
import { PopoverPage } from "./popover-page";
import { ProgressPage } from "./progress-page";
import { RadioGroupPage } from "./radio-group-page";
import { ScrollAreaPage } from "./scroll-area-page";
import { SelectPage } from "./select-page";
import { SeparatorPage } from "./separator-page";
import { SheetPage } from "./sheet-page";
import { SkeletonPage } from "./skeleton-page";
import { SliderPage } from "./slider-page";
import { SonnerPage } from "./sonner-page";
import { SwitchPage } from "./switch-page";
import { TabsPage } from "./tabs-page";
import { TextareaPage } from "./textarea-page";
import { ToastPage } from "./toast-page";
import { TogglePage } from "./toggle-page";
import { ToggleGroupPage } from "./toggle-group-page";
import { TooltipPage } from "./tooltip-page";
import { ResizablePage } from "./resizable-page";
import { CollapsiblePage } from "./collapsible-page";

// Mapeamento de componentes
const componentPages: Record<string, React.ComponentType> = {
  alert: AlertPage,
  "alert-dialog": AlertDialogPage,
  "aspect-ratio": AspectRatioPage,
  avatar: AvatarPage,
  badge: BadgePage,
  button: ButtonPage,
  calendar: CalendarPage,
  card: CardPage,
  checkbox: CheckboxPage,
  combobox: ComboboxPage,
  command: CommandPage,
  "context-menu": ContextMenuPage,
  "data-table": DataTablePage,
  "date-picker": DatePickerPage,
  dialog: DialogPage,
  drawer: DrawerPage,
  "dropdown-menu": DropdownMenuPage,
  form: FormPage,
  "hover-card": HoverCardPage,
  input: InputPage,
  "input-otp": InputOTPPage,
  label: LabelPage,
  menubar: MenubarPage,
  "navigation-menu": NavigationMenuPage,
  pagination: PaginationPage,
  popover: PopoverPage,
  progress: ProgressPage,
  "radio-group": RadioGroupPage,
  "scroll-area": ScrollAreaPage,
  select: SelectPage,
  separator: SeparatorPage,
  sheet: SheetPage,
  skeleton: SkeletonPage,
  slider: SliderPage,
  sonner: SonnerPage,
  switch: SwitchPage,
  tabs: TabsPage,
  textarea: TextareaPage,
  toast: ToastPage,
  toggle: TogglePage,
  "toggle-group": ToggleGroupPage,
  tooltip: TooltipPage,
  resizable: ResizablePage,
  collapsible: CollapsiblePage,
};

function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Otimizada",
      description:
        "Componentes construídos com foco em performance e otimização de bundle.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Customização Total",
      description:
        "Sistema de design tokens e CSS variables para personalização completa.",
    },
    {
      icon: <Accessibility className="h-6 w-6" />,
      title: "Acessibilidade First",
      description:
        "Todos os componentes seguem padrões WCAG e são testados com screen readers.",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "TypeScript Nativo",
      description:
        "Tipagem completa e intellisense avançado para melhor experiência de desenvolvimento.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Animações Fluidas",
      description:
        "Micro-interações e animações cuidadosamente crafted com Framer Motion.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Testado e Confiável",
      description:
        "Cobertura de testes abrangente e utilizado em produção por milhares de desenvolvedores.",
    },
  ];

  const stats = [
    { label: "Componentes", value: "50+", icon: <Code2 className="h-4 w-4" /> },
    {
      label: "Downloads",
      value: "100K+",
      icon: <Download className="h-4 w-4" />,
    },
    {
      label: "GitHub Stars",
      value: "12K+",
      icon: <Star className="h-4 w-4" />,
    },
    {
      label: "Desenvolvedores",
      value: "5K+",
      icon: <Users className="h-4 w-4" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative">
          <div className="container mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="mb-6"
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  v2.0 • Novos componentes e melhorias
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
              >
                <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  gltzUI
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              >
                Biblioteca de componentes React moderna, acessível e
                customizável. Construa interfaces excepcionais com componentes
                que seus usuários vão amar.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden"
                  onClick={() => navigate("/components")}
                >
                  <Rocket className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                  Começar Agora
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group"
                  onClick={() =>
                    window.open("https://github.com/glatztp/gltz", "_blank")
                  }
                >
                  <Github className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12" />
                  Ver no GitHub
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  className="group"
                  onClick={() => navigate("/docs")}
                >
                  <BookOpen className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                  Documentação
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex items-center justify-center mb-2 text-primary group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Por que escolher o gltzUI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvemos cada componente pensando na experiência do
              desenvolvedor e na satisfação do usuário final.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Simples de usar, poderoso de customizar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Instale, importe e comece a usar. É realmente simples assim.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-background border rounded-lg overflow-hidden shadow-xl">
              <div className="bg-muted px-4 py-3 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-sm text-muted-foreground font-mono">
                    App.tsx
                  </span>
                </div>
              </div>
              <div className="p-6">
                <pre className="text-sm text-foreground overflow-x-auto">
                  {`import { Button, Card, Toast } from '@gltzui/components'

export function App() {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Bem-vindo ao gltzUI
      </h1>
      <Button onClick={() => toast.success("Sucesso!")}>
        Clique aqui
      </Button>
    </Card>
  )
}`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Pronto para acelerar seu desenvolvimento?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Junte-se a milhares de desenvolvedores que já estão criando
              interfaces incríveis com o gltzUI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group"
                onClick={() => navigate("/docs")}
              >
                <Rocket className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Instalar Agora
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/components")}
              >
                <Globe className="h-5 w-5 mr-2" />
                Ver Exemplos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">gltzUI</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Componentes React modernos para interfaces excepcionais.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors cursor-pointer"
                    onClick={() => navigate("/docs")}
                  >
                    Documentação
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors cursor-pointer"
                    onClick={() => navigate("/components")}
                  >
                    Componentes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors cursor-pointer"
                    onClick={() => navigate("/components")}
                  >
                    Exemplos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors cursor-pointer"
                    onClick={() => navigate("/themes")}
                  >
                    Temas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Comunidade</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/glatztp/gltz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contribuir
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 gltzUI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Dashboard Principal
function DashboardContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandCategory, setExpandCategory] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const currentSection = location.pathname.split("/")[1] || "home";
  const selectedComponent = location.pathname.split("/")[2] || "";

  const handleNavigation = (section: string) => {
    navigate(`/${section}`);
    // Se navegar para componentes, abre a sidebar automaticamente
    if (section === "components") {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  const handleComponentSelect = (componentId: string) => {
    navigate(`/components/${componentId}`);
  };

  const handleCategoryExpand = (categoryId: string) => {
    setExpandCategory(categoryId);
  };

  const toggleSidebar = () => {
    // Só permite abrir a sidebar se estiver na seção de componentes
    if (currentSection === "components") {
      setSidebarOpen(!sidebarOpen);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader
        onNavigate={handleNavigation}
        currentSection={currentSection}
        onToggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen && currentSection === "components"}
      />

      {/* Sidebar só aparece na seção de componentes */}
      {currentSection === "components" && (
        <ComponentsSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onSelectComponent={handleComponentSelect}
          selectedComponent={selectedComponent}
          expandCategory={expandCategory}
        />
      )}

      {/* Main content com margem quando sidebar está aberta */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen && currentSection === "components" ? "lg:ml-72" : ""
        }`}
      >
        <main className="min-h-[calc(100vh-4rem)] overflow-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/docs"
              element={
                <ComingSoonPage
                  title="Documentação"
                  description="Guias completos, exemplos de código e referência da API para todos os componentes da gltzUI."
                  type="docs"
                />
              }
            />
            <Route
              path="/themes"
              element={
                <ComingSoonPage
                  title="Sistema de Temas"
                  description="Crie e customize temas visuais únicos para seus projetos com nossa ferramenta visual intuitiva."
                  type="themes"
                />
              }
            />
            <Route
              path="/playground"
              element={
                <ComingSoonPage
                  title="Playground"
                  description="Experimente e teste todos os componentes em um ambiente interativo com editor de código ao vivo."
                  type="playground"
                />
              }
            />
            <Route
              path="/components"
              element={
                <ComponentsOverview onCategoryExpand={handleCategoryExpand} />
              }
            />
            <Route
              path="/components/:componentId"
              element={<ComponentPage />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

// Página de overview dos componentes
function ComponentsOverview({
  onCategoryExpand,
}: {
  onCategoryExpand?: (categoryId: string) => void;
}) {
  const navigate = useNavigate();

  // Mapeamento de categorias para componentes e IDs de categoria
  const categoryData: Record<
    string,
    { componentId: string; categoryId: string }
  > = {
    Formulários: { componentId: "button", categoryId: "forms" },
    Navegação: { componentId: "navigation-menu", categoryId: "navigation" },
    Layout: { componentId: "card", categoryId: "layout" },
    Feedback: { componentId: "alert", categoryId: "feedback" },
    Overlays: { componentId: "dialog", categoryId: "overlays" },
    Dados: { componentId: "avatar", categoryId: "data" },
  };

  const handleExplore = (categoryTitle: string) => {
    const data = categoryData[categoryTitle];
    if (data) {
      // Expandir a categoria na sidebar
      if (onCategoryExpand) {
        onCategoryExpand(data.categoryId);
      }
      // Navegar para o componente
      navigate(`/components/${data.componentId}`);
    }
  };

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Biblioteca de Componentes</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Componentes React modernos e acessíveis para suas aplicações
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="text-sm">
              50+ Componentes
            </Badge>
            <Badge variant="secondary" className="text-sm">
              TypeScript
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Acessível
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Formulários",
              count: 11,
              desc: "Inputs, validação e controles",
            },
            { title: "Navegação", count: 4, desc: "Menus e navegação" },
            { title: "Layout", count: 7, desc: "Estrutura e organização" },
            { title: "Feedback", count: 5, desc: "Notificações e alertas" },
            { title: "Overlays", count: 9, desc: "Modais e popovers" },
            { title: "Dados", count: 3, desc: "Exibição de dados" },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 mt-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      {category.count} componentes
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleExplore(category.title)}
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Explorar →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            👈 Use a sidebar para explorar todos os componentes
          </p>
          <Button
            variant="outline"
            onClick={() =>
              window.open("https://github.com/glatztp/gltz", "_blank")
            }
          >
            <Github className="h-4 w-4 mr-2" />
            Ver no GitHub
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

// Página individual do componente
function ComponentPage() {
  const location = useLocation();
  const componentId = location.pathname.split("/")[2];

  const ComponentPageComponent = componentPages[componentId];

  if (!ComponentPageComponent) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Componente não encontrado</h1>
          <p className="text-muted-foreground">
            O componente "{componentId}" não foi encontrado.
          </p>
        </div>
      </div>
    );
  }

  return <ComponentPageComponent />;
}

export default function ProfessionalDashboard() {
  return (
    <Router>
      <DashboardContent />
    </Router>
  );
}
