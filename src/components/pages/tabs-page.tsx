import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
  Badge,
  Input,
  Textarea,
  Label,
} from "../../index";
import { User, Gear, Bell, CreditCard, Shield, Star } from "phosphor-react";

export function TabsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tabs Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de abas para organizar e alternar entre diferentes seções
          de conteúdo.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Tabs Básico */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs Básico</CardTitle>
            <CardDescription>
              Implementação simples com diferentes seções
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList>
                <TabsTrigger value="tab1">Primeira Aba</TabsTrigger>
                <TabsTrigger value="tab2">Segunda Aba</TabsTrigger>
                <TabsTrigger value="tab3">Terceira Aba</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    Conteúdo da Primeira Aba
                  </h3>
                  <p className="text-muted-foreground">
                    Esta é a primeira aba do exemplo básico. Aqui você pode
                    colocar qualquer conteúdo como texto, formulários, imagens
                    ou outros componentes.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    Conteúdo da Segunda Aba
                  </h3>
                  <p className="text-muted-foreground">
                    Conteúdo completamente diferente para a segunda aba. As abas
                    são uma excelente forma de organizar informações
                    relacionadas sem ocupar muito espaço.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    Conteúdo da Terceira Aba
                  </h3>
                  <p className="text-muted-foreground">
                    E aqui temos o conteúdo da terceira aba. Você pode ter
                    quantas abas precisar para organizar seu conteúdo de forma
                    eficiente.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Tabs com Ícones */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs com Ícones</CardTitle>
            <CardDescription>
              Adicionando ícones para melhor identificação visual
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile" className="w-full">
              <TabsList>
                <TabsTrigger
                  value="profile"
                  className="flex items-center gap-2"
                >
                  <User size={16} />
                  Perfil
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="flex items-center gap-2"
                >
                  <Gear size={16} />
                  Configurações
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="flex items-center gap-2"
                >
                  <Bell size={16} />
                  Notificações
                </TabsTrigger>
                <TabsTrigger
                  value="billing"
                  className="flex items-center gap-2"
                >
                  <CreditCard size={16} />
                  Cobrança
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <User size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">João Silva</h3>
                      <p className="text-muted-foreground">
                        joao.silva@email.com
                      </p>
                      <Badge className="mt-1">Usuário Verificado</Badge>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Nome Completo</Label>
                      <Input defaultValue="João Silva" />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input defaultValue="joao.silva@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <Textarea placeholder="Conte um pouco sobre você..." />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="mt-4">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      Preferências de Conta
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Emails de Marketing</div>
                          <div className="text-sm text-muted-foreground">
                            Receber ofertas e novidades por email
                          </div>
                        </div>
                        <input type="checkbox" className="rounded" />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">
                            Autenticação em Dois Fatores
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Adicione uma camada extra de segurança
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Configurar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="mt-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Configurações de Notificação
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Bell size={20} className="text-blue-500" />
                        <div>
                          <div className="font-medium">Notificações Push</div>
                          <div className="text-sm text-muted-foreground">
                            Receber notificações no navegador
                          </div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded"
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Shield size={20} className="text-green-500" />
                        <div>
                          <div className="font-medium">
                            Alertas de Segurança
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Alertas sobre atividades suspeitas
                          </div>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="billing" className="mt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      Informações de Cobrança
                    </h3>
                    <Badge variant="outline">Plano Gratuito</Badge>
                  </div>
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-medium">Plano Atual</div>
                        <Badge>Gratuito</Badge>
                      </div>
                      <div className="text-2xl font-bold mb-2">R$ 0/mês</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Inclui recursos básicos e 5GB de armazenamento
                      </p>
                      <Button className="w-full">Fazer Upgrade para Pro</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Tabs Verticais Simuladas */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs com Layout Personalizado</CardTitle>
            <CardDescription>
              Organizando as abas de forma diferente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="analytics">Análises</TabsTrigger>
                <TabsTrigger value="reports">Relatórios</TabsTrigger>
                <TabsTrigger value="notifications">Alertas</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold">1,234</div>
                          <div className="text-sm text-muted-foreground">
                            Total de Usuários
                          </div>
                        </div>
                        <User size={24} className="text-blue-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold">56</div>
                          <div className="text-sm text-muted-foreground">
                            Vendas Hoje
                          </div>
                        </div>
                        <CreditCard size={24} className="text-green-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold">4.9</div>
                          <div className="text-sm text-muted-foreground">
                            Avaliação Média
                          </div>
                        </div>
                        <Star size={24} className="text-yellow-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="mt-4">
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Análises Detalhadas
                  </h3>
                  <p className="text-muted-foreground">
                    Aqui você encontraria gráficos e métricas detalhadas sobre o
                    desempenho.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="reports" className="mt-4">
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Relatórios Personalizados
                  </h3>
                  <p className="text-muted-foreground">
                    Gere relatórios customizados baseados nos seus dados e
                    métricas.
                  </p>
                  <Button className="mt-4">Criar Novo Relatório</Button>
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="mt-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Bell size={20} className="text-blue-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-medium">Nova venda realizada</div>
                      <div className="text-sm text-muted-foreground">
                        Produto "Smartphone Pro" vendido por R$ 1.299
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        há 5 minutos
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <User size={20} className="text-green-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-medium">Novo usuário cadastrado</div>
                      <div className="text-sm text-muted-foreground">
                        Maria Santos se cadastrou na plataforma
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        há 12 minutos
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Shield size={20} className="text-yellow-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-medium">
                        Atualização de segurança
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Sistema atualizado para a versão 2.1.0
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        há 1 hora
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Tabs com Estados */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs com Diferentes Estados</CardTitle>
            <CardDescription>
              Demonstrando abas desabilitadas e com badges
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active" className="w-full">
              <TabsList>
                <TabsTrigger value="active">Aba Ativa</TabsTrigger>
                <TabsTrigger value="with-badge">
                  <div className="flex items-center gap-2">
                    Com Badge
                    <Badge
                      variant="destructive"
                      className="h-4 w-4 p-0 text-xs flex items-center justify-center"
                    >
                      3
                    </Badge>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="disabled" disabled>
                  Desabilitada
                </TabsTrigger>
                <TabsTrigger value="normal">Normal</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Aba Ativa</h3>
                  <p className="text-muted-foreground">
                    Esta aba está ativa por padrão e mostra como o componente
                    funciona normalmente.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="with-badge" className="mt-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Aba com Badge</h3>
                  <p className="text-muted-foreground">
                    Esta aba tem um badge vermelho indicando 3 itens que
                    precisam de atenção. Badges são úteis para mostrar
                    notificações ou contadores.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="normal" className="mt-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Aba Normal</h3>
                  <p className="text-muted-foreground">
                    Uma aba normal sem estados especiais, mostrando o
                    comportamento padrão do componente.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
