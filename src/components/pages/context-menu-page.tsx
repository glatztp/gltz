import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../index";

export function ContextMenuPage() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Context Menu Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de menu de contexto ativado com clique direito.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Context Menu Básico</CardTitle>
            <CardDescription>
              Clique com o botão direito na área abaixo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <div
                  className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm cursor-context-menu"
                  onContextMenu={(e) => {
                    e.preventDefault();
                    // Context menu would appear here
                  }}
                >
                  Clique com o botão direito aqui
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  * Simulação de context menu - implementação depende da
                  biblioteca específica
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
