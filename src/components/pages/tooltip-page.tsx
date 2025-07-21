import React from "react";
import { ComponentDocs } from "../layout/ComponentDocs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button,
  Badge,
  Input,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../index";

export function TooltipPage() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Tooltip Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de dica contextual que aparece ao passar o mouse ou focar
          em um elemento.
        </p>
      </div>

      <TooltipProvider>
        <div className="grid gap-6">
          {/* Tooltip Básico */}
          <Card>
            <CardHeader>
              <CardTitle>Tooltip Básico</CardTitle>
              <CardDescription>
                Exemplos básicos de uso do tooltip
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Tooltips Simples</h4>
                  <div className="flex flex-wrap gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button>Passe o mouse aqui</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Esta é uma dica simples!</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Botão com dica</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Clique para executar uma ação</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="secondary">Informações</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Este botão fornece informações adicionais</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Tooltips com Ícones</h4>
                  <div className="flex flex-wrap gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon">
                          <span>❓</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Precisa de ajuda? Clique aqui!</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="outline">
                          <span>⚙️</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Abrir configurações</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="secondary">
                          <span>📥</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Baixar arquivo</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="destructive">
                          <span>🗑️</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Excluir item (ação irreversível)</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">
                    Tooltips em Elementos de Texto
                  </h4>
                  <div className="space-y-3">
                    <p className="text-sm">
                      Este texto contém uma{" "}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="underline cursor-help font-medium">
                            palavra especial
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Esta palavra tem um significado específico no
                            contexto
                          </p>
                        </TooltipContent>
                      </Tooltip>{" "}
                      que precisa de explicação.
                    </p>

                    <p className="text-sm">
                      Você pode ver mais detalhes sobre{" "}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge variant="outline" className="cursor-help">
                            este conceito
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="max-w-xs">
                            <p>
                              Este é um conceito complexo que requer uma
                              explicação mais detalhada para melhor compreensão.
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>{" "}
                      aqui.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tooltips Avançados */}
          <Card>
            <CardHeader>
              <CardTitle>Tooltips Avançados</CardTitle>
              <CardDescription>
                Tooltips com conteúdo rico e posicionamento personalizado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Conteúdo Rico</h4>
                  <div className="flex flex-wrap gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button>Tooltip com Lista</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="space-y-2">
                          <p className="font-medium">Recursos inclusos:</p>
                          <ul className="text-sm space-y-1">
                            <li>• Acesso ilimitado</li>
                            <li>• Suporte prioritário</li>
                            <li>• Backup automático</li>
                          </ul>
                        </div>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Status do Sistema</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="space-y-2">
                          <p className="font-medium">Status dos Serviços:</p>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span>API: Online</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span>Database: Lento</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span>CDN: Online</span>
                            </div>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="secondary">Estatísticas</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="space-y-2">
                          <p className="font-medium">Dados do Mês:</p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>Visitantes:</div>
                            <div className="font-medium">1,234</div>
                            <div>Conversões:</div>
                            <div className="font-medium">45</div>
                            <div>Taxa:</div>
                            <div className="font-medium">3.65%</div>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Posicionamento</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Topo
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>Tooltip no topo</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Direita
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Tooltip à direita</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Baixo
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Tooltip embaixo</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full">
                          Esquerda
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>Tooltip à esquerda</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Tooltip Controlado</h4>
                  <div className="flex items-center gap-4">
                    <Tooltip open={isOpen} onOpenChange={setIsOpen}>
                      <TooltipTrigger asChild>
                        <Button>Tooltip Controlado</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Este tooltip é controlado programaticamente</p>
                      </TooltipContent>
                    </Tooltip>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {isOpen ? "Fechar" : "Abrir"} Tooltip
                    </Button>

                    <Badge variant={isOpen ? "default" : "secondary"}>
                      {isOpen ? "Aberto" : "Fechado"}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tooltips em Formulários */}
          <Card>
            <CardHeader>
              <CardTitle>Tooltips em Formulários</CardTitle>
              <CardDescription>
                Usando tooltips para auxiliar no preenchimento de formulários
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label htmlFor="username" className="text-sm font-medium">
                      Nome de Usuário
                    </label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost" className="w-4 h-4">
                          <span className="text-xs">❓</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="max-w-xs">
                          <p>
                            Deve ter entre 3-20 caracteres, apenas letras,
                            números e underscore.
                          </p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Input
                    id="username"
                    placeholder="Digite seu nome de usuário"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label htmlFor="password" className="text-sm font-medium">
                      Senha
                    </label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost" className="w-4 h-4">
                          <span className="text-xs">🔒</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="space-y-2">
                          <p className="font-medium">Requisitos da senha:</p>
                          <ul className="text-sm space-y-1">
                            <li>• Mínimo 8 caracteres</li>
                            <li>• Pelo menos 1 letra maiúscula</li>
                            <li>• Pelo menos 1 número</li>
                            <li>• Pelo menos 1 símbolo especial</li>
                          </ul>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Digite sua senha"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost" className="w-4 h-4">
                          <span className="text-xs">📧</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Usaremos este email para enviar notificações
                          importantes e atualizações do sistema.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefone (Opcional)
                    </label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost" className="w-4 h-4">
                          <span className="text-xs">📱</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="space-y-1">
                          <p>Formato: (XX) XXXXX-XXXX</p>
                          <p className="text-xs text-muted-foreground">
                            Usado apenas para verificação de segurança
                          </p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit">Criar Conta</Button>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Tooltips em Interface */}
          <Card>
            <CardHeader>
              <CardTitle>Tooltips em Interface</CardTitle>
              <CardDescription>
                Exemplos práticos de tooltips em elementos de interface
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Barra de Ferramentas</h4>
                  <div className="flex gap-1 p-2 border rounded-lg bg-muted/20">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <span>📄</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Novo documento (Ctrl+N)</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <span>📁</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Abrir arquivo (Ctrl+O)</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <span>💾</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Salvar (Ctrl+S)</p>
                      </TooltipContent>
                    </Tooltip>

                    <div className="w-px bg-border mx-1" />

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <span>↶</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Desfazer (Ctrl+Z)</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <span>↷</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Refazer (Ctrl+Y)</p>
                      </TooltipContent>
                    </Tooltip>

                    <div className="w-px bg-border mx-1" />

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <span className="font-bold">B</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Negrito (Ctrl+B)</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <span className="italic">I</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Itálico (Ctrl+I)</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <span className="underline">U</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Sublinhado (Ctrl+U)</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Lista de Usuários</h4>
                  <div className="space-y-3">
                    {[
                      {
                        name: "João Silva",
                        email: "joao@email.com",
                        status: "online",
                        role: "Admin",
                      },
                      {
                        name: "Maria Santos",
                        email: "maria@email.com",
                        status: "away",
                        role: "Editor",
                      },
                      {
                        name: "Pedro Costa",
                        email: "pedro@email.com",
                        status: "offline",
                        role: "Viewer",
                      },
                    ].map((user, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 border rounded-lg"
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Avatar className="cursor-help">
                              <AvatarImage src={`/avatar-${index + 1}.jpg`} />
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="space-y-1">
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm">{user.email}</p>
                              <p className="text-sm">Função: {user.role}</p>
                              <p className="text-sm">Status: {user.status}</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>

                        <div className="flex-1">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {user.email}
                          </div>
                        </div>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge
                              variant={
                                user.status === "online"
                                  ? "default"
                                  : user.status === "away"
                                  ? "secondary"
                                  : "outline"
                              }
                              className="cursor-help"
                            >
                              {user.status}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              {user.status === "online" &&
                                "Usuário está online e disponível"}
                              {user.status === "away" && "Usuário está ausente"}
                              {user.status === "offline" &&
                                "Usuário está offline"}
                            </p>
                          </TooltipContent>
                        </Tooltip>

                        <div className="flex gap-1">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="w-8 h-8"
                              >
                                <span>✏️</span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Editar usuário</p>
                            </TooltipContent>
                          </Tooltip>

                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="w-8 h-8"
                              >
                                <span>🗑️</span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Remover usuário</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Dashboard de Métricas</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Card className="cursor-help">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-2xl font-bold">1,234</p>
                                <p className="text-sm text-muted-foreground">
                                  Visitantes
                                </p>
                              </div>
                              <span className="text-2xl">👥</span>
                            </div>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="space-y-1">
                          <p className="font-medium">Visitantes únicos hoje</p>
                          <p className="text-sm">+15% comparado a ontem</p>
                          <p className="text-xs text-muted-foreground">
                            Atualizado há 5 minutos
                          </p>
                        </div>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Card className="cursor-help">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-2xl font-bold">R$ 4,567</p>
                                <p className="text-sm text-muted-foreground">
                                  Receita
                                </p>
                              </div>
                              <span className="text-2xl">💰</span>
                            </div>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="space-y-1">
                          <p className="font-medium">Receita do mês</p>
                          <p className="text-sm">Meta: R$ 5,000 (91%)</p>
                          <p className="text-xs text-muted-foreground">
                            Faltam R$ 433 para a meta
                          </p>
                        </div>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Card className="cursor-help">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-2xl font-bold">89%</p>
                                <p className="text-sm text-muted-foreground">
                                  Satisfação
                                </p>
                              </div>
                              <span className="text-2xl">⭐</span>
                            </div>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="space-y-1">
                          <p className="font-medium">Índice de satisfação</p>
                          <p className="text-sm">Baseado em 156 avaliações</p>
                          <p className="text-xs text-muted-foreground">
                            Média dos últimos 30 dias
                          </p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
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
                Diretrizes para usar tooltips efetivamente
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
                        Use tooltips para explicar ícones e abreviações
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-green-50"
                      >
                        2
                      </Badge>
                      <span>Mantenha o texto conciso e direto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-green-50"
                      >
                        3
                      </Badge>
                      <span>Inclua atalhos de teclado quando relevante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-green-50"
                      >
                        4
                      </Badge>
                      <span>Use para contextualizar dados e estatísticas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-green-50"
                      >
                        5
                      </Badge>
                      <span>
                        Posicione adequadamente para não obstruir conteúdo
                      </span>
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
                      <span>
                        Tooltips em elementos que já são auto-explicativos
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-red-50"
                      >
                        2
                      </Badge>
                      <span>Texto muito longo que não cabe na tela</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-red-50"
                      >
                        3
                      </Badge>
                      <span>Tooltips em elementos móveis ou que se movem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-red-50"
                      >
                        4
                      </Badge>
                      <span>
                        Usar para informações críticas que o usuário sempre
                        precisará
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-red-50"
                      >
                        5
                      </Badge>
                      <span>Tooltips que bloqueiam interações importantes</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">
                  💡 Dica de Acessibilidade
                </h4>
                <p className="text-sm text-blue-700">
                  Tooltips devem ser acessíveis via teclado e leitores de tela.
                  O componente Tooltip do shadcn/ui já inclui as propriedades
                  ARIA adequadas. Para elementos customizados, considere usar as
                  props `aria-label` ou `aria-describedby` quando appropriate.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </TooltipProvider>
    </div>
    </div>
    </div>
  );
}
