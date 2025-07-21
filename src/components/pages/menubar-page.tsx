import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
} from "../../index";

export function MenubarPage() {
  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Menubar Component</h1>
            <p className="text-muted-foreground mt-2">
              Componente de barra de menu horizontal com submenus.
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Menubar Básico</CardTitle>
                <CardDescription>
                  Exemplo básico de barra de menu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex border rounded-md p-1">
                    <Button variant="ghost" size="sm">
                      Arquivo
                    </Button>
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                    <Button variant="ghost" size="sm">
                      Ver
                    </Button>
                    <Button variant="ghost" size="sm">
                      Ajuda
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    * Implementação completa requer biblioteca específica para
                    submenus
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
