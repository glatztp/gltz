/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  Badge,
  Button,
} from "../../index";
import {
  Crown,
  Star,
  Heart,
  Bell,
  Shield,
} from "phosphor-react";

export function AvatarPage() {
  const [selectedAnimation, setSelectedAnimation] = React.useState("default");
  const [selectedSize, setSelectedSize] = React.useState("md");
  const [selectedVariant, setSelectedVariant] = React.useState("default");

  return (
    <div className="flex gap-6 min-h-screen pt-12">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Avatar Component</h1>
            <p className="text-muted-foreground mt-2">
              Componentes avançados de avatar com animações Framer Motion,
              suporte a status, badges, grupos e funcionalidades especiais.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Playground Interactive */}
            <Card>
              <CardHeader>
                <CardTitle>Avatar Playground</CardTitle>
                <CardDescription>
                  Teste diferentes combinações de props, animações e tamanhos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Controles */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-medium">Tamanho</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "xs",
                          "sm",
                          "md",
                          "lg",
                          "xl",
                          "2xl",
                          "3xl",
                          "4xl",
                        ].map((size) => (
                          <Button
                            key={size}
                            variant={
                              selectedSize === size ? "default" : "outline"
                            }
                            size="sm"
                            onClick={() => setSelectedSize(size)}
                          >
                            {size.toUpperCase()}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Variante</h4>
                      <div className="flex flex-wrap gap-2">
                        {["default", "bordered", "shadow", "glow"].map(
                          (variant) => (
                            <Button
                              key={variant}
                              variant={
                                selectedVariant === variant
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() => setSelectedVariant(variant)}
                            >
                              {variant}
                            </Button>
                          )
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Animação</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "default",
                          "bounce",
                          "pulse",
                          "rotate",
                          "glow",
                          "float",
                        ].map((animation) => (
                          <Button
                            key={animation}
                            variant={
                              selectedAnimation === animation
                                ? "default"
                                : "outline"
                            }
                            size="sm"
                            onClick={() => setSelectedAnimation(animation)}
                          >
                            {animation}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="flex items-center justify-center p-8 border rounded-lg">
                    <Avatar
                      size={selectedSize as any}
                      variant={selectedVariant as any}
                      animation={selectedAnimation as any}
                      clickable={true}
                    >
                      <AvatarImage
                        src="https://github.com/glatztp.png"
                        alt="Preview"
                      />
                      <AvatarFallback>PV</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tamanhos Disponíveis */}
            <Card>
              <CardHeader>
                <CardTitle>Tamanhos Disponíveis</CardTitle>
                <CardDescription>
                  Todos os tamanhos de avatar disponíveis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-4 flex-wrap">
                  <div className="text-center">
                    <Avatar size="xs" className="mx-auto mb-2">
                      <AvatarFallback>XS</AvatarFallback>
                    </Avatar>
                    <div className="text-xs text-muted-foreground">24px</div>
                  </div>
                  <div className="text-center">
                    <Avatar size="sm" className="mx-auto mb-2">
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="text-xs text-muted-foreground">32px</div>
                  </div>
                  <div className="text-center">
                    <Avatar size="md" className="mx-auto mb-2">
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <div className="text-xs text-muted-foreground">48px</div>
                  </div>
                  <div className="text-center">
                    <Avatar size="lg" className="mx-auto mb-2">
                      <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                    <div className="text-xs text-muted-foreground">64px</div>
                  </div>
                  <div className="text-center">
                    <Avatar size="xl" className="mx-auto mb-2">
                      <AvatarFallback>XL</AvatarFallback>
                    </Avatar>
                    <div className="text-xs text-muted-foreground">80px</div>
                  </div>
                  <div className="text-center">
                    <Avatar size="2xl" className="mx-auto mb-2">
                      <AvatarFallback>2X</AvatarFallback>
                    </Avatar>
                    <div className="text-xs text-muted-foreground">96px</div>
                  </div>
                  <div className="text-center">
                    <Avatar size="3xl" className="mx-auto mb-2">
                      <AvatarFallback>3X</AvatarFallback>
                    </Avatar>
                    <div className="text-xs text-muted-foreground">128px</div>
                  </div>
                  <div className="text-center">
                    <Avatar size="4xl" className="mx-auto mb-2">
                      <AvatarFallback>4X</AvatarFallback>
                    </Avatar>
                    <div className="text-xs text-muted-foreground">160px</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Variantes e Estilos */}
            <Card>
              <CardHeader>
                <CardTitle>Variantes e Estilos</CardTitle>
                <CardDescription>
                  Diferentes estilos visuais para avatares
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Variantes</h4>
                    <div className="flex gap-4">
                      <Avatar variant="default" size="lg">
                        <AvatarFallback>DF</AvatarFallback>
                      </Avatar>
                      <Avatar variant="shadow" size="lg">
                        <AvatarFallback>SH</AvatarFallback>
                      </Avatar>
                      <Avatar variant="bordered" size="lg">
                        <AvatarFallback>BO</AvatarFallback>
                      </Avatar>
                      <Avatar variant="glow" size="lg">
                        <AvatarFallback>GL</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Default • Shadow • Bordered • Glow
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Com Status</h4>
                    <div className="flex gap-4">
                      <Avatar size="lg" status="online">
                        <AvatarFallback className="bg-green-500 text-white">
                          ON
                        </AvatarFallback>
                      </Avatar>
                      <Avatar size="lg" status="busy">
                        <AvatarFallback className="bg-red-500 text-white">
                          BS
                        </AvatarFallback>
                      </Avatar>
                      <Avatar size="lg" status="away">
                        <AvatarFallback className="bg-yellow-500 text-white">
                          AW
                        </AvatarFallback>
                      </Avatar>
                      <Avatar size="lg" status="offline">
                        <AvatarFallback className="bg-gray-500 text-white">
                          OF
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      🟢 Online • 🔴 Busy • 🟡 Away • ⚫ Offline
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Animações */}
            <Card>
              <CardHeader>
                <CardTitle>Animações Framer Motion</CardTitle>
                <CardDescription>
                  Demonstração de todas as animações disponíveis (hover para
                  ativar)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    "default",
                    "bounce",
                    "pulse",
                    "rotate",
                    "glow",
                    "float",
                  ].map((animation) => (
                    <div key={animation} className="text-center space-y-3">
                      <Avatar
                        size="xl"
                        animation={animation as any}
                        clickable={true}
                        className="mx-auto cursor-pointer"
                      >
                        <AvatarFallback>
                          {animation.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm font-medium">{animation}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Avatar Groups */}
            <Card>
              <CardHeader>
                <CardTitle>Grupos de Avatar</CardTitle>
                <CardDescription>
                  Componente AvatarGroup para mostrar múltiplos usuários
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Grupo Padrão</h4>
                    <div className="flex items-center justify-start">
                      <AvatarGroup max={4}>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/glatztp.png"
                            alt="User 1"
                          />
                          <AvatarFallback>GT</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback className="bg-blue-500 text-white">
                            U2
                          </AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback className="bg-green-500 text-white">
                            U3
                          </AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback className="bg-purple-500 text-white">
                            U4
                          </AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback className="bg-red-500 text-white">
                            U5
                          </AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback className="bg-orange-500 text-white">
                            U6
                          </AvatarFallback>
                        </Avatar>
                      </AvatarGroup>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Tamanhos Diferentes</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-sm w-16">Small:</span>
                        <AvatarGroup size="sm" max={3}>
                          <Avatar>
                            <AvatarFallback>A</AvatarFallback>
                          </Avatar>
                          <Avatar>
                            <AvatarFallback>B</AvatarFallback>
                          </Avatar>
                          <Avatar>
                            <AvatarFallback>C</AvatarFallback>
                          </Avatar>
                          <Avatar>
                            <AvatarFallback>D</AvatarFallback>
                          </Avatar>
                        </AvatarGroup>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm w-16">Large:</span>
                        <AvatarGroup size="lg" max={3}>
                          <Avatar>
                            <AvatarFallback>X</AvatarFallback>
                          </Avatar>
                          <Avatar>
                            <AvatarFallback>Y</AvatarFallback>
                          </Avatar>
                          <Avatar>
                            <AvatarFallback>Z</AvatarFallback>
                          </Avatar>
                          <Avatar>
                            <AvatarFallback>W</AvatarFallback>
                          </Avatar>
                        </AvatarGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges e Decorações */}
            <Card>
              <CardHeader>
                <CardTitle>Badges e Decorações</CardTitle>
                <CardDescription>
                  Avatares com badges, ícones e decorações especiais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Com Badges</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar
                          size="lg"
                          badge={<Crown className="h-4 w-4" />}
                          badgeColor="yellow"
                          clickable={true}
                          animation="glow"
                        >
                          <AvatarFallback className="bg-purple-500 text-white">
                            VIP
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Usuário VIP</div>
                          <div className="text-sm text-muted-foreground">
                            Premium member
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Avatar
                          size="lg"
                          badge={<Shield className="h-4 w-4" />}
                          badgeColor="blue"
                          clickable={true}
                          animation="bounce"
                        >
                          <AvatarFallback className="bg-blue-500 text-white">
                            MOD
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Moderador</div>
                          <div className="text-sm text-muted-foreground">
                            Community moderator
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Avatar
                          size="lg"
                          badge={<Star className="h-4 w-4" />}
                          badgeColor="orange"
                          clickable={true}
                          animation="pulse"
                        >
                          <AvatarFallback className="bg-orange-500 text-white">
                            PRO
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Usuário Pro</div>
                          <div className="text-sm text-muted-foreground">
                            Professional plan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Badge Count</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar
                          size="lg"
                          badgeCount={5}
                          badgeColor="red"
                          clickable={true}
                          animation="rotate"
                        >
                          <AvatarFallback className="bg-green-500 text-white">
                            <Bell className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Notificações</div>
                          <div className="text-sm text-muted-foreground">
                            5 mensagens não lidas
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Avatar
                          size="lg"
                          badgeCount={99}
                          badgeColor="blue"
                          clickable={true}
                          animation="float"
                        >
                          <AvatarFallback className="bg-indigo-500 text-white">
                            <Heart className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Curtidas</div>
                          <div className="text-sm text-muted-foreground">
                            99+ curtidas recebidas
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Casos de Uso Práticos */}
            <Card>
              <CardHeader>
                <CardTitle>Casos de Uso Práticos</CardTitle>
                <CardDescription>
                  Exemplos reais de uso do componente Avatar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {/* Chat Interface */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Interface de Chat</h4>
                    <div className="space-y-3 p-4 border rounded-lg">
                      <div className="flex gap-3">
                        <Avatar size="sm" status="online">
                          <AvatarFallback className="bg-blue-500 text-white">
                            GT
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">Glatz</span>
                            <span className="text-xs text-muted-foreground">
                              agora
                            </span>
                          </div>
                          <div className="text-sm bg-muted p-2 rounded-lg mt-1">
                            Olá! Como você está?
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Avatar size="sm" status="busy">
                          <AvatarFallback className="bg-green-500 text-white">
                            DV
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">
                              Developer
                            </span>
                            <span className="text-xs text-muted-foreground">
                              2 min atrás
                            </span>
                          </div>
                          <div className="text-sm bg-primary text-primary-foreground p-2 rounded-lg mt-1">
                            Tudo bem! Trabalhando no projeto novo.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Team Display */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Exibição de Equipe</h4>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="font-medium">Equipe de Design</h5>
                        <AvatarGroup max={3}>
                          <Avatar size="sm">
                            <AvatarFallback className="bg-purple-500 text-white">
                              DS
                            </AvatarFallback>
                          </Avatar>
                          <Avatar size="sm">
                            <AvatarFallback className="bg-pink-500 text-white">
                              UI
                            </AvatarFallback>
                          </Avatar>
                          <Avatar size="sm">
                            <AvatarFallback className="bg-indigo-500 text-white">
                              UX
                            </AvatarFallback>
                          </Avatar>
                          <Avatar size="sm">
                            <AvatarFallback className="bg-orange-500 text-white">
                              PM
                            </AvatarFallback>
                          </Avatar>
                        </AvatarGroup>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-3">
                          <Avatar
                            size="md"
                            badge={<Crown className="h-3 w-3" />}
                            badgeColor="yellow"
                          >
                            <AvatarFallback className="bg-purple-500 text-white">
                              DS
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">
                              Design Lead
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Glatz Team
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar size="md" status="online">
                            <AvatarFallback className="bg-pink-500 text-white">
                              UI
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">
                              UI Designer
                            </div>
                            <div className="text-xs text-muted-foreground">
                              UI Team
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* User Profile Card */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Cartão de Perfil</h4>
                    <div className="p-6 border rounded-lg max-w-sm">
                      <div className="text-center space-y-4">
                        <Avatar size="3xl" animation="glow" className="mx-auto">
                          <AvatarImage
                            src="https://github.com/glatztp.png"
                            alt="Profile"
                          />
                          <AvatarFallback>GT</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">Glatz</h3>
                          <p className="text-sm text-muted-foreground">
                            Full Stack Developer
                          </p>
                        </div>
                        <div className="flex justify-center gap-2">
                          <Badge>React</Badge>
                          <Badge variant="secondary">TypeScript</Badge>
                          <Badge variant="outline">Node.js</Badge>
                        </div>
                        <Button className="w-full">Seguir</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exemplos de Código */}
            <Card>
              <CardHeader>
                <CardTitle>Exemplos de Código</CardTitle>
                <CardDescription>
                  Como usar o componente Avatar em seu código
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Avatar Básico</h4>
                    <div className="bg-muted p-4 rounded-lg text-sm font-mono">
                      {`<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>JS</AvatarFallback>
</Avatar>`}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Com Props Avançadas</h4>
                    <div className="bg-muted p-4 rounded-lg text-sm font-mono">
                      {`<Avatar 
  size="lg"
  variant="bordered"
  animation="bounce"
  status="online"
  badge={<Crown className="h-4 w-4" />}
  badgeColor="yellow"
>
  <AvatarImage src="/avatar.jpg" alt="VIP User" />
  <AvatarFallback>VIP</AvatarFallback>
</Avatar>`}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Grupo de Avatares</h4>
                    <div className="bg-muted p-4 rounded-lg text-sm font-mono">
                      {`<AvatarGroup max={3} size="md">
  <Avatar><AvatarFallback>U1</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>U2</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>U3</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>U4</AvatarFallback></Avatar>
</AvatarGroup>`}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Animações Customizadas</h4>
                    <div className="bg-muted p-4 rounded-lg text-sm font-mono">
                      {`<Avatar 
  customAnimation={{
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 180 },
    tap: { scale: 0.9 }
  }}
>
  <AvatarFallback>CA</AvatarFallback>
</Avatar>`}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Props API */}
            <Card>
              <CardHeader>
                <CardTitle>API de Props</CardTitle>
                <CardDescription>
                  Todas as propriedades disponíveis para o componente Avatar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Prop</th>
                        <th className="text-left p-2">Tipo</th>
                        <th className="text-left p-2">Padrão</th>
                        <th className="text-left p-2">Descrição</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr className="border-b">
                        <td className="p-2 font-mono">size</td>
                        <td className="p-2">
                          xs | sm | md | lg | xl | 2xl | 3xl | 4xl
                        </td>
                        <td className="p-2">md</td>
                        <td className="p-2">Tamanho do avatar</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">variant</td>
                        <td className="p-2">
                          default | bordered | shadow | glow
                        </td>
                        <td className="p-2">default</td>
                        <td className="p-2">Estilo visual do avatar</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">animation</td>
                        <td className="p-2">
                          default | bounce | pulse | rotate | glow | float
                        </td>
                        <td className="p-2">default</td>
                        <td className="p-2">Tipo de animação</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">status</td>
                        <td className="p-2">online | busy | away | offline</td>
                        <td className="p-2">-</td>
                        <td className="p-2">Indicador de status do usuário</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">badge</td>
                        <td className="p-2">ReactNode</td>
                        <td className="p-2">-</td>
                        <td className="p-2">Ícone ou elemento do badge</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">badgeCount</td>
                        <td className="p-2">number</td>
                        <td className="p-2">-</td>
                        <td className="p-2">Número a ser exibido no badge</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">badgeColor</td>
                        <td className="p-2">
                          red | blue | green | yellow | purple | orange
                        </td>
                        <td className="p-2">red</td>
                        <td className="p-2">Cor do badge</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">customAnimation</td>
                        <td className="p-2">Variants</td>
                        <td className="p-2">-</td>
                        <td className="p-2">
                          Animações personalizadas Framer Motion
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">loading</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">Estado de carregamento</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">tooltip</td>
                        <td className="p-2">string</td>
                        <td className="p-2">-</td>
                        <td className="p-2">Texto do tooltip</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
