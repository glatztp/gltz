import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
} from "../../index";

export function DrawerPage() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Drawer Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de gaveta deslizante, ideal para mobile.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Drawer Básico</CardTitle>
            <CardDescription>Exemplo básico de uso do Drawer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <Button>Abrir Drawer</Button>
                <p className="text-sm text-muted-foreground mt-2">
                  * Componente Drawer requer implementação específica baseada na
                  biblioteca escolhida
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
