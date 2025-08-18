import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  Button,
  Input,
  Label,
} from "../../index";

// Exemplo de loading/feedback
function LoadingDialogExample() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">Dialog com Loading</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Processando ação</DialogTitle>
          <DialogDescription>
            Exemplo de feedback visual durante uma ação assíncrona.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 items-center py-4">
          {loading ? (
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" />
          ) : (
            <Button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setOpen(false);
                }, 2000);
              }}
            >
              Iniciar ação
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Exemplo de Dialog sem header/footer
function MinimalDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Dialog Minimalista</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="text-center py-6">
          <span className="text-lg font-bold">
            Conteúdo customizado sem header/footer
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Exemplo de customização de tamanho/estilo
function CustomSizeDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Dialog Grande</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Dialog Customizado</DialogTitle>
          <DialogDescription>
            Exemplo de customização de tamanho via prop className.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          Conteúdo amplo para mostrar o tamanho customizado.
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Exemplo de acessibilidade
function AccessibleDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Dialog Acessível</Button>
      </DialogTrigger>
      <DialogContent aria-label="Exemplo de dialog acessível">
        <DialogHeader>
          <DialogTitle>Dialog com aria-label</DialogTitle>
          <DialogDescription>
            Este dialog possui atributos de acessibilidade.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Exemplo de alerta/confirm
function ConfirmDialogExample() {
  const [open, setOpen] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive">Dialog de Confirmação</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tem certeza?</DialogTitle>
            <DialogDescription>
              Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setResult("Cancelado");
                setOpen(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {
                setResult("Confirmado");
                setOpen(false);
              }}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {result && (
        <div className="mt-2 text-sm text-muted-foreground">
          Resultado: {result}
        </div>
      )}
    </>
  );
}

export function DialogPage() {
  // Estado para exemplo controlado
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex gap-6 min-h-screen pt-12">
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Dialog Component</h1>
            <p className="text-muted-foreground mt-2">
              O <b>Dialog</b> é um componente modal para interações com o
              usuário.
              <br />
              Veja abaixo exemplos de cada prop e casos de uso práticos.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Exemplo básico */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog Básico</CardTitle>
                <CardDescription>
                  Uso padrão do Dialog, com Trigger, Header, Content e Footer.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Abrir Dialog</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Editar perfil</DialogTitle>
                      <DialogDescription>
                        Faça alterações no seu perfil aqui. Clique em salvar
                        quando terminar.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Nome
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Usuário
                        </Label>
                        <Input
                          id="username"
                          defaultValue="@peduarte"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Salvar alterações</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Exemplo controlado (open/onOpenChange) */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog Controlado</CardTitle>
                <CardDescription>
                  Controle total do estado do Dialog via props <code>open</code>{" "}
                  e <code>onOpenChange</code>.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">Abrir Dialog Controlado</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Controlado</DialogTitle>
                      <DialogDescription>
                        Este dialog pode ser aberto/fechado programaticamente.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setOpen(false)}>
                        Cancelar
                      </Button>
                      <Button onClick={() => setOpen(false)}>Confirmar</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Exemplo de asChild no Trigger */}
            <Card>
              <CardHeader>
                <CardTitle>DialogTrigger com asChild</CardTitle>
                <CardDescription>
                  Permite usar qualquer componente como Trigger, mantendo
                  estilos e props.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <span>
                      <Button variant="ghost">Abrir via span</Button>
                    </span>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Trigger customizado</DialogTitle>
                      <DialogDescription>
                        O Trigger pode ser qualquer elemento, usando{" "}
                        <code>asChild</code>.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Customização de tamanho/estilo */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog Customizado</CardTitle>
                <CardDescription>
                  Personalize tamanho, animação e estilo via{" "}
                  <code>className</code>.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CustomSizeDialogExample />
              </CardContent>
            </Card>

            {/* Dialog sem header/footer */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog Minimalista</CardTitle>
                <CardDescription>
                  Exemplo sem header/footer, apenas conteúdo customizado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MinimalDialogExample />
              </CardContent>
            </Card>

            {/* Dialog com loading/feedback */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog com Loading</CardTitle>
                <CardDescription>
                  Feedback visual durante ações assíncronas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LoadingDialogExample />
              </CardContent>
            </Card>

            {/* Dialog acessível */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog Acessível</CardTitle>
                <CardDescription>
                  Uso de <code>aria-label</code> e boas práticas de
                  acessibilidade.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AccessibleDialogExample />
              </CardContent>
            </Card>

            {/* Dialog de confirmação/alerta */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog de Confirmação</CardTitle>
                <CardDescription>
                  Caso de uso para alertas e confirmações.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ConfirmDialogExample />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
