import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,
  Button,
} from "../../index";

export function SelectPage() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Select Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de seleção com dropdown para escolher entre múltiplas
          opções.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Select Básico */}
        <Card>
          <CardHeader>
            <CardTitle>Select Básico</CardTitle>
            <CardDescription>
              Implementação simples com opções básicas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="basic-select">Escolha uma opção</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Opção 1</SelectItem>
                    <SelectItem value="option2">Opção 2</SelectItem>
                    <SelectItem value="option3">Opção 3</SelectItem>
                    <SelectItem value="option4">Opção 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fruits">Frutas</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha uma fruta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">🍎 Maçã</SelectItem>
                    <SelectItem value="banana">🍌 Banana</SelectItem>
                    <SelectItem value="orange">🍊 Laranja</SelectItem>
                    <SelectItem value="grape">🍇 Uva</SelectItem>
                    <SelectItem value="strawberry">🍓 Morango</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select com Grupos */}
        <Card>
          <CardHeader>
            <CardTitle>Select com Categorias</CardTitle>
            <CardDescription>
              Organizando opções em grupos lógicos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Tecnologias</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha uma tecnologia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue.js</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                    <SelectItem value="nextjs">Next.js</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Linguagens de Programação</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha uma linguagem" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="typescript">TypeScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="csharp">C#</SelectItem>
                    <SelectItem value="go">Go</SelectItem>
                    <SelectItem value="rust">Rust</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select com Estados */}
        <Card>
          <CardHeader>
            <CardTitle>Estados do Select</CardTitle>
            <CardDescription>
              Diferentes estados visuais e de interação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Select Normal</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Estado normal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal1">Opção 1</SelectItem>
                    <SelectItem value="normal2">Opção 2</SelectItem>
                    <SelectItem value="normal3">Opção 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Select Desabilitado</Label>
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Estado desabilitado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="disabled1">Opção 1</SelectItem>
                    <SelectItem value="disabled2">Opção 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Select com Valor Pré-selecionado</Label>
                <Select defaultValue="pre-selected">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Opção 1</SelectItem>
                    <SelectItem value="pre-selected">
                      Valor Pré-selecionado
                    </SelectItem>
                    <SelectItem value="option3">Opção 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Select com Erro</Label>
                <Select>
                  <SelectTrigger className="border-red-500 focus:border-red-500">
                    <SelectValue placeholder="Campo obrigatório" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="error1">Opção 1</SelectItem>
                    <SelectItem value="error2">Opção 2</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-red-500">Este campo é obrigatório</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select em Formulário */}
        <Card>
          <CardHeader>
            <CardTitle>Formulário de Perfil</CardTitle>
            <CardDescription>
              Exemplo de uso em formulário completo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>País</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="br">🇧🇷 Brasil</SelectItem>
                      <SelectItem value="us">🇺🇸 Estados Unidos</SelectItem>
                      <SelectItem value="ca">🇨🇦 Canadá</SelectItem>
                      <SelectItem value="uk">🇬🇧 Reino Unido</SelectItem>
                      <SelectItem value="de">🇩🇪 Alemanha</SelectItem>
                      <SelectItem value="fr">🇫🇷 França</SelectItem>
                      <SelectItem value="jp">🇯🇵 Japão</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Estado/Província</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sp">São Paulo</SelectItem>
                      <SelectItem value="rj">Rio de Janeiro</SelectItem>
                      <SelectItem value="mg">Minas Gerais</SelectItem>
                      <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                      <SelectItem value="pr">Paraná</SelectItem>
                      <SelectItem value="sc">Santa Catarina</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Área de Atuação</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Escolha sua área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend">
                        Frontend Development
                      </SelectItem>
                      <SelectItem value="backend">
                        Backend Development
                      </SelectItem>
                      <SelectItem value="fullstack">
                        Fullstack Development
                      </SelectItem>
                      <SelectItem value="mobile">Mobile Development</SelectItem>
                      <SelectItem value="devops">DevOps</SelectItem>
                      <SelectItem value="data">Data Science</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Nível de Experiência</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seu nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Junior (0-2 anos)</SelectItem>
                      <SelectItem value="pleno">Pleno (2-5 anos)</SelectItem>
                      <SelectItem value="senior">Senior (5+ anos)</SelectItem>
                      <SelectItem value="lead">Tech Lead</SelectItem>
                      <SelectItem value="architect">Arquiteto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Disponibilidade</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Quando pode começar?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Imediatamente</SelectItem>
                    <SelectItem value="1week">Em 1 semana</SelectItem>
                    <SelectItem value="2weeks">Em 2 semanas</SelectItem>
                    <SelectItem value="1month">Em 1 mês</SelectItem>
                    <SelectItem value="2months">Em 2 meses</SelectItem>
                    <SelectItem value="3months">Em 3 meses ou mais</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Formato de Trabalho Preferido</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Como prefere trabalhar?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">100% Remoto</SelectItem>
                    <SelectItem value="hybrid">Híbrido</SelectItem>
                    <SelectItem value="onsite">Presencial</SelectItem>
                    <SelectItem value="flexible">Flexível</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3">
                <Button type="submit">Salvar Perfil</Button>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Select com Busca Simulada */}
        <Card>
          <CardHeader>
            <CardTitle>Select com Muitas Opções</CardTitle>
            <CardDescription>
              Exemplo com lista extensa de opções
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Cidade</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sao-paulo">São Paulo - SP</SelectItem>
                    <SelectItem value="rio-de-janeiro">
                      Rio de Janeiro - RJ
                    </SelectItem>
                    <SelectItem value="belo-horizonte">
                      Belo Horizonte - MG
                    </SelectItem>
                    <SelectItem value="brasilia">Brasília - DF</SelectItem>
                    <SelectItem value="salvador">Salvador - BA</SelectItem>
                    <SelectItem value="fortaleza">Fortaleza - CE</SelectItem>
                    <SelectItem value="curitiba">Curitiba - PR</SelectItem>
                    <SelectItem value="manaus">Manaus - AM</SelectItem>
                    <SelectItem value="recife">Recife - PE</SelectItem>
                    <SelectItem value="porto-alegre">
                      Porto Alegre - RS
                    </SelectItem>
                    <SelectItem value="goiania">Goiânia - GO</SelectItem>
                    <SelectItem value="belém">Belém - PA</SelectItem>
                    <SelectItem value="guarulhos">Guarulhos - SP</SelectItem>
                    <SelectItem value="campinas">Campinas - SP</SelectItem>
                    <SelectItem value="sao-luis">São Luís - MA</SelectItem>
                    <SelectItem value="natal">Natal - RN</SelectItem>
                    <SelectItem value="teresina">Teresina - PI</SelectItem>
                    <SelectItem value="campo-grande">
                      Campo Grande - MS
                    </SelectItem>
                    <SelectItem value="joao-pessoa">
                      João Pessoa - PB
                    </SelectItem>
                    <SelectItem value="aracaju">Aracaju - SE</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <p className="text-sm text-muted-foreground">
                💡 Dica: Em uma implementação real, você pode adicionar
                funcionalidade de busca para filtrar opções em listas extensas.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
