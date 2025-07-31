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
  Calendar,
} from "../../index";

export function DatePickerPage() {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <div className="flex gap-6 min-h-screen">
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Date Picker Component</h1>
            <p className="text-muted-foreground mt-2">
              Componente para seleção de datas com calendário.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Date Picker Básico */}
            <Card>
              <CardHeader>
                <CardTitle>Date Picker Básico</CardTitle>
                <CardDescription>
                  Exemplo básico de seleção de data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[280px] justify-start"
                      >
                        📅{" "}
                        {date
                          ? date.toLocaleDateString("pt-BR")
                          : "Selecione uma data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) =>
                          setDate(selectedDate as Date | undefined)
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  {date && (
                    <p className="text-sm text-muted-foreground">
                      Data selecionada: {date.toLocaleDateString("pt-BR")}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Date Picker com intervalo */}
            <Card>
              <CardHeader>
                <CardTitle>Date Picker com Intervalo</CardTitle>
                <CardDescription>
                  Permite selecionar um intervalo de datas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DateRangePickerDemo />
              </CardContent>
            </Card>

            {/* Date Picker Desabilitado */}
            <Card>
              <CardHeader>
                <CardTitle>Date Picker Desabilitado</CardTitle>
                <CardDescription>
                  Exemplo de date picker desabilitado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[280px] justify-start"
                      disabled
                    >
                      📅 Selecione uma data
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={undefined}
                      onSelect={() => {}}
                      disabled ={(day) => true} // desabilita todas as datas
                    />
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>

            {/* Date Picker com datas bloqueadas */}
            <Card>
              <CardHeader>
                <CardTitle>Date Picker com Datas Bloqueadas</CardTitle>
                <CardDescription>
                  Algumas datas não podem ser selecionadas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[280px] justify-start">
                      📅 Datas bloqueadas
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(selectedDate) =>
                        setDate(selectedDate as Date | undefined)
                      }
                      disabled={
                        (day) => day.getDay() === 0 || day.getDay() === 6 // bloqueia finais de semana
                      }
                    />
                  </PopoverContent>
                </Popover>
                <p className="text-xs text-muted-foreground">
                  Finais de semana estão bloqueados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente auxiliar para intervalo de datas
function DateRangePickerDemo() {
  const [range, setRange] = React.useState<{ from?: Date; to?: Date }>({});
  return (
    <div className="space-y-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[280px] justify-start">
            📅{" "}
            {range.from && range.to
              ? `${range.from.toLocaleDateString(
                  "pt-BR"
                )} - ${range.to.toLocaleDateString("pt-BR")}`
              : "Selecione o intervalo"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="range"
            selected={
              range.from
                ? { from: range.from, to: range.to }
                : undefined
            }
            onSelect={(selectedRange) =>
              setRange(selectedRange as { from?: Date; to?: Date })
            }
          />
        </PopoverContent>
      </Popover>
      {range.from && range.to && (
        <p className="text-sm text-muted-foreground">
          Intervalo selecionado: {range.from.toLocaleDateString("pt-BR")} até{" "}
          {range.to.toLocaleDateString("pt-BR")}
        </p>
      )}
    </div>
  );
}