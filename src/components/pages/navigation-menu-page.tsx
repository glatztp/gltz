import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  Badge,
} from "../../index";

interface NavigationMenuPageProps {
  sidebarOpen?: boolean;
  onToggleSidebar?: () => void;
}

export function NavigationMenuPage({
  sidebarOpen,
  onToggleSidebar,
}: NavigationMenuPageProps) {
  return (
    <div className="flex gap-6 min-h-screen relative pt-12">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Navigation Menu Component</h1>
            <p className="text-muted-foreground mt-2">
              Componente de menu de navegação com suporte a submenus e dropdown.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Menu Básico */}
            <Card>
              <CardHeader>
                <CardTitle>Navigation Menu Básico</CardTitle>
                <CardDescription>
                  Menu de navegação simples com links diretos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/">Início</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/produtos">
                        Produtos
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/sobre">
                        Sobre
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/contato">
                        Contato
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </CardContent>
            </Card>

            {/* Menu com Dropdown */}
            <Card>
              <CardHeader>
                <CardTitle>Navigation Menu com Dropdown</CardTitle>
                <CardDescription>Menu com submenus expansíveis</CardDescription>
              </CardHeader>
              <CardContent className="overflow-visible">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/">Início</NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem value="produtos">
                      <NavigationMenuTrigger value="produtos">
                        Produtos
                      </NavigationMenuTrigger>
                      <NavigationMenuContent value="produtos">
                        <div className="grid gap-3 p-6 w-[500px] max-w-[90vw] lg:grid-cols-[.75fr_1fr]">
                          <div className="row-span-3">
                            <NavigationMenuLink
                              href="/"
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Produtos em Destaque
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Conheça nossa linha premium de produtos
                              </p>
                            </NavigationMenuLink>
                          </div>
                          <div className="grid gap-1">
                            <NavigationMenuLink
                              href="/produtos/categoria-a"
                              className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full min-h-[3rem] flex flex-col justify-center"
                            >
                              <div className="text-sm font-medium leading-tight">
                                Categoria A
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground mt-1 break-words">
                                Produtos da categoria A
                              </p>
                            </NavigationMenuLink>
                            <NavigationMenuLink
                              href="/produtos/categoria-b"
                              className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full min-h-[3rem] flex flex-col justify-center"
                            >
                              <div className="text-sm font-medium leading-tight">
                                Categoria B
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground mt-1 break-words">
                                Produtos da categoria B
                              </p>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem value="servicos">
                      <NavigationMenuTrigger value="servicos">
                        Serviços
                      </NavigationMenuTrigger>
                      <NavigationMenuContent value="servicos">
                        <ul className="grid gap-3 p-6 w-[500px] max-w-[90vw] lg:grid-cols-2">
                          <li className="row-span-3">
                            <NavigationMenuLink
                              href="/servicos/consultoria"
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Consultoria
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Serviços especializados de consultoria
                              </p>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              href="/servicos/suporte"
                              className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground w-full min-h-[3rem] flex flex-col justify-center"
                            >
                              <div className="text-sm font-medium leading-tight">
                                Suporte
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground mt-1 break-words">
                                Suporte técnico 24/7
                              </p>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink
                              href="/servicos/manutencao"
                              className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground w-full min-h-[3rem] flex flex-col justify-center"
                            >
                              <div className="text-sm font-medium leading-tight">
                                Manutenção
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground mt-1 break-words">
                                Serviços de manutenção preventiva
                              </p>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink href="/contato">
                        Contato
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Navigation Menu com Badge</CardTitle>
                <CardDescription>
                  Menu com badges e indicadores de estado
                </CardDescription>
              </CardHeader>
              <CardContent className="overflow-visible">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink href="/">Início</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="/produtos"
                        className="flex items-center gap-2"
                      >
                        Produtos
                        <Badge variant="secondary" className="text-xs">
                          Novo
                        </Badge>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="/promocoes"
                        className="flex items-center gap-2"
                      >
                        Promoções
                        <Badge variant="destructive" className="text-xs">
                          50% OFF
                        </Badge>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem value="notificacoes">
                      <NavigationMenuTrigger
                        className="flex items-center gap-2"
                        value="notificacoes"
                      >
                        Notificações
                        <Badge variant="default" className="text-xs">
                          3
                        </Badge>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent value="notificacoes">
                        <div className="w-[350px] max-w-[90vw] p-4">
                          <div className="space-y-3">
                            <div className="text-sm font-medium">
                              Notificações Recentes
                            </div>
                            <div className="grid gap-2">
                              <div className="p-2 rounded-md bg-muted/50">
                                <div className="text-sm">
                                  Novo produto adicionado
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  há 2 horas
                                </div>
                              </div>
                              <div className="p-2 rounded-md bg-muted/50">
                                <div className="text-sm">Promoção iniciada</div>
                                <div className="text-xs text-muted-foreground">
                                  há 5 horas
                                </div>
                              </div>
                              <div className="p-2 rounded-md bg-muted/50">
                                <div className="text-sm">
                                  Sistema atualizado
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  há 1 dia
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full"
                            >
                              Ver todas
                            </Button>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </CardContent>
            </Card>

            {/* Menu Responsivo */}
            <Card>
              <CardHeader>
                <CardTitle>Navigation Menu Responsivo</CardTitle>
                <CardDescription>
                  Menu que adapta ao tamanho da tela
                </CardDescription>
              </CardHeader>
              <CardContent className="overflow-visible">
                <div className="space-y-4">
                  {/* Desktop Version */}
                  <div className="hidden md:block">
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuLink href="/">
                            Início
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem value="empresa">
                          <NavigationMenuTrigger value="empresa">
                            Empresa
                          </NavigationMenuTrigger>
                          <NavigationMenuContent value="empresa">
                            <div className="grid gap-3 p-6 w-[500px] max-w-[90vw] lg:grid-cols-2">
                              <NavigationMenuLink
                                href="/sobre"
                                className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent w-full min-h-[3rem] flex flex-col justify-center"
                              >
                                <div className="text-sm font-medium leading-tight">
                                  Sobre Nós
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground mt-1 break-words">
                                  Nossa história e valores
                                </p>
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="/equipe"
                                className="select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent w-full min-h-[3rem] flex flex-col justify-center"
                              >
                                <div className="text-sm font-medium leading-tight">
                                  Equipe
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground mt-1 break-words">
                                  Conheça nosso time
                                </p>
                              </NavigationMenuLink>
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink href="/blog">
                            Blog
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink href="/contato">
                            Contato
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>

                  {/* Mobile Version */}
                  <div className="md:hidden">
                    <Button variant="outline" className="w-full">
                      ☰ Menu
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      * Versão mobile simplificada - requer implementação de
                      menu hambúrguer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exemplo de Integração */}
            <Card>
              <CardHeader>
                <CardTitle>Exemplo de Uso no Código</CardTitle>
                <CardDescription>
                  Como implementar o NavigationMenu em seus projetos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                    {`import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui";

export function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">
            Início
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Produtos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[400px]">
              {/* Conteúdo do dropdown */}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Props e Customização */}
            <Card>
              <CardHeader>
                <CardTitle>Props e Customização</CardTitle>
                <CardDescription>
                  Propriedades disponíveis para personalização
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium mb-2">NavigationMenu</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>
                          • <code>value</code>: string - Item ativo
                        </li>
                        <li>
                          • <code>onValueChange</code>: função - Callback de
                          mudança
                        </li>
                        <li>
                          • <code>className</code>: string - Classes CSS
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">NavigationMenuItem</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>
                          • <code>value</code>: string - Identificador único
                        </li>
                        <li>
                          • <code>className</code>: string - Classes CSS
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">
                        NavigationMenuTrigger
                      </h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>
                          • <code>children</code>: ReactNode - Conteúdo do botão
                        </li>
                        <li>
                          • <code>className</code>: string - Classes CSS
                        </li>
                        <li>• Props de HTMLButtonElement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">NavigationMenuLink</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>
                          • <code>href</code>: string - URL de destino
                        </li>
                        <li>
                          • <code>className</code>: string - Classes CSS
                        </li>
                        <li>• Props de HTMLAnchorElement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Variantes e Estados */}
            <Card>
              <CardHeader>
                <CardTitle>Variantes e Estados</CardTitle>
                <CardDescription>
                  Diferentes estilos e estados do componente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Estado Ativo */}
                  <div>
                    <h4 className="font-medium mb-3">Estado Ativo</h4>
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            href="/"
                            className="bg-accent text-accent-foreground"
                          >
                            Início (Ativo)
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink href="/produtos">
                            Produtos
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink href="/contato">
                            Contato
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>

                  {/* Tamanhos Diferentes */}
                  <div>
                    <h4 className="font-medium mb-3">Tamanhos</h4>
                    <div className="space-y-4">
                      {/* Pequeno */}
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Pequeno
                        </p>
                        <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuLink
                                href="/"
                                className="h-8 px-3 text-sm"
                              >
                                Início
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                              <NavigationMenuLink
                                href="/produtos"
                                className="h-8 px-3 text-sm"
                              >
                                Produtos
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                      </div>

                      {/* Grande */}
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Grande
                        </p>
                        <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuLink
                                href="/"
                                className="h-12 px-6 text-lg"
                              >
                                Início
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                              <NavigationMenuLink
                                href="/produtos"
                                className="h-12 px-6 text-lg"
                              >
                                Produtos
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                      </div>
                    </div>
                  </div>

                  {/* Cores Customizadas */}
                  <div>
                    <h4 className="font-medium mb-3">Cores Customizadas</h4>
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            href="/"
                            className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100"
                          >
                            Azul
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            href="/green"
                            className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100"
                          >
                            Verde
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            href="/purple"
                            className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100"
                          >
                            Roxo
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Casos de Uso Avançados */}
            <Card>
              <CardHeader>
                <CardTitle>Casos de Uso Avançados</CardTitle>
                <CardDescription>
                  Implementações mais complexas do Navigation Menu
                </CardDescription>
              </CardHeader>
              <CardContent className="overflow-visible">
                <div className="space-y-6">
                  {/* Menu com Busca */}

                  {/* Menu com Perfil do Usuário */}
                  <div>
                    <h4 className="font-medium mb-3">
                      Menu com Perfil do Usuário
                    </h4>
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuLink href="/dashboard">
                            Dashboard
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink href="/projetos">
                            Projetos
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem value="perfil">
                          <NavigationMenuTrigger
                            className="flex items-center gap-2"
                            value="perfil"
                          >
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            João Silva
                          </NavigationMenuTrigger>
                          <NavigationMenuContent value="perfil">
                            <div className="w-[280px] max-w-[90vw] p-4">
                              <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                  <div>
                                    <div className="font-medium">
                                      João Silva
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      joao@email.com
                                    </div>
                                  </div>
                                </div>
                                <div className="border-t pt-3 space-y-1">
                                  <NavigationMenuLink
                                    href="/perfil"
                                    className="w-full text-left px-2 py-2 rounded hover:bg-accent min-h-[2rem] flex items-center break-words"
                                  >
                                    Meu Perfil
                                  </NavigationMenuLink>
                                  <NavigationMenuLink
                                    href="/configuracoes"
                                    className="w-full text-left px-2 py-2 rounded hover:bg-accent min-h-[2rem] flex items-center break-words"
                                  >
                                    Configurações
                                  </NavigationMenuLink>
                                  <NavigationMenuLink
                                    href="/ajuda"
                                    className="w-full text-left px-2 py-2 rounded hover:bg-accent min-h-[2rem] flex items-center break-words"
                                  >
                                    Ajuda
                                  </NavigationMenuLink>
                                  <hr className="my-2" />
                                  <button className="w-full text-left px-2 py-2 rounded hover:bg-accent text-red-600 min-h-[2rem] flex items-center break-words">
                                    Sair
                                  </button>
                                </div>
                              </div>
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
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
