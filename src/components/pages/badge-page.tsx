import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Button,
} from "../../index";
import { Star, Crown, Shield, Warning, Check, X, Clock } from "phosphor-react";

export function BadgePage() {
  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Badge Component</h1>
            <p className="text-muted-foreground mt-2">
              Elementos visuais compactos para exibir status, categorias e
              informações importantes.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Variantes Básicas */}
            <Card>
              <CardHeader>
                <CardTitle>Variantes</CardTitle>
                <CardDescription>
                  Diferentes estilos visuais para diferentes contextos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Badges com Ícones */}
            <Card>
              <CardHeader>
                <CardTitle>Badges com Ícones</CardTitle>
                <CardDescription>
                  Adicionando ícones para melhor comunicação visual
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default" className="flex items-center gap-1">
                    <Star size={12} />
                    Premium
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Crown size={12} />
                    Pro
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Shield size={12} />
                    Verificado
                  </Badge>
                  <Badge
                    variant="destructive"
                    className="flex items-center gap-1"
                  >
                    <Warning size={12} />
                    Erro
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Status Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Status Badges</CardTitle>
                <CardDescription>
                  Badges para indicar diferentes estados do sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Estados Positivos</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="default"
                        className="bg-green-600 hover:bg-green-700 flex items-center gap-1"
                      >
                        <Check size={12} />
                        Aprovado
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Ativo
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Online
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        Concluído
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Estados Neutros</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <Clock size={12} />
                        Pendente
                      </Badge>
                      <Badge variant="secondary">Em Análise</Badge>
                      <Badge variant="outline">Rascunho</Badge>
                      <Badge variant="outline">Pausado</Badge>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Estados Negativos</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="destructive"
                        className="flex items-center gap-1"
                      >
                        <X size={12} />
                        Rejeitado
                      </Badge>
                      <Badge variant="destructive">Erro</Badge>
                      <Badge
                        variant="outline"
                        className="border-red-500 text-red-600"
                      >
                        Expirado
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-yellow-500 text-yellow-600"
                      >
                        Atenção
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tamanhos Customizados */}
            <Card>
              <CardHeader>
                <CardTitle>Tamanhos e Estilos</CardTitle>
                <CardDescription>
                  Variações de tamanho e estilo para diferentes contextos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Tamanhos</h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge className="text-xs px-2 py-0.5">Pequeno</Badge>
                      <Badge>Padrão</Badge>
                      <Badge className="text-sm px-3 py-1">Grande</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Estilos Customizados</h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="rounded-full">Arredondado</Badge>
                      <Badge className="rounded-none">Quadrado</Badge>
                      <Badge className="px-4 py-2">Espaçado</Badge>
                      <Badge className="font-bold">Negrito</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges em Contexto */}
            <Card>
              <CardHeader>
                <CardTitle>Badges em Contexto</CardTitle>
                <CardDescription>
                  Exemplos de uso em diferentes situações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Lista de Usuários */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Lista de Usuários</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">JS</span>
                          </div>
                          <div>
                            <div className="font-medium">João Silva</div>
                            <div className="text-sm text-muted-foreground">
                              joao@email.com
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge
                            variant="default"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Admin
                          </Badge>
                          <Badge variant="secondary">Ativo</Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">MS</span>
                          </div>
                          <div>
                            <div className="font-medium">Maria Santos</div>
                            <div className="text-sm text-muted-foreground">
                              maria@email.com
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">Editor</Badge>
                          <Badge
                            variant="outline"
                            className="border-yellow-500 text-yellow-600"
                          >
                            Pendente
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cards de Produto */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Cards de Produto</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">
                              Smartphone Pro
                            </CardTitle>
                            <Badge
                              variant="default"
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Oferta
                            </Badge>
                          </div>
                          <CardDescription>
                            Último modelo com tecnologia avançada
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold">
                                R$ 1.299
                              </span>
                              <Badge variant="outline" className="text-xs">
                                -20%
                              </Badge>
                            </div>
                            <div className="flex gap-2">
                              <Badge variant="secondary" className="text-xs">
                                128GB
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                5G
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                Preto
                              </Badge>
                            </div>
                            <Button className="w-full">Comprar Agora</Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">
                              Notebook Ultra
                            </CardTitle>
                            <Badge
                              variant="default"
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              Novo
                            </Badge>
                          </div>
                          <CardDescription>
                            Para trabalho e gaming profissional
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold">
                                R$ 3.499
                              </span>
                              <Badge
                                variant="outline"
                                className="text-xs border-green-500 text-green-600"
                              >
                                Parcelado
                              </Badge>
                            </div>
                            <div className="flex gap-2">
                              <Badge variant="secondary" className="text-xs">
                                16GB RAM
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                512GB SSD
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                RTX 4060
                              </Badge>
                            </div>
                            <Button className="w-full">Ver Detalhes</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contador de Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Badges com Contador</CardTitle>
                <CardDescription>
                  Badges para exibir quantidades e notificações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="relative">
                      <Button variant="outline">Mensagens</Button>
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                        3
                      </Badge>
                    </div>

                    <div className="relative">
                      <Button variant="outline">Notificações</Button>
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-600 hover:bg-red-700">
                        12
                      </Badge>
                    </div>

                    <div className="relative">
                      <Button variant="outline">Carrinho</Button>
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-green-600 hover:bg-green-700">
                        5
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Badges de Quantidade</h4>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary">12 Pendentes</Badge>
                      <Badge
                        variant="default"
                        className="bg-green-600 hover:bg-green-700"
                      >
                        5 Concluídos
                      </Badge>
                      <Badge variant="destructive">2 Erros</Badge>
                      <Badge variant="outline">25 Total</Badge>
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
