import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Progress,
  Button,
  Badge,
} from "../../index";

export function ProgressPage() {
  const [progress, setProgress] = React.useState(33);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Progress Component</h1>
            <p className="text-muted-foreground mt-2">
              Componente de barra de progresso para mostrar o andamento de
              tarefas e processos.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Progress Básico */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Básico</CardTitle>
                <CardDescription>
                  Barras de progresso com diferentes valores
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso básico</span>
                    <span>25%</span>
                  </div>
                  <Progress value={25} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Meio caminho</span>
                    <span>50%</span>
                  </div>
                  <Progress value={50} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Quase completo</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completo</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} />
                </div>
              </CardContent>
            </Card>

            {/* Progress Animado */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Animado</CardTitle>
                <CardDescription>
                  Barra que atualiza automaticamente para demonstrar animação
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Download em progresso</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => setProgress(Math.min(100, progress + 10))}
                    size="sm"
                    disabled={progress >= 100}
                  >
                    +10%
                  </Button>
                  <Button
                    onClick={() => setProgress(Math.max(0, progress - 10))}
                    size="sm"
                    variant="outline"
                    disabled={progress <= 0}
                  >
                    -10%
                  </Button>
                  <Button
                    onClick={() => setProgress(0)}
                    size="sm"
                    variant="outline"
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Progress com Diferentes Tamanhos */}
            <Card>
              <CardHeader>
                <CardTitle>Diferentes Tamanhos</CardTitle>
                <CardDescription>
                  Variações no tamanho das barras de progresso
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <span className="text-sm font-medium">Fino</span>
                  <Progress value={60} className="h-1" />
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-medium">Padrão</span>
                  <Progress value={60} />
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-medium">Grosso</span>
                  <Progress value={60} className="h-3" />
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-medium">Extra Grosso</span>
                  <Progress value={60} className="h-4" />
                </div>
              </CardContent>
            </Card>

            {/* Progress com Cores Customizadas */}
            <Card>
              <CardHeader>
                <CardTitle>Cores Customizadas</CardTitle>
                <CardDescription>
                  Barras de progresso com diferentes cores para diferentes
                  contextos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sucesso</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="[&>div]:bg-green-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Atenção</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="[&>div]:bg-yellow-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Erro</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="[&>div]:bg-red-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Informação</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="[&>div]:bg-blue-500" />
                </div>
              </CardContent>
            </Card>

            {/* Progress em Contexto */}
            <Card>
              <CardHeader>
                <CardTitle>Exemplos de Uso</CardTitle>
                <CardDescription>
                  Progress bars em diferentes situações práticas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload de Arquivos */}
                <div className="space-y-3">
                  <h4 className="font-medium">Upload de Arquivos</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>documento.pdf</span>
                          <span>2.3 MB / 3.1 MB</span>
                        </div>
                        <Progress value={74} className="h-2" />
                      </div>
                      <Badge variant="secondary">74%</Badge>
                    </div>

                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>imagem.jpg</span>
                          <span>Concluído</span>
                        </div>
                        <Progress
                          value={100}
                          className="h-2 [&>div]:bg-green-500"
                        />
                      </div>
                      <Badge className="bg-green-600 hover:bg-green-700">
                        ✓
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>video.mp4</span>
                          <span>Aguardando...</span>
                        </div>
                        <Progress value={0} className="h-2" />
                      </div>
                      <Badge variant="outline">0%</Badge>
                    </div>
                  </div>
                </div>

                {/* Skills/Competências */}
                <div className="space-y-3">
                  <h4 className="font-medium">Nível de Competências</h4>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>React</span>
                        <span>Avançado</span>
                      </div>
                      <Progress value={90} className="[&>div]:bg-blue-500" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>TypeScript</span>
                        <span>Intermediário</span>
                      </div>
                      <Progress value={70} className="[&>div]:bg-blue-600" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Node.js</span>
                        <span>Intermediário</span>
                      </div>
                      <Progress value={65} className="[&>div]:bg-green-600" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Python</span>
                        <span>Básico</span>
                      </div>
                      <Progress value={40} className="[&>div]:bg-yellow-600" />
                    </div>
                  </div>
                </div>

                {/* Metas/Objetivos */}
                <div className="space-y-3">
                  <h4 className="font-medium">Metas do Mês</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Vendas do Mês</span>
                          <span>R$ 45.000 / R$ 50.000</span>
                        </div>
                        <Progress
                          value={90}
                          className="h-2 [&>div]:bg-green-500"
                        />
                      </div>
                      <Badge className="bg-green-100 text-green-800">90%</Badge>
                    </div>

                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Novos Clientes</span>
                          <span>23 / 30</span>
                        </div>
                        <Progress
                          value={77}
                          className="h-2 [&>div]:bg-blue-500"
                        />
                      </div>
                      <Badge variant="secondary">77%</Badge>
                    </div>

                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Projetos Concluídos</span>
                          <span>8 / 15</span>
                        </div>
                        <Progress
                          value={53}
                          className="h-2 [&>div]:bg-yellow-500"
                        />
                      </div>
                      <Badge variant="outline">53%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Indeterminado (Simulado) */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Indeterminado</CardTitle>
                <CardDescription>
                  Simulando um progresso contínuo para tarefas sem duração
                  definida
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <span className="text-sm font-medium">
                    Processando dados...
                  </span>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full animate-pulse"
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-medium">
                    Sincronizando com servidor...
                  </span>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full animate-pulse"
                      style={{ width: "50%" }}
                    />
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  💡 Para animações mais sofisticadas, você pode usar CSS ou
                  bibliotecas como Framer Motion
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
