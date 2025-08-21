import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
} from "../ui";
import { Button, Badge, Input, Label } from "../ui";
import {
  Trash,
  Warning,
  CheckCircle,
  XCircle,
  Download,
  Shield,
  Gear,
  SignOut,
  UserPlus,
  Heart,
  Star,
  Gift,
  Bell,
  Crown,
} from "phosphor-react";

export function AlertDialogPage() {
  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Alert Dialog Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de diálogo de alerta para confirmações e ações importantes.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Alert Dialog Básico</CardTitle>
            <CardDescription>
              Exemplo básico de uso do Alert Dialog
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Excluir Item</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta ação não pode ser desfeita. Isso excluirá
                      permanentemente o item.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Excluir</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <AlertDialog>
                <AlertDialogTrigger asChild className="ml-4">
                  <Button>Salvar Alterações</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Salvar alterações?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Suas alterações serão salvas permanentemente.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction>Salvar</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>

        {/* Alert Dialogs com Ícones */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Dialogs com Ícones</CardTitle>
            <CardDescription>
              Diálogos com ícones para melhor comunicação visual
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {/* Dialog de Aviso */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-yellow-300 text-yellow-700 hover:bg-yellow-50"
                  >
                    <Warning size={16} className="mr-2" />
                    Aviso Importante
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-yellow-100 rounded-full">
                        <Warning size={24} className="text-yellow-600" />
                      </div>
                      <AlertDialogTitle>Atenção Necessária</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                      Esta ação pode afetar outros usuários do sistema.
                      Certifique-se de que é realmente necessária.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="bg-yellow-600 hover:bg-yellow-700">
                      Continuar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Dialog de Sucesso */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-50"
                  >
                    <CheckCircle size={16} className="mr-2" />
                    Confirmar Sucesso
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-full">
                        <CheckCircle size={24} className="text-green-600" />
                      </div>
                      <AlertDialogTitle>Operação Bem-sucedida</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                      Sua operação foi concluída com sucesso! Todas as
                      alterações foram salvas.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction className="bg-green-600 hover:bg-green-700">
                      Entendi
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Dialog de Erro */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-red-300 text-red-700 hover:bg-red-50"
                  >
                    <XCircle size={16} className="mr-2" />
                    Reportar Erro
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-full">
                        <XCircle size={24} className="text-red-600" />
                      </div>
                      <AlertDialogTitle>Erro Detectado</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                      Ocorreu um erro inesperado. Nossa equipe foi notificada e
                      está trabalhando na correção.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Fechar</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                      Tentar Novamente
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>

        {/* Alert Dialogs de Ações Específicas */}
        <Card>
          <CardHeader>
            <CardTitle>Dialogs para Ações Específicas</CardTitle>
            <CardDescription>
              Diálogos especializados para diferentes tipos de ação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Download */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Download size={16} className="mr-2" />
                    Baixar Arquivo
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Download size={24} className="text-blue-600" />
                      </div>
                      <AlertDialogTitle>Iniciar Download</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                      Você está prestes a baixar um arquivo de 2.5 MB. O
                      download pode levar alguns minutos dependendo da sua
                      conexão.
                    </AlertDialogDescription>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium">
                        Detalhes do arquivo:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        • Nome: documento-importante.pdf
                      </p>
                      <p className="text-sm text-muted-foreground">
                        • Tamanho: 2.5 MB
                      </p>
                      <p className="text-sm text-muted-foreground">
                        • Tipo: PDF
                      </p>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="bg-blue-600 hover:bg-blue-700">
                      Baixar Agora
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Logout */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <SignOut size={16} className="mr-2" />
                    Sair da Conta
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-full">
                        <SignOut size={24} className="text-gray-600" />
                      </div>
                      <AlertDialogTitle>Sair da Conta</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                      Tem certeza de que deseja sair? Você perderá o progresso
                      não salvo.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Ficar Conectado</AlertDialogCancel>
                    <AlertDialogAction className="bg-gray-600 hover:bg-gray-700">
                      Sair Mesmo Assim
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Adicionar Usuário */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <UserPlus size={16} className="mr-2" />
                    Convidar Usuário
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-full">
                        <UserPlus size={24} className="text-green-600" />
                      </div>
                      <AlertDialogTitle>Convidar Novo Usuário</AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                      O usuário receberá um convite por email com instruções
                      para acessar a plataforma.
                    </AlertDialogDescription>
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="email">Email do usuário</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="usuario@exemplo.com"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="role">Função</Label>
                        <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md">
                          <option>Usuário</option>
                          <option>Editor</option>
                          <option>Administrador</option>
                        </select>
                      </div>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="bg-green-600 hover:bg-green-700">
                      Enviar Convite
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Configurações de Segurança */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Shield size={16} className="mr-2" />
                    Alterar Segurança
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-full">
                        <Shield size={24} className="text-purple-600" />
                      </div>
                      <AlertDialogTitle>
                        Configurações de Segurança
                      </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                      Alterar as configurações de segurança pode afetar como
                      você acessa sua conta.
                    </AlertDialogDescription>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm">
                          Autenticação em duas etapas
                        </span>
                        <Badge className="bg-green-600">Ativa</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-sm">Notificações de login</span>
                        <Badge variant="outline">Inativa</Badge>
                      </div>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="bg-purple-600 hover:bg-purple-700">
                      Aplicar Mudanças
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>

        {/* Alert Dialogs Premium */}
        <Card>
          <CardHeader>
            <CardTitle>Dialogs Premium e Especiais</CardTitle>
            <CardDescription>
              Diálogos com design especial para situações importantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Upgrade Premium */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Crown size={16} className="mr-2" />
                    Upgrade Premium
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-md">
                  <AlertDialogHeader>
                    <div className="text-center">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
                        <Crown size={32} className="text-purple-600" />
                      </div>
                      <AlertDialogTitle className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Torne-se Premium
                      </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription className="text-center">
                      Desbloqueie recursos exclusivos e tenha uma experiência
                      premium completa!
                    </AlertDialogDescription>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-600" />
                        <span>Acesso ilimitado a todos os recursos</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-600" />
                        <span>Suporte prioritário 24/7</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-600" />
                        <span>Sem anúncios</span>
                      </div>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Talvez Depois</AlertDialogCancel>
                    <AlertDialogAction className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Assinar Agora
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Oferta Especial */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full border-orange-300 text-orange-700 hover:bg-orange-50"
                  >
                    <Gift size={16} className="mr-2" />
                    Oferta Especial
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-md">
                  <AlertDialogHeader>
                    <div className="text-center">
                      <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <Gift size={32} className="text-orange-600" />
                      </div>
                      <AlertDialogTitle className="text-xl text-orange-700">
                        🎉 Oferta Limitada!
                      </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription className="text-center">
                      Por tempo limitado, ganhe 50% de desconto em qualquer
                      plano premium!
                    </AlertDialogDescription>
                    <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-700">
                          50% OFF
                        </div>
                        <div className="text-sm text-orange-600">
                          Válido por mais 2 dias
                        </div>
                      </div>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Não, Obrigado</AlertDialogCancel>
                    <AlertDialogAction className="bg-orange-600 hover:bg-orange-700">
                      Aproveitar Oferta
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Feedback Especial */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full border-pink-300 text-pink-700 hover:bg-pink-50"
                  >
                    <Heart size={16} className="mr-2" />
                    Dar Feedback
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-pink-100 rounded-full">
                        <Heart size={24} className="text-pink-600" />
                      </div>
                      <AlertDialogTitle>
                        Seu Feedback é Importante
                      </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                      Ajude-nos a melhorar! Sua opinião é fundamental para o
                      desenvolvimento da plataforma.
                    </AlertDialogDescription>
                    <div className="mt-4">
                      <Label htmlFor="feedback">
                        Como foi sua experiência?
                      </Label>
                      <textarea
                        id="feedback"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-md resize-none"
                        rows={4}
                        placeholder="Compartilhe sua experiência conosco..."
                      />
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={20}
                            className="text-yellow-400 hover:text-yellow-500 cursor-pointer"
                          />
                        ))}
                      </div>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Pular</AlertDialogCancel>
                    <AlertDialogAction className="bg-pink-600 hover:bg-pink-700">
                      Enviar Feedback
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Notificações */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full border-blue-300 text-blue-700 hover:bg-blue-50"
                  >
                    <Bell size={16} className="mr-2" />
                    Configurar Notificações
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Bell size={24} className="text-blue-600" />
                      </div>
                      <AlertDialogTitle>
                        Personalizar Notificações
                      </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                      Escolha quando e como deseja receber notificações.
                    </AlertDialogDescription>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Email diário</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Notificações push</span>
                        <input
                          type="checkbox"
                          className="rounded"
                          defaultChecked
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">SMS importantes</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Atualizações do produto</span>
                        <input
                          type="checkbox"
                          className="rounded"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="bg-blue-600 hover:bg-blue-700">
                      Salvar Preferências
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>

        {/* Alert Dialogs de Confirmação Complexa */}
        <Card>
          <CardHeader>
            <CardTitle>Dialogs de Confirmação Complexa</CardTitle>
            <CardDescription>
              Diálogos para ações que requerem confirmação extra
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Exclusão com Confirmação */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="w-full">
                    <Trash size={16} className="mr-2" />
                    Excluir Conta Permanentemente
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-lg">
                  <AlertDialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-full">
                        <Trash size={24} className="text-red-600" />
                      </div>
                      <AlertDialogTitle className="text-red-700">
                        Excluir Conta Permanentemente
                      </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                      Esta ação é <strong>irreversível</strong>. Todos os seus
                      dados, incluindo projetos, configurações e histórico,
                      serão permanentemente removidos.
                    </AlertDialogDescription>
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">
                        O que será perdido:
                      </h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Todos os seus projetos (15 projetos)</li>
                        <li>• Histórico de atividades</li>
                        <li>• Configurações personalizadas</li>
                        <li>• Dados de colaboração</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <Label
                        htmlFor="confirm-text"
                        className="text-sm font-medium"
                      >
                        Digite "EXCLUIR" para confirmar:
                      </Label>
                      <Input
                        id="confirm-text"
                        className="mt-2"
                        placeholder="Digite EXCLUIR aqui"
                      />
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                      Confirmar Exclusão
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* Reset de Sistema */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full border-orange-300 text-orange-700 hover:bg-orange-50"
                  >
                    <Gear size={16} className="mr-2" />
                    Reset Completo do Sistema
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-lg">
                  <AlertDialogHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-full">
                        <Gear size={24} className="text-orange-600" />
                      </div>
                      <AlertDialogTitle className="text-orange-700">
                        Reset Completo do Sistema
                      </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription>
                      Esta ação restaurará todas as configurações para os
                      valores padrão de fábrica.
                    </AlertDialogDescription>
                    <div className="mt-4 space-y-3">
                      <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <input
                            type="checkbox"
                            id="backup"
                            className="rounded"
                          />
                          <Label htmlFor="backup" className="text-sm">
                            Criar backup antes do reset
                          </Label>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <input
                            type="checkbox"
                            id="preserve"
                            className="rounded"
                          />
                          <Label htmlFor="preserve" className="text-sm">
                            Preservar dados de usuário
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="confirm-reset"
                            className="rounded"
                          />
                          <Label
                            htmlFor="confirm-reset"
                            className="text-sm font-medium"
                          >
                            Confirmo que entendo as consequências
                          </Label>
                        </div>
                      </div>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="bg-orange-600 hover:bg-orange-700">
                      Executar Reset
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
