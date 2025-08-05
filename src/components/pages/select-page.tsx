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
    <div className="flex gap-6 min-h-screen pt-12">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
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
                    <p className="text-sm text-red-500">
                      Este campo é obrigatório
                    </p>
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
                          <SelectItem value="mobile">
                            Mobile Development
                          </SelectItem>
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
                          <SelectItem value="junior">
                            Junior (0-2 anos)
                          </SelectItem>
                          <SelectItem value="pleno">
                            Pleno (2-5 anos)
                          </SelectItem>
                          <SelectItem value="senior">
                            Senior (5+ anos)
                          </SelectItem>
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
                        <SelectItem value="3months">
                          Em 3 meses ou mais
                        </SelectItem>
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
                        <SelectItem value="sao-paulo">
                          São Paulo - SP
                        </SelectItem>
                        <SelectItem value="rio-de-janeiro">
                          Rio de Janeiro - RJ
                        </SelectItem>
                        <SelectItem value="belo-horizonte">
                          Belo Horizonte - MG
                        </SelectItem>
                        <SelectItem value="brasilia">Brasília - DF</SelectItem>
                        <SelectItem value="salvador">Salvador - BA</SelectItem>
                        <SelectItem value="fortaleza">
                          Fortaleza - CE
                        </SelectItem>
                        <SelectItem value="curitiba">Curitiba - PR</SelectItem>
                        <SelectItem value="manaus">Manaus - AM</SelectItem>
                        <SelectItem value="recife">Recife - PE</SelectItem>
                        <SelectItem value="porto-alegre">
                          Porto Alegre - RS
                        </SelectItem>
                        <SelectItem value="goiania">Goiânia - GO</SelectItem>
                        <SelectItem value="belém">Belém - PA</SelectItem>
                        <SelectItem value="guarulhos">
                          Guarulhos - SP
                        </SelectItem>
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
                    funcionalidade de busca para filtrar opções em listas
                    extensas.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Select para E-commerce */}
            <Card>
              <CardHeader>
                <CardTitle>E-commerce e Produtos</CardTitle>
                <CardDescription>
                  Selects específicos para lojas online e produtos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Tamanho do Produto</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Escolha o tamanho" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pp">PP - Extra Pequeno</SelectItem>
                        <SelectItem value="p">P - Pequeno</SelectItem>
                        <SelectItem value="m">M - Médio</SelectItem>
                        <SelectItem value="g">G - Grande</SelectItem>
                        <SelectItem value="gg">GG - Extra Grande</SelectItem>
                        <SelectItem value="xgg">
                          XGG - Extra Extra Grande
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Cor do Produto</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a cor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="black">⚫ Preto</SelectItem>
                        <SelectItem value="white">⚪ Branco</SelectItem>
                        <SelectItem value="red">🔴 Vermelho</SelectItem>
                        <SelectItem value="blue">🔵 Azul</SelectItem>
                        <SelectItem value="green">🟢 Verde</SelectItem>
                        <SelectItem value="yellow">🟡 Amarelo</SelectItem>
                        <SelectItem value="purple">🟣 Roxo</SelectItem>
                        <SelectItem value="orange">🟠 Laranja</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Forma de Pagamento</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Como deseja pagar?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit">
                          💳 Cartão de Crédito
                        </SelectItem>
                        <SelectItem value="debit">
                          💳 Cartão de Débito
                        </SelectItem>
                        <SelectItem value="pix">📱 PIX</SelectItem>
                        <SelectItem value="boleto">
                          📄 Boleto Bancário
                        </SelectItem>
                        <SelectItem value="paypal">💰 PayPal</SelectItem>
                        <SelectItem value="crypto">₿ Criptomoedas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Frete</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Tipo de entrega" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">
                          📦 Padrão (5-7 dias) - Grátis
                        </SelectItem>
                        <SelectItem value="express">
                          ⚡ Expressa (2-3 dias) - R$ 15,00
                        </SelectItem>
                        <SelectItem value="same-day">
                          🚀 Mesmo dia - R$ 25,00
                        </SelectItem>
                        <SelectItem value="pickup">
                          🏪 Retirar na loja - Grátis
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Select para Configurações */}
            <Card>
              <CardHeader>
                <CardTitle>Configurações e Preferências</CardTitle>
                <CardDescription>
                  Selects para configurações de aplicativo e sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Tema</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Escolha o tema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">☀️ Claro</SelectItem>
                        <SelectItem value="dark">🌙 Escuro</SelectItem>
                        <SelectItem value="system">⚙️ Sistema</SelectItem>
                        <SelectItem value="auto">🔄 Automático</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Idioma</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt-br">
                          🇧🇷 Português (Brasil)
                        </SelectItem>
                        <SelectItem value="en-us">🇺🇸 English (US)</SelectItem>
                        <SelectItem value="es-es">🇪🇸 Español</SelectItem>
                        <SelectItem value="fr-fr">🇫🇷 Français</SelectItem>
                        <SelectItem value="de-de">🇩🇪 Deutsch</SelectItem>
                        <SelectItem value="it-it">🇮🇹 Italiano</SelectItem>
                        <SelectItem value="ja-jp">🇯🇵 日本語</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Qualidade de Vídeo</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Qualidade padrão" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4k">📺 4K (2160p)</SelectItem>
                        <SelectItem value="1440p">🖥️ QHD (1440p)</SelectItem>
                        <SelectItem value="1080p">
                          💻 Full HD (1080p)
                        </SelectItem>
                        <SelectItem value="720p">📱 HD (720p)</SelectItem>
                        <SelectItem value="480p">📺 SD (480p)</SelectItem>
                        <SelectItem value="auto">🔄 Automático</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Notificações</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Frequência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">🔔 Todas</SelectItem>
                        <SelectItem value="important">
                          ⚠️ Apenas importantes
                        </SelectItem>
                        <SelectItem value="mentions">
                          💬 Menções apenas
                        </SelectItem>
                        <SelectItem value="none">🔕 Nenhuma</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Select para Filtros */}
            <Card>
              <CardHeader>
                <CardTitle>Filtros e Ordenação</CardTitle>
                <CardDescription>
                  Selects para filtrar e organizar conteúdo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Ordenar por</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Critério de ordenação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">📅 Mais recente</SelectItem>
                        <SelectItem value="oldest">📆 Mais antigo</SelectItem>
                        <SelectItem value="price-low">
                          💰 Menor preço
                        </SelectItem>
                        <SelectItem value="price-high">
                          💸 Maior preço
                        </SelectItem>
                        <SelectItem value="rating">
                          ⭐ Melhor avaliado
                        </SelectItem>
                        <SelectItem value="popular">🔥 Mais popular</SelectItem>
                        <SelectItem value="name-az">🔤 Nome A-Z</SelectItem>
                        <SelectItem value="name-za">🔤 Nome Z-A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Categoria</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Filtrar categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">📋 Todas</SelectItem>
                        <SelectItem value="electronics">
                          💻 Eletrônicos
                        </SelectItem>
                        <SelectItem value="clothing">👕 Roupas</SelectItem>
                        <SelectItem value="books">📚 Livros</SelectItem>
                        <SelectItem value="home">🏠 Casa & Jardim</SelectItem>
                        <SelectItem value="sports">⚽ Esportes</SelectItem>
                        <SelectItem value="beauty">💄 Beleza</SelectItem>
                        <SelectItem value="toys">🧸 Brinquedos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Faixa de Preço</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a faixa" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">💵 Todos os preços</SelectItem>
                        <SelectItem value="0-50">💰 R$ 0 - R$ 50</SelectItem>
                        <SelectItem value="50-100">
                          💰 R$ 50 - R$ 100
                        </SelectItem>
                        <SelectItem value="100-250">
                          💰 R$ 100 - R$ 250
                        </SelectItem>
                        <SelectItem value="250-500">
                          💰 R$ 250 - R$ 500
                        </SelectItem>
                        <SelectItem value="500-1000">
                          💰 R$ 500 - R$ 1.000
                        </SelectItem>
                        <SelectItem value="1000+">
                          💎 Acima de R$ 1.000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Select para Dados Pessoais */}
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
                <CardDescription>
                  Selects para cadastro e perfil de usuário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Gênero</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">👨 Masculino</SelectItem>
                        <SelectItem value="female">👩 Feminino</SelectItem>
                        <SelectItem value="non-binary">
                          🧑 Não-binário
                        </SelectItem>
                        <SelectItem value="prefer-not">
                          🤐 Prefiro não informar
                        </SelectItem>
                        <SelectItem value="other">➕ Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Estado Civil</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Situação atual" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">💔 Solteiro(a)</SelectItem>
                        <SelectItem value="married">💑 Casado(a)</SelectItem>
                        <SelectItem value="divorced">
                          💔 Divorciado(a)
                        </SelectItem>
                        <SelectItem value="widowed">🖤 Viúvo(a)</SelectItem>
                        <SelectItem value="union">💕 União estável</SelectItem>
                        <SelectItem value="separated">
                          💔 Separado(a)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Escolaridade</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Nível de educação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="elementary">
                          📚 Ensino Fundamental
                        </SelectItem>
                        <SelectItem value="high-school">
                          🎓 Ensino Médio
                        </SelectItem>
                        <SelectItem value="technical">⚙️ Técnico</SelectItem>
                        <SelectItem value="undergraduate">
                          🎓 Superior Incompleto
                        </SelectItem>
                        <SelectItem value="bachelor">
                          🎓 Superior Completo
                        </SelectItem>
                        <SelectItem value="postgrad">
                          📜 Pós-graduação
                        </SelectItem>
                        <SelectItem value="master">🎯 Mestrado</SelectItem>
                        <SelectItem value="phd">🔬 Doutorado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Profissão</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Área de atuação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">💻 Tecnologia</SelectItem>
                        <SelectItem value="health">⚕️ Saúde</SelectItem>
                        <SelectItem value="education">👨‍🏫 Educação</SelectItem>
                        <SelectItem value="finance">💰 Finanças</SelectItem>
                        <SelectItem value="marketing">📢 Marketing</SelectItem>
                        <SelectItem value="design">🎨 Design</SelectItem>
                        <SelectItem value="law">⚖️ Direito</SelectItem>
                        <SelectItem value="engineering">
                          🔧 Engenharia
                        </SelectItem>
                        <SelectItem value="sales">💼 Vendas</SelectItem>
                        <SelectItem value="other">➕ Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Select para Gaming */}
            <Card>
              <CardHeader>
                <CardTitle>Gaming e Entretenimento</CardTitle>
                <CardDescription>
                  Selects para configurações de jogos e entretenimento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Plataforma de Jogo</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Escolha a plataforma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pc">🖥️ PC (Steam)</SelectItem>
                        <SelectItem value="playstation">
                          🎮 PlayStation
                        </SelectItem>
                        <SelectItem value="xbox">🎯 Xbox</SelectItem>
                        <SelectItem value="nintendo">
                          🕹️ Nintendo Switch
                        </SelectItem>
                        <SelectItem value="mobile">📱 Mobile</SelectItem>
                        <SelectItem value="vr">🥽 Realidade Virtual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Dificuldade</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Nível de dificuldade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">🟢 Iniciante</SelectItem>
                        <SelectItem value="easy">🔵 Fácil</SelectItem>
                        <SelectItem value="normal">🟡 Normal</SelectItem>
                        <SelectItem value="hard">🟠 Difícil</SelectItem>
                        <SelectItem value="expert">🔴 Expert</SelectItem>
                        <SelectItem value="nightmare">💀 Pesadelo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Gênero do Jogo</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Tipo de jogo favorito" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="action">⚔️ Ação</SelectItem>
                        <SelectItem value="adventure">🗺️ Aventura</SelectItem>
                        <SelectItem value="rpg">🧙‍♂️ RPG</SelectItem>
                        <SelectItem value="strategy">🏰 Estratégia</SelectItem>
                        <SelectItem value="sports">⚽ Esportes</SelectItem>
                        <SelectItem value="racing">🏎️ Corrida</SelectItem>
                        <SelectItem value="puzzle">🧩 Puzzle</SelectItem>
                        <SelectItem value="horror">👻 Terror</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Servidor de Jogo</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Região do servidor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="br">🇧🇷 Brasil</SelectItem>
                        <SelectItem value="na-east">
                          🇺🇸 América do Norte (Leste)
                        </SelectItem>
                        <SelectItem value="na-west">
                          🇺🇸 América do Norte (Oeste)
                        </SelectItem>
                        <SelectItem value="eu-west">
                          🇪🇺 Europa (Oeste)
                        </SelectItem>
                        <SelectItem value="eu-east">
                          🇪🇺 Europa (Leste)
                        </SelectItem>
                        <SelectItem value="asia">🌏 Ásia</SelectItem>
                        <SelectItem value="oceania">🇦🇺 Oceania</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Select para Agendamento */}
            <Card>
              <CardHeader>
                <CardTitle>Agendamento e Tempo</CardTitle>
                <CardDescription>
                  Selects para horários, datas e agendamentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Horário de Atendimento</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Escolha o horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="08:00">⏰ 08:00</SelectItem>
                        <SelectItem value="09:00">⏰ 09:00</SelectItem>
                        <SelectItem value="10:00">⏰ 10:00</SelectItem>
                        <SelectItem value="11:00">⏰ 11:00</SelectItem>
                        <SelectItem value="14:00">⏰ 14:00</SelectItem>
                        <SelectItem value="15:00">⏰ 15:00</SelectItem>
                        <SelectItem value="16:00">⏰ 16:00</SelectItem>
                        <SelectItem value="17:00">⏰ 17:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Duração da Consulta</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Tempo necessário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15min">⏱️ 15 minutos</SelectItem>
                        <SelectItem value="30min">⏱️ 30 minutos</SelectItem>
                        <SelectItem value="45min">⏱️ 45 minutos</SelectItem>
                        <SelectItem value="1h">⏱️ 1 hora</SelectItem>
                        <SelectItem value="1h30">⏱️ 1h 30min</SelectItem>
                        <SelectItem value="2h">⏱️ 2 horas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Dia da Semana</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o dia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monday">📅 Segunda-feira</SelectItem>
                        <SelectItem value="tuesday">📅 Terça-feira</SelectItem>
                        <SelectItem value="wednesday">
                          📅 Quarta-feira
                        </SelectItem>
                        <SelectItem value="thursday">
                          📅 Quinta-feira
                        </SelectItem>
                        <SelectItem value="friday">📅 Sexta-feira</SelectItem>
                        <SelectItem value="saturday">📅 Sábado</SelectItem>
                        <SelectItem value="sunday">📅 Domingo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Período do Dia</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Melhor período" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">
                          🌅 Manhã (06:00 - 12:00)
                        </SelectItem>
                        <SelectItem value="afternoon">
                          ☀️ Tarde (12:00 - 18:00)
                        </SelectItem>
                        <SelectItem value="evening">
                          🌆 Noite (18:00 - 22:00)
                        </SelectItem>
                        <SelectItem value="dawn">
                          🌙 Madrugada (22:00 - 06:00)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Select Criativos */}
            <Card>
              <CardHeader>
                <CardTitle>Selects Criativos e Divertidos</CardTitle>
                <CardDescription>
                  Exemplos únicos e interativos para inspiração
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Humor do Dia</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Como você está se sentindo?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="happy">😄 Feliz</SelectItem>
                        <SelectItem value="excited">🤩 Animado</SelectItem>
                        <SelectItem value="calm">😌 Calmo</SelectItem>
                        <SelectItem value="tired">😴 Cansado</SelectItem>
                        <SelectItem value="stressed">😰 Estressado</SelectItem>
                        <SelectItem value="confused">😵 Confuso</SelectItem>
                        <SelectItem value="productive">💪 Produtivo</SelectItem>
                        <SelectItem value="creative">🎨 Criativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Superpoder Favorito</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Qual você escolheria?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fly">🕊️ Voar</SelectItem>
                        <SelectItem value="invisible">
                          👻 Invisibilidade
                        </SelectItem>
                        <SelectItem value="teleport">
                          ⚡ Teletransporte
                        </SelectItem>
                        <SelectItem value="time">
                          ⏰ Controlar o tempo
                        </SelectItem>
                        <SelectItem value="mind">🧠 Ler mentes</SelectItem>
                        <SelectItem value="super-speed">
                          💨 Super velocidade
                        </SelectItem>
                        <SelectItem value="super-strength">
                          💪 Super força
                        </SelectItem>
                        <SelectItem value="shape-shift">
                          🦋 Metamorfose
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Pizza Favorita</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Qual sabor você pediria?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="margherita">
                          🍕 Margherita
                        </SelectItem>
                        <SelectItem value="pepperoni">🍕 Pepperoni</SelectItem>
                        <SelectItem value="quatro-queijos">
                          🧀 Quatro Queijos
                        </SelectItem>
                        <SelectItem value="portuguesa">
                          🥓 Portuguesa
                        </SelectItem>
                        <SelectItem value="calabresa">🌶️ Calabresa</SelectItem>
                        <SelectItem value="frango">
                          🐔 Frango com Catupiry
                        </SelectItem>
                        <SelectItem value="vegana">🌱 Vegana</SelectItem>
                        <SelectItem value="doce">
                          🍫 Chocolate (Doce)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Estação do Ano</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sua preferida" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spring">🌸 Primavera</SelectItem>
                        <SelectItem value="summer">☀️ Verão</SelectItem>
                        <SelectItem value="autumn">🍂 Outono</SelectItem>
                        <SelectItem value="winter">❄️ Inverno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Animal Espiritual</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Qual representa você?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lion">🦁 Leão - Corajoso</SelectItem>
                        <SelectItem value="owl">🦉 Coruja - Sábio</SelectItem>
                        <SelectItem value="dolphin">
                          🐬 Golfinho - Sociável
                        </SelectItem>
                        <SelectItem value="eagle">
                          🦅 Águia - Visionário
                        </SelectItem>
                        <SelectItem value="wolf">
                          🐺 Lobo - Independente
                        </SelectItem>
                        <SelectItem value="elephant">
                          🐘 Elefante - Leal
                        </SelectItem>
                        <SelectItem value="butterfly">
                          🦋 Borboleta - Transformador
                        </SelectItem>
                        <SelectItem value="turtle">
                          🐢 Tartaruga - Paciente
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Destino dos Sonhos</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Para onde viajaria?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="japan">🗾 Japão</SelectItem>
                        <SelectItem value="iceland">🏔️ Islândia</SelectItem>
                        <SelectItem value="maldives">🏝️ Maldivas</SelectItem>
                        <SelectItem value="norway">🌌 Noruega</SelectItem>
                        <SelectItem value="new-zealand">
                          🥝 Nova Zelândia
                        </SelectItem>
                        <SelectItem value="switzerland">🏔️ Suíça</SelectItem>
                        <SelectItem value="bali">🌺 Bali</SelectItem>
                        <SelectItem value="space">🚀 Espaço</SelectItem>
                      </SelectContent>
                    </Select>
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
