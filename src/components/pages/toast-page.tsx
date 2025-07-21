import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Toast,
  Button,
  Input,
  Textarea,
  Badge,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../index";

export function ToastPage() {
  const [messages, setMessages] = React.useState<string[]>([]);

  const showToast = (message: string) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Toast Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de notificação toast para exibir mensagens temporárias ao
          usuário.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Toast Básico */}
        <Card>
          <CardHeader>
            <CardTitle>Toast Básico</CardTitle>
            <CardDescription>
              Diferentes tipos de notificações toast
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  onClick={() => showToast("Operação realizada com sucesso!")}
                  className="w-full"
                >
                  Toast de Sucesso
                </Button>

                <Button
                  onClick={() => showToast("Erro ao processar a solicitação")}
                  variant="destructive"
                  className="w-full"
                >
                  Toast de Erro
                </Button>

                <Button
                  onClick={() => showToast("Atenção: Esta ação é irreversível")}
                  variant="outline"
                  className="w-full"
                >
                  Toast de Aviso
                </Button>

                <Button
                  onClick={() => showToast("Nova mensagem recebida")}
                  variant="secondary"
                  className="w-full"
                >
                  Toast de Informação
                </Button>
              </div>

              {messages.length > 0 && (
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Mensagens de Toast:</h4>
                  <div className="space-y-1">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className="text-sm flex items-center gap-2"
                      >
                        <Badge variant="outline" className="text-xs">
                          {index + 1}
                        </Badge>
                        {message}
                      </div>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setMessages([])}
                    className="mt-3"
                  >
                    Limpar Histórico
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Toast com Ações */}
        <Card>
          <CardHeader>
            <CardTitle>Toast com Ações</CardTitle>
            <CardDescription>Toasts que incluem botões de ação</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  onClick={() => showToast("Email enviado com sucesso! ✓")}
                  className="w-full"
                >
                  Enviar Email
                </Button>

                <Button
                  onClick={() => showToast("Arquivo salvo automaticamente 💾")}
                  variant="outline"
                  className="w-full"
                >
                  Salvar Arquivo
                </Button>

                <Button
                  onClick={() => showToast("Backup criado com sucesso! 📦")}
                  variant="secondary"
                  className="w-full"
                >
                  Criar Backup
                </Button>

                <Button
                  onClick={() => showToast("Configurações atualizadas ⚙️")}
                  className="w-full"
                >
                  Atualizar Config
                </Button>
              </div>

              <div className="mt-6 p-4 border rounded-lg space-y-3">
                <h4 className="font-medium">Toast Personalizado</h4>
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite sua mensagem..."
                    id="custom-message"
                  />
                  <Button
                    onClick={() => {
                      const input = document.getElementById(
                        "custom-message"
                      ) as HTMLInputElement;
                      if (input.value.trim()) {
                        showToast(input.value);
                        input.value = "";
                      }
                    }}
                  >
                    Mostrar Toast
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toast de Sistema */}
        <Card>
          <CardHeader>
            <CardTitle>Notificações de Sistema</CardTitle>
            <CardDescription>
              Simulação de notificações típicas de aplicações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Autenticação</h4>
                  <div className="space-y-2">
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() =>
                        showToast(
                          "Login realizado com sucesso! Bem-vindo de volta."
                        )
                      }
                    >
                      Simular Login
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        showToast("Logout realizado. Até a próxima!")
                      }
                    >
                      Simular Logout
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="w-full"
                      onClick={() => showToast("Erro: Credenciais inválidas")}
                    >
                      Simular Erro de Login
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Operações de Dados</h4>
                  <div className="space-y-2">
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => showToast("Dados salvos com sucesso!")}
                    >
                      Salvar Dados
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-full"
                      onClick={() => showToast("Dados carregados do servidor")}
                    >
                      Carregar Dados
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="w-full"
                      onClick={() =>
                        showToast("Erro: Falha na conexão com o servidor")
                      }
                    >
                      Simular Erro de Rede
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Upload de Arquivos</h4>
                  <div className="space-y-2">
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => showToast("Upload iniciado... 📤")}
                    >
                      Iniciar Upload
                    </Button>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() =>
                        showToast("Upload concluído com sucesso! ✅")
                      }
                    >
                      Upload Completo
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="w-full"
                      onClick={() =>
                        showToast("Erro: Arquivo muito grande (máx. 10MB)")
                      }
                    >
                      Erro de Upload
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Notificações Gerais</h4>
                  <div className="space-y-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        showToast("Nova atualização disponível 🔄")
                      }
                    >
                      Nova Atualização
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => showToast("Você tem 3 novas mensagens 💬")}
                    >
                      Novas Mensagens
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => showToast("Reunião em 15 minutos ⏰")}
                    >
                      Lembrete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toast de Formulário */}
        <Card>
          <CardHeader>
            <CardTitle>Validação de Formulário</CardTitle>
            <CardDescription>
              Toasts para feedback de validação e envio de formulários
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get("name") as string;
                const email = formData.get("email") as string;
                const message = formData.get("message") as string;

                if (!name || !email || !message) {
                  showToast("Erro: Todos os campos são obrigatórios");
                  return;
                }

                if (!email.includes("@")) {
                  showToast("Erro: Email inválido");
                  return;
                }

                showToast("Formulário enviado com sucesso! 🎉");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input id="name" name="name" placeholder="Seu nome" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Categoria
                </label>
                <Select name="category">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="support">Suporte Técnico</SelectItem>
                    <SelectItem value="sales">Vendas</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="other">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Digite sua mensagem aqui..."
                  rows={4}
                />
              </div>

              <div className="flex gap-3">
                <Button type="submit">Enviar Formulário</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => showToast("Rascunho salvo automaticamente 💾")}
                >
                  Salvar Rascunho
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => showToast("Prévia do email criada 👀")}
                >
                  Prévia
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Toast Contextual */}
        <Card>
          <CardHeader>
            <CardTitle>Toasts Contextuais</CardTitle>
            <CardDescription>
              Notificações específicas para diferentes contextos de uso
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-medium">E-commerce</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Button
                    size="sm"
                    onClick={() => showToast("Item adicionado ao carrinho 🛒")}
                  >
                    Adicionar ao Carrinho
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => showToast("Item removido do carrinho")}
                    variant="outline"
                  >
                    Remover Item
                  </Button>
                  <Button
                    size="sm"
                    onClick={() =>
                      showToast("Pedido realizado com sucesso! 🎉")
                    }
                  >
                    Finalizar Compra
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => showToast("Pagamento processado ✅")}
                  >
                    Processar Pagamento
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Redes Sociais</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Button
                    size="sm"
                    onClick={() => showToast("Post publicado com sucesso! 📝")}
                  >
                    Publicar Post
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => showToast("Curtida adicionada ❤️")}
                    variant="outline"
                  >
                    Curtir
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => showToast("Comentário adicionado 💬")}
                    variant="outline"
                  >
                    Comentar
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => showToast("Post compartilhado 🔄")}
                    variant="secondary"
                  >
                    Compartilhar
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Sistema de Arquivos</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Button
                    size="sm"
                    onClick={() => showToast("Pasta criada com sucesso 📁")}
                  >
                    Criar Pasta
                  </Button>
                  <Button
                    size="sm"
                    onClick={() =>
                      showToast("Arquivo copiado para área de transferência 📋")
                    }
                    variant="outline"
                  >
                    Copiar Arquivo
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => showToast("Arquivo movido para lixeira 🗑️")}
                    variant="destructive"
                  >
                    Deletar
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => showToast("Arquivo renomeado ✏️")}
                    variant="secondary"
                  >
                    Renomear
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Configurações</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Button
                    size="sm"
                    onClick={() => showToast("Configurações salvas ⚙️")}
                  >
                    Salvar Config
                  </Button>
                  <Button
                    size="sm"
                    onClick={() =>
                      showToast("Configurações restauradas aos padrões")
                    }
                    variant="outline"
                  >
                    Restaurar Padrões
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => showToast("Perfil atualizado 👤")}
                    variant="secondary"
                  >
                    Atualizar Perfil
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => showToast("Senha alterada com sucesso 🔒")}
                  >
                    Alterar Senha
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dicas de Uso */}
        <Card>
          <CardHeader>
            <CardTitle>Dicas de Implementação</CardTitle>
            <CardDescription>
              Boas práticas para usar toasts em suas aplicações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-green-700">
                    ✅ Boas Práticas
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-green-50"
                      >
                        1
                      </Badge>
                      <span>Use toasts para feedback imediato de ações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-green-50"
                      >
                        2
                      </Badge>
                      <span>Mantenha as mensagens curtas e claras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-green-50"
                      >
                        3
                      </Badge>
                      <span>
                        Use cores apropriadas (verde=sucesso, vermelho=erro)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-green-50"
                      >
                        4
                      </Badge>
                      <span>Inclua emojis para melhor comunicação visual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-green-50"
                      >
                        5
                      </Badge>
                      <span>Configure tempo de exibição apropriado</span>
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
                        Toasts para informações críticas que precisam de ação
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-red-50"
                      >
                        2
                      </Badge>
                      <span>Mensagens muito longas que não cabem na tela</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-red-50"
                      >
                        3
                      </Badge>
                      <span>
                        Múltiplos toasts simultâneos que confundem o usuário
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-red-50"
                      >
                        4
                      </Badge>
                      <span>Toasts que desaparecem muito rapidamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs mt-0.5 bg-red-50"
                      >
                        5
                      </Badge>
                      <span>
                        Usar para validação de formulários em tempo real
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">
                  💡 Dica Extra
                </h4>
                <p className="text-sm text-blue-700">
                  O componente Toast do shadcn/ui utiliza a biblioteca Sonner
                  por baixo dos panos, que oferece excelente performance e
                  acessibilidade. Lembre-se de importar e configurar o Toaster
                  em seu layout principal para que os toasts funcionem
                  corretamente.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
