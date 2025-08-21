import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  QuickCollapsible,
  FAQItem,
} from "../ui";
import { Button } from "../ui";
import { Badge } from "../ui";

export function CollapsiblePage() {
  const [isOpen, setIsOpen] = React.useState(false);

  const faqItems = [
    {
      id: "item-1",
      title: "Como instalar o glacienUI?",
      content: (
        <div className="space-y-2">
          <p>Você pode instalar o glacienUI usando npm ou yarn:</p>
          <code className="block bg-muted p-2 rounded text-sm">
            npm install @glacienui/components
          </code>
        </div>
      ),
    },
    {
      id: "item-2",
      title: "Quais são os requisitos?",
      content: (
        <div className="space-y-2">
          <p>O glacienUI requer:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>React 18 ou superior</li>
            <li>Node.js 16 ou superior</li>
            <li>TypeScript (opcional, mas recomendado)</li>
          </ul>
        </div>
      ),
    },
    {
      id: "item-3",
      title: "Como personalizar os temas?",
      content: (
        <div className="space-y-2">
          <p>Você pode personalizar usando CSS custom properties:</p>
          <code className="block bg-muted p-2 rounded text-sm">
            :root {"{"}
            --primary: 210 40% 98%;
            {"}"}
          </code>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Collapsible Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente que permite criar conteúdo expansível e recolhível com
          várias variações e estilos.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Collapsible Básico */}
        <Card>
          <CardHeader>
            <CardTitle>Collapsible Básico</CardTitle>
            <CardDescription>
              Exemplo básico de uso do componente Collapsible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Ver detalhes do pedido
                    <span className="text-xs text-muted-foreground">
                      {isOpen ? "Fechar" : "Abrir"}
                    </span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 p-4 border rounded-lg bg-muted/50">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Produto:</span>
                      <span className="font-medium">iPhone 15 Pro</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantidade:</span>
                      <span className="font-medium">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Preço:</span>
                      <span className="font-medium">R$ 7.999,00</span>
                    </div>
                    <div className="flex justify-between font-medium border-t pt-2">
                      <span>Total:</span>
                      <span>R$ 7.999,00</span>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </CardContent>
        </Card>

        {/* FAQ usando FAQItem */}
        <Card>
          <CardHeader>
            <CardTitle>FAQ Component</CardTitle>
            <CardDescription>
              Usando o componente FAQItem para criar perguntas frequentes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <FAQItem
                  key={item.id}
                  question={item.title}
                  answer={item.content}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Collapsible */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Collapsible</CardTitle>
            <CardDescription>
              Componente mais simples para uso rápido
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <QuickCollapsible title="Informações de entrega">
                <div className="space-y-2">
                  <p>Prazo: 5-7 dias úteis</p>
                  <p>Frete: Grátis para pedidos acima de R$ 100</p>
                  <p>Rastreamento: Disponível após envio</p>
                </div>
              </QuickCollapsible>

              <QuickCollapsible title="Política de devolução">
                <div className="space-y-2">
                  <p>Prazo: 30 dias após recebimento</p>
                  <p>Condições: Produto lacrado e em perfeito estado</p>
                  <p>Processo: Solicitação via chat ou email</p>
                </div>
              </QuickCollapsible>
            </div>
          </CardContent>
        </Card>

        {/* Variantes de Estilo */}
        <Card>
          <CardHeader>
            <CardTitle>Variantes de Estilo</CardTitle>
            <CardDescription>
              Diferentes estilos e configurações do Collapsible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="font-medium">Estilo Outline</h4>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      📋 Termos de Uso
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 p-3 border rounded">
                    <p className="text-sm text-muted-foreground">
                      Ao usar este serviço, você concorda com nossos termos...
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Estilo Ghost</h4>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start">
                      ⚙️ Configurações Avançadas
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 p-3 bg-accent/20 rounded">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="notifications" />
                        <label htmlFor="notifications" className="text-sm">
                          Receber notificações
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="analytics" />
                        <label htmlFor="analytics" className="text-sm">
                          Permitir analytics
                        </label>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Uso Avançado */}
        <Card>
          <CardHeader>
            <CardTitle>Uso Avançado</CardTitle>
            <CardDescription>
              Exemplos de configurações mais complexas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">
                  Collapsible com estado controlado
                </h4>
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-0 hover:bg-transparent"
                    >
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Avançado</Badge>
                        <span>Configurações de desenvolvedor</span>
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 border-l-2 border-primary bg-accent/20">
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium">API Key</label>
                        <code className="block mt-1 p-2 bg-muted rounded text-xs">
                          sk-1234567890abcdef...
                        </code>
                      </div>
                      <div>
                        <label className="text-sm font-medium">
                          Webhook URL
                        </label>
                        <code className="block mt-1 p-2 bg-muted rounded text-xs">
                          https://api.exemplo.com/webhook
                        </code>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <div>
                <h4 className="font-medium mb-4">FAQ Aninhado</h4>
                <div className="space-y-2">
                  <FAQItem
                    question="Como usar o sistema de autenticação?"
                    answer={
                      <div className="space-y-4">
                        <p>O sistema oferece várias opções de autenticação:</p>
                        <div className="space-y-2">
                          <FAQItem
                            question="Autenticação por email"
                            answer="Configure usando o provedor de email padrão..."
                          />
                          <FAQItem
                            question="Autenticação social"
                            answer="Integre com Google, GitHub, Facebook..."
                          />
                          <FAQItem
                            question="Autenticação de dois fatores"
                            answer="Configure 2FA usando TOTP ou SMS..."
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exemplos de API */}
        <Card>
          <CardHeader>
            <CardTitle>Exemplos de API</CardTitle>
            <CardDescription>
              Como usar os componentes programaticamente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Uso básico:</h4>
                <pre className="text-sm overflow-x-auto">
                  {`<Collapsible>
  <CollapsibleTrigger asChild>
    <Button>Toggle</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    Conteúdo aqui...
  </CollapsibleContent>
</Collapsible>`}
                </pre>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">FAQ Item:</h4>
                <pre className="text-sm overflow-x-auto">
                  {`<FAQItem
  question="Sua pergunta aqui"
  answer="Sua resposta aqui"
/>`}
                </pre>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Quick Collapsible:</h4>
                <pre className="text-sm overflow-x-auto">
                  {`<QuickCollapsible title="Título">
  <div>Conteúdo</div>
</QuickCollapsible>`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
