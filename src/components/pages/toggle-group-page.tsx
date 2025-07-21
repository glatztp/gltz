import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  ToggleGroup,
  ToggleGroupItem,
  Button,
  Badge,
  Separator,
} from "../../index";

export function ToggleGroupPage() {
  const [textFormat, setTextFormat] = React.useState<string[]>([]);
  const [alignment, setAlignment] = React.useState("center");
  const [viewMode, setViewMode] = React.useState("grid");
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Toggle Group Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente para agrupar múltiplos toggles com seleção única ou
          múltipla.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Toggle Group Básico */}
        <Card>
          <CardHeader>
            <CardTitle>Toggle Group Básico</CardTitle>
            <CardDescription>
              Exemplos de uso básico do ToggleGroup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Seleção Única</h4>
                <div className="space-y-3">
                  <ToggleGroup type="single" defaultValue="center">
                    <ToggleGroupItem value="left">Esquerda</ToggleGroupItem>
                    <ToggleGroupItem value="center">Centro</ToggleGroupItem>
                    <ToggleGroupItem value="right">Direita</ToggleGroupItem>
                  </ToggleGroup>
                  <p className="text-sm text-muted-foreground">
                    Apenas um item pode ser selecionado por vez
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Seleção Múltipla</h4>
                <div className="space-y-3">
                  <ToggleGroup type="multiple" defaultValue={["bold"]}>
                    <ToggleGroupItem value="bold">Negrito</ToggleGroupItem>
                    <ToggleGroupItem value="italic">Itálico</ToggleGroupItem>
                    <ToggleGroupItem value="underline">
                      Sublinhado
                    </ToggleGroupItem>
                    <ToggleGroupItem value="strikethrough">
                      Riscado
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <p className="text-sm text-muted-foreground">
                    Múltiplos itens podem ser selecionados simultaneamente
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Com Ícones</h4>
                <div className="space-y-3">
                  <ToggleGroup type="single" defaultValue="desktop">
                    <ToggleGroupItem value="mobile">
                      <span className="mr-2">📱</span>
                      Mobile
                    </ToggleGroupItem>
                    <ToggleGroupItem value="tablet">
                      <span className="mr-2">💻</span>
                      Tablet
                    </ToggleGroupItem>
                    <ToggleGroupItem value="desktop">
                      <span className="mr-2">🖥️</span>
                      Desktop
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Group Controlado */}
        <Card>
          <CardHeader>
            <CardTitle>Toggle Group Controlado</CardTitle>
            <CardDescription>
              Controle do estado do ToggleGroup via React
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Formatação de Texto</h4>
                  <div className="flex gap-2">
                    {textFormat.map((format) => (
                      <Badge key={format} variant="outline">
                        {format}
                      </Badge>
                    ))}
                    {textFormat.length === 0 && (
                      <Badge variant="secondary">Nenhuma formatação</Badge>
                    )}
                  </div>
                </div>
                <ToggleGroup
                  type="multiple"
                  value={textFormat}
                  onValueChange={(value) => setTextFormat(value as string[])}
                >
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
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Alinhamento</h4>
                  <Badge variant="outline">
                    {alignment === "left" && "Esquerda"}
                    {alignment === "center" && "Centro"}
                    {alignment === "right" && "Direita"}
                    {alignment === "justify" && "Justificado"}
                    {!alignment && "Nenhum"}
                  </Badge>
                </div>
                <ToggleGroup
                  type="single"
                  value={alignment}
                  onValueChange={(value) =>
                    setAlignment((value as string) || "")
                  }
                >
                  <ToggleGroupItem value="left">⬅️</ToggleGroupItem>
                  <ToggleGroupItem value="center">↕️</ToggleGroupItem>
                  <ToggleGroupItem value="right">➡️</ToggleGroupItem>
                  <ToggleGroupItem value="justify">📄</ToggleGroupItem>
                </ToggleGroup>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Modo de Visualização</h4>
                  <Badge variant="default">
                    {viewMode === "list" && "Lista"}
                    {viewMode === "grid" && "Grade"}
                    {viewMode === "card" && "Cards"}
                  </Badge>
                </div>
                <ToggleGroup
                  type="single"
                  value={viewMode}
                  onValueChange={(value) =>
                    setViewMode((value as string) || "grid")
                  }
                >
                  <ToggleGroupItem value="list">
                    <span className="mr-2">📋</span>
                    Lista
                  </ToggleGroupItem>
                  <ToggleGroupItem value="grid">
                    <span className="mr-2">⚏</span>
                    Grade
                  </ToggleGroupItem>
                  <ToggleGroupItem value="card">
                    <span className="mr-2">🃏</span>
                    Cards
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div className="pt-4 border-t bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Estado Atual:</h4>
                <div className="text-sm space-y-1">
                  <p>
                    • Formatação:{" "}
                    <span className="font-medium">
                      {textFormat.length > 0
                        ? textFormat.join(", ")
                        : "Nenhuma"}
                    </span>
                  </p>
                  <p>
                    • Alinhamento:{" "}
                    <span className="font-medium">{alignment || "Nenhum"}</span>
                  </p>
                  <p>
                    • Visualização:{" "}
                    <span className="font-medium">{viewMode}</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tamanhos e Variações */}
        <Card>
          <CardHeader>
            <CardTitle>Tamanhos e Variações</CardTitle>
            <CardDescription>
              Diferentes tamanhos e estilos do ToggleGroup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Tamanho Pequeno</h4>
                <ToggleGroup type="single" size="sm" defaultValue="2">
                  <ToggleGroupItem value="1">Opção 1</ToggleGroupItem>
                  <ToggleGroupItem value="2">Opção 2</ToggleGroupItem>
                  <ToggleGroupItem value="3">Opção 3</ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Tamanho Padrão</h4>
                <ToggleGroup type="single" defaultValue="b">
                  <ToggleGroupItem value="a">Item A</ToggleGroupItem>
                  <ToggleGroupItem value="b">Item B</ToggleGroupItem>
                  <ToggleGroupItem value="c">Item C</ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Tamanho Grande</h4>
                <ToggleGroup type="single" size="lg" defaultValue="pro">
                  <ToggleGroupItem value="basic">
                    <span className="mr-2">🥉</span>
                    Básico
                  </ToggleGroupItem>
                  <ToggleGroupItem value="pro">
                    <span className="mr-2">🥈</span>
                    Profissional
                  </ToggleGroupItem>
                  <ToggleGroupItem value="enterprise">
                    <span className="mr-2">🥇</span>
                    Enterprise
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Group para Filtros */}
        <Card>
          <CardHeader>
            <CardTitle>Sistema de Filtros</CardTitle>
            <CardDescription>
              Uso prático do ToggleGroup para filtros e categorização
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Filtros de Categoria</h4>
                <ToggleGroup
                  type="multiple"
                  value={selectedCategories}
                  onValueChange={(value) =>
                    setSelectedCategories(value as string[])
                  }
                  className="flex-wrap justify-start"
                >
                  <ToggleGroupItem value="technology">
                    <span className="mr-2">💻</span>
                    Tecnologia
                  </ToggleGroupItem>
                  <ToggleGroupItem value="design">
                    <span className="mr-2">🎨</span>
                    Design
                  </ToggleGroupItem>
                  <ToggleGroupItem value="business">
                    <span className="mr-2">💼</span>
                    Negócios
                  </ToggleGroupItem>
                  <ToggleGroupItem value="marketing">
                    <span className="mr-2">📢</span>
                    Marketing
                  </ToggleGroupItem>
                  <ToggleGroupItem value="development">
                    <span className="mr-2">⚙️</span>
                    Desenvolvimento
                  </ToggleGroupItem>
                </ToggleGroup>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Selecionados:
                  </span>
                  {selectedCategories.length > 0 ? (
                    selectedCategories.map((category) => (
                      <Badge key={category} variant="outline">
                        {category}
                      </Badge>
                    ))
                  ) : (
                    <Badge variant="secondary">Nenhum</Badge>
                  )}
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Filtros de Preço</h4>
                <ToggleGroup type="single" defaultValue="all">
                  <ToggleGroupItem value="all">
                    <span className="mr-2">🏷️</span>
                    Todos
                  </ToggleGroupItem>
                  <ToggleGroupItem value="free">
                    <span className="mr-2">🆓</span>
                    Grátis
                  </ToggleGroupItem>
                  <ToggleGroupItem value="paid">
                    <span className="mr-2">💰</span>
                    Pagos
                  </ToggleGroupItem>
                  <ToggleGroupItem value="premium">
                    <span className="mr-2">⭐</span>
                    Premium
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Ordenação</h4>
                <ToggleGroup type="single" defaultValue="date">
                  <ToggleGroupItem value="date">
                    <span className="mr-2">📅</span>
                    Data
                  </ToggleGroupItem>
                  <ToggleGroupItem value="popularity">
                    <span className="mr-2">🔥</span>
                    Popularidade
                  </ToggleGroupItem>
                  <ToggleGroupItem value="rating">
                    <span className="mr-2">⭐</span>
                    Avaliação
                  </ToggleGroupItem>
                  <ToggleGroupItem value="price">
                    <span className="mr-2">💵</span>
                    Preço
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button>Aplicar Filtros</Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategories([])}
                >
                  Limpar Filtros
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Group Avançado */}
        <Card>
          <CardHeader>
            <CardTitle>Casos de Uso Avançados</CardTitle>
            <CardDescription>
              Exemplos avançados e estilizados do ToggleGroup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Toolbar de Editor</h4>
                <div className="p-4 border rounded-lg bg-muted/20">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <ToggleGroup type="multiple" size="sm">
                      <ToggleGroupItem value="bold" className="font-bold">
                        B
                      </ToggleGroupItem>
                      <ToggleGroupItem value="italic" className="italic">
                        I
                      </ToggleGroupItem>
                      <ToggleGroupItem value="underline" className="underline">
                        U
                      </ToggleGroupItem>
                    </ToggleGroup>

                    <div className="w-px bg-border mx-1" />

                    <ToggleGroup type="single" size="sm">
                      <ToggleGroupItem value="h1">H1</ToggleGroupItem>
                      <ToggleGroupItem value="h2">H2</ToggleGroupItem>
                      <ToggleGroupItem value="h3">H3</ToggleGroupItem>
                    </ToggleGroup>

                    <div className="w-px bg-border mx-1" />

                    <ToggleGroup type="single" size="sm">
                      <ToggleGroupItem value="left">⬅️</ToggleGroupItem>
                      <ToggleGroupItem value="center">↕️</ToggleGroupItem>
                      <ToggleGroupItem value="right">➡️</ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div className="min-h-[80px] p-3 bg-background border rounded text-sm">
                    Área de edição de texto...
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Configurações de Dashboard</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">
                        Período de Tempo
                      </p>
                      <ToggleGroup type="single" defaultValue="week" size="sm">
                        <ToggleGroupItem value="day">Dia</ToggleGroupItem>
                        <ToggleGroupItem value="week">Semana</ToggleGroupItem>
                        <ToggleGroupItem value="month">Mês</ToggleGroupItem>
                        <ToggleGroupItem value="year">Ano</ToggleGroupItem>
                      </ToggleGroup>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">
                        Tipo de Gráfico
                      </p>
                      <ToggleGroup type="single" defaultValue="line" size="sm">
                        <ToggleGroupItem value="line">📈 Linha</ToggleGroupItem>
                        <ToggleGroupItem value="bar">📊 Barra</ToggleGroupItem>
                        <ToggleGroupItem value="pie">🥧 Pizza</ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">
                        Métricas Visíveis
                      </p>
                      <ToggleGroup
                        type="multiple"
                        size="sm"
                        className="flex-col items-start"
                      >
                        <ToggleGroupItem value="visitors">
                          👥 Visitantes
                        </ToggleGroupItem>
                        <ToggleGroupItem value="revenue">
                          💰 Receita
                        </ToggleGroupItem>
                        <ToggleGroupItem value="conversion">
                          🎯 Conversão
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Player de Mídia</h4>
                <div className="p-4 border rounded-lg bg-background">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">
                      Agora Tocando: Música Exemplo
                    </div>
                    <div className="text-xs text-muted-foreground">
                      03:45 / 04:20
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Button size="sm" variant="outline">
                      ⏮️
                    </Button>
                    <Button size="sm">▶️</Button>
                    <Button size="sm" variant="outline">
                      ⏭️
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <ToggleGroup type="multiple" size="sm">
                      <ToggleGroupItem value="shuffle">🔀</ToggleGroupItem>
                      <ToggleGroupItem value="repeat">🔁</ToggleGroupItem>
                      <ToggleGroupItem value="favorite">❤️</ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Configurações de Jogo</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Dificuldade</p>
                    <ToggleGroup type="single" defaultValue="normal">
                      <ToggleGroupItem value="easy">
                        <span className="mr-2">😊</span>
                        Fácil
                      </ToggleGroupItem>
                      <ToggleGroupItem value="normal">
                        <span className="mr-2">😐</span>
                        Normal
                      </ToggleGroupItem>
                      <ToggleGroupItem value="hard">
                        <span className="mr-2">😤</span>
                        Difícil
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Modo de Jogo</p>
                    <ToggleGroup type="single" defaultValue="campaign">
                      <ToggleGroupItem value="campaign">
                        <span className="mr-2">📖</span>
                        Campanha
                      </ToggleGroupItem>
                      <ToggleGroupItem value="multiplayer">
                        <span className="mr-2">👥</span>
                        Multiplayer
                      </ToggleGroupItem>
                      <ToggleGroupItem value="sandbox">
                        <span className="mr-2">🏗️</span>
                        Sandbox
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Variantes Especiais */}
        <Card>
          <CardHeader>
            <CardTitle>Variantes Especiais</CardTitle>
            <CardDescription>
              Estilos únicos e casos de uso específicos do ToggleGroup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Toggle Group com Preview */}
              <div className="space-y-4">
                <h4 className="font-medium">Seletor de Tema com Preview</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <ToggleGroup
                      type="single"
                      defaultValue="light"
                      className="grid grid-cols-1 gap-2"
                    >
                      <ToggleGroupItem
                        value="light"
                        className="justify-start p-4 h-auto"
                      >
                        <div className="flex items-center gap-3 w-full">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-50 to-white border-2 border-gray-200"></div>
                          <div className="text-left">
                            <div className="font-medium">Tema Claro</div>
                            <div className="text-xs text-muted-foreground">
                              Perfeito para o dia
                            </div>
                          </div>
                        </div>
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="dark"
                        className="justify-start p-4 h-auto"
                      >
                        <div className="flex items-center gap-3 w-full">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-gray-600"></div>
                          <div className="text-left">
                            <div className="font-medium">Tema Escuro</div>
                            <div className="text-xs text-muted-foreground">
                              Ideal para a noite
                            </div>
                          </div>
                        </div>
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="auto"
                        className="justify-start p-4 h-auto"
                      >
                        <div className="flex items-center gap-3 w-full">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white via-gray-400 to-black border-2 border-gray-300"></div>
                          <div className="text-left">
                            <div className="font-medium">Automático</div>
                            <div className="text-xs text-muted-foreground">
                              Segue o sistema
                            </div>
                          </div>
                        </div>
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <div className="text-sm font-medium mb-2">
                      Preview do Tema
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-primary/20 rounded"></div>
                      <div className="h-2 bg-muted rounded w-3/4"></div>
                      <div className="h-2 bg-muted rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle Group com Cores */}
              <div className="space-y-4">
                <h4 className="font-medium">Paleta de Cores</h4>
                <div className="space-y-3">
                  <ToggleGroup
                    type="single"
                    defaultValue="blue"
                    className="flex-wrap"
                  >
                    <ToggleGroupItem value="red" className="p-3">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-red-500"></div>
                        <span className="text-xs">Vermelho</span>
                      </div>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="blue" className="p-3">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                        <span className="text-xs">Azul</span>
                      </div>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="green" className="p-3">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                        <span className="text-xs">Verde</span>
                      </div>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="purple" className="p-3">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                        <span className="text-xs">Roxo</span>
                      </div>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="orange" className="p-3">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                        <span className="text-xs">Laranja</span>
                      </div>
                    </ToggleGroupItem>
                    <ToggleGroupItem value="pink" className="p-3">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-pink-500"></div>
                        <span className="text-xs">Rosa</span>
                      </div>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>

              {/* Toggle Group com Status */}
              <div className="space-y-4">
                <h4 className="font-medium">Status do Projeto</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="in-progress"
                  className="grid grid-cols-2 md:grid-cols-4 gap-2"
                >
                  <ToggleGroupItem
                    value="planning"
                    className="flex-col p-4 h-auto"
                  >
                    <div className="text-2xl mb-2">📋</div>
                    <div className="text-sm font-medium">Planejamento</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Preparando
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="in-progress"
                    className="flex-col p-4 h-auto"
                  >
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-sm font-medium">Em Progresso</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Trabalhando
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="review"
                    className="flex-col p-4 h-auto"
                  >
                    <div className="text-2xl mb-2">👀</div>
                    <div className="text-sm font-medium">Em Revisão</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Analisando
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="completed"
                    className="flex-col p-4 h-auto"
                  >
                    <div className="text-2xl mb-2">✅</div>
                    <div className="text-sm font-medium">Concluído</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Finalizado
                    </div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Toggle Group de Prioridades */}
              <div className="space-y-4">
                <h4 className="font-medium">Níveis de Prioridade</h4>
                <ToggleGroup type="single" defaultValue="medium">
                  <ToggleGroupItem
                    value="low"
                    className="border-green-200 text-green-700 data-[state=on]:bg-green-100"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Baixa</span>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="medium"
                    className="border-yellow-200 text-yellow-700 data-[state=on]:bg-yellow-100"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span>Média</span>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="high"
                    className="border-orange-200 text-orange-700 data-[state=on]:bg-orange-100"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span>Alta</span>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="urgent"
                    className="border-red-200 text-red-700 data-[state=on]:bg-red-100"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span>Urgente</span>
                    </div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Toggle Group de Moedas */}
              <div className="space-y-4">
                <h4 className="font-medium">Seletor de Moeda</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="usd"
                  className="flex-wrap"
                >
                  <ToggleGroupItem value="usd" className="flex-col p-3">
                    <div className="text-lg mb-1">🇺🇸</div>
                    <div className="text-sm font-medium">USD</div>
                    <div className="text-xs text-muted-foreground">Dólar</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="eur" className="flex-col p-3">
                    <div className="text-lg mb-1">🇪🇺</div>
                    <div className="text-sm font-medium">EUR</div>
                    <div className="text-xs text-muted-foreground">Euro</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="brl" className="flex-col p-3">
                    <div className="text-lg mb-1">🇧🇷</div>
                    <div className="text-sm font-medium">BRL</div>
                    <div className="text-xs text-muted-foreground">Real</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="gbp" className="flex-col p-3">
                    <div className="text-lg mb-1">🇬🇧</div>
                    <div className="text-sm font-medium">GBP</div>
                    <div className="text-xs text-muted-foreground">Libra</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="jpy" className="flex-col p-3">
                    <div className="text-lg mb-1">🇯🇵</div>
                    <div className="text-sm font-medium">JPY</div>
                    <div className="text-xs text-muted-foreground">Iene</div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Toggle Group de Intervalos de Tempo */}
              <div className="space-y-4">
                <h4 className="font-medium">Intervalos de Backup</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="daily"
                  className="grid grid-cols-2 md:grid-cols-4 gap-2"
                >
                  <ToggleGroupItem
                    value="hourly"
                    className="flex-col p-3 h-auto"
                  >
                    <div className="text-xl mb-2">⏰</div>
                    <div className="text-sm font-medium">A cada hora</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      24x/dia
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="daily"
                    className="flex-col p-3 h-auto"
                  >
                    <div className="text-xl mb-2">📅</div>
                    <div className="text-sm font-medium">Diário</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      1x/dia
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="weekly"
                    className="flex-col p-3 h-auto"
                  >
                    <div className="text-xl mb-2">📊</div>
                    <div className="text-sm font-medium">Semanal</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      1x/semana
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="monthly"
                    className="flex-col p-3 h-auto"
                  >
                    <div className="text-xl mb-2">🗓️</div>
                    <div className="text-sm font-medium">Mensal</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      1x/mês
                    </div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Toggle Group de Planos */}
              <div className="space-y-4">
                <h4 className="font-medium">Planos de Assinatura</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="pro"
                  className="grid md:grid-cols-3 gap-3"
                >
                  <ToggleGroupItem
                    value="basic"
                    className="flex-col p-6 h-auto border-2"
                  >
                    <div className="text-2xl mb-3">🥉</div>
                    <div className="text-lg font-bold">Básico</div>
                    <div className="text-2xl font-bold text-primary my-2">
                      $9
                    </div>
                    <div className="text-xs text-muted-foreground">por mês</div>
                    <div className="mt-3 space-y-1 text-xs">
                      <div>• 10 projetos</div>
                      <div>• 1GB armazenamento</div>
                      <div>• Suporte por email</div>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="pro"
                    className="flex-col p-6 h-auto border-2 border-primary"
                  >
                    <div className="text-2xl mb-3">🥈</div>
                    <div className="text-lg font-bold">Profissional</div>
                    <div className="text-2xl font-bold text-primary my-2">
                      $29
                    </div>
                    <div className="text-xs text-muted-foreground">por mês</div>
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs">
                      Popular
                    </Badge>
                    <div className="mt-3 space-y-1 text-xs">
                      <div>• 100 projetos</div>
                      <div>• 10GB armazenamento</div>
                      <div>• Suporte prioritário</div>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="enterprise"
                    className="flex-col p-6 h-auto border-2 relative"
                  >
                    <div className="text-2xl mb-3">🥇</div>
                    <div className="text-lg font-bold">Enterprise</div>
                    <div className="text-2xl font-bold text-primary my-2">
                      $99
                    </div>
                    <div className="text-xs text-muted-foreground">por mês</div>
                    <div className="mt-3 space-y-1 text-xs">
                      <div>• Projetos ilimitados</div>
                      <div>• 100GB armazenamento</div>
                      <div>• Suporte 24/7</div>
                    </div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Toggle Group de Dispositivos */}
              <div className="space-y-4">
                <h4 className="font-medium">Dispositivos Conectados</h4>
                <ToggleGroup
                  type="multiple"
                  className="grid grid-cols-2 md:grid-cols-4 gap-3"
                >
                  <ToggleGroupItem
                    value="phone"
                    className="flex-col p-4 h-auto"
                  >
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-sm font-medium">iPhone 13</div>
                    <div className="text-xs text-green-600 mt-1">• Online</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="laptop"
                    className="flex-col p-4 h-auto"
                  >
                    <div className="text-2xl mb-2">💻</div>
                    <div className="text-sm font-medium">MacBook Pro</div>
                    <div className="text-xs text-green-600 mt-1">• Online</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="tablet"
                    className="flex-col p-4 h-auto"
                  >
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-sm font-medium">iPad Air</div>
                    <div className="text-xs text-gray-600 mt-1">• Offline</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="watch"
                    className="flex-col p-4 h-auto"
                  >
                    <div className="text-2xl mb-2">⌚</div>
                    <div className="text-sm font-medium">Apple Watch</div>
                    <div className="text-xs text-green-600 mt-1">• Online</div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Toggle Group de Redes Sociais */}
              <div className="space-y-4">
                <h4 className="font-medium">Publicar em Redes Sociais</h4>
                <ToggleGroup
                  type="multiple"
                  defaultValue={["twitter", "linkedin"]}
                  className="flex-wrap"
                >
                  <ToggleGroupItem value="twitter" className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-blue-400 flex items-center justify-center text-white text-xs font-bold">
                        T
                      </div>
                      <span>Twitter</span>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="facebook" className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                        F
                      </div>
                      <span>Facebook</span>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="linkedin" className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-blue-700 flex items-center justify-center text-white text-xs font-bold">
                        In
                      </div>
                      <span>LinkedIn</span>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="instagram" className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                        Ig
                      </div>
                      <span>Instagram</span>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="youtube" className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-red-600 flex items-center justify-center text-white text-xs font-bold">
                        YT
                      </div>
                      <span>YouTube</span>
                    </div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Toggle Group de Qualidade de Vídeo */}
              <div className="space-y-4">
                <h4 className="font-medium">Qualidade de Streaming</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="1080p"
                  className="grid grid-cols-2 md:grid-cols-5 gap-2"
                >
                  <ToggleGroupItem value="480p" className="flex-col p-3">
                    <div className="text-sm font-bold">480p</div>
                    <div className="text-xs text-muted-foreground">SD</div>
                    <div className="text-xs text-green-600">Baixo</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="720p" className="flex-col p-3">
                    <div className="text-sm font-bold">720p</div>
                    <div className="text-xs text-muted-foreground">HD</div>
                    <div className="text-xs text-yellow-600">Médio</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="1080p" className="flex-col p-3">
                    <div className="text-sm font-bold">1080p</div>
                    <div className="text-xs text-muted-foreground">Full HD</div>
                    <div className="text-xs text-orange-600">Alto</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="1440p" className="flex-col p-3">
                    <div className="text-sm font-bold">1440p</div>
                    <div className="text-xs text-muted-foreground">2K</div>
                    <div className="text-xs text-red-600">Muito Alto</div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="2160p" className="flex-col p-3">
                    <div className="text-sm font-bold">2160p</div>
                    <div className="text-xs text-muted-foreground">4K</div>
                    <div className="text-xs text-purple-600">Ultra</div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Casos de Uso Criativos */}
        <Card>
          <CardHeader>
            <CardTitle>Casos de Uso Criativos</CardTitle>
            <CardDescription>
              Implementações únicas e criativas do ToggleGroup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Sistema de Avaliação */}
              <div className="space-y-4">
                <h4 className="font-medium">
                  Sistema de Avaliação por Estrelas
                </h4>
                <ToggleGroup
                  type="single"
                  defaultValue="4"
                  className="flex gap-1"
                >
                  <ToggleGroupItem value="1" className="p-2">
                    <span className="text-yellow-400 text-xl">⭐</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="2" className="p-2">
                    <div className="flex">
                      <span className="text-yellow-400 text-xl">⭐⭐</span>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="3" className="p-2">
                    <div className="flex">
                      <span className="text-yellow-400 text-xl">⭐⭐⭐</span>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="4" className="p-2">
                    <div className="flex">
                      <span className="text-yellow-400 text-xl">⭐⭐⭐⭐</span>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="5" className="p-2">
                    <div className="flex">
                      <span className="text-yellow-400 text-xl">
                        ⭐⭐⭐⭐⭐
                      </span>
                    </div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Controle de Volume Visual */}
              <div className="space-y-4">
                <h4 className="font-medium">Controle de Volume Visual</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="medium"
                  className="flex"
                >
                  <ToggleGroupItem value="mute" className="p-3">
                    <div className="flex flex-col items-center">
                      <span className="text-lg">🔇</span>
                      <div className="w-1 h-1 bg-gray-300 rounded mt-1"></div>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="low" className="p-3">
                    <div className="flex flex-col items-center">
                      <span className="text-lg">🔈</span>
                      <div className="w-1 h-2 bg-green-400 rounded mt-1"></div>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="medium" className="p-3">
                    <div className="flex flex-col items-center">
                      <span className="text-lg">🔉</span>
                      <div className="w-1 h-3 bg-yellow-400 rounded mt-1"></div>
                    </div>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="high" className="p-3">
                    <div className="flex flex-col items-center">
                      <span className="text-lg">🔊</span>
                      <div className="w-1 h-4 bg-red-400 rounded mt-1"></div>
                    </div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Seletor de Temperatura */}
              <div className="space-y-4">
                <h4 className="font-medium">Controle de Temperatura</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="22"
                  className="flex-wrap"
                >
                  <ToggleGroupItem
                    value="16"
                    className="flex-col p-3 text-blue-600 border-blue-200"
                  >
                    <span className="text-lg">❄️</span>
                    <span className="text-sm font-bold">16°C</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="18"
                    className="flex-col p-3 text-blue-500 border-blue-200"
                  >
                    <span className="text-lg">🧊</span>
                    <span className="text-sm font-bold">18°C</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="20"
                    className="flex-col p-3 text-green-600 border-green-200"
                  >
                    <span className="text-lg">🌿</span>
                    <span className="text-sm font-bold">20°C</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="22"
                    className="flex-col p-3 text-green-500 border-green-200"
                  >
                    <span className="text-lg">🌤️</span>
                    <span className="text-sm font-bold">22°C</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="24"
                    className="flex-col p-3 text-orange-500 border-orange-200"
                  >
                    <span className="text-lg">☀️</span>
                    <span className="text-sm font-bold">24°C</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="26"
                    className="flex-col p-3 text-red-500 border-red-200"
                  >
                    <span className="text-lg">🔥</span>
                    <span className="text-sm font-bold">26°C</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Fases da Lua */}
              <div className="space-y-4">
                <h4 className="font-medium">Fases da Lua</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="full"
                  className="flex gap-2"
                >
                  <ToggleGroupItem value="new" className="flex-col p-3">
                    <span className="text-2xl">🌑</span>
                    <span className="text-xs mt-1">Nova</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="waxing-crescent"
                    className="flex-col p-3"
                  >
                    <span className="text-2xl">🌒</span>
                    <span className="text-xs mt-1">Crescente</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="first-quarter"
                    className="flex-col p-3"
                  >
                    <span className="text-2xl">🌓</span>
                    <span className="text-xs mt-1">Quarto</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="waxing-gibbous"
                    className="flex-col p-3"
                  >
                    <span className="text-2xl">🌔</span>
                    <span className="text-xs mt-1">Crescente</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="full" className="flex-col p-3">
                    <span className="text-2xl">🌕</span>
                    <span className="text-xs mt-1">Cheia</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="waning-gibbous"
                    className="flex-col p-3"
                  >
                    <span className="text-2xl">🌖</span>
                    <span className="text-xs mt-1">Minguante</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="last-quarter"
                    className="flex-col p-3"
                  >
                    <span className="text-2xl">🌗</span>
                    <span className="text-xs mt-1">Quarto</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="waning-crescent"
                    className="flex-col p-3"
                  >
                    <span className="text-2xl">🌘</span>
                    <span className="text-xs mt-1">Minguante</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Humor/Emoji */}
              <div className="space-y-4">
                <h4 className="font-medium">Como você está se sentindo?</h4>
                <ToggleGroup type="single" className="flex gap-2">
                  <ToggleGroupItem value="very-sad" className="p-4">
                    <span className="text-3xl">😢</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="sad" className="p-4">
                    <span className="text-3xl">😔</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="neutral" className="p-4">
                    <span className="text-3xl">😐</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="happy" className="p-4">
                    <span className="text-3xl">😊</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="very-happy" className="p-4">
                    <span className="text-3xl">🤩</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Intensidade de Exercício */}
              <div className="space-y-4">
                <h4 className="font-medium">Intensidade do Treino</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="moderate"
                  className="grid grid-cols-1 md:grid-cols-4 gap-2"
                >
                  <ToggleGroupItem
                    value="light"
                    className="flex-col p-4 border-green-200"
                  >
                    <span className="text-xl mb-2">🚶</span>
                    <span className="font-medium">Leve</span>
                    <span className="text-xs text-green-600 mt-1">
                      Caminhada
                    </span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="moderate"
                    className="flex-col p-4 border-yellow-200"
                  >
                    <span className="text-xl mb-2">🏃</span>
                    <span className="font-medium">Moderado</span>
                    <span className="text-xs text-yellow-600 mt-1">
                      Corrida
                    </span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="vigorous"
                    className="flex-col p-4 border-orange-200"
                  >
                    <span className="text-xl mb-2">🏋️</span>
                    <span className="font-medium">Intenso</span>
                    <span className="text-xs text-orange-600 mt-1">
                      Musculação
                    </span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="extreme"
                    className="flex-col p-4 border-red-200"
                  >
                    <span className="text-xl mb-2">🔥</span>
                    <span className="font-medium">Extremo</span>
                    <span className="text-xs text-red-600 mt-1">HIIT</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Elementos da Natureza */}
              <div className="space-y-4">
                <h4 className="font-medium">Elementos da Natureza</h4>
                <ToggleGroup
                  type="multiple"
                  className="grid grid-cols-2 md:grid-cols-4 gap-3"
                >
                  <ToggleGroupItem
                    value="fire"
                    className="flex-col p-4 border-red-200 text-red-600"
                  >
                    <span className="text-2xl mb-2">🔥</span>
                    <span className="font-medium">Fogo</span>
                    <span className="text-xs mt-1">Energia, Paixão</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="water"
                    className="flex-col p-4 border-blue-200 text-blue-600"
                  >
                    <span className="text-2xl mb-2">💧</span>
                    <span className="font-medium">Água</span>
                    <span className="text-xs mt-1">Fluidez, Calma</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="earth"
                    className="flex-col p-4 border-green-200 text-green-600"
                  >
                    <span className="text-2xl mb-2">🌍</span>
                    <span className="font-medium">Terra</span>
                    <span className="text-xs mt-1">Estabilidade</span>
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="air"
                    className="flex-col p-4 border-gray-200 text-gray-600"
                  >
                    <span className="text-2xl mb-2">💨</span>
                    <span className="font-medium">Ar</span>
                    <span className="text-xs mt-1">Liberdade</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Variantes Mini e Compactas */}
        <Card>
          <CardHeader>
            <CardTitle>Variantes Mini e Compactas</CardTitle>
            <CardDescription>
              Versões compactas e minimalistas do ToggleGroup para espaços
              limitados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Toggle Pills */}
              <div className="space-y-3">
                <h4 className="font-medium">Toggle Pills</h4>
                <ToggleGroup
                  type="multiple"
                  size="sm"
                  className="flex-wrap gap-1"
                >
                  <ToggleGroupItem
                    value="react"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    React
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="vue"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    Vue
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="angular"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    Angular
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="svelte"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    Svelte
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="next"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    Next.js
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="nuxt"
                    className="px-3 py-1 text-xs rounded-full"
                  >
                    Nuxt.js
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Dots Navigation */}
              <div className="space-y-3">
                <h4 className="font-medium">Navegação por Pontos</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="2"
                  className="flex gap-2"
                >
                  <ToggleGroupItem
                    value="1"
                    className="w-3 h-3 p-0 rounded-full data-[state=on]:bg-primary"
                  ></ToggleGroupItem>
                  <ToggleGroupItem
                    value="2"
                    className="w-3 h-3 p-0 rounded-full data-[state=on]:bg-primary"
                  ></ToggleGroupItem>
                  <ToggleGroupItem
                    value="3"
                    className="w-3 h-3 p-0 rounded-full data-[state=on]:bg-primary"
                  ></ToggleGroupItem>
                  <ToggleGroupItem
                    value="4"
                    className="w-3 h-3 p-0 rounded-full data-[state=on]:bg-primary"
                  ></ToggleGroupItem>
                  <ToggleGroupItem
                    value="5"
                    className="w-3 h-3 p-0 rounded-full data-[state=on]:bg-primary"
                  ></ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Mini Icons */}
              <div className="space-y-3">
                <h4 className="font-medium">Ícones Compactos</h4>
                <ToggleGroup type="multiple" size="sm" className="flex gap-1">
                  <ToggleGroupItem value="save" className="w-8 h-8 p-0">
                    💾
                  </ToggleGroupItem>
                  <ToggleGroupItem value="print" className="w-8 h-8 p-0">
                    🖨️
                  </ToggleGroupItem>
                  <ToggleGroupItem value="share" className="w-8 h-8 p-0">
                    📤
                  </ToggleGroupItem>
                  <ToggleGroupItem value="copy" className="w-8 h-8 p-0">
                    📋
                  </ToggleGroupItem>
                  <ToggleGroupItem value="edit" className="w-8 h-8 p-0">
                    ✏️
                  </ToggleGroupItem>
                  <ToggleGroupItem value="delete" className="w-8 h-8 p-0">
                    🗑️
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Color Dots */}
              <div className="space-y-3">
                <h4 className="font-medium">Seletor de Cor Compacto</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="blue"
                  className="flex gap-2"
                >
                  <ToggleGroupItem
                    value="red"
                    className="w-6 h-6 p-0 rounded-full bg-red-500 border-2 data-[state=on]:ring-2 data-[state=on]:ring-red-300"
                  ></ToggleGroupItem>
                  <ToggleGroupItem
                    value="blue"
                    className="w-6 h-6 p-0 rounded-full bg-blue-500 border-2 data-[state=on]:ring-2 data-[state=on]:ring-blue-300"
                  ></ToggleGroupItem>
                  <ToggleGroupItem
                    value="green"
                    className="w-6 h-6 p-0 rounded-full bg-green-500 border-2 data-[state=on]:ring-2 data-[state=on]:ring-green-300"
                  ></ToggleGroupItem>
                  <ToggleGroupItem
                    value="yellow"
                    className="w-6 h-6 p-0 rounded-full bg-yellow-500 border-2 data-[state=on]:ring-2 data-[state=on]:ring-yellow-300"
                  ></ToggleGroupItem>
                  <ToggleGroupItem
                    value="purple"
                    className="w-6 h-6 p-0 rounded-full bg-purple-500 border-2 data-[state=on]:ring-2 data-[state=on]:ring-purple-300"
                  ></ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Number badges */}
              <div className="space-y-3">
                <h4 className="font-medium">Seletor Numérico</h4>
                <ToggleGroup
                  type="single"
                  defaultValue="5"
                  size="sm"
                  className="flex gap-1"
                >
                  <ToggleGroupItem
                    value="1"
                    className="w-8 h-8 p-0 rounded-full text-xs font-bold"
                  >
                    1
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="2"
                    className="w-8 h-8 p-0 rounded-full text-xs font-bold"
                  >
                    2
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="3"
                    className="w-8 h-8 p-0 rounded-full text-xs font-bold"
                  >
                    3
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="4"
                    className="w-8 h-8 p-0 rounded-full text-xs font-bold"
                  >
                    4
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="5"
                    className="w-8 h-8 p-0 rounded-full text-xs font-bold"
                  >
                    5
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="6"
                    className="w-8 h-8 p-0 rounded-full text-xs font-bold"
                  >
                    6
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="7"
                    className="w-8 h-8 p-0 rounded-full text-xs font-bold"
                  >
                    7
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="8"
                    className="w-8 h-8 p-0 rounded-full text-xs font-bold"
                  >
                    8
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="9"
                    className="w-8 h-8 p-0 rounded-full text-xs font-bold"
                  >
                    9
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Progress Steps */}
              <div className="space-y-3">
                <h4 className="font-medium">Etapas de Progresso</h4>
                <div className="flex items-center gap-2">
                  <ToggleGroup
                    type="single"
                    defaultValue="step2"
                    className="flex"
                  >
                    <ToggleGroupItem
                      value="step1"
                      className="flex items-center px-3 py-2 text-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center mr-2">
                        ✓
                      </div>
                      Configurar
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="step2"
                      className="flex items-center px-3 py-2 text-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mr-2">
                        2
                      </div>
                      Personalizar
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="step3"
                      className="flex items-center px-3 py-2 text-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs flex items-center justify-center mr-2">
                        3
                      </div>
                      Finalizar
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>

              {/* Inline Tags */}
              <div className="space-y-3">
                <h4 className="font-medium">Tags Inline</h4>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-muted-foreground">
                    Tecnologias:
                  </span>
                  <ToggleGroup
                    type="multiple"
                    size="sm"
                    className="flex flex-wrap gap-1"
                  >
                    <ToggleGroupItem
                      value="js"
                      className="px-2 py-1 text-xs border rounded"
                    >
                      JavaScript
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="ts"
                      className="px-2 py-1 text-xs border rounded"
                    >
                      TypeScript
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="react"
                      className="px-2 py-1 text-xs border rounded"
                    >
                      React
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="node"
                      className="px-2 py-1 text-xs border rounded"
                    >
                      Node.js
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="python"
                      className="px-2 py-1 text-xs border rounded"
                    >
                      Python
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <h4 className="font-medium">Ações Rápidas</h4>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                      📄
                    </div>
                    <div>
                      <div className="font-medium text-sm">Documento.pdf</div>
                      <div className="text-xs text-muted-foreground">
                        2.4 MB
                      </div>
                    </div>
                  </div>
                  <ToggleGroup type="multiple" size="sm" className="flex gap-1">
                    <ToggleGroupItem value="download" className="w-8 h-8 p-0">
                      ⬇️
                    </ToggleGroupItem>
                    <ToggleGroupItem value="share" className="w-8 h-8 p-0">
                      📤
                    </ToggleGroupItem>
                    <ToggleGroupItem value="star" className="w-8 h-8 p-0">
                      ⭐
                    </ToggleGroupItem>
                    <ToggleGroupItem value="more" className="w-8 h-8 p-0">
                      ⋯
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dicas de Uso */}
        <Card>
          <CardHeader>
            <CardTitle>Boas Práticas</CardTitle>
            <CardDescription>
              Dicas para usar o ToggleGroup efetivamente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-green-700">✅ Faça</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs mt-0.5 bg-green-50"
                    >
                      1
                    </Badge>
                    <span>
                      Use `type="single"` quando apenas uma opção deve ser
                      selecionada
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs mt-0.5 bg-green-50"
                    >
                      2
                    </Badge>
                    <span>
                      Use `type="multiple"` para permitir múltiplas seleções
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs mt-0.5 bg-green-50"
                    >
                      3
                    </Badge>
                    <span>Agrupe opções relacionadas logicamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs mt-0.5 bg-green-50"
                    >
                      4
                    </Badge>
                    <span>Use ícones para melhor comunicação visual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs mt-0.5 bg-green-50"
                    >
                      5
                    </Badge>
                    <span>Controle o estado para feedback dinâmico</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-red-700">❌ Evite</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs mt-0.5 bg-red-50"
                    >
                      1
                    </Badge>
                    <span>Muitas opções em um único grupo (máx. 7)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs mt-0.5 bg-red-50"
                    >
                      2
                    </Badge>
                    <span>Labels muito longos que quebram o layout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs mt-0.5 bg-red-50"
                    >
                      3
                    </Badge>
                    <span>Misturar opções não relacionadas no mesmo grupo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs mt-0.5 bg-red-50"
                    >
                      4
                    </Badge>
                    <span>Usar quando um Select seria mais apropriado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs mt-0.5 bg-red-50"
                    >
                      5
                    </Badge>
                    <span>
                      Esquecer de indicar qual tipo de seleção é permitido
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
