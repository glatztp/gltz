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
