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
import { useSonner, toast } from "../ui/feedback/sonner";

export function SonnerPage() {
  const { addToast } = useSonner();

  const handleSuccessToast = () => {
    addToast(
      toast.success(
        "Operação realizada com sucesso!",
        "Seus dados foram salvos corretamente."
      )
    );
  };

  const handleErrorToast = () => {
    addToast(
      toast.error(
        "Erro ao processar solicitação",
        "Verifique os dados e tente novamente."
      )
    );
  };

  const handleWarningToast = () => {
    addToast(
      toast.warning(
        "Atenção necessária",
        "Alguns campos podem estar incompletos."
      )
    );
  };

  const handleInfoToast = () => {
    addToast(
      toast.info("Informação importante", "Esta é uma notificação informativa.")
    );
  };

  const handleCustomToast = () => {
    addToast({
      title: "Toast personalizado",
      description: "Este toast tem duração customizada de 10 segundos",
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
    addToast({
      title: "Toast persistente",
      description: "Este toast não desaparece automaticamente",
      variant: "default",
      duration: 0, // 0 = não remove automaticamente
    });
  };

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Sonner Component</h1>
        <p className="text-muted-foreground mt-2">
          Sistema de notificações toast elegante e performático com diferentes
          variantes e configurações.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Toasts Básicos */}
        <Card>
          <CardHeader>
            <CardTitle>Toasts Básicos</CardTitle>
            <CardDescription>
              Exemplos básicos de notificações com diferentes variantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button onClick={handleSuccessToast} className="w-full">
                  <span className="mr-2">✅</span>
                  Sucesso
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleErrorToast}
                  className="w-full"
                >
                  <span className="mr-2">❌</span>
                  Erro
                </Button>
                <Button
                  variant="outline"
                  onClick={handleWarningToast}
                  className="w-full"
                >
                  <span className="mr-2">⚠️</span>
                  Aviso
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleInfoToast}
                  className="w-full"
                >
                  <span className="mr-2">ℹ️</span>
                  Info
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toasts Personalizados */}
        <Card>
          <CardHeader>
            <CardTitle>Toasts Personalizados</CardTitle>
            <CardDescription>
              Exemplos de toasts com configurações avançadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        {/* Exemplos de Uso */}
        <Card>
          <CardHeader>
            <CardTitle>Exemplos de Uso Prático</CardTitle>
            <CardDescription>
              Simulações de casos de uso reais com toasts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Simulação de Formulário</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    onClick={() =>
                      addToast(
                        toast.success(
                          "Dados salvos!",
                          "Formulário salvo com sucesso."
                        )
                      )
                    }
                    className="w-full"
                  >
                    Salvar Dados
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      addToast(
                        toast.warning(
                          "Campos obrigatórios",
                          "Preencha todos os campos marcados com *"
                        )
                      )
                    }
                    className="w-full"
                  >
                    Validar Formulário
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() =>
                      addToast(
                        toast.error(
                          "Erro de validação",
                          "Email já está em uso por outro usuário."
                        )
                      )
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
                      addToast(
                        toast.info(
                          "Upload iniciado",
                          "Fazendo upload do arquivo...",
                          { duration: 3000 }
                        )
                      )
                    }
                    variant="outline"
                    className="w-full"
                  >
                    Iniciar Upload
                  </Button>
                  <Button
                    onClick={() =>
                      addToast(
                        toast.success(
                          "Upload concluído!",
                          "Arquivo enviado com sucesso."
                        )
                      )
                    }
                    className="w-full"
                  >
                    Upload Concluído
                  </Button>
                  <Button
                    onClick={() =>
                      addToast(
                        toast.error(
                          "Falha no upload",
                          "Arquivo muito grande. Máximo: 10MB"
                        )
                      )
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

        {/* Configurações */}
        <Card>
          <CardHeader>
            <CardTitle>Configurações Avançadas</CardTitle>
            <CardDescription>
              Exemplos de configurações especiais do Sonner
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Posicionamento</h4>
                <p className="text-sm text-muted-foreground">
                  Os toasts aparecem na posição configurada no SonnerProvider.
                  Posição atual: <Badge variant="outline">bottom-right</Badge>
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Limite de Toasts</h4>
                <p className="text-sm text-muted-foreground">
                  Máximo de toasts simultâneos:{" "}
                  <Badge variant="outline">5</Badge>
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Uso da API</h4>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
                    {`// Importar o hook
import { useSonner, toast } from '../ui/feedback/sonner';

// No componente
const { addToast } = useSonner();

// Usar os helpers
addToast(toast.success("Título", "Descrição"));
addToast(toast.error("Erro", "Descrição do erro"));
addToast(toast.warning("Aviso", "Descrição do aviso"));
addToast(toast.info("Info", "Informação"));

// Toast personalizado
addToast({
  title: "Personalizado",
  description: "Descrição",
  variant: "default",
  duration: 5000,
  action: <Button>Ação</Button>
});`}
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
