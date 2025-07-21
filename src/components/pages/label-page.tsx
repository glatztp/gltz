import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Label,
  Input,
  Checkbox,
  Button,
} from "../../index";

export function LabelPage() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Label Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de rótulo para formulários e elementos interativos.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Label Básico</CardTitle>
            <CardDescription>Exemplo básico de uso do Label</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Aceito os termos e condições
                </Label>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-base font-semibold"
                >
                  Descrição do Projeto
                </Label>
                <p className="text-sm text-muted-foreground">
                  Forneça uma descrição detalhada do seu projeto.
                </p>
                <textarea
                  id="description"
                  placeholder="Digite a descrição..."
                  className="w-full p-3 border rounded-md"
                  rows={4}
                />
              </div>

              <Button className="w-full">Enviar Formulário</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
