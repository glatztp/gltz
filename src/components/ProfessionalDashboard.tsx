import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
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

// UI Components
import { Button, Badge } from "./ui";
import { Card, CardContent } from "./ui/layout";

// Layout Components
import { NavigationHeader } from "./layout/NavigationHeader";
import { ComponentsSidebar } from "./layout/ComponentsSidebar";
import { ComponentDocs } from "./layout/ComponentDocs";
import { DocumentationPage } from "./layout/documentation-page";
import { ThemeProvider } from "./providers/theme-provider";

// Page Components
import { ComingSoonPage } from "./pages/coming-soon-page";
import { ThemesPage } from "./pages/themes-page";
import { AlertPage } from "./pages/alert-page";
import { AlertDialogPage } from "./pages/alert-dialog-page";
import { AspectRatioPage } from "./pages/aspect-ratio-page";
import { AvatarPage } from "./pages/avatar-page";
import { BadgePage } from "./pages/badge-page";
import { ButtonPage } from "./pages/button-page";
import { CalendarPage } from "./pages/calendar-page";
import { CardPage } from "./pages/card-page";
import { CheckboxPage } from "./pages/checkbox-page";
import { ComboboxPage } from "./pages/combobox-page";
import { CommandPage } from "./pages/command-page";
import { ContextMenuPage } from "./pages/context-menu-page";
import { DataTablePage } from "./pages/data-table-page";
import { DatePickerPage } from "./pages/date-picker-page";
import { DialogPage } from "./pages/dialog-page";
import { DrawerPage } from "./pages/drawer-page";
import { DropdownMenuPage } from "./pages/dropdown-menu-page";
import { FormPage } from "./pages/form-page";
import { HoverCardPage } from "./pages/hover-card-page";
import { InputPage } from "./pages/input-page";
import { InputOTPPage } from "./pages/input-otp-page";
import { LabelPage } from "./pages/label-page";
import { MenubarPage } from "./pages/menubar-page";
import { NavigationMenuPage } from "./pages/navigation-menu-page";
import { PaginationPage } from "./pages/pagination-page";
import { PopoverPage } from "./pages/popover-page";
import { ProgressPage } from "./pages/progress-page";
import { RadioGroupPage } from "./pages/radio-group-page";
import { ScrollAreaPage } from "./pages/scroll-area-page";
import { SelectPage } from "./pages/select-page";
import { SeparatorPage } from "./pages/separator-page";
import { SheetPage } from "./pages/sheet-page";
import { SkeletonPage } from "./pages/skeleton-page";
import { SliderPage } from "./pages/slider-page";
import { SonnerPage } from "./pages/sonner-page";
import { SwitchPage } from "./pages/switch-page";
import { TabsPage } from "./pages/tabs-page";
import { TextareaPage } from "./pages/textarea-page";
import { ToastPage } from "./pages/toast-page";
import { TogglePage } from "./pages/toggle-page";
import { ToggleGroupPage } from "./pages/toggle-group-page";
import { TooltipPage } from "./pages/tooltip-page";
import { ResizablePage } from "./pages/resizable-page";
import { CollapsiblePage } from "./pages/collapsible-page";

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="mb-6 sm:mb-8"
              >
                <Badge
                  variant="outline"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium border-2 bg-background/80 backdrop-blur-sm hover:bg-primary/5 transition-colors"
                >
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  v2.0 • Novos componentes e melhorias
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 lg:mb-8"
              >
                <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent drop-shadow-sm">
                  gltzUI
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 lg:mb-12 leading-relaxed max-w-4xl mx-auto px-4"
              >
                Biblioteca de componentes React moderna, acessível e
                customizável. Construa interfaces excepcionais com componentes
                que seus usuários vão amar.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-2xl mx-auto"
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/components")}
                >
                  <Rocket className="h-4 w-4 sm:h-5 sm:w-5 mr-2 transition-transform group-hover:scale-110" />
                  Começar Agora
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group w-full sm:w-auto border-2 hover:bg-primary/5 transition-all duration-300"
                  onClick={() =>
                    window.open("https://github.com/glatztp/gltz", "_blank")
                  }
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2 transition-transform group-hover:rotate-12" />
                  Ver no GitHub
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  className="group w-full sm:w-auto hover:bg-primary/5 transition-all duration-300"
                  onClick={() => navigate("/docs")}
                >
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2 transition-transform group-hover:scale-110" />
                  Documentação
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 border-y bg-gradient-to-r from-muted/30 via-muted/10 to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="flex items-center justify-center mb-3 sm:mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Por que escolher o gltzUI?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Desenvolvemos cada componente pensando na experiência do
              desenvolvedor e na satisfação do usuário final.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-500 border-2 border-border/50 hover:border-primary/20 bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/10">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
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
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-muted/30 via-muted/10 to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Simples de usar, poderoso de customizar
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Instale, importe e comece a usar. É realmente simples assim.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-background/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-500">
              <div className="bg-gradient-to-r from-muted via-muted/80 to-muted px-4 sm:px-6 py-3 sm:py-4 border-b-2 border-border/50">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-3 sm:ml-4 text-xs sm:text-sm text-muted-foreground font-mono font-medium">
                    App.tsx
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 overflow-x-auto">
                <pre className="text-xs sm:text-sm lg:text-base text-foreground font-mono leading-relaxed">
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
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Pronto para acelerar seu desenvolvimento?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
              Junte-se a milhares de desenvolvedores que já estão criando
              interfaces incríveis com o gltzUI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-xl mx-auto">
              <Button
                size="lg"
                className="group w-full sm:w-auto shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://www.npmjs.com/package/@gltz-packages/ui",
                    "_blank"
                  )
                }
              >
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Instalar Agora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 hover:bg-primary/5 transition-all duration-300"
                onClick={() => navigate("/components")}
              >
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Ver Exemplos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-border/50 bg-gradient-to-br from-muted/40 via-muted/20 to-muted/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                gltzUI
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-sm">
                Componentes React modernos para interfaces excepcionais.
                Construindo o futuro do desenvolvimento web.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">
                Recursos
              </h4>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group"
                    onClick={() => navigate("/docs")}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Documentação
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group"
                    onClick={() => navigate("/components")}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Componentes
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group"
                    onClick={() => navigate("/components")}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Exemplos
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group"
                    onClick={() => navigate("/themes")}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Temas
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">
                Comunidade
              </h4>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/glatztp/gltz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      GitHub
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Discord
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Twitter
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Blog
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">
                Suporte
              </h4>
              <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      FAQ
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Issues
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Contribuir
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Roadmap
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-border/50 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center text-sm sm:text-base text-muted-foreground">
            <p className="bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">
              &copy; 2025 gltzUI. Todos os direitos reservados.
            </p>
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
            <Route path="/docs" element={<DocumentationPage />} />
            <Route path="/themes" element={<ThemesPage />} />
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
    <ThemeProvider>
      <Router>
        <DashboardContent />
      </Router>
    </ThemeProvider>
  );
}
