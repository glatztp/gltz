import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Badge,
} from "../../index";
import {
  Download,
  Heart,
  Star,
  Share,
  Plus,
  Minus,
  Trash,
  Copy,
  FloppyDisk,
  X,
  Bell,
  Play,
  Pause,
  Stop,
} from "phosphor-react";

export function ButtonPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [asyncLoading, setAsyncLoading] = React.useState(false);

  const handleAsyncAction = async () => {
    setAsyncLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setAsyncLoading(false);
  };

  const handleLoadingToggle = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div className="flex gap-6 min-h-screen pt-12">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Button Component</h1>
            <p className="text-muted-foreground mt-2">
              Botões avançados com animações Framer Motion, funcionalidades
              especiais e props customizáveis para máxima flexibilidade.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Animações */}
            <Card>
              <CardHeader>
                <CardTitle> Animações com Framer Motion</CardTitle>
                <CardDescription>
                  Diferentes tipos de animações para melhorar a experiência do
                  usuário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Animações Predefinidas</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button animation="default">Default</Button>
                      <Button animation="bounce">Bounce</Button>
                      <Button animation="pulse">Pulse</Button>
                      <Button animation="smooth">Smooth</Button>
                      <Button animation="slide">Slide</Button>
                      <Button animation="none">Sem Animação</Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Animação Customizada</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        customAnimation={{
                          initial: { rotate: 0, scale: 1 },
                          hover: {
                            rotate: 180,
                            scale: 1.1,
                            transition: { duration: 0.3 },
                          },
                          tap: { rotate: 360, scale: 0.9 },
                        }}
                        animationDuration={0.3}
                        onMotionAnimationComplete={() =>
                          console.log("Rotação completa!")
                        }
                      >
                        Rotação Custom
                      </Button>
                      <Button
                        customAnimation={{
                          initial: { y: 0 },
                          hover: {
                            y: [-5, 5, -5],
                            transition: {
                              duration: 0.6,
                              repeat: Infinity,
                              repeatType: "reverse",
                            },
                          },
                          tap: { y: 10 },
                        }}
                      >
                        Float Effect
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Variantes */}
            <Card>
              <CardHeader>
                <CardTitle>Variantes</CardTitle>
                <CardDescription>
                  Diferentes estilos visuais para diferentes contextos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </CardContent>
            </Card>

            {/* Tamanhos */}
            <Card>
              <CardHeader>
                <CardTitle>Tamanhos</CardTitle>
                <CardDescription>
                  Diferentes tamanhos para diferentes hierarquias visuais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Heart size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Com Ícones */}
            <Card>
              <CardHeader>
                <CardTitle>Com Ícones</CardTitle>
                <CardDescription>
                  Botões com ícones para melhor comunicação visual
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button leftIcon={<Download size={16} />}>Download</Button>
                  <Button rightIcon={<Share size={16} />}>Compartilhar</Button>
                  <Button
                    leftIcon={<Heart size={16} />}
                    rightIcon={<Star size={16} />}
                  >
                    Favoritar
                  </Button>
                  <Button size="icon" variant="outline">
                    <Plus size={16} />
                  </Button>
                  <Button size="icon" variant="destructive">
                    <Minus size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Estados de Loading Avançados */}
            <Card>
              <CardHeader>
                <CardTitle> Estados de Loading Avançados</CardTitle>
                <CardDescription>
                  Diferentes efeitos visuais para estados de carregamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Tipos de Loading</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        loading
                        loadingEffect="spinner"
                        loadingText="Spinner..."
                      >
                        Spinner Loading
                      </Button>
                      <Button
                        loading
                        loadingEffect="dots"
                        loadingText="Processando..."
                      >
                        Dots Loading
                      </Button>
                      <Button
                        loading
                        loadingEffect="bounce"
                        loadingText="Enviando..."
                      >
                        Bounce Loading
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Loading Interativo</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        loading={isLoading}
                        onClick={handleLoadingToggle}
                        loadingText="Carregando..."
                      >
                        {isLoading ? "Carregando..." : "Toggle Loading"}
                      </Button>
                      <Button
                        loading={asyncLoading}
                        onClick={handleAsyncAction}
                        loadingText="Aguarde 2s..."
                        variant="secondary"
                      >
                        Ação Assíncrona
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estilos Avançados */}
            <Card>
              <CardHeader>
                <CardTitle> Estilos Avançados</CardTitle>
                <CardDescription>
                  Props especiais para criar designs únicos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Gradiente e Brilho</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button gradient>Gradient</Button>
                      <Button glow>Glow Effect</Button>
                      <Button gradient glow>
                        Gradient + Glow
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Sombras</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button shadow="sm">Shadow SM</Button>
                      <Button shadow="md">Shadow MD</Button>
                      <Button shadow="lg">Shadow LG</Button>
                      <Button shadow="xl">Shadow XL</Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Bordas Arredondadas</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button rounded="none">Sem Borda</Button>
                      <Button rounded="sm">Small</Button>
                      <Button rounded="md">Medium</Button>
                      <Button rounded="lg">Large</Button>
                      <Button rounded="full">Full</Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Combinações Especiais</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        gradient
                        glow
                        shadow="xl"
                        rounded="full"
                        animation="bounce"
                      >
                        Super Button
                      </Button>
                      <Button
                        variant="outline"
                        shadow="lg"
                        animation="pulse"
                        leftIcon={<Star size={16} />}
                      >
                        Premium
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Funcionalidades Especiais */}
            <Card>
              <CardHeader>
                <CardTitle> Funcionalidades Especiais</CardTitle>
                <CardDescription>
                  Props avançadas para melhorar interação e usabilidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Feedback e Interação</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        hapticFeedback
                        soundEffect
                        onMotionHoverStart={() =>
                          console.log("🎯 Hover started")
                        }
                        onMotionHoverEnd={() => console.log("🎯 Hover ended")}
                      >
                        Haptic + Sound
                      </Button>
                      <Button
                        autoFocus
                        onMotionTapStart={() => console.log("Tap started")}
                        onMotionTapEnd={() => console.log("Tap ended")}
                      >
                        Auto Focus
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Debounce e Confirmação</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        debounceMs={1000}
                        onClick={() => console.log("Debounced click!")}
                        variant="secondary"
                      >
                        Debounced (1s)
                      </Button>
                      <Button
                        confirmAction
                        confirmMessage="Tem certeza que deseja excluir?"
                        variant="destructive"
                        leftIcon={<Trash size={16} />}
                        onClick={() => console.log("Item excluído!")}
                      >
                        Delete com Confirm
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estados */}
            <Card>
              <CardHeader>
                <CardTitle> Estados e Controles</CardTitle>
                <CardDescription>
                  Estados básicos e controles de interface
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Estados Básicos</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button disabled>Desabilitado</Button>
                      <Button variant="outline" disabled>
                        Outline Desabilitado
                      </Button>
                      <Button disabled loading>
                        Disabled + Loading
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Controles de Mídia</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        animation="bounce"
                        leftIcon={<Play size={16} />}
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        animation="smooth"
                        leftIcon={<Pause size={16} />}
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        animation="pulse"
                        leftIcon={<Stop size={16} />}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Casos de Uso Avançados */}
            <Card>
              <CardHeader>
                <CardTitle> Casos de Uso Avançados</CardTitle>
                <CardDescription>
                  Exemplos práticos combinando múltiplas funcionalidades
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">
                          Produto Premium
                        </CardTitle>
                        <Badge>Novo</Badge>
                      </div>
                      <CardDescription>
                        Plano completo com todos os recursos
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-2xl font-bold">R$ 99/mês</div>
                      <Button
                        className="w-full"
                        leftIcon={<Download size={16} />}
                        gradient
                        glow
                        animation="bounce"
                        onMotionHoverStart={() => console.log("CTA hover!")}
                      >
                        Assinar Agora
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        animation="smooth"
                      >
                        Saber Mais
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Configurações</CardTitle>
                      <CardDescription>
                        Gerencie suas preferências com segurança
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button
                        variant="secondary"
                        className="w-full"
                        animation="slide"
                        autoFocus
                      >
                        Editar Perfil
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        debounceMs={500}
                      >
                        Alterar Senha
                      </Button>
                      <Button
                        variant="destructive"
                        className="w-full"
                        confirmAction
                        confirmMessage="Esta ação não pode ser desfeita. Deseja realmente excluir sua conta?"
                        leftIcon={<Trash size={16} />}
                        hapticFeedback
                        onClick={() => console.log("Conta excluída!")}
                      >
                        Excluir Conta
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ações Rápidas</CardTitle>
                      <CardDescription>
                        Botões otimizados para produtividade
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          leftIcon={<Copy size={14} />}
                          animation="smooth"
                          hapticFeedback
                        >
                          Copiar
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          animation="smooth"
                          debounceMs={300}
                        >
                          Colar
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          leftIcon={<FloppyDisk size={14} />}
                          animation="bounce"
                          loadingText="Salvando..."
                        >
                          Salvar
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          leftIcon={<X size={14} />}
                          animation="slide"
                        >
                          Cancelar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Demonstração de Props */}
            <Card>
              <CardHeader>
                <CardTitle> Demonstração Completa de Props</CardTitle>
                <CardDescription>
                  Exemplo de um botão usando todas as funcionalidades
                  disponíveis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4  rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      {`<Button
  variant="default"
  size="lg"
  animation="bounce"
  gradient={true}
  glow={true}
  shadow="xl"
  rounded="lg"
  leftIcon={<Bell size={16} />}
  hapticFeedback={true}
  soundEffect={true}
  debounceMs={500}
  onMotionHoverStart={() => console.log('Hover!')}
  onMotionAnimationComplete={() => console.log('Done!')}
>
  Super Button
</Button>`}
                    </pre>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      variant="default"
                      size="lg"
                      animation="bounce"
                      gradient={true}
                      glow={true}
                      shadow="xl"
                      rounded="lg"
                      leftIcon={<Bell size={16} />}
                      hapticFeedback={true}
                      soundEffect={true}
                      debounceMs={500}
                      onMotionHoverStart={() => console.log("Hover!")}
                      onMotionAnimationComplete={() =>
                        console.log("Animation done!")
                      }
                      onClick={() => console.log("Super button clicked!")}
                    >
                      Super Button
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Uso em Cards */}
            <Card>
              <CardHeader>
                <CardTitle>🎨 Galeria de Estilos</CardTitle>
                <CardDescription>
                  Showcase visual de todas as possibilidades de design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Tema Escuro / Elegante</h4>
                    <div className="flex flex-wrap gap-3 p-4 bg-gray-900 rounded-lg">
                      <Button
                        variant="outline"
                        glow
                        animation="smooth"
                        className="text-white border-white"
                      >
                        Elegante
                      </Button>
                      <Button gradient glow shadow="lg" animation="pulse">
                        Premium
                      </Button>
                      <Button
                        variant="ghost"
                        className="text-white"
                        animation="slide"
                      >
                        Minimalista
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">
                      Tema Colorido / Divertido
                    </h4>
                    <div className="flex flex-wrap gap-3 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                      <Button
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        animation="bounce"
                        glow
                        rounded="full"
                      >
                        Divertido
                      </Button>
                      <Button
                        variant="outline"
                        className="border-purple-500 text-purple-700"
                        animation="pulse"
                        leftIcon={<Heart size={16} />}
                      >
                        Amor
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                        animation="bounce"
                        shadow="lg"
                        leftIcon={<Star size={16} />}
                      >
                        Estrela
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">
                      Tema Profissional / Corporativo
                    </h4>
                    <div className="flex flex-wrap gap-3 p-4 bg-gray-50 rounded-lg border">
                      <Button
                        variant="default"
                        animation="smooth"
                        shadow="md"
                        leftIcon={<Download size={16} />}
                      >
                        Download
                      </Button>
                      <Button
                        variant="secondary"
                        animation="slide"
                        debounceMs={300}
                      >
                        Processar
                      </Button>
                      <Button
                        variant="outline"
                        animation="none"
                        rightIcon={<Share size={16} />}
                      >
                        Compartilhar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
