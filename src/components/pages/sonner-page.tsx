import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
} from "../../index";

export function SonnerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Sonner Component</h1>
        <p className="text-muted-foreground mt-2">
          Biblioteca de toasts elegante e performática.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sonner Básico</CardTitle>
            <CardDescription>
              Exemplo básico de notificações com Sonner
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button onClick={() => console.log("Toast de sucesso")}>
                  Toast Sucesso
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => console.log("Toast de erro")}
                >
                  Toast Erro
                </Button>
                <Button
                  variant="outline"
                  onClick={() => console.log("Toast de info")}
                >
                  Toast Info
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                * Sonner requer configuração específica do Toaster no layout
                principal
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
