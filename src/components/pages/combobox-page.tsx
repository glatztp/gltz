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
  const [valueDisabled, setValueDisabled] = React.useState("");
  const [valueClearable, setValueClearable] = React.useState("");
  const [valueLarge, setValueLarge] = React.useState("");
  const [valueSmall, setValueSmall] = React.useState("");
  const [valueCustom, setValueCustom] = React.useState("");

  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  const customOptions = [
    { value: "js", label: "JavaScript" },
    { value: "ts", label: "TypeScript" },
    { value: "py", label: "Python" },
    { value: "go", label: "Go" },
    { value: "rs", label: "Rust" },
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
        {/* Combobox Básico */}
        <Card>
          <CardHeader>
            <CardTitle>Combobox Básico</CardTitle>
            <CardDescription>
              Exemplo básico de uso do Combobox customizado do projeto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="w-[300px]">
                <Combobox
                  value={value}
                  onValueChange={setValue}
                  options={options}
                  placeholder="Selecione um framework"
                />
              </div>
              {value && (
                <p className="text-sm text-muted-foreground">
                  Framework selecionado:{" "}
                  <span className="font-semibold text-primary">
                    {options.find((opt) => opt.value === value)?.label}
                  </span>
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Combobox Desabilitado */}
        <Card>
          <CardHeader>
            <CardTitle>Combobox Desabilitado</CardTitle>
            <CardDescription>
              Não permite interação, útil para estados de loading ou bloqueio.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-[300px]">
              <Combobox
                value={valueDisabled}
                onValueChange={setValueDisabled}
                options={options}
                placeholder="Desabilitado"
                disabled
              />
            </div>
          </CardContent>
        </Card>

        {/* Combobox com Limpar Seleção */}
        <Card>
          <CardHeader>
            <CardTitle>Combobox com Limpar</CardTitle>
            <CardDescription>
              Permite limpar a seleção atual facilmente.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 w-[300px]">
              <Combobox
                value={valueClearable}
                onValueChange={setValueClearable}
                options={options}
                placeholder="Selecione e limpe"
              />
              {valueClearable && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setValueClearable("")}
                  className="ml-2"
                >
                  Limpar
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Combobox Grande */}
        <Card>
          <CardHeader>
            <CardTitle>Combobox Grande</CardTitle>
            <CardDescription>
              Exemplo de combobox com tamanho aumentado para destaque.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-[400px]">
              <Combobox
                value={valueLarge}
                onValueChange={setValueLarge}
                options={options}
                placeholder="Grande"
                className="h-14 text-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Combobox Pequeno */}
        <Card>
          <CardHeader>
            <CardTitle>Combobox Pequeno</CardTitle>
            <CardDescription>
              Exemplo de combobox compacto para espaços reduzidos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-[200px]">
              <Combobox
                value={valueSmall}
                onValueChange={setValueSmall}
                options={options}
                placeholder="Pequeno"
                className="h-8 text-xs"
              />
            </div>
          </CardContent>
        </Card>

        {/* Combobox com opções customizadas */}
        <Card>
          <CardHeader>
            <CardTitle>Combobox Customizado</CardTitle>
            <CardDescription>
              Opções diferentes e valor inicial definido.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-[300px]">
              <Combobox
                value={valueCustom}
                onValueChange={setValueCustom}
                options={customOptions}
                placeholder="Selecione uma linguagem"
              />
            </div>
            {valueCustom && (
              <p className="text-sm text-muted-foreground mt-2">
                Linguagem selecionada:{" "}
                <span className="font-semibold text-primary">
                  {customOptions.find((opt) => opt.value === valueCustom)?.label}
                </span>
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}