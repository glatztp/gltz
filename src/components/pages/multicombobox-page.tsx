import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../index";
import { MultiCombo, MultiComboOption } from "../ui/selects/multicombo";

export default function MultiComboBoxPage() {
  const [selectedFrameworks, setSelectedFrameworks] = React.useState<string[]>([]);
  const [selectedLangs, setSelectedLangs] = React.useState<string[]>(["js", "ts"]);
  const [selectedDisabled, setSelectedDisabled] = React.useState<string[]>([]);
  const [selectedMany, setSelectedMany] = React.useState<string[]>(["react", "vue", "angular", "svelte"]);

  const frameworks: MultiComboOption[] = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  const languages: MultiComboOption[] = [
    { value: "js", label: "JavaScript" },
    { value: "ts", label: "TypeScript" },
    { value: "py", label: "Python" },
    { value: "go", label: "Go" },
    { value: "rs", label: "Rust" },
  ];

  const disabledOptions: MultiComboOption[] = [
    { value: "a", label: "A", disabled: true },
    { value: "b", label: "B" },
    { value: "c", label: "C" },
    { value: "d", label: "D", disabled: true },
  ];

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">MultiComboBox Component</h1>
        <p className="text-muted-foreground mt-2">
          Selecione múltiplas opções com busca, badges e UX moderna.
        </p>
      </div>

      <div className="grid gap-6">
        {/* MultiComboBox Básico */}
        <Card>
          <CardHeader>
            <CardTitle>MultiComboBox Básico</CardTitle>
            <CardDescription>
              Permite selecionar múltiplos frameworks.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-[350px]">
              <MultiCombo
                options={frameworks}
                selected={selectedFrameworks}
                onChange={setSelectedFrameworks}
                placeholder="Selecione frameworks"
              />
              {selectedFrameworks.length > 0 && (
                <p className="text-sm text-muted-foreground mt-2">
                  Selecionados:{" "}
                  <span className="font-semibold text-primary">
                    {selectedFrameworks.map(
                      (val) => frameworks.find((f) => f.value === val)?.label
                    ).join(", ")}
                  </span>
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* MultiComboBox com valor inicial */}
        <Card>
          <CardHeader>
            <CardTitle>Com valor inicial</CardTitle>
            <CardDescription>
              Inicia com algumas linguagens já selecionadas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-[350px]">
              <MultiCombo
                options={languages}
                selected={selectedLangs}
                onChange={setSelectedLangs}
                placeholder="Selecione linguagens"
              />
            </div>
          </CardContent>
        </Card>

        {/* MultiComboBox com opções desabilitadas */}
        <Card>
          <CardHeader>
            <CardTitle>Com opções desabilitadas</CardTitle>
            <CardDescription>
              Algumas opções não podem ser selecionadas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-[350px]">
              <MultiCombo
                options={disabledOptions}
                selected={selectedDisabled}
                onChange={setSelectedDisabled}
                placeholder="Selecione letras"
              />
            </div>
          </CardContent>
        </Card>

        {/* MultiComboBox com limite de badges exibidas */}
        <Card>
          <CardHeader>
            <CardTitle>Limite de badges exibidas</CardTitle>
            <CardDescription>
              Mostra até 2 badges, o restante aparece como "+N".
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-[350px]">
              <MultiCombo
                options={frameworks}
                selected={selectedMany}
                onChange={setSelectedMany}
                placeholder="Selecione frameworks"
                maxDisplay={2}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}