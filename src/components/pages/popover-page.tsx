import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
} from "../../index";

export function PopoverPage() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Popover Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de popover para exibir conteúdo flutuante.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Popover Básico</CardTitle>
            <CardDescription>Exemplo básico de uso do Popover</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Abrir Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                          Configurações
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Defina as configurações para sua conta.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <Button size="sm">Salvar</Button>
                        <Button size="sm" variant="outline">
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button>Informações</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="space-y-2">
                      <h4 className="font-medium">Ajuda</h4>
                      <p className="text-sm text-muted-foreground">
                        Este é um exemplo de popover com informações úteis.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
