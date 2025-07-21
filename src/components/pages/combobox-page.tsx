import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Combobox,
  Button,
} from "../../index";

export function ComboboxPage() {
  const [value, setValue] = React.useState("");

  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Combobox Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de seleção com busca e filtragem.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Combobox Básico</CardTitle>
            <CardDescription>Exemplo básico de uso do Combobox</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="w-[300px]">
                <select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Selecione um framework</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {value && (
                <p className="text-sm text-muted-foreground">
                  Framework selecionado:{" "}
                  {options.find((opt) => opt.value === value)?.label}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
