import React from "react";
import { ComponentDocs } from "../layout/ComponentDocs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Toggle,
  Button,
  Badge,
  ToggleGroup,
  ToggleGroupItem,
} from "../../index";

export function TogglePage() {
  const [isPressed, setIsPressed] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Toggle Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de alternância para estados ligado/desligado com design de
          botão.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Toggle Básico */}
        <Card>
          <CardHeader>
            <CardTitle>Toggle Básico</CardTitle>
            <CardDescription>
              Estados básicos do componente toggle
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Estados Simples</h4>
                <div className="flex flex-wrap gap-3">
                  <Toggle>Toggle Padrão</Toggle>

                  <Toggle defaultPressed>Toggle Ativo</Toggle>

                  <Toggle disabled>Toggle Desabilitado</Toggle>

                  <Toggle disabled defaultPressed>
                    Desabilitado Ativo
                  </Toggle>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Com Ícones</h4>
                <div className="flex flex-wrap gap-3">
                  <Toggle>
                    <span className="mr-2">🔔</span>
                    Notificações
                  </Toggle>

                  <Toggle defaultPressed>
                    <span className="mr-2">🌙</span>
                    Modo Escuro
                  </Toggle>

                  <Toggle>
                    <span className="mr-2">🔊</span>
                    Som
                  </Toggle>

                  <Toggle>
                    <span className="mr-2">📍</span>
                    Localização
                  </Toggle>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Controlado */}
        <Card>
          <CardHeader>
            <CardTitle>Toggle Controlado</CardTitle>
            <CardDescription>
              Toggles com estado controlado pelo React
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Toggle pressed={isPressed} onPressedChange={setIsPressed}>
                      <span className="mr-2">⭐</span>
                      Favorito
                    </Toggle>
                    <Badge variant={isPressed ? "default" : "outline"}>
                      {isPressed ? "Favoritado" : "Não favoritado"}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Toggle
                      pressed={notifications}
                      onPressedChange={setNotifications}
                    >
                      <span className="mr-2">🔔</span>
                      Notificações
                    </Toggle>
                    <Badge variant={notifications ? "default" : "secondary"}>
                      {notifications ? "Ativadas" : "Desativadas"}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Toggle pressed={darkMode} onPressedChange={setDarkMode}>
                      <span className="mr-2">{darkMode ? "🌙" : "☀️"}</span>
                      {darkMode ? "Modo Escuro" : "Modo Claro"}
                    </Toggle>
                    <Badge variant={darkMode ? "outline" : "default"}>
                      {darkMode ? "Escuro" : "Claro"}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">
                  Estado atual:
                </p>
                <div className="text-sm space-y-1">
                  <p>
                    • Favorito:{" "}
                    <span className="font-medium">
                      {isPressed ? "Sim" : "Não"}
                    </span>
                  </p>
                  <p>
                    • Notificações:{" "}
                    <span className="font-medium">
                      {notifications ? "Ativas" : "Inativas"}
                    </span>
                  </p>
                  <p>
                    • Tema:{" "}
                    <span className="font-medium">
                      {darkMode ? "Escuro" : "Claro"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Group */}
        <Card>
          <CardHeader>
            <CardTitle>Toggle Group</CardTitle>
            <CardDescription>
              Agrupamento de toggles para seleção múltipla ou única
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Seleção Múltipla</h4>
                <ToggleGroup type="multiple" className="justify-start">
                  <ToggleGroupItem value="bold">
                    <span className="font-bold">B</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic">
                    <span className="italic">I</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline">
                    <span className="underline">U</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="strikethrough">
                    <span className="line-through">S</span>
                  </ToggleGroupItem>
                </ToggleGroup>
                <p className="text-sm text-muted-foreground">
                  Formatação de texto - múltiplas opções podem ser selecionadas
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Seleção Única</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="center"
                  className="justify-start"
                >
                  <ToggleGroupItem value="left">
                    <span>⬅️</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="center">
                    <span>↕️</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="right">
                    <span>➡️</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="justify">
                    <span>📄</span>
                  </ToggleGroupItem>
                </ToggleGroup>
                <p className="text-sm text-muted-foreground">
                  Alinhamento de texto - apenas uma opção pode ser selecionada
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Tamanhos</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2">Pequeno</p>
                    <ToggleGroup
                      type="single"
                      size="sm"
                      className="justify-start"
                    >
                      <ToggleGroupItem value="xs">XS</ToggleGroupItem>
                      <ToggleGroupItem value="sm">SM</ToggleGroupItem>
                      <ToggleGroupItem value="md">MD</ToggleGroupItem>
                      <ToggleGroupItem value="lg">LG</ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div>
                    <p className="text-sm mb-2">Padrão</p>
                    <ToggleGroup type="single" className="justify-start">
                      <ToggleGroupItem value="mobile">
                        📱 Mobile
                      </ToggleGroupItem>
                      <ToggleGroupItem value="tablet">
                        💻 Tablet
                      </ToggleGroupItem>
                      <ToggleGroupItem value="desktop">
                        🖥️ Desktop
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div>
                    <p className="text-sm mb-2">Grande</p>
                    <ToggleGroup
                      type="single"
                      size="lg"
                      className="justify-start"
                    >
                      <ToggleGroupItem value="basic">Básico</ToggleGroupItem>
                      <ToggleGroupItem value="pro">Pro</ToggleGroupItem>
                      <ToggleGroupItem value="enterprise">
                        Enterprise
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle para UI */}
        <Card>
          <CardHeader>
            <CardTitle>Toggles de Interface</CardTitle>
            <CardDescription>
              Exemplos práticos de uso em interfaces de usuário
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Painel de Controle</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-sm">Wi-Fi</div>
                        <div className="text-xs text-muted-foreground">
                          Conectado à rede doméstica
                        </div>
                      </div>
                      <Toggle defaultPressed>
                        <span>📶</span>
                      </Toggle>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-sm">Bluetooth</div>
                        <div className="text-xs text-muted-foreground">
                          2 dispositivos conectados
                        </div>
                      </div>
                      <Toggle defaultPressed>
                        <span>🔵</span>
                      </Toggle>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-sm">Dados Móveis</div>
                        <div className="text-xs text-muted-foreground">
                          4G LTE ativo
                        </div>
                      </div>
                      <Toggle>
                        <span>📱</span>
                      </Toggle>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-sm">Modo Avião</div>
                        <div className="text-xs text-muted-foreground">
                          Desabilita todas as conexões
                        </div>
                      </div>
                      <Toggle>
                        <span>✈️</span>
                      </Toggle>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-sm">Localização</div>
                        <div className="text-xs text-muted-foreground">
                          GPS de alta precisão
                        </div>
                      </div>
                      <Toggle defaultPressed>
                        <span>📍</span>
                      </Toggle>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-sm">
                          Economia de Energia
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Reduz performance para economizar bateria
                        </div>
                      </div>
                      <Toggle>
                        <span>🔋</span>
                      </Toggle>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Configurações de Aplicativo</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Toggle>
                      <span className="mr-2">🔔</span>
                      Notificações Push
                    </Toggle>
                    <Toggle defaultPressed>
                      <span className="mr-2">📧</span>
                      Email Diário
                    </Toggle>
                    <Toggle>
                      <span className="mr-2">📱</span>
                      SMS Alertas
                    </Toggle>
                  </div>

                  <div className="flex items-center gap-3">
                    <Toggle defaultPressed>
                      <span className="mr-2">🔒</span>
                      Autenticação 2FA
                    </Toggle>
                    <Toggle defaultPressed>
                      <span className="mr-2">💾</span>
                      Backup Automático
                    </Toggle>
                    <Toggle>
                      <span className="mr-2">🌐</span>
                      Sync Cross-Platform
                    </Toggle>
                  </div>

                  <div className="flex items-center gap-3">
                    <Toggle>
                      <span className="mr-2">📊</span>
                      Analytics
                    </Toggle>
                    <Toggle>
                      <span className="mr-2">🎯</span>
                      Anúncios Personalizados
                    </Toggle>
                    <Toggle defaultPressed>
                      <span className="mr-2">🛡️</span>
                      Modo Privado
                    </Toggle>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle para Filtros */}
        <Card>
          <CardHeader>
            <CardTitle>Filtros e Categorias</CardTitle>
            <CardDescription>
              Usando toggles para sistemas de filtros e categorização
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Filtros de Produto</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Categorias</p>
                    <ToggleGroup
                      type="multiple"
                      className="justify-start flex-wrap"
                    >
                      <ToggleGroupItem value="electronics">
                        📱 Eletrônicos
                      </ToggleGroupItem>
                      <ToggleGroupItem value="clothing">
                        👕 Roupas
                      </ToggleGroupItem>
                      <ToggleGroupItem value="books">📚 Livros</ToggleGroupItem>
                      <ToggleGroupItem value="home">🏠 Casa</ToggleGroupItem>
                      <ToggleGroupItem value="sports">
                        ⚽ Esportes
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Faixa de Preço</p>
                    <ToggleGroup type="single" className="justify-start">
                      <ToggleGroupItem value="budget">
                        💰 Até R$ 50
                      </ToggleGroupItem>
                      <ToggleGroupItem value="mid">
                        💰💰 R$ 50-200
                      </ToggleGroupItem>
                      <ToggleGroupItem value="premium">
                        💰💰💰 R$ 200+
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Características</p>
                    <div className="flex flex-wrap gap-2">
                      <Toggle>⭐ Mais Vendidos</Toggle>
                      <Toggle>🚚 Frete Grátis</Toggle>
                      <Toggle>🏷️ Em Promoção</Toggle>
                      <Toggle>📦 Estoque Disponível</Toggle>
                      <Toggle>🆕 Lançamentos</Toggle>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Filtros de Conteúdo</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2">Tipo de Mídia</p>
                    <ToggleGroup type="multiple" className="justify-start">
                      <ToggleGroupItem value="video">🎥 Vídeos</ToggleGroupItem>
                      <ToggleGroupItem value="audio">🎵 Áudio</ToggleGroupItem>
                      <ToggleGroupItem value="image">
                        🖼️ Imagens
                      </ToggleGroupItem>
                      <ToggleGroupItem value="document">
                        📄 Documentos
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Data de Criação</p>
                    <ToggleGroup type="single" className="justify-start">
                      <ToggleGroupItem value="today">Hoje</ToggleGroupItem>
                      <ToggleGroupItem value="week">
                        Esta Semana
                      </ToggleGroupItem>
                      <ToggleGroupItem value="month">Este Mês</ToggleGroupItem>
                      <ToggleGroupItem value="year">Este Ano</ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button size="sm">Aplicar Filtros</Button>
                <Button size="sm" variant="outline">
                  Limpar Tudo
                </Button>
                <Button size="sm" variant="secondary">
                  Salvar Filtro
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Avançado */}
        <Card>
          <CardHeader>
            <CardTitle>Toggles Avançados</CardTitle>
            <CardDescription>
              Exemplos mais complexos e estilizados de toggles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Estados com Feedback Visual</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Toggle className="data-[state=on]:bg-green-500 data-[state=on]:text-white">
                      <span className="mr-2">✅</span>
                      Ativo
                    </Toggle>

                    <Toggle className="data-[state=on]:bg-yellow-500 data-[state=on]:text-white">
                      <span className="mr-2">⚠️</span>
                      Atenção
                    </Toggle>

                    <Toggle className="data-[state=on]:bg-red-500 data-[state=on]:text-white">
                      <span className="mr-2">❌</span>
                      Erro
                    </Toggle>

                    <Toggle className="data-[state=on]:bg-blue-500 data-[state=on]:text-white">
                      <span className="mr-2">ℹ️</span>
                      Info
                    </Toggle>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Toolbar de Editor</h4>
                <div className="p-4 border rounded-lg">
                  <div className="flex gap-1 mb-4">
                    <ToggleGroup type="multiple" className="justify-start">
                      <ToggleGroupItem value="bold" className="px-3">
                        <span className="font-bold">B</span>
                      </ToggleGroupItem>
                      <ToggleGroupItem value="italic" className="px-3">
                        <span className="italic">I</span>
                      </ToggleGroupItem>
                      <ToggleGroupItem value="underline" className="px-3">
                        <span className="underline">U</span>
                      </ToggleGroupItem>
                    </ToggleGroup>

                    <div className="w-px bg-border mx-2" />

                    <ToggleGroup type="single" className="justify-start">
                      <ToggleGroupItem value="left">⬅️</ToggleGroupItem>
                      <ToggleGroupItem value="center">↕️</ToggleGroupItem>
                      <ToggleGroupItem value="right">➡️</ToggleGroupItem>
                    </ToggleGroup>

                    <div className="w-px bg-border mx-2" />

                    <Toggle>📎</Toggle>
                    <Toggle>🔗</Toggle>
                    <Toggle>📷</Toggle>
                  </div>

                  <div className="min-h-[100px] p-3 border rounded text-sm bg-background">
                    Área de texto do editor...
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Dashboard de Monitoramento</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <div className="font-medium text-sm">
                            Servidor Web
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Online
                          </div>
                        </div>
                      </div>
                      <Toggle defaultPressed>🟢</Toggle>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div>
                          <div className="font-medium text-sm">
                            Banco de Dados
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Lento
                          </div>
                        </div>
                      </div>
                      <Toggle defaultPressed>🟡</Toggle>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div>
                          <div className="font-medium text-sm">API Externa</div>
                          <div className="text-xs text-muted-foreground">
                            Offline
                          </div>
                        </div>
                      </div>
                      <Toggle>🔴</Toggle>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div>
                          <div className="font-medium text-sm">CDN</div>
                          <div className="text-xs text-muted-foreground">
                            Ativo
                          </div>
                        </div>
                      </div>
                      <Toggle defaultPressed>🔵</Toggle>
                    </div>
                  </div>
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
