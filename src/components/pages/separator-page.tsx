import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Separator,
} from "../../index";

export function SeparatorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Separator Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente para criar separadores visuais entre elementos.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Separator Básico</CardTitle>
            <CardDescription>
              Exemplo básico de uso do Separator
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm">Primeiro parágrafo de texto.</p>
                <Separator className="my-4" />
                <p className="text-sm">Segundo parágrafo de texto.</p>
              </div>

              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
