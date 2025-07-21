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
  Badge,
  Button,
} from "../../index";

export function AvatarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Avatar Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente para exibir imagens de perfil de usuários com fallback para
          iniciais.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Avatars Básicos */}
        <Card>
          <CardHeader>
            <CardTitle>Avatars Básicos</CardTitle>
            <CardDescription>
              Diferentes tamanhos e implementações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Com Imagem</h4>
                <div className="flex items-center gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Apenas Iniciais</h4>
                <div className="flex items-center gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">JS</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="text-sm">MS</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-lg">CD</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatars Coloridos */}
        <Card>
          <CardHeader>
            <CardTitle>Avatars com Cores Personalizadas</CardTitle>
            <CardDescription>
              Diferentes cores de fundo para fallbacks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-red-500 text-white">
                  AR
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-blue-500 text-white">
                  BF
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-green-500 text-white">
                  CG
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-yellow-500 text-white">
                  DH
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-purple-500 text-white">
                  EI
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-pink-500 text-white">
                  FJ
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-indigo-500 text-white">
                  GK
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-orange-500 text-white">
                  HL
                </AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Usuários */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Usuários</CardTitle>
            <CardDescription>
              Avatars em contexto de lista de usuários
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 border rounded-lg">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="João Silva"
                  />
                  <AvatarFallback className="bg-blue-500 text-white">
                    JS
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">João Silva</div>
                  <div className="text-sm text-muted-foreground">
                    joao.silva@email.com
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge>Admin</Badge>
                  <Badge variant="outline">Ativo</Badge>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 border rounded-lg">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-green-500 text-white">
                    MS
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">Maria Santos</div>
                  <div className="text-sm text-muted-foreground">
                    maria.santos@email.com
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary">Editor</Badge>
                  <Badge variant="outline">Ativo</Badge>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 border rounded-lg">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-purple-500 text-white">
                    AB
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">Ana Beatriz</div>
                  <div className="text-sm text-muted-foreground">
                    ana.beatriz@email.com
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary">Viewer</Badge>
                  <Badge
                    variant="outline"
                    className="border-yellow-500 text-yellow-600"
                  >
                    Pendente
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 border rounded-lg opacity-60">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-gray-400 text-white">
                    CF
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium">Carlos Ferreira</div>
                  <div className="text-sm text-muted-foreground">
                    carlos.ferreira@email.com
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Inativo</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grupo de Avatars */}
        <Card>
          <CardHeader>
            <CardTitle>Grupo de Avatars</CardTitle>
            <CardDescription>
              Mostrando múltiplos usuários de forma compacta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Stack de Avatars */}
              <div className="space-y-3">
                <h4 className="font-medium">Stack Sobreposto</h4>
                <div className="flex -space-x-2">
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User 1"
                    />
                    <AvatarFallback className="bg-blue-500 text-white">
                      U1
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarFallback className="bg-green-500 text-white">
                      U2
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarFallback className="bg-purple-500 text-white">
                      U3
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarFallback className="bg-red-500 text-white">
                      U4
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarFallback className="bg-gray-500 text-white text-xs">
                      +5
                    </AvatarFallback>
                  </Avatar>
                </div>
                <p className="text-sm text-muted-foreground">
                  9 pessoas neste projeto
                </p>
              </div>

              {/* Lista Horizontal */}
              <div className="space-y-3">
                <h4 className="font-medium">Lista Horizontal</h4>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-blue-500 text-white text-xs">
                      JS
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-green-500 text-white text-xs">
                      MS
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-purple-500 text-white text-xs">
                      AB
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">
                    e mais 3 pessoas
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatars com Status */}
        <Card>
          <CardHeader>
            <CardTitle>Avatars com Indicadores de Status</CardTitle>
            <CardDescription>
              Mostrando status online, ocupado, ausente, etc.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Status Online</h4>
                <div className="flex gap-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-500 text-white">
                        ON
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-red-500 text-white">
                        OC
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-red-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-yellow-500 text-white">
                        AU
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-yellow-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gray-500 text-white">
                        OF
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-gray-400 border-2 border-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  🟢 Online • 🔴 Ocupado • 🟡 Ausente • ⚫ Offline
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Com Badges</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-blue-500 text-white">
                        VIP
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Usuário VIP</div>
                    </div>
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">
                      Premium
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-green-500 text-white">
                        MOD
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Moderador</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-green-500 text-green-600"
                    >
                      Mod
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Avatars de Diferentes Tamanhos */}
        <Card>
          <CardHeader>
            <CardTitle>Diferentes Tamanhos</CardTitle>
            <CardDescription>
              Todas as variações de tamanho disponíveis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-end gap-4">
                <div className="text-center">
                  <Avatar className="h-6 w-6 mx-auto mb-2">
                    <AvatarFallback className="text-xs">XS</AvatarFallback>
                  </Avatar>
                  <div className="text-xs text-muted-foreground">
                    Extra Small
                  </div>
                </div>
                <div className="text-center">
                  <Avatar className="h-8 w-8 mx-auto mb-2">
                    <AvatarFallback className="text-xs">SM</AvatarFallback>
                  </Avatar>
                  <div className="text-xs text-muted-foreground">Small</div>
                </div>
                <div className="text-center">
                  <Avatar className="h-10 w-10 mx-auto mb-2">
                    <AvatarFallback className="text-sm">MD</AvatarFallback>
                  </Avatar>
                  <div className="text-xs text-muted-foreground">Medium</div>
                </div>
                <div className="text-center">
                  <Avatar className="h-12 w-12 mx-auto mb-2">
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                  <div className="text-xs text-muted-foreground">Large</div>
                </div>
                <div className="text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-2">
                    <AvatarFallback className="text-lg">XL</AvatarFallback>
                  </Avatar>
                  <div className="text-xs text-muted-foreground">
                    Extra Large
                  </div>
                </div>
                <div className="text-center">
                  <Avatar className="h-20 w-20 mx-auto mb-2">
                    <AvatarFallback className="text-xl">2XL</AvatarFallback>
                  </Avatar>
                  <div className="text-xs text-muted-foreground">2X Large</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
