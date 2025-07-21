import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Badge,
} from "../ui";
import { useToast } from "../../hooks/useToast";
import { ToastContainer } from "../ui/feedback/toast-container";

export function ToastPage() {
  const { toasts, showToast, removeToast, clearToasts } = useToast();

  const handleSuccessToast = () => {
    showToast({
      title: "Sucesso!",
      description: "Operação realizada com sucesso!",
      variant: "success",
    });
  };

  const handleErrorToast = () => {
    showToast({
      title: "Erro!",
      description: "Erro ao processar a solicitação",
      variant: "destructive",
    });
  };

  const handleWarningToast = () => {
    showToast({
      title: "Atenção!",
      description: "Esta ação é irreversível",
      variant: "warning",
    });
  };

  const handleInfoToast = () => {
    showToast({
      title: "Informação",
      description: "Nova mensagem recebida",
      variant: "default",
    });
  };

  const handleCustomToast = () => {
    showToast({
      title: "Toast com ação",
      description: "Este toast tem um botão de ação",
      variant: "default",
      duration: 10000,
      action: (
        <Button size="sm" variant="outline">
          Ação
        </Button>
      ),
    });
  };

  const handlePersistentToast = () => {
    showToast({
      title: "Toast persistente",
      description: "Este toast não desaparece automaticamente",
      variant: "default",
      duration: 0, // 0 = não remove automaticamente
    });
  };

  return (
    <>
      <div className="space-y-8 p-6">
        <div>
          <h1 className="text-3xl font-bold">Toast Component</h1>
          <p className="text-muted-foreground mt-2">
            Componente de notificação toast para exibir mensagens temporárias ao
            usuário com diferentes variantes e configurações.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Toast Básico */}
          <Card>
            <CardHeader>
              <CardTitle>Toasts Básicos</CardTitle>
              <CardDescription>
                Diferentes tipos de notificações toast
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button onClick={handleSuccessToast} className="w-full">
                    <span className="mr-2">✅</span>
                    Toast Sucesso
                  </Button>

                  <Button
                    onClick={handleErrorToast}
                    variant="destructive"
                    className="w-full"
                  >
                    <span className="mr-2">❌</span>
                    Toast Erro
                  </Button>

                  <Button
                    onClick={handleWarningToast}
                    variant="outline"
                    className="w-full"
                  >
                    <span className="mr-2">⚠️</span>
                    Toast Aviso
                  </Button>

                  <Button
                    onClick={handleInfoToast}
                    variant="secondary"
                    className="w-full"
                  >
                    <span className="mr-2">ℹ️</span>
                    Toast Info
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Toasts Avançados */}
          <Card>
            <CardHeader>
              <CardTitle>Toasts Avançados</CardTitle>
              <CardDescription>
                Toasts com configurações personalizadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Button
                      onClick={handleCustomToast}
                      variant="outline"
                      className="w-full"
                    >
                      <span className="mr-2">⏰</span>
                      Toast com Ação (10s)
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Toast com botão de ação e duração personalizada
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Button
                      onClick={handlePersistentToast}
                      variant="outline"
                      className="w-full"
                    >
                      <span className="mr-2">📌</span>
                      Toast Persistente
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Toast que não desaparece automaticamente
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Controles */}
          <Card>
            <CardHeader>
              <CardTitle>Controles</CardTitle>
              <CardDescription>
                Gerencie os toasts atualmente ativos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Toasts ativos:</span>
                    <Badge variant="outline">{toasts.length}</Badge>
                  </div>
                  {toasts.length > 0 && (
                    <Button size="sm" variant="outline" onClick={clearToasts}>
                      Limpar Todos
                    </Button>
                  )}
                </div>

                {toasts.length > 0 && (
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Toasts Ativos:</h4>
                    <div className="space-y-2">
                      {toasts.map((toast, index) => (
                        <div
                          key={toast.id}
                          className="flex items-center justify-between text-sm p-2 bg-background rounded border"
                        >
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {index + 1}
                            </Badge>
                            <span className="font-medium">{toast.title}</span>
                            <span className="text-muted-foreground">
                              - {toast.description}
                            </span>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeToast(toast.id)}
                          >
                            ✕
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Exemplos de Uso */}
          <Card>
            <CardHeader>
              <CardTitle>Exemplos de Uso Prático</CardTitle>
              <CardDescription>
                Simulações de casos de uso reais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Simulação de Formulário</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                      onClick={() =>
                        showToast({
                          title: "Dados salvos!",
                          description: "Formulário salvo com sucesso.",
                          variant: "success",
                        })
                      }
                      className="w-full"
                    >
                      Salvar Dados
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() =>
                        showToast({
                          title: "Campos obrigatórios",
                          description:
                            "Preencha todos os campos marcados com *",
                          variant: "warning",
                        })
                      }
                      className="w-full"
                    >
                      Validar Formulário
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() =>
                        showToast({
                          title: "Erro de validação",
                          description:
                            "Email já está em uso por outro usuário.",
                          variant: "destructive",
                        })
                      }
                      className="w-full"
                    >
                      Erro de Validação
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Simulação de Sistema</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                      onClick={() =>
                        showToast({
                          title: "Upload iniciado",
                          description: "Fazendo upload do arquivo...",
                          variant: "default",
                          duration: 3000,
                        })
                      }
                      variant="outline"
                      className="w-full"
                    >
                      Iniciar Upload
                    </Button>
                    <Button
                      onClick={() =>
                        showToast({
                          title: "Upload concluído!",
                          description: "Arquivo enviado com sucesso.",
                          variant: "success",
                        })
                      }
                      className="w-full"
                    >
                      Upload Concluído
                    </Button>
                    <Button
                      onClick={() =>
                        showToast({
                          title: "Falha no upload",
                          description: "Arquivo muito grande. Máximo: 10MB",
                          variant: "destructive",
                        })
                      }
                      variant="destructive"
                      className="w-full"
                    >
                      Erro no Upload
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API e Exemplos de Código */}
          <Card>
            <CardHeader>
              <CardTitle>Exemplos de Código</CardTitle>
              <CardDescription>
                Como usar o sistema de toasts no seu código
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Uso básico:</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`// Importar o hook
import { useToast } from '../hooks/useToast';
import { ToastContainer } from '../ui/feedback/toast-container';

// No componente
const { toasts, showToast, removeToast } = useToast();

// Mostrar toast
showToast({
  title: "Sucesso!",
  description: "Operação concluída",
  variant: "success"
});

// Renderizar container
<ToastContainer 
  toasts={toasts} 
  onRemove={removeToast} 
/>`}
                  </pre>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Toast personalizado:</h4>
                  <pre className="text-sm overflow-x-auto">
                    {`showToast({
  title: "Ação necessária",
  description: "Clique para confirmar",
  variant: "warning",
  duration: 0, // Não remove automaticamente
  action: (
    <Button size="sm" onClick={handleAction}>
      Confirmar
    </Button>
  )
});`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Container de Toasts */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  );
}
