import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  Button,
} from "../../index";

export function DropdownMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dropdown Menu Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de menu suspenso com opções de ação.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Dropdown Menu Básico</CardTitle>
            <CardDescription>
              Exemplo básico de uso do Dropdown Menu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Abrir Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>👤 Perfil</DropdownMenuItem>
                  <DropdownMenuItem>⚙️ Configurações</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>🚪 Sair</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>Ações</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>✏️ Editar</DropdownMenuItem>
                  <DropdownMenuItem>📋 Copiar</DropdownMenuItem>
                  <DropdownMenuItem>📤 Compartilhar</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    🗑️ Excluir
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
