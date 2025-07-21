import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  RadioGroup,
  RadioGroupItem,
  Label,
  Button,
} from "../../index";

export function RadioGroupPage() {
  const [value, setValue] = React.useState("option1");

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Radio Group Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de grupo de botões de rádio para seleção única.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Radio Group Básico</CardTitle>
            <CardDescription>
              Exemplo básico de grupo de radio buttons
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <RadioGroup value={value} onValueChange={setValue}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1" />
                  <Label htmlFor="option1">Opção 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2" />
                  <Label htmlFor="option2">Opção 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="option3" />
                  <Label htmlFor="option3">Opção 3</Label>
                </div>
              </RadioGroup>

              <p className="text-sm text-muted-foreground">
                Selecionado: {value}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
