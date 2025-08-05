import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Badge,
} from "../../index";
import {
  Info,
  Warning,
  CheckCircle,
  XCircle,
  Bell,
  Shield,
  Lightbulb,
  Heart,
  Star,
  Fire,
  Gift,
  Clock,
  Eye,
  Download,
  Upload,
  Trash,
  Gear,
} from "phosphor-react";

export function AlertPage() {
  return (
    <div className="flex gap-6 min-h-screen pt-12">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Alert Component</h1>
            <p className="text-muted-foreground mt-2">
              Componente de alerta para exibir mensagens importantes, avisos e
              notificações aos usuários.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Alerts Básicos */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts Básicos</CardTitle>
                <CardDescription>
                  Diferentes tipos de alertas para diferentes situações
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info size={16} />
                  <AlertTitle>Informação</AlertTitle>
                  <AlertDescription>
                    Esta é uma mensagem informativa básica para o usuário.
                  </AlertDescription>
                </Alert>

                <Alert className="border-yellow-500 bg-yellow-50 text-yellow-800">
                  <Warning size={16} />
                  <AlertTitle>Atenção</AlertTitle>
                  <AlertDescription>
                    Este é um alerta de atenção que requer cuidado especial.
                  </AlertDescription>
                </Alert>

                <Alert className="border-green-500 bg-green-50 text-green-800">
                  <CheckCircle size={16} />
                  <AlertTitle>Sucesso</AlertTitle>
                  <AlertDescription>
                    Operação realizada com sucesso! Tudo funcionou conforme
                    esperado.
                  </AlertDescription>
                </Alert>

                <Alert className="border-red-500 bg-red-50 text-red-800">
                  <XCircle size={16} />
                  <AlertTitle>Erro</AlertTitle>
                  <AlertDescription>
                    Ocorreu um erro durante a operação. Tente novamente mais
                    tarde.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts sem Título */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts Simplificados</CardTitle>
                <CardDescription>
                  Alertas apenas com descrição, sem título
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info size={16} />
                  <AlertDescription>
                    Informação importante sem título específico.
                  </AlertDescription>
                </Alert>

                <Alert className="border-blue-500 bg-blue-50 text-blue-800">
                  <AlertDescription>
                    Dica: Você pode personalizar os alertas com cores
                    diferentes.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts com Ações */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts com Ações</CardTitle>
                <CardDescription>
                  Alertas que incluem botões para ações do usuário
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-yellow-500 bg-yellow-50 text-yellow-800">
                  <Warning size={16} />
                  <AlertTitle>Atualização Disponível</AlertTitle>
                  <AlertDescription className="mb-3">
                    Uma nova versão da aplicação está disponível. Recomendamos
                    atualizar para obter as últimas funcionalidades e correções
                    de segurança.
                  </AlertDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-yellow-600 hover:bg-yellow-700"
                    >
                      Atualizar Agora
                    </Button>
                    <Button size="sm" variant="outline">
                      Lembrar Depois
                    </Button>
                  </div>
                </Alert>

                <Alert className="border-green-500 bg-green-50 text-green-800">
                  <CheckCircle size={16} />
                  <AlertTitle>Backup Concluído</AlertTitle>
                  <AlertDescription className="mb-3">
                    Seu backup foi realizado com sucesso. Todos os dados foram
                    salvos de forma segura.
                  </AlertDescription>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-600 text-green-700 hover:bg-green-100"
                    >
                      Ver Detalhes
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-600 text-green-700 hover:bg-green-100"
                    >
                      Baixar Relatório
                    </Button>
                  </div>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts em Contexto */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts em Diferentes Contextos</CardTitle>
                <CardDescription>
                  Exemplos de uso em situações específicas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sistema */}
                <div className="space-y-3">
                  <h4 className="font-medium">Alertas de Sistema</h4>
                  <Alert className="border-red-500 bg-red-50 text-red-800">
                    <XCircle size={16} />
                    <AlertTitle>Manutenção Programada</AlertTitle>
                    <AlertDescription>
                      O sistema entrará em manutenção hoje às 23:00. Duração
                      estimada: 2 horas.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Formulário */}
                <div className="space-y-3">
                  <h4 className="font-medium">Validação de Formulário</h4>
                  <Alert className="border-red-500 bg-red-50 text-red-800">
                    <XCircle size={16} />
                    <AlertDescription>
                      Por favor, corrija os erros nos campos destacados antes de
                      continuar.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Permissões */}
                <div className="space-y-3">
                  <h4 className="font-medium">Permissões</h4>
                  <Alert className="border-yellow-500 bg-yellow-50 text-yellow-800">
                    <Warning size={16} />
                    <AlertTitle>Acesso Limitado</AlertTitle>
                    <AlertDescription className="mb-3">
                      Você não tem permissão para realizar esta ação. Entre em
                      contato com o administrador.
                    </AlertDescription>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-yellow-600 text-yellow-700 hover:bg-yellow-100"
                    >
                      Solicitar Acesso
                    </Button>
                  </Alert>
                </div>

                {/* Quota */}
                <div className="space-y-3">
                  <h4 className="font-medium">Limites de Uso</h4>
                  <Alert className="border-orange-500 bg-orange-50 text-orange-800">
                    <Warning size={16} />
                    <AlertTitle>Limite de Armazenamento</AlertTitle>
                    <AlertDescription className="mb-3">
                      Você está usando 90% do seu espaço disponível (4.5GB de
                      5GB).
                    </AlertDescription>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-orange-600 hover:bg-orange-700"
                      >
                        Fazer Upgrade
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-600 text-orange-700 hover:bg-orange-100"
                      >
                        Gerenciar Arquivos
                      </Button>
                    </div>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            {/* Alerts com Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts com Elementos Adicionais</CardTitle>
                <CardDescription>
                  Combinando alerts com outros componentes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-blue-500 bg-blue-50 text-blue-800">
                  <Info size={16} />
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <AlertTitle>Nova Funcionalidade</AlertTitle>
                      <AlertDescription>
                        Agora você pode exportar seus dados em formato CSV.
                      </AlertDescription>
                    </div>
                    <Badge className="bg-blue-600 hover:bg-blue-700 ml-3">
                      Novo
                    </Badge>
                  </div>
                </Alert>

                <Alert className="border-purple-500 bg-purple-50 text-purple-800">
                  <Info size={16} />
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <AlertTitle>Feedback Premium</AlertTitle>
                      <AlertDescription>
                        Como usuário premium, você tem acesso a suporte
                        prioritário e funcionalidades exclusivas.
                      </AlertDescription>
                    </div>
                    <Badge className="bg-purple-600 hover:bg-purple-700 ml-3">
                      Premium
                    </Badge>
                  </div>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts com Bordas Especiais */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts com Bordas Especiais</CardTitle>
                <CardDescription>
                  Diferentes estilos de borda para destacar alertas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-l-4 border-l-blue-500 border-t-0 border-r-0 border-b-0 bg-blue-50/50">
                  <Info size={16} />
                  <AlertTitle>Borda Lateral</AlertTitle>
                  <AlertDescription>
                    Alert com borda lateral azul para informações importantes.
                  </AlertDescription>
                </Alert>

                <Alert className="border-t-4 border-t-green-500 border-l-0 border-r-0 border-b-0 bg-green-50/50">
                  <CheckCircle size={16} />
                  <AlertTitle>Borda Superior</AlertTitle>
                  <AlertDescription>
                    Alert com borda superior verde para indicar sucesso.
                  </AlertDescription>
                </Alert>

                <Alert className="border-2 border-dashed border-yellow-400 bg-yellow-50/30">
                  <Warning size={16} />
                  <AlertTitle>Borda Tracejada</AlertTitle>
                  <AlertDescription>
                    Alert com borda tracejada para avisos temporários.
                  </AlertDescription>
                </Alert>

                <Alert className="border-2 border-double border-purple-500 bg-purple-50/30">
                  <Star size={16} />
                  <AlertTitle>Borda Dupla</AlertTitle>
                  <AlertDescription>
                    Alert com borda dupla para destacar conteúdo especial.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts com Gradientes */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts com Gradientes</CardTitle>
                <CardDescription>
                  Alertas com fundos em gradiente para visual moderno
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="bg-gradient-to-r from-blue-100 to-cyan-100 border-blue-300">
                  <Bell size={16} />
                  <AlertTitle>Notificação Especial</AlertTitle>
                  <AlertDescription>
                    Alert com gradiente azul para notificações especiais.
                  </AlertDescription>
                </Alert>

                <Alert className="bg-gradient-to-r from-green-100 to-emerald-100 border-green-300">
                  <Gift size={16} />
                  <AlertTitle>Oferta Especial</AlertTitle>
                  <AlertDescription>
                    Aproveite nossa oferta especial com 50% de desconto!
                  </AlertDescription>
                </Alert>

                <Alert className="bg-gradient-to-r from-purple-100 to-pink-100 border-purple-300">
                  <Heart size={16} />
                  <AlertTitle>Feedback dos Usuários</AlertTitle>
                  <AlertDescription>
                    Obrigado por ser um usuário incrível da nossa plataforma!
                  </AlertDescription>
                </Alert>

                <Alert className="bg-gradient-to-r from-orange-100 to-red-100 border-orange-300">
                  <Fire size={16} />
                  <AlertTitle>Trending</AlertTitle>
                  <AlertDescription>
                    Este conteúdo está em alta! Não perca a oportunidade.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts com Sombras */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts com Sombras</CardTitle>
                <CardDescription>
                  Diferentes tipos de sombra para dar profundidade
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="shadow-sm border-gray-200 bg-white">
                  <Info size={16} />
                  <AlertTitle>Sombra Suave</AlertTitle>
                  <AlertDescription>
                    Alert com sombra suave para um visual clean.
                  </AlertDescription>
                </Alert>

                <Alert className="shadow-md border-blue-200 bg-blue-50">
                  <Shield size={16} />
                  <AlertTitle>Sombra Média</AlertTitle>
                  <AlertDescription>
                    Alert com sombra média para dar mais destaque.
                  </AlertDescription>
                </Alert>

                <Alert className="shadow-lg border-purple-200 bg-purple-50">
                  <Lightbulb size={16} />
                  <AlertTitle>Sombra Grande</AlertTitle>
                  <AlertDescription>
                    Alert com sombra grande para máximo impacto visual.
                  </AlertDescription>
                </Alert>

                <Alert className="shadow-xl shadow-yellow-200/50 border-yellow-300 bg-yellow-50">
                  <Star size={16} />
                  <AlertTitle>Sombra Colorida</AlertTitle>
                  <AlertDescription>
                    Alert com sombra colorida para efeito especial.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts Interativos */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts Interativos</CardTitle>
                <CardDescription>
                  Alertas que respondem a interações do usuário
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="hover:bg-blue-100 hover:border-blue-400 transition-all duration-300 cursor-pointer">
                  <Eye size={16} />
                  <AlertTitle>Alert com Hover</AlertTitle>
                  <AlertDescription>
                    Este alert muda de cor quando você passa o mouse por cima.
                  </AlertDescription>
                </Alert>

                <Alert className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-green-200 bg-green-50">
                  <Download size={16} />
                  <AlertTitle>Alert com Escala</AlertTitle>
                  <AlertDescription>
                    Este alert aumenta de tamanho no hover e ganha sombra.
                  </AlertDescription>
                </Alert>

                <Alert className="group hover:bg-purple-100 border-purple-200 bg-purple-50 transition-all duration-300">
                  <Star
                    size={16}
                    className="group-hover:text-purple-600 transition-colors"
                  />
                  <AlertTitle className="group-hover:text-purple-800">
                    Alert Animado
                  </AlertTitle>
                  <AlertDescription className="group-hover:text-purple-700">
                    Os elementos internos também mudam de cor no hover.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts com Timers */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts Temporais</CardTitle>
                <CardDescription>
                  Alertas com indicadores de tempo e urgência
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-orange-500 bg-orange-50 text-orange-800 relative overflow-hidden">
                  <Clock size={16} />
                  <AlertTitle>Oferta por Tempo Limitado</AlertTitle>
                  <AlertDescription className="mb-3">
                    Esta oferta expira em 2 horas! Não perca esta oportunidade
                    única.
                  </AlertDescription>
                  <div className="absolute bottom-0 left-0 h-1 bg-orange-400 w-3/4 animate-pulse"></div>
                  <Button
                    size="sm"
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Aproveitar Agora
                  </Button>
                </Alert>

                <Alert className="border-red-500 bg-red-50 text-red-800 relative">
                  <XCircle size={16} />
                  <AlertTitle>Sessão Expirando</AlertTitle>
                  <AlertDescription className="mb-3">
                    Sua sessão expirará em 5 minutos. Salve seu trabalho.
                  </AlertDescription>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Estender Sessão
                    </Button>
                    <Button size="sm" variant="outline">
                      Salvar Agora
                    </Button>
                  </div>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts com Ações Múltiplas */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts com Múltiplas Ações</CardTitle>
                <CardDescription>
                  Alertas com várias opções de ação para o usuário
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-blue-500 bg-blue-50 text-blue-800">
                  <Upload size={16} />
                  <AlertTitle>Arquivos Pendentes</AlertTitle>
                  <AlertDescription className="mb-4">
                    Você tem 5 arquivos aguardando upload. O que deseja fazer?
                  </AlertDescription>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Fazer Upload
                    </Button>
                    <Button size="sm" variant="outline">
                      Agendar para Depois
                    </Button>
                    <Button size="sm" variant="outline">
                      Visualizar Lista
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 border-red-300 hover:bg-red-50"
                    >
                      Cancelar Todos
                    </Button>
                  </div>
                </Alert>

                <Alert className="border-yellow-500 bg-yellow-50 text-yellow-800">
                  <Trash size={16} />
                  <AlertTitle>Limpeza de Dados</AlertTitle>
                  <AlertDescription className="mb-4">
                    Encontramos 2.5GB de arquivos temporários que podem ser
                    removidos.
                  </AlertDescription>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      size="sm"
                      className="bg-yellow-600 hover:bg-yellow-700"
                    >
                      Limpar Tudo
                    </Button>
                    <Button size="sm" variant="outline">
                      Revisar Arquivos
                    </Button>
                    <Button size="sm" variant="outline">
                      Agendar Limpeza
                    </Button>
                    <Button size="sm" variant="outline">
                      Ignorar
                    </Button>
                  </div>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts Minimalistas */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts Minimalistas</CardTitle>
                <CardDescription>
                  Design clean e minimalista para interfaces modernas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-0 bg-gray-50 text-gray-800 rounded-none border-l-4 border-l-blue-500">
                  <AlertDescription>
                    Design minimalista com borda lateral colorida.
                  </AlertDescription>
                </Alert>

                <Alert className="border-0 bg-transparent text-gray-600 p-2">
                  <AlertDescription className="text-sm">
                    → Alert totalmente transparente para textos sutis.
                  </AlertDescription>
                </Alert>

                <Alert className="border border-gray-200 bg-white text-gray-700 rounded-lg shadow-none">
                  <AlertDescription>
                    Design clean com bordas suaves e sem sombra.
                  </AlertDescription>
                </Alert>

                <Alert className="border-0 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700">
                  <AlertDescription>
                    Gradiente sutil em tons de cinza para elegância.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts com Status Complexos */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts com Status Complexos</CardTitle>
                <CardDescription>
                  Alertas para situações específicas do sistema
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-indigo-500 bg-indigo-50 text-indigo-800">
                  <Gear size={16} />
                  <AlertTitle>Configuração Automática</AlertTitle>
                  <AlertDescription className="mb-3">
                    O sistema detectou suas preferências e aplicou configurações
                    otimizadas automaticamente.
                  </AlertDescription>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-indigo-600">Auto-Config</Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-indigo-300 text-indigo-700"
                    >
                      Ver Mudanças
                    </Button>
                  </div>
                </Alert>

                <Alert className="border-teal-500 bg-teal-50 text-teal-800">
                  <Shield size={16} />
                  <AlertTitle>Verificação de Segurança</AlertTitle>
                  <AlertDescription className="mb-3">
                    Escaneamento de segurança concluído. Nenhuma ameaça
                    detectada.
                  </AlertDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge className="bg-green-600">Seguro</Badge>
                      <Badge
                        variant="outline"
                        className="border-teal-300 text-teal-700"
                      >
                        Verificado
                      </Badge>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-teal-300 text-teal-700"
                    >
                      Relatório Completo
                    </Button>
                  </div>
                </Alert>

                <Alert className="border-pink-500 bg-pink-50 text-pink-800">
                  <Heart size={16} />
                  <AlertTitle>Aniversário da Conta</AlertTitle>
                  <AlertDescription className="mb-3">
                    Parabéns! Hoje faz 1 ano que você se juntou à nossa
                    plataforma. 🎉
                  </AlertDescription>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-pink-600">Especial</Badge>
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-500">
                      Premium por 1 mês
                    </Badge>
                    <Button
                      size="sm"
                      className="bg-pink-600 hover:bg-pink-700 ml-auto"
                    >
                      Resgatar Presente
                    </Button>
                  </div>
                </Alert>
              </CardContent>
            </Card>

            {/* Alerts Compactos */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts Compactos</CardTitle>
                <CardDescription>
                  Versões mais compactas para espaços limitados
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Alert className="py-2">
                  <AlertDescription className="text-sm">
                    ✓ Configurações salvas automaticamente
                  </AlertDescription>
                </Alert>

                <Alert className="py-2 border-yellow-500 bg-yellow-50 text-yellow-800">
                  <AlertDescription className="text-sm">
                    ⚠️ Conexão instável detectada
                  </AlertDescription>
                </Alert>

                <Alert className="py-2 border-red-500 bg-red-50 text-red-800">
                  <AlertDescription className="text-sm">
                    ❌ Falha ao carregar dados
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
