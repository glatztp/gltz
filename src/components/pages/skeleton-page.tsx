import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Skeleton,
} from "../../index";

export function SkeletonPage() {
  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Skeleton Component</h1>
            <p className="text-muted-foreground mt-2">
              Componente de esqueleto para indicar carregamento de conteúdo.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Skeleton Básico */}
            <Card>
              <CardHeader>
                <CardTitle>Skeleton Básico</CardTitle>
                <CardDescription>
                  Exemplos básicos de skeleton para loading
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Linhas de texto */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium mb-3">
                      Linhas de Texto
                    </h4>
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[180px]" />
                  </div>

                  {/* Perfil com avatar */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium mb-3">
                      Perfil com Avatar
                    </h4>
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-4 w-[100px]" />
                      </div>
                    </div>
                  </div>

                  {/* Card com botões */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium mb-3">
                      Card com Botões
                    </h4>
                    <div className="space-y-3">
                      <Skeleton className="h-6 w-[300px]" />
                      <Skeleton className="h-20 w-full" />
                      <div className="flex space-x-2">
                        <Skeleton className="h-10 w-20" />
                        <Skeleton className="h-10 w-20" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Layouts de Card */}
            <Card>
              <CardHeader>
                <CardTitle>Layouts de Card</CardTitle>
                <CardDescription>
                  Skeletons para diferentes tipos de cards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card de Produto */}
                  <div className="border rounded-lg p-4 space-y-3">
                    <h4 className="text-sm font-medium mb-3">
                      Card de Produto
                    </h4>
                    <Skeleton className="h-48 w-full rounded-md" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-8 w-20 rounded-md" />
                    </div>
                  </div>

                  {/* Card de Post */}
                  <div className="border rounded-lg p-4 space-y-3">
                    <h4 className="text-sm font-medium mb-3">Card de Post</h4>
                    <div className="flex items-center space-x-3">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <div className="space-y-1">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-2 w-16" />
                      </div>
                    </div>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-32 w-full rounded-md" />
                    <div className="flex space-x-4">
                      <Skeleton className="h-8 w-16" />
                      <Skeleton className="h-8 w-16" />
                      <Skeleton className="h-8 w-16" />
                    </div>
                  </div>

                  {/* Card de Notificação */}
                  <div className="border rounded-lg p-4 space-y-3">
                    <h4 className="text-sm font-medium mb-3">
                      Card de Notificação
                    </h4>
                    <div className="flex space-x-3">
                      <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-3 w-full" />
                        <Skeleton className="h-3 w-2/3" />
                        <Skeleton className="h-2 w-1/4" />
                      </div>
                    </div>
                  </div>

                  {/* Card de Comentário */}
                  <div className="border rounded-lg p-4 space-y-3">
                    <h4 className="text-sm font-medium mb-3">
                      Card de Comentário
                    </h4>
                    <div className="flex space-x-3">
                      <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
                      <div className="flex-1">
                        <div className="bg-muted rounded-lg p-3 space-y-2">
                          <Skeleton className="h-3 w-1/4" />
                          <Skeleton className="h-3 w-full" />
                          <Skeleton className="h-3 w-3/4" />
                        </div>
                        <div className="flex space-x-4 mt-2">
                          <Skeleton className="h-6 w-12" />
                          <Skeleton className="h-6 w-16" />
                          <Skeleton className="h-6 w-12" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Listas e Tabelas */}
            <Card>
              <CardHeader>
                <CardTitle>Listas e Tabelas</CardTitle>
                <CardDescription>
                  Skeletons para conteúdo em lista e tabular
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Lista de Contatos */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">
                      Lista de Contatos
                    </h4>
                    <div className="space-y-3">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-4 p-3 border rounded-lg"
                        >
                          <Skeleton className="h-10 w-10 rounded-full" />
                          <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-24" />
                          </div>
                          <div className="space-y-2">
                            <Skeleton className="h-3 w-16" />
                            <Skeleton className="h-3 w-20" />
                          </div>
                          <Skeleton className="h-8 w-8 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tabela */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">
                      Tabela de Dados
                    </h4>
                    <div className="border rounded-lg">
                      {/* Header */}
                      <div className="flex items-center p-4 border-b bg-muted/50">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-32 ml-auto mr-4" />
                        <Skeleton className="h-4 w-20 mr-4" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      {/* Rows */}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex items-center p-4 border-b last:border-b-0"
                        >
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-4 w-32 ml-auto mr-4" />
                          <Skeleton className="h-4 w-20 mr-4" />
                          <Skeleton className="h-4 w-16" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formulários */}
            <Card>
              <CardHeader>
                <CardTitle>Formulários</CardTitle>
                <CardDescription>
                  Skeletons para campos de formulário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Formulário de Perfil */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">
                      Formulário de Perfil
                    </h4>
                    <div className="space-y-4">
                      {/* Avatar upload */}
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-20 w-20 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-8 w-24 rounded-md" />
                        </div>
                      </div>

                      {/* Form fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-10 w-full rounded-md" />
                        </div>
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-10 w-full rounded-md" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-10 w-full rounded-md" />
                      </div>

                      <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-24 w-full rounded-md" />
                      </div>

                      <div className="flex space-x-2">
                        <Skeleton className="h-10 w-20 rounded-md" />
                        <Skeleton className="h-10 w-24 rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navegação e Menus */}
            <Card>
              <CardHeader>
                <CardTitle>Navegação e Menus</CardTitle>
                <CardDescription>
                  Skeletons para elementos de navegação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Sidebar */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">Sidebar</h4>
                    <div className="w-64 space-y-3 border rounded-lg p-4">
                      {/* Logo */}
                      <Skeleton className="h-8 w-32" />
                      <div className="border-t pt-3 space-y-2">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <Skeleton className="h-4 w-4" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex items-center space-x-3">
                          <Skeleton className="h-8 w-8 rounded-full" />
                          <div className="space-y-1">
                            <Skeleton className="h-3 w-16" />
                            <Skeleton className="h-2 w-12" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Bar */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">Navigation Bar</h4>
                    <div className="space-y-4">
                      {/* Top nav */}
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <Skeleton className="h-8 w-24" />
                        <div className="flex space-x-6">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-4 w-18" />
                        </div>
                        <div className="flex items-center space-x-3">
                          <Skeleton className="h-8 w-8 rounded-full" />
                          <Skeleton className="h-8 w-8 rounded" />
                        </div>
                      </div>

                      {/* Breadcrumb */}
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <Skeleton className="h-4 w-16" />
                        <span className="text-muted-foreground">/</span>
                        <Skeleton className="h-4 w-20" />
                        <span className="text-muted-foreground">/</span>
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Media e Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle>Media e Dashboard</CardTitle>
                <CardDescription>
                  Skeletons para conteúdo multimídia e dashboards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Video Player */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">Video Player</h4>
                    <div className="space-y-3">
                      <Skeleton className="h-64 w-full rounded-lg" />
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-8 w-8 rounded" />
                        <div className="flex-1">
                          <Skeleton className="h-2 w-full rounded-full" />
                        </div>
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-8 w-8 rounded" />
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-3/4" />
                        <div className="flex items-center space-x-4">
                          <Skeleton className="h-8 w-8 rounded-full" />
                          <div className="space-y-1">
                            <Skeleton className="h-3 w-24" />
                            <Skeleton className="h-3 w-16" />
                          </div>
                          <Skeleton className="h-8 w-20 rounded-md ml-auto" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Cards */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">
                      Dashboard Cards
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="border rounded-lg p-4 space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-4" />
                          </div>
                          <Skeleton className="h-8 w-20" />
                          <div className="flex items-center space-x-2">
                            <Skeleton className="h-3 w-12" />
                            <Skeleton className="h-3 w-16" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chart */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">Gráfico</h4>
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <Skeleton className="h-5 w-32" />
                        <div className="flex space-x-2">
                          <Skeleton className="h-8 w-16 rounded-md" />
                          <Skeleton className="h-8 w-20 rounded-md" />
                        </div>
                      </div>
                      <Skeleton className="h-64 w-full rounded" />
                      <div className="flex justify-center space-x-6 mt-4">
                        <div className="flex items-center space-x-2">
                          <Skeleton className="h-3 w-3 rounded-full" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Skeleton className="h-3 w-3 rounded-full" />
                          <Skeleton className="h-3 w-20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skeletons Especiais */}
            <Card>
              <CardHeader>
                <CardTitle>Variantes Especiais</CardTitle>
                <CardDescription>
                  Skeletons com diferentes formas e animações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Diferentes formas */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">
                      Diferentes Formas
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center space-y-2">
                        <Skeleton className="h-16 w-16 rounded-full mx-auto" />
                        <p className="text-xs text-muted-foreground">
                          Circular
                        </p>
                      </div>
                      <div className="text-center space-y-2">
                        <Skeleton className="h-16 w-16 mx-auto" />
                        <p className="text-xs text-muted-foreground">
                          Quadrado
                        </p>
                      </div>
                      <div className="text-center space-y-2">
                        <Skeleton className="h-16 w-24 rounded-md mx-auto" />
                        <p className="text-xs text-muted-foreground">
                          Retângulo
                        </p>
                      </div>
                      <div className="text-center space-y-2">
                        <Skeleton className="h-16 w-16 rounded-lg mx-auto" />
                        <p className="text-xs text-muted-foreground">
                          Arredondado
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tamanhos */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">
                      Diferentes Tamanhos
                    </h4>
                    <div className="flex items-end space-x-4">
                      <div className="text-center space-y-2">
                        <Skeleton className="h-8 w-8 rounded mx-auto" />
                        <p className="text-xs text-muted-foreground">Pequeno</p>
                      </div>
                      <div className="text-center space-y-2">
                        <Skeleton className="h-12 w-12 rounded mx-auto" />
                        <p className="text-xs text-muted-foreground">Médio</p>
                      </div>
                      <div className="text-center space-y-2">
                        <Skeleton className="h-16 w-16 rounded mx-auto" />
                        <p className="text-xs text-muted-foreground">Grande</p>
                      </div>
                      <div className="text-center space-y-2">
                        <Skeleton className="h-20 w-20 rounded mx-auto" />
                        <p className="text-xs text-muted-foreground">
                          Extra Grande
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Layout de E-commerce */}
                  <div>
                    <h4 className="text-sm font-medium mb-4">
                      Layout de E-commerce
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="border rounded-lg p-3 space-y-3"
                        >
                          <Skeleton className="h-32 w-full rounded" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-3 w-2/3" />
                          <div className="flex justify-between items-center">
                            <Skeleton className="h-5 w-16" />
                            <Skeleton className="h-6 w-6 rounded" />
                          </div>
                        </div>
                      ))}
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
