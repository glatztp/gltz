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
import { Download, Heart, Star, Share, Plus, Minus } from "phosphor-react";
import { ComponentDocs } from "../layout/ComponentDocs";

export function ButtonPage() {
  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Button Component</h1>
            <p className="text-muted-foreground mt-2">
              Botões com diferentes variantes, tamanhos e estados para
              interações do usuário.
            </p>
          </div>

          <div className="grid gap-6">
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

            {/* Estados */}
            <Card>
              <CardHeader>
                <CardTitle>Estados</CardTitle>
                <CardDescription>
                  Diferentes estados de interação e feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button loading>Carregando...</Button>
                  <Button disabled>Desabilitado</Button>
                  <Button variant="outline" disabled>
                    Desabilitado Outline
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Uso em Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Integração com Cards</CardTitle>
                <CardDescription>
                  Exemplos de uso em diferentes contextos
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
                      >
                        Assinar Agora
                      </Button>
                      <Button variant="outline" className="w-full">
                        Saber Mais
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Configurações</CardTitle>
                      <CardDescription>
                        Gerencie suas preferências
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="secondary" className="w-full">
                        Editar Perfil
                      </Button>
                      <Button variant="outline" className="w-full">
                        Alterar Senha
                      </Button>
                      <Button variant="destructive" className="w-full">
                        Excluir Conta
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ações Rápidas</CardTitle>
                      <CardDescription>
                        Botões para ações comuns
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        <Button size="sm" variant="outline">
                          Copiar
                        </Button>
                        <Button size="sm" variant="outline">
                          Colar
                        </Button>
                        <Button size="sm" variant="outline">
                          Salvar
                        </Button>
                        <Button size="sm" variant="outline">
                          Cancelar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Documentation Sidebar */}
      <div className="w-80 border-l bg-muted/20 min-h-screen overflow-auto">
        <ComponentDocs componentName="Button" />
      </div>
    </div>
  );
}
