import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
} from "../../index";

export function SheetPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Sheet Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de painel lateral deslizante.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sheet Básico</CardTitle>
            <CardDescription>Exemplo básico de painel lateral</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button>Abrir Sheet</Button>
              <p className="text-sm text-muted-foreground">
                * Componente Sheet requer implementação específica da biblioteca
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
