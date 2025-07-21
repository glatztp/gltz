import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Input,
  Label,
  Checkbox,
} from "../../index";
import { ComponentDocs } from "../layout/ComponentDocs";

export function FormPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Form Component</h1>
            <p className="text-muted-foreground mt-2">
              Componente de formulário com validação e estrutura.
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Form Básico</CardTitle>
                <CardDescription>Exemplo básico de formulário</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Digite seu nome"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Digite sua mensagem"
                      className="w-full p-2 border rounded-md"
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, terms: checked as boolean })
                      }
                    />
                    <Label htmlFor="terms" className="text-sm">
                      Aceito os termos e condições
                    </Label>
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit">Enviar</Button>
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    
    </div>
  );
}
