import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
} from "../../index";
import {
  FileText,
  Edit,
  Eye,
  HelpCircle,
  ChevronDown,
  Settings,
} from "lucide-react";

// Menubar com submenu simulado
function MenubarWithSubmenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex border rounded-md p-1 gap-1">
      <div className="relative">
        <Button variant="ghost" size="sm" onClick={() => setOpen((v) => !v)}>
          Arquivo <ChevronDown className="ml-1 w-3 h-3" />
        </Button>
        {open && (
          <div className="absolute left-0 top-full mt-1 bg-background border rounded shadow-lg z-10 min-w-[120px]">
            <button className="block w-full text-left px-4 py-2 hover:bg-primary/10 text-sm">
              Novo
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-primary/10 text-sm">
              Abrir
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-primary/10 text-sm">
              Salvar
            </button>
          </div>
        )}
      </div>
      <Button variant="ghost" size="sm">
        Editar
      </Button>
      <Button variant="ghost" size="sm">
        Ver
      </Button>
      <Button variant="ghost" size="sm">
        Ajuda
      </Button>
    </div>
  );
}

// Menubar com ícones
function MenubarWithIcons() {
  return (
    <div className="flex border rounded-md p-1 gap-1">
      <Button variant="ghost" size="sm">
        <FileText className="mr-1 w-4 h-4" />
        Arquivo
      </Button>
      <Button variant="ghost" size="sm">
        <Edit className="mr-1 w-4 h-4" />
        Editar
      </Button>
      <Button variant="ghost" size="sm">
        <Eye className="mr-1 w-4 h-4" />
        Ver
      </Button>
      <Button variant="ghost" size="sm">
        <HelpCircle className="mr-1 w-4 h-4" />
        Ajuda
      </Button>
    </div>
  );
}

// Menubar desabilitado
function MenubarDisabled() {
  return (
    <div className="flex border rounded-md p-1 gap-1 opacity-50 pointer-events-none">
      <Button variant="ghost" size="sm" disabled>
        Arquivo
      </Button>
      <Button variant="ghost" size="sm" disabled>
        Editar
      </Button>
      <Button variant="ghost" size="sm" disabled>
        Ver
      </Button>
      <Button variant="ghost" size="sm" disabled>
        Ajuda
      </Button>
    </div>
  );
}

// Menubar acessível
function MenubarAccessible() {
  return (
    <nav
      aria-label="Barra de menu principal"
      className="flex border rounded-md p-1 gap-1"
    >
      <Button variant="ghost" size="sm">
        Arquivo
      </Button>
      <Button variant="ghost" size="sm">
        Editar
      </Button>
      <Button variant="ghost" size="sm">
        Ver
      </Button>
      <Button variant="ghost" size="sm">
        Ajuda
      </Button>
    </nav>
  );
}

// Menubar customizado
function MenubarCustom() {
  return (
    <div className="flex border rounded-md p-1 gap-1 bg-gradient-to-r from-primary/10 to-secondary/10">
      <Button variant="outline" size="sm" className="text-primary">
        Arquivo
      </Button>
      <Button variant="outline" size="sm" className="text-secondary">
        Editar
      </Button>
      <Button variant="outline" size="sm" className="text-accent">
        Ver
      </Button>
      <Button variant="outline" size="sm" className="text-muted-foreground">
        Ajuda
      </Button>
      <Button variant="ghost" size="sm">
        <Settings className="mr-1 w-4 h-4" />
        Configurações
      </Button>
    </div>
  );
}

export function MenubarPage() {
  return (
    <div className="flex gap-6 min-h-screen pt-12">
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Menubar Component</h1>
            <p className="text-muted-foreground mt-2">
              O <b>Menubar</b> é uma barra de menu horizontal para navegação e
              ações.
              <br />
              Veja abaixo exemplos de cada prop e casos de uso práticos.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Menubar básico */}
            <Card>
              <CardHeader>
                <CardTitle>Menubar Básico</CardTitle>
                <CardDescription>
                  Uso padrão da barra de menu com botões simples.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex border rounded-md p-1">
                    <Button variant="ghost" size="sm">
                      Arquivo
                    </Button>
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                    <Button variant="ghost" size="sm">
                      Ver
                    </Button>
                    <Button variant="ghost" size="sm">
                      Ajuda
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Menubar com submenu simulado */}
            <Card>
              <CardHeader>
                <CardTitle>Menubar com Submenu</CardTitle>
                <CardDescription>
                  Exemplo de submenu simples usando estado local.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MenubarWithSubmenu />
              </CardContent>
            </Card>

            {/* Menubar com ícones */}
            <Card>
              <CardHeader>
                <CardTitle>Menubar com Ícones</CardTitle>
                <CardDescription>
                  Botões do menu com ícones para melhor visual.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MenubarWithIcons />
              </CardContent>
            </Card>

            {/* Menubar desabilitado */}
            <Card>
              <CardHeader>
                <CardTitle>Menubar Desabilitado</CardTitle>
                <CardDescription>
                  Exemplo de barra de menu desabilitada.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MenubarDisabled />
              </CardContent>
            </Card>

            {/* Menubar acessível */}
            <Card>
              <CardHeader>
                <CardTitle>Menubar Acessível</CardTitle>
                <CardDescription>
                  Uso de <code>aria-label</code> para acessibilidade.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MenubarAccessible />
              </CardContent>
            </Card>

            {/* Menubar customizado */}
            <Card>
              <CardHeader>
                <CardTitle>Menubar Customizado</CardTitle>
                <CardDescription>
                  Personalização de cores, tamanhos e estilos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MenubarCustom />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
