import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Badge,
} from "../../index";

export function DataTablePage() {
  const data = [
    { id: 1, name: "João Silva", email: "joao@email.com", status: "Ativo" },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria@email.com",
      status: "Inativo",
    },
    { id: 3, name: "Pedro Costa", email: "pedro@email.com", status: "Ativo" },
  ];

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Data Table Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de tabela de dados com funcionalidades avançadas.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Data Table Básico</CardTitle>
            <CardDescription>Exemplo básico de tabela de dados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg">
                <table className="w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="p-3 text-left">ID</th>
                      <th className="p-3 text-left">Nome</th>
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-left">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="p-3">{item.id}</td>
                        <td className="p-3 font-medium">{item.name}</td>
                        <td className="p-3">{item.email}</td>
                        <td className="p-3">
                          <Badge
                            variant={
                              item.status === "Ativo" ? "default" : "secondary"
                            }
                          >
                            {item.status}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Editar
                            </Button>
                            <Button size="sm" variant="destructive">
                              Excluir
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
