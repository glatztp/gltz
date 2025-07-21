import React from "react";
import { ComponentDocs } from "../layout/ComponentDocs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Switch,
  Label,
  Button,
  Badge,
} from "../../index";

export function SwitchPage() {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [autoSave, setAutoSave] = React.useState(true);
  const [marketing, setMarketing] = React.useState(false);

  return (
    <div className="flex gap-6 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Switch Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de interruptor para alternar entre dois estados
          (ligado/desligado).
        </p>
      </div>

      <div className="grid gap-6">
        {/* Switch Básico */}
        <Card>
          <CardHeader>
            <CardTitle>Switch Básico</CardTitle>
            <CardDescription>
              Estados básicos do componente switch
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Estados Básicos</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="switch-off" />
                    <Label htmlFor="switch-off">Desligado</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="switch-on" defaultChecked />
                    <Label htmlFor="switch-on">Ligado</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="switch-disabled" disabled />
                    <Label
                      htmlFor="switch-disabled"
                      className="text-muted-foreground"
                    >
                      Desabilitado (Off)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="switch-disabled-on" disabled defaultChecked />
                    <Label
                      htmlFor="switch-disabled-on"
                      className="text-muted-foreground"
                    >
                      Desabilitado (On)
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Com Descrições</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Switch id="notifications-switch" className="mt-1" />
                    <div className="space-y-1">
                      <Label
                        htmlFor="notifications-switch"
                        className="text-sm font-medium"
                      >
                        Notificações Push
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Receber notificações no navegador
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Switch id="auto-update" className="mt-1" defaultChecked />
                    <div className="space-y-1">
                      <Label
                        htmlFor="auto-update"
                        className="text-sm font-medium"
                      >
                        Atualização Automática
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Baixar e instalar atualizações automaticamente
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Switch Controlado */}
        <Card>
          <CardHeader>
            <CardTitle>Switch Controlado</CardTitle>
            <CardDescription>
              Switches com estado controlado pelo React
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="controlled-notifications"
                      checked={notifications}
                      onCheckedChange={setNotifications}
                    />
                    <Label htmlFor="controlled-notifications">
                      Notificações
                    </Label>
                  </div>
                  <Badge variant={notifications ? "default" : "outline"}>
                    {notifications ? "Ativo" : "Inativo"}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="controlled-dark-mode"
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                    <Label htmlFor="controlled-dark-mode">Modo Escuro</Label>
                  </div>
                  <Badge variant={darkMode ? "default" : "outline"}>
                    {darkMode ? "Escuro" : "Claro"}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="controlled-auto-save"
                      checked={autoSave}
                      onCheckedChange={setAutoSave}
                    />
                    <Label htmlFor="controlled-auto-save">
                      Salvamento Automático
                    </Label>
                  </div>
                  <Badge variant={autoSave ? "default" : "outline"}>
                    {autoSave ? "Ligado" : "Desligado"}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="controlled-marketing"
                      checked={marketing}
                      onCheckedChange={setMarketing}
                    />
                    <Label htmlFor="controlled-marketing">
                      Emails de Marketing
                    </Label>
                  </div>
                  <Badge variant={marketing ? "default" : "outline"}>
                    {marketing ? "Aceito" : "Recusado"}
                  </Badge>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">
                  Estado atual das configurações:
                </p>
                <div className="text-sm space-y-1">
                  <p>
                    • Notificações:{" "}
                    <span className="font-medium">
                      {notifications ? "Habilitadas" : "Desabilitadas"}
                    </span>
                  </p>
                  <p>
                    • Tema:{" "}
                    <span className="font-medium">
                      {darkMode ? "Modo Escuro" : "Modo Claro"}
                    </span>
                  </p>
                  <p>
                    • Auto-save:{" "}
                    <span className="font-medium">
                      {autoSave ? "Ativo" : "Inativo"}
                    </span>
                  </p>
                  <p>
                    • Marketing:{" "}
                    <span className="font-medium">
                      {marketing ? "Aceito" : "Recusado"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configurações de Privacidade */}
        <Card>
          <CardHeader>
            <CardTitle>Configurações de Privacidade</CardTitle>
            <CardDescription>
              Painel de configurações usando switches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Visibilidade do Perfil</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Perfil Público</div>
                      <div className="text-xs text-muted-foreground">
                        Permitir que outros usuários encontrem seu perfil
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Mostrar Email</div>
                      <div className="text-xs text-muted-foreground">
                        Exibir seu email no perfil público
                      </div>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">
                        Mostrar Última Atividade
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Exibir quando você esteve ativo pela última vez
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Comunicações</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">
                        Notificações por Email
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Receber emails sobre atividades importantes
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">
                        SMS de Segurança
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Receber SMS para verificações de segurança
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">
                        Newsletter Semanal
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Receber resumo semanal de atividades
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Dados e Analytics</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">Análise de Uso</div>
                      <div className="text-xs text-muted-foreground">
                        Permitir coleta de dados para melhorar o serviço
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">
                        Cookies de Marketing
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Usar cookies para personalizar anúncios
                      </div>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium text-sm">
                        Compartilhamento com Parceiros
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Compartilhar dados anonimizados com parceiros
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button type="submit">Salvar Configurações</Button>
                <Button type="button" variant="outline">
                  Restaurar Padrões
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Configurações de Sistema */}
        <Card>
          <CardHeader>
            <CardTitle>Configurações de Sistema</CardTitle>
            <CardDescription>
              Switches para configurações técnicas e de sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Performance</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Switch id="hardware-acceleration" defaultChecked />
                      <div>
                        <Label
                          htmlFor="hardware-acceleration"
                          className="text-sm font-medium"
                        >
                          Aceleração de Hardware
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Melhor performance para gráficos e vídeos
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Recomendado
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Switch id="preload-content" />
                      <div>
                        <Label
                          htmlFor="preload-content"
                          className="text-sm font-medium"
                        >
                          Pré-carregamento de Conteúdo
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Carrega conteúdo antecipadamente (usa mais dados)
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs border-yellow-500 text-yellow-600"
                    >
                      Usar WiFi
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Acessibilidade</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="high-contrast" />
                    <Label htmlFor="high-contrast" className="text-sm">
                      Modo Alto Contraste
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="reduce-motion" />
                    <Label htmlFor="reduce-motion" className="text-sm">
                      Reduzir Animações
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="screen-reader" />
                    <Label htmlFor="screen-reader" className="text-sm">
                      Otimizar para Leitores de Tela
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="large-text" />
                    <Label htmlFor="large-text" className="text-sm">
                      Texto Grande
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Experimental</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Switch id="beta-features" />
                      <div>
                        <Label
                          htmlFor="beta-features"
                          className="text-sm font-medium"
                        >
                          Recursos Beta
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Acesso antecipado a novos recursos (instável)
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs border-red-500 text-red-600"
                    >
                      Beta
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Switch id="debug-mode" />
                      <div>
                        <Label
                          htmlFor="debug-mode"
                          className="text-sm font-medium"
                        >
                          Modo Debug
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Mostrar informações técnicas detalhadas
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Desenvolvedor
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle com Confirmação */}
        <Card>
          <CardHeader>
            <CardTitle>Actions com Confirmação</CardTitle>
            <CardDescription>
              Switches que requerem confirmação para ações críticas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-medium text-sm text-red-800">
                      Deletar Conta
                    </div>
                    <div className="text-xs text-red-600">
                      Esta ação não pode ser desfeita
                    </div>
                  </div>
                  <Switch />
                </div>
                <p className="text-xs text-red-600">
                  ⚠️ Todos os seus dados serão permanentemente removidos
                </p>
              </div>

              <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-medium text-sm text-yellow-800">
                      Modo Manutenção
                    </div>
                    <div className="text-xs text-yellow-600">
                      Desabilita acesso de outros usuários
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-medium text-sm text-blue-800">
                      Backup Automático
                    </div>
                    <div className="text-xs text-blue-600">
                      Backup diário de todos os dados
                    </div>
                  </div>
                  <Switch defaultChecked />
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
