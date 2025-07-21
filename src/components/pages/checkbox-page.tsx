import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Checkbox,
  Label,
  Button,
  Badge,
} from "../../index";

export function CheckboxPage() {
  const [checkedItems, setCheckedItems] = React.useState<
    Record<string, boolean>
  >({
    item1: false,
    item2: true,
    item3: false,
    notifications: true,
    marketing: false,
    updates: true,
  });

  const handleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Checkbox Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de checkbox para seleções múltiplas e confirmações.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Checkbox Básico */}
        <Card>
          <CardHeader>
            <CardTitle>Checkbox Básico</CardTitle>
            <CardDescription>
              Implementação simples com diferentes estados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Estados Básicos</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="unchecked" />
                    <Label htmlFor="unchecked">Não marcado</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checked" defaultChecked />
                    <Label htmlFor="checked">Marcado</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled" disabled />
                    <Label htmlFor="disabled" className="text-muted-foreground">
                      Desabilitado
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled-checked" disabled defaultChecked />
                    <Label
                      htmlFor="disabled-checked"
                      className="text-muted-foreground"
                    >
                      Desabilitado e Marcado
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Com Descrições</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" />
                    <div className="space-y-1">
                      <Label htmlFor="terms" className="text-sm font-medium">
                        Aceito os termos e condições
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Você concorda com nossos termos de uso e política de
                        privacidade
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="newsletter" className="mt-1" />
                    <div className="space-y-1">
                      <Label
                        htmlFor="newsletter"
                        className="text-sm font-medium"
                      >
                        Receber newsletter
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Receba novidades e ofertas por email
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checkbox Controlado */}
        <Card>
          <CardHeader>
            <CardTitle>Checkbox Controlado</CardTitle>
            <CardDescription>
              Checkboxes com estado controlado pelo React
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="item1"
                    checked={checkedItems.item1}
                    onCheckedChange={() => handleCheck("item1")}
                  />
                  <Label htmlFor="item1">Item 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="item2"
                    checked={checkedItems.item2}
                    onCheckedChange={() => handleCheck("item2")}
                  />
                  <Label htmlFor="item2">Item 2 (marcado por padrão)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="item3"
                    checked={checkedItems.item3}
                    onCheckedChange={() => handleCheck("item3")}
                  />
                  <Label htmlFor="item3">Item 3</Label>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">
                  Estado atual:
                </p>
                <div className="flex gap-2">
                  {Object.entries(checkedItems)
                    .slice(0, 3)
                    .map(([key, value]) => (
                      <Badge key={key} variant={value ? "default" : "outline"}>
                        {key}: {value ? "✓" : "✗"}
                      </Badge>
                    ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => {
                    setCheckedItems((prev) => ({
                      ...prev,
                      item1: true,
                      item2: true,
                      item3: true,
                    }));
                  }}
                >
                  Marcar Todos
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setCheckedItems((prev) => ({
                      ...prev,
                      item1: false,
                      item2: false,
                      item3: false,
                    }));
                  }}
                >
                  Desmarcar Todos
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Tarefas */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Tarefas</CardTitle>
            <CardDescription>
              Exemplo prático usando checkboxes para uma to-do list
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <Checkbox id="task1" defaultChecked />
                <Label
                  htmlFor="task1"
                  className="flex-1 text-sm line-through text-muted-foreground"
                >
                  Implementar componente de sidebar
                </Label>
                <Badge variant="outline" className="text-xs">
                  Concluído
                </Badge>
              </div>

              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <Checkbox id="task2" defaultChecked />
                <Label
                  htmlFor="task2"
                  className="flex-1 text-sm line-through text-muted-foreground"
                >
                  Criar páginas individuais para componentes
                </Label>
                <Badge variant="outline" className="text-xs">
                  Concluído
                </Badge>
              </div>

              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <Checkbox id="task3" />
                <Label htmlFor="task3" className="flex-1 text-sm">
                  Adicionar mais exemplos de uso
                </Label>
                <Badge className="text-xs">Em andamento</Badge>
              </div>

              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <Checkbox id="task4" />
                <Label htmlFor="task4" className="flex-1 text-sm">
                  Implementar tema escuro
                </Label>
                <Badge variant="secondary" className="text-xs">
                  Pendente
                </Badge>
              </div>

              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <Checkbox id="task5" />
                <Label htmlFor="task5" className="flex-1 text-sm">
                  Adicionar documentação completa
                </Label>
                <Badge variant="secondary" className="text-xs">
                  Pendente
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configurações de Usuário */}
        <Card>
          <CardHeader>
            <CardTitle>Configurações de Preferências</CardTitle>
            <CardDescription>
              Formulário de configurações usando checkboxes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Notificações</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="notifications"
                      checked={checkedItems.notifications}
                      onCheckedChange={() => handleCheck("notifications")}
                    />
                    <Label htmlFor="notifications" className="text-sm">
                      Receber notificações push
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={checkedItems.marketing}
                      onCheckedChange={() => handleCheck("marketing")}
                    />
                    <Label htmlFor="marketing" className="text-sm">
                      Receber emails promocionais
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="updates"
                      checked={checkedItems.updates}
                      onCheckedChange={() => handleCheck("updates")}
                    />
                    <Label htmlFor="updates" className="text-sm">
                      Notificações de atualizações
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Privacidade</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="profile-public" className="mt-1" />
                    <div className="space-y-1">
                      <Label
                        htmlFor="profile-public"
                        className="text-sm font-medium"
                      >
                        Perfil público
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Permitir que outros usuários vejam seu perfil
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="analytics" className="mt-1" defaultChecked />
                    <div className="space-y-1">
                      <Label
                        htmlFor="analytics"
                        className="text-sm font-medium"
                      >
                        Compartilhar dados analíticos
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Ajudar a melhorar nossa plataforma com dados anônimos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="cookies" className="mt-1" defaultChecked />
                    <div className="space-y-1">
                      <Label htmlFor="cookies" className="text-sm font-medium">
                        Aceitar cookies funcionais
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Necessários para funcionalidades básicas do site
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Acessibilidade</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="high-contrast" />
                    <Label htmlFor="high-contrast" className="text-sm">
                      Modo alto contraste
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="reduce-motion" />
                    <Label htmlFor="reduce-motion" className="text-sm">
                      Reduzir animações
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="screen-reader" />
                    <Label htmlFor="screen-reader" className="text-sm">
                      Otimizar para leitores de tela
                    </Label>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button type="submit">Salvar Configurações</Button>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Seleção de Recursos */}
        <Card>
          <CardHeader>
            <CardTitle>Seleção de Recursos</CardTitle>
            <CardDescription>
              Exemplo de seleção múltipla para um plano de assinatura
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Recursos Básicos (Inclusos)</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox defaultChecked disabled />
                    <Label className="text-sm text-muted-foreground">
                      5 projetos
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox defaultChecked disabled />
                    <Label className="text-sm text-muted-foreground">
                      1GB de armazenamento
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox defaultChecked disabled />
                    <Label className="text-sm text-muted-foreground">
                      Suporte por email
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Recursos Adicionais</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="unlimited-projects" />
                      <Label htmlFor="unlimited-projects" className="text-sm">
                        Projetos ilimitados
                      </Label>
                    </div>
                    <Badge variant="outline">+R$ 29/mês</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="extra-storage" />
                      <Label htmlFor="extra-storage" className="text-sm">
                        100GB de armazenamento
                      </Label>
                    </div>
                    <Badge variant="outline">+R$ 19/mês</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="priority-support" />
                      <Label htmlFor="priority-support" className="text-sm">
                        Suporte prioritário
                      </Label>
                    </div>
                    <Badge variant="outline">+R$ 39/mês</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="api-access" />
                      <Label htmlFor="api-access" className="text-sm">
                        Acesso à API
                      </Label>
                    </div>
                    <Badge variant="outline">+R$ 49/mês</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">Total: R$ 99/mês</div>
                  <div className="text-sm text-muted-foreground">
                    Plano base + recursos selecionados
                  </div>
                </div>
                <Button>Assinar Plano</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
