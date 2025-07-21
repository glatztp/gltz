import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../index";

export function CommandPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Command Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de paleta de comandos com busca rápida.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Command Básico</CardTitle>
            <CardDescription>Exemplo básico de uso do Command</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Command className="border rounded-lg">
                <CommandInput placeholder="Digite um comando..." />
                <CommandList>
                  <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
                  <CommandGroup>
                    <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                      Sugestões
                    </div>
                    <CommandItem>
                      📧 Email
                      <CommandShortcut>⌘E</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      📅 Calendário
                      <CommandShortcut>⌘C</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      🔍 Buscar
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup>
                    <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                      Configurações
                    </div>
                    <CommandItem>
                      👤 Perfil
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      ⚙️ Configurações
                      <CommandShortcut>⌘,</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
