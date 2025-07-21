import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
} from "../../index";

export function CollapsiblePage() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Collapsible Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente para mostrar/ocultar conteúdo de forma expansível.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Collapsible Básico</CardTitle>
            <CardDescription>
              Exemplo básico de uso do Collapsible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Mostrar detalhes
                    <span>{isOpen ? "▲" : "▼"}</span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 p-4 border rounded">
                  <p className="text-sm text-muted-foreground">
                    Este é o conteúdo que pode ser expandido ou contraído. Aqui
                    você pode colocar qualquer informação adicional que só deve
                    aparecer quando solicitado pelo usuário.
                  </p>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between">
                    FAQ: Como usar este componente?
                    <span>+</span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 p-3 bg-muted rounded">
                  <p className="text-sm">
                    Você pode usar este componente para criar seções
                    expansíveis, FAQs, menus acordeão e muito mais.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
