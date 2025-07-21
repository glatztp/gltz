import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../index";

export function ResizablePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Resizable Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente para painéis redimensionáveis.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Resizable Básico</CardTitle>
            <CardDescription>
              Exemplo básico de painel redimensionável
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] border rounded-lg">
              <div className="w-1/3 bg-muted p-4 border-r">
                <p className="text-sm">Painel Esquerdo</p>
              </div>
              <div className="flex-1 p-4">
                <p className="text-sm">Painel Principal</p>
                <p className="text-xs text-muted-foreground mt-2">
                  * Funcionalidade de redimensionamento requer implementação
                  específica
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
