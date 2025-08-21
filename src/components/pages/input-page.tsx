import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Input,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  Label,
} from "../../index";
import {
  User,
  EnvelopeSimple,
  Phone,
  MapPin,
  Lock,
  Eye,
  EyeSlash,
} from "phosphor-react";

export function InputPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex gap-6 min-h-screen pt-12">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Input Component</h1>
            <p className="text-muted-foreground mt-2">
              Componentes de entrada de dados para formulários e interações do
              usuário.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Input Básico */}
            <Card>
              <CardHeader>
                <CardTitle>Input Básico</CardTitle>
                <CardDescription>
                  Inputs simples para diferentes tipos de dados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="basic-text">Texto</Label>
                    <Input
                      id="basic-text"
                      type="text"
                      placeholder="Digite seu nome..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="basic-email">Email</Label>
                    <Input
                      id="basic-email"
                      type="email"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="basic-tel">Telefone</Label>
                    <Input
                      id="basic-tel"
                      type="tel"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="basic-number">Número</Label>
                    <Input id="basic-number" type="number" placeholder="123" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Input com Ícones */}
            <Card>
              <CardHeader>
                <CardTitle>Input com Ícones</CardTitle>
                <CardDescription>
                  Adicionando ícones para melhor identificação visual
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="icon-user">Usuário</Label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        id="icon-user"
                        type="text"
                        placeholder="Nome de usuário"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="icon-email">Email</Label>
                    <div className="relative">
                      <EnvelopeSimple
                        size={16}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        id="icon-email"
                        type="email"
                        placeholder="seu@email.com"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="icon-phone">Telefone</Label>
                    <div className="relative">
                      <Phone
                        size={16}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        id="icon-phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="icon-location">Localização</Label>
                    <div className="relative">
                      <MapPin
                        size={16}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        id="icon-location"
                        type="text"
                        placeholder="Cidade, Estado"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Input de Senha */}
            <Card>
              <CardHeader>
                <CardTitle>Input de Senha</CardTitle>
                <CardDescription>
                  Input com toggle de visibilidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                      <Lock
                        size={16}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeSlash size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Senha</Label>
                    <div className="relative">
                      <Lock
                        size={16}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estados do Input */}
            <Card>
              <CardHeader>
                <CardTitle>Estados do Input</CardTitle>
                <CardDescription>
                  Diferentes estados visuais e de interação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="normal">Normal</Label>
                    <Input
                      id="normal"
                      type="text"
                      placeholder="Estado normal"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="focused">Focado</Label>
                    <Input
                      id="focused"
                      type="text"
                      placeholder="Estado focado"
                      autoFocus
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="disabled">Desabilitado</Label>
                    <Input
                      id="disabled"
                      type="text"
                      placeholder="Estado desabilitado"
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="error">Com Erro</Label>
                    <Input
                      id="error"
                      type="text"
                      placeholder="Estado de erro"
                      className="border-red-500 focus:border-red-500"
                    />
                    <p className="text-sm text-red-500">
                      Este campo é obrigatório
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Textarea */}
            <Card>
              <CardHeader>
                <CardTitle>Textarea</CardTitle>
                <CardDescription>
                  Para entrada de texto multilinha
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Digite sua mensagem aqui..."
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea
                      id="description"
                      placeholder="Descreva em detalhes..."
                      rows={4}
                    />
                    <p className="text-sm text-muted-foreground">
                      Máximo de 500 caracteres
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formulário Completo */}
            <Card>
              <CardHeader>
                <CardTitle>Formulário de Exemplo</CardTitle>
                <CardDescription>
                  Combinando diferentes tipos de input
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nome</Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="João"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Silva"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="form-email">Email</Label>
                    <div className="relative">
                      <EnvelopeSimple
                        size={16}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        id="form-email"
                        type="email"
                        placeholder="joao.silva@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="frontend">Frontend</SelectItem>
                        <SelectItem value="backend">Backend</SelectItem>
                        <SelectItem value="fullstack">Fullstack</SelectItem>
                        <SelectItem value="mobile">Mobile</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografia</Label>
                    <Textarea
                      id="bio"
                      placeholder="Conte um pouco sobre você..."
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      Aceito os termos e condições
                    </Label>
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit">Salvar Dados</Button>
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
