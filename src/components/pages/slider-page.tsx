import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Slider,
  Label,
} from "../../index";

export function SliderPage() {
  const [value, setValue] = React.useState([50]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Slider Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de controle deslizante para seleção de valores.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Slider Básico</CardTitle>
            <CardDescription>Exemplo básico de slider</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Volume: {value[0]}%</Label>
                <Slider
                  value={value}
                  onValueChange={setValue}
                  max={100}
                  step={1}
                  className="w-[60%]"
                />
              </div>

              <div className="space-y-2">
                <Label>Brilho</Label>
                <Slider
                  defaultValue={[33]}
                  max={100}
                  step={1}
                  className="w-[60%]"
                />
              </div>

              <div className="space-y-2">
                <Label>Faixa de Preço</Label>
                <Slider
                  defaultValue={[20, 80]}
                  max={100}
                  step={1}
                  className="w-[60%]"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
