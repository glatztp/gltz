import React from "react";
import { ComponentDocs } from "../layout/ComponentDocs";
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
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Date Picker Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente para seleção de datas com calendário.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Date Picker Básico</CardTitle>
            <CardDescription>Exemplo básico de seleção de data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-[280px] justify-start">
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
      </div>
    </div>
    </div>
    </div>
  );
}
