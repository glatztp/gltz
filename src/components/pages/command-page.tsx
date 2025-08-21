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

// Exemplo controlado
function ControlledCommandExample() {
  const [selected, setSelected] = React.useState("");
  return (
    <Command className="border rounded-lg">
      <CommandInput placeholder="Buscar comando..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        <CommandGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Ações
          </div>
          <CommandItem onSelect={() => setSelected("Email")}>
            📧 Email
          </CommandItem>
          <CommandItem onSelect={() => setSelected("Calendário")}>
            📅 Calendário
          </CommandItem>
          <CommandItem onSelect={() => setSelected("Buscar")}>
            🔍 Buscar
          </CommandItem>
        </CommandGroup>
      </CommandList>
      {selected && (
        <div className="mt-2 text-sm text-muted-foreground">
          Selecionado: {selected}
        </div>
      )}
    </Command>
  );
}

// Exemplo de grupos, atalhos e separadores
function GroupsShortcutsExample() {
  return (
    <Command className="border rounded-lg">
      <CommandInput placeholder="Comando com grupos e atalhos..." />
      <CommandList>
        <CommandGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Sugestões
          </div>
          <CommandItem>
            📧 Email <CommandShortcut>⌘E</CommandShortcut>
          </CommandItem>
          <CommandItem>
            📅 Calendário <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Configurações
          </div>
          <CommandItem>
            👤 Perfil <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            ⚙️ Configurações <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

// Exemplo de busca dinâmica
function DynamicSearchCommandExample() {
  const [search] = React.useState("");
  const items = ["Email", "Calendário", "Buscar", "Perfil", "Configurações"];
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Command className="border rounded-lg">
      <CommandInput placeholder="Buscar..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        <CommandGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Resultados
          </div>
          {filtered.map((item) => (
            <CommandItem key={item}>{item}</CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

// Exemplo de feedback vazio
function EmptyFeedbackCommandExample() {
  return (
    <Command className="border rounded-lg">
      <CommandInput placeholder="Buscar algo inexistente..." />
      <CommandList>
        <CommandEmpty>Nada encontrado. Tente outro termo.</CommandEmpty>
      </CommandList>
    </Command>
  );
}

// Exemplo acessível
function AccessibleCommandExample() {
  return (
    <Command
      aria-label="Paleta de comandos acessível"
      className="border rounded-lg"
    >
      <CommandInput placeholder="Acessível..." />
      <CommandList>
        <CommandGroup>
          <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Ações
          </div>
          <CommandItem>🔍 Buscar</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export function CommandPage() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Command Component</h1>
        <p className="text-muted-foreground mt-2">
          O <b>Command</b> é uma paleta de comandos para busca rápida e ações.
          <br />
          Veja abaixo exemplos de cada prop e casos de uso práticos.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Exemplo básico */}
        <Card>
          <CardHeader>
            <CardTitle>Command Básico</CardTitle>
            <CardDescription>
              Uso padrão do Command, com grupos, atalhos e separadores.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <GroupsShortcutsExample />
          </CardContent>
        </Card>

        {/* Exemplo controlado (value/onValueChange) */}
        <Card>
          <CardHeader>
            <CardTitle>Command Controlado</CardTitle>
            <CardDescription>
              Controle total do valor e seleção via props <code>value</code> e{" "}
              <code>onValueChange</code>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ControlledCommandExample />
          </CardContent>
        </Card>

        {/* Busca dinâmica */}
        <Card>
          <CardHeader>
            <CardTitle>Busca Dinâmica</CardTitle>
            <CardDescription>
              Filtragem de itens conforme o texto digitado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DynamicSearchCommandExample />
          </CardContent>
        </Card>

        {/* Feedback vazio */}
        <Card>
          <CardHeader>
            <CardTitle>Feedback Vazio</CardTitle>
            <CardDescription>
              Exemplo de mensagem personalizada quando não há resultados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyFeedbackCommandExample />
          </CardContent>
        </Card>

        {/* Command acessível */}
        <Card>
          <CardHeader>
            <CardTitle>Command Acessível</CardTitle>
            <CardDescription>
              Uso de <code>aria-label</code> e boas práticas de acessibilidade.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AccessibleCommandExample />
          </CardContent>
        </Card>
      </div>

    
    </div>
  );
}
