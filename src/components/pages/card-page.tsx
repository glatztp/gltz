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
import { Star, Crown, Shield, Trophy } from "phosphor-react";

export function CardPage() {
  return (
    <div className="flex gap-6 min-h-screen pt-12">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Card Component</h1>
            <p className="text-muted-foreground mt-2">
              Containers flexíveis para organizar e exibir conteúdo relacionado.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Card Básico */}
            <Card>
              <CardHeader>
                <CardTitle>Card Básico</CardTitle>
                <CardDescription>
                  Estrutura fundamental com header e content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Título Simples</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Este é um exemplo de card básico com apenas título e
                        conteúdo.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Com Descrição</CardTitle>
                      <CardDescription>
                        Descrição adicional do card
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Card com título e descrição no header.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star size={20} />
                        Com Ícone
                      </CardTitle>
                      <CardDescription>
                        Ícone integrado ao título
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Card com ícone no título para melhor identificação.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Cards com Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Cards com Badges</CardTitle>
                <CardDescription>
                  Adicionando badges para status e categorização
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Produto Premium</CardTitle>
                        <Badge variant="default">Novo</Badge>
                      </div>
                      <CardDescription>
                        Plano completo com recursos avançados
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold">R$ 99/mês</div>
                        <p className="text-sm text-muted-foreground">
                          Todos os recursos incluídos
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Status do Sistema</CardTitle>
                        <Badge variant="default">Online</Badge>
                      </div>
                      <CardDescription>
                        Monitoramento em tempo real
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-lg font-semibold text-green-600">
                          99.9% Uptime
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Última atualização: há 2 minutos
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Projeto Beta</CardTitle>
                        <Badge variant="secondary">Em Desenvolvimento</Badge>
                      </div>
                      <CardDescription>Versão experimental</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-lg font-semibold">v2.0.0-beta</div>
                        <p className="text-sm text-muted-foreground">
                          Lançamento previsto para Q2 2024
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Cards Interativos */}
            <Card>
              <CardHeader>
                <CardTitle>Cards Interativos</CardTitle>
                <CardDescription>
                  Cards com botões e ações integradas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Crown size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle>Plano Pro</CardTitle>
                          <CardDescription>
                            Recursos profissionais
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Usuários</span>
                          <span className="font-semibold">Ilimitados</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Armazenamento</span>
                          <span className="font-semibold">1TB</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Suporte</span>
                          <span className="font-semibold">24/7</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button className="w-full">Fazer Upgrade</Button>
                        <Button variant="outline" className="w-full">
                          Comparar Planos
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-full">
                          <Shield size={24} className="text-green-600" />
                        </div>
                        <div>
                          <CardTitle>Segurança</CardTitle>
                          <CardDescription>Status de proteção</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Firewall</span>
                          <Badge variant="default">Ativo</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Antivírus</span>
                          <Badge variant="default">Atualizado</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Backup</span>
                          <Badge variant="secondary">Pendente</Badge>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button variant="secondary" className="w-full">
                          Executar Scan
                        </Button>
                        <Button variant="outline" className="w-full">
                          Ver Relatório
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Cards de Estatísticas */}
            <Card>
              <CardHeader>
                <CardTitle>Cards de Estatísticas</CardTitle>
                <CardDescription>
                  Exibindo métricas e dados importantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">
                          Total de Vendas
                        </CardTitle>
                        <Trophy size={16} className="text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ 45.231</div>
                      <div className="text-xs text-green-600 font-medium">
                        +20.1% em relação ao mês anterior
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">
                          Novos Usuários
                        </CardTitle>
                        <Star size={16} className="text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2.350</div>
                      <div className="text-xs text-green-600 font-medium">
                        +15.2% esta semana
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">
                          Taxa de Conversão
                        </CardTitle>
                        <Crown size={16} className="text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12.5%</div>
                      <div className="text-xs text-red-600 font-medium">
                        -2.1% desde ontem
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">
                          Produtos Ativos
                        </CardTitle>
                        <Shield size={16} className="text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">573</div>
                      <div className="text-xs text-muted-foreground">
                        +12 novos produtos
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
