import React from "react";
import { ComponentDocs } from "../layout/ComponentDocs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
} from "../../index";

export function NavigationMenuPage() {
  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Navigation Menu Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de menu de navegação com suporte a submenus.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Navigation Menu Básico</CardTitle>
            <CardDescription>
              Exemplo básico de menu de navegação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <nav className="flex space-x-6">
                <Button variant="ghost">Início</Button>
                <Button variant="ghost">Produtos</Button>
                <Button variant="ghost">Sobre</Button>
                <Button variant="ghost">Contato</Button>
              </nav>
              <p className="text-sm text-muted-foreground">
                * Menu de navegação básico - versão completa requer
                implementação específica
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
    </div>
  );
}
