import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  ScrollArea,
} from "../../index";

export function ScrollAreaPage() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Scroll Area Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente para área de scroll personalizada.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Scroll Area Básico</CardTitle>
            <CardDescription>Exemplo básico de área de scroll</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px] border rounded p-4">
              <div className="space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="text-sm">
                    Item {i + 1} - Este é um item de exemplo para demonstrar o
                    comportamento de scroll da área.
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
