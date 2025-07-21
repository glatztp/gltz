import React from "react";
import { ComponentDocs } from "../layout/ComponentDocs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Textarea,
  Label,
  Button,
  Badge,
} from "../../index";

export function TextareaPage() {
  const [text, setText] = React.useState("");
  const maxLength = 500;

  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Textarea Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de área de texto para entrada de texto multilinha com
          diferentes configurações.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Textarea Básico */}
        <Card>
          <CardHeader>
            <CardTitle>Textarea Básico</CardTitle>
            <CardDescription>
              Diferentes tamanhos e configurações básicas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="basic-textarea">Descrição</Label>
                <Textarea
                  id="basic-textarea"
                  placeholder="Digite sua descrição aqui..."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="large-textarea">Comentário Detalhado</Label>
                <Textarea
                  id="large-textarea"
                  placeholder="Escreva um comentário detalhado..."
                  rows={5}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estados do Textarea */}
        <Card>
          <CardHeader>
            <CardTitle>Estados do Textarea</CardTitle>
            <CardDescription>
              Diferentes estados visuais e de interação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="normal-state">Estado Normal</Label>
                <Textarea
                  id="normal-state"
                  placeholder="Estado normal do textarea"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="focused-state">Estado Focado</Label>
                <Textarea
                  id="focused-state"
                  placeholder="Este textarea está focado"
                  rows={3}
                  autoFocus
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="disabled-state"
                  className="text-muted-foreground"
                >
                  Estado Desabilitado
                </Label>
                <Textarea
                  id="disabled-state"
                  placeholder="Este textarea está desabilitado"
                  rows={3}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="error-state">Estado de Erro</Label>
                <Textarea
                  id="error-state"
                  placeholder="Campo com erro"
                  rows={3}
                  className="border-red-500 focus:border-red-500"
                />
                <p className="text-sm text-red-500">Este campo é obrigatório</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Textarea com Contador */}
        <Card>
          <CardHeader>
            <CardTitle>Textarea com Contador de Caracteres</CardTitle>
            <CardDescription>
              Limitando e contando caracteres digitados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="counted-textarea">Feedback do Produto</Label>
              <Textarea
                id="counted-textarea"
                placeholder="Compartilhe sua experiência com nosso produto..."
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value.slice(0, maxLength))}
                maxLength={maxLength}
              />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Máximo de {maxLength} caracteres
                </span>
                <span
                  className={
                    text.length > maxLength * 0.9
                      ? "text-red-500"
                      : "text-muted-foreground"
                  }
                >
                  {text.length}/{maxLength}
                </span>
              </div>
              {text.length > maxLength * 0.9 && (
                <p className="text-sm text-yellow-600">
                  Você está próximo do limite de caracteres
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Formulário de Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>Formulário de Feedback</CardTitle>
            <CardDescription>
              Exemplo prático de uso em formulário
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="experience">Como foi sua experiência?</Label>
                <Textarea
                  id="experience"
                  placeholder="Descreva sua experiência geral com nosso serviço..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="improvements">Sugestões de Melhoria</Label>
                <Textarea
                  id="improvements"
                  placeholder="O que podemos fazer para melhorar?"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional">Comentários Adicionais</Label>
                <Textarea
                  id="additional"
                  placeholder="Alguma coisa mais que gostaria de compartilhar?"
                  rows={3}
                />
                <p className="text-sm text-muted-foreground">
                  Este campo é opcional
                </p>
              </div>

              <div className="flex gap-3">
                <Button type="submit">Enviar Feedback</Button>
                <Button type="button" variant="outline">
                  Salvar Rascunho
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Textarea para Código */}
        <Card>
          <CardHeader>
            <CardTitle>Textarea para Código</CardTitle>
            <CardDescription>
              Configurado para entrada de código com fonte monoespaçada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code-textarea">Snippet de Código</Label>
                <Textarea
                  id="code-textarea"
                  placeholder="// Cole seu código aqui
function exemplo() {
  console.log('Hello World!');
}"
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="json-textarea">Configuração JSON</Label>
                <Textarea
                  id="json-textarea"
                  placeholder='{"name": "exemplo", "version": "1.0.0"}'
                  rows={5}
                  className="font-mono text-sm"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Textarea com Resize */}
        <Card>
          <CardHeader>
            <CardTitle>Controle de Redimensionamento</CardTitle>
            <CardDescription>
              Diferentes opções de redimensionamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="resize-vertical">Redimensionar Vertical</Label>
                <Textarea
                  id="resize-vertical"
                  placeholder="Pode redimensionar apenas verticalmente"
                  rows={3}
                  className="resize-y"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="no-resize">Sem Redimensionamento</Label>
                <Textarea
                  id="no-resize"
                  placeholder="Tamanho fixo, não pode redimensionar"
                  rows={3}
                  className="resize-none"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Casos de Uso Específicos */}
        <Card>
          <CardHeader>
            <CardTitle>Casos de Uso Específicos</CardTitle>
            <CardDescription>
              Exemplos de diferentes contextos de uso
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Email */}
              <div className="space-y-3">
                <h4 className="font-medium">Compor Email</h4>
                <div className="space-y-2">
                  <Label htmlFor="email-subject">Assunto</Label>
                  <input
                    id="email-subject"
                    type="text"
                    placeholder="Assunto do email..."
                    className="w-full px-3 py-2 border border-input rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-body">Mensagem</Label>
                  <Textarea
                    id="email-body"
                    placeholder="Digite sua mensagem aqui..."
                    rows={6}
                  />
                </div>
                <div className="flex gap-2">
                  <Button>Enviar</Button>
                  <Button variant="outline">Salvar Rascunho</Button>
                  <Badge variant="outline" className="ml-auto">
                    Rascunho salvo automaticamente
                  </Badge>
                </div>
              </div>

              {/* Review */}
              <div className="space-y-3">
                <h4 className="font-medium">Avaliação de Produto</h4>
                <div className="space-y-2">
                  <Label htmlFor="review">Sua Avaliação</Label>
                  <Textarea
                    id="review"
                    placeholder="Conte sobre sua experiência com este produto..."
                    rows={4}
                  />
                  <p className="text-sm text-muted-foreground">
                    Ajude outros clientes compartilhando sua opinião honesta
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="text-yellow-400 cursor-pointer"
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <Button>Publicar Avaliação</Button>
                </div>
              </div>

              {/* Suporte */}
              <div className="space-y-3">
                <h4 className="font-medium">Ticket de Suporte</h4>
                <div className="space-y-2">
                  <Label htmlFor="issue">Descreva o Problema</Label>
                  <Textarea
                    id="issue"
                    placeholder="Descreva detalhadamente o problema que você está enfrentando..."
                    rows={5}
                  />
                  <p className="text-sm text-muted-foreground">
                    Quanto mais detalhes você fornecer, mais rápido poderemos
                    ajudar
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button>Enviar Ticket</Button>
                  <Button variant="outline">Anexar Arquivo</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
    </div>
  );
}
