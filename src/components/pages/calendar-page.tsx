import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Calendar,
  Button,
  Badge,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../index";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Plus,
  Funnel,
  CaretDown,
  Star,
  Bell,
  Repeat,
  X,
  Check,
  Warning,
  Info,
} from "phosphor-react";

export function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [multipleDates, setMultipleDates] = React.useState<Date[]>([]);
  const [events, setEvents] = React.useState([
    {
      id: 1,
      title: "Reunião de Equipe",
      date: new Date(2025, 6, 25),
      time: "14:00",
      type: "meeting",
      color: "blue",
    },
    {
      id: 2,
      title: "Apresentação do Projeto",
      date: new Date(2025, 6, 28),
      time: "10:00",
      type: "presentation",
      color: "green",
    },
    {
      id: 3,
      title: "Deadline - Entrega",
      date: new Date(2025, 6, 30),
      time: "23:59",
      type: "deadline",
      color: "red",
    },
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Calendar Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de calendário para seleção de datas.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Calendar Básico */}
        <Card>
          <CardHeader>
            <CardTitle>Calendar Básico</CardTitle>
            <CardDescription>Seleção simples de data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => setDate(d instanceof Date ? d : undefined)}
                  className="rounded-md border"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">
                    Data Selecionada
                  </h4>
                  {date ? (
                    <p className="text-blue-700">
                      {date.toLocaleDateString("pt-BR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  ) : (
                    <p className="text-blue-600">Nenhuma data selecionada</p>
                  )}
                </div>
                <Button
                  onClick={() => setDate(new Date())}
                  className="w-full"
                  variant="outline"
                >
                  <CalendarIcon size={16} className="mr-2" />
                  Selecionar Hoje
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar com Seleção Múltipla */}
        <Card>
          <CardHeader>
            <CardTitle>Calendar com Seleção Múltipla</CardTitle>
            <CardDescription>
              Selecione múltiplas datas para eventos ou períodos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <Calendar
                  mode="multiple"
                  selected={multipleDates}
                  onSelect={(dates) =>
                    Array.isArray(dates)
                      ? setMultipleDates(dates)
                      : dates instanceof Date
                      ? setMultipleDates([dates])
                      : setMultipleDates([])
                  }
                  className="rounded-md border"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800 mb-2">
                    Datas Selecionadas ({multipleDates.length})
                  </h4>
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {multipleDates.length > 0 ? (
                      multipleDates.map((date, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-green-700">
                            {date.toLocaleDateString("pt-BR")}
                          </span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              setMultipleDates(
                                multipleDates.filter((_, i) => i !== index)
                              );
                            }}
                            className="h-6 w-6 p-0 text-green-600 hover:text-red-600"
                          >
                            <X size={12} />
                          </Button>
                        </div>
                      ))
                    ) : (
                      <p className="text-green-600">Nenhuma data selecionada</p>
                    )}
                  </div>
                </div>
                <Button
                  onClick={() => setMultipleDates([])}
                  variant="outline"
                  className="w-full"
                >
                  Limpar Seleção
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar com Range de Datas */}
        <Card>
          <CardHeader>
            <CardTitle>Calendar com Range de Datas</CardTitle>
            <CardDescription>
              Selecione um período entre duas datas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <Calendar
                  mode="range"
                  selected={
                    dateRange.from
                      ? { from: dateRange.from, to: dateRange.to }
                      : undefined
                  }
                  onSelect={(range) => {
                    if (range && typeof range === "object" && "from" in range) {
                      setDateRange(range as { from: Date | undefined; to: Date | undefined });
                    } else {
                      setDateRange({ from: undefined, to: undefined });
                    }
                  }}
                  className="rounded-md border"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-800 mb-3">
                    Período Selecionado
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-purple-600">Data de Início:</span>
                      <span className="text-purple-800 font-medium">
                        {dateRange.from
                          ? dateRange.from.toLocaleDateString("pt-BR")
                          : "Não selecionada"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-purple-600">Data de Fim:</span>
                      <span className="text-purple-800 font-medium">
                        {dateRange.to
                          ? dateRange.to.toLocaleDateString("pt-BR")
                          : "Não selecionada"}
                      </span>
                    </div>
                    {dateRange.from && dateRange.to && (
                      <div className="mt-3 pt-3 border-t border-purple-200">
                        <div className="flex justify-between text-sm">
                          <span className="text-purple-600">Duração:</span>
                          <span className="text-purple-800 font-medium">
                            {Math.ceil(
                              (dateRange.to.getTime() -
                                dateRange.from.getTime()) /
                                (1000 * 60 * 60 * 24)
                            ) + 1}{" "}
                            dias
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={() => {
                      const today = new Date();
                      const nextWeek = new Date(today);
                      nextWeek.setDate(today.getDate() + 7);
                      setDateRange({ from: today, to: nextWeek });
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Próxima Semana
                  </Button>
                  <Button
                    onClick={() => {
                      const today = new Date();
                      const nextMonth = new Date(today);
                      nextMonth.setMonth(today.getMonth() + 1);
                      setDateRange({ from: today, to: nextMonth });
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Próximo Mês
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar com Eventos */}
        <Card>
          <CardHeader>
            <CardTitle>Calendar com Eventos</CardTitle>
            <CardDescription>
              Calendário integrado com sistema de eventos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => setDate(d instanceof Date ? d : undefined)}
                  className="rounded-md border"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Eventos do Mês</h4>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus size={14} className="mr-1" />
                    Novo Evento
                  </Button>
                </div>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className={`p-3 rounded-lg border-l-4 ${
                        event.color === "blue"
                          ? "bg-blue-50 border-l-blue-500"
                          : event.color === "green"
                          ? "bg-green-50 border-l-green-500"
                          : "bg-red-50 border-l-red-500"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900 mb-1">
                            {event.title}
                          </h5>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <CalendarIcon size={14} />
                              <span>
                                {event.date.toLocaleDateString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{event.time}</span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          className={
                            event.color === "blue"
                              ? "bg-blue-600"
                              : event.color === "green"
                              ? "bg-green-600"
                              : "bg-red-600"
                          }
                        >
                          {event.type === "meeting"
                            ? "Reunião"
                            : event.type === "presentation"
                            ? "Apresentação"
                            : "Deadline"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar Compacto */}
        <Card>
          <CardHeader>
            <CardTitle>Calendar Compacto</CardTitle>
            <CardDescription>
              Versão compacta para sidebars e espaços reduzidos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mini Calendar */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Mini Calendar</h4>
                <div className="w-fit">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => setDate(d instanceof Date ? d : undefined)}
                    className="rounded-md border scale-75 origin-top-left"
                  />
                </div>
              </div>

              {/* Calendar com Header Customizado */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Header Customizado</h4>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4 p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded">
                    <div>
                      <h5 className="font-semibold text-gray-800">
                        Julho 2025
                      </h5>
                      <p className="text-xs text-gray-600">
                        12 eventos este mês
                      </p>
                    </div>
                    <Badge className="bg-blue-600">Atual</Badge>
                  </div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => setDate(d instanceof Date ? d : undefined)}
                    className="border-0"
                  />
                </div>
              </div>

              {/* Calendar com Ações Rápidas */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Ações Rápidas</h4>
                <div className="border rounded-lg p-4">
                  <div className="flex gap-2 mb-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <CalendarIcon size={12} className="mr-1" />
                      Hoje
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Plus size={12} className="mr-1" />
                      Evento
                    </Button>
                  </div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => setDate(d instanceof Date ? d : undefined)}
                    className="border-0 scale-90"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar com Filtros */}
        <Card>
          <CardHeader>
            <CardTitle>Calendar com Filtros Avançados</CardTitle>
            <CardDescription>
              Sistema completo de filtros e visualizações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Filtros */}
              <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Funnel size={16} className="text-gray-600" />
                  <span className="text-sm font-medium">Filtros:</span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  Reuniões
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  Apresentações
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  Deadlines
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Star size={14} />
                  Favoritos
                </Button>
              </div>

              {/* Views */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Mês
                  </Button>
                  <Button size="sm" className="bg-blue-600">
                    Semana
                  </Button>
                  <Button size="sm" variant="outline">
                    Dia
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Bell size={14} className="mr-1" />
                    Lembretes
                  </Button>
                  <Button size="sm" variant="outline">
                    <Users size={14} className="mr-1" />
                    Compartilhar
                  </Button>
                </div>
              </div>

              {/* Calendar Principal */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => setDate(d instanceof Date ? d : undefined)}
                    className="rounded-md border w-full"
                  />
                </div>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-3">Próximos Eventos</h5>
                    <div className="space-y-2">
                      {events.slice(0, 3).map((event) => (
                        <div
                          key={event.id}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              event.color === "blue"
                                ? "bg-blue-500"
                                : event.color === "green"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          ></div>
                          <span className="truncate">{event.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-3">Estatísticas</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Este mês:</span>
                        <span className="font-medium">15 eventos</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Próxima semana:</span>
                        <span className="font-medium">3 eventos</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deadlines:</span>
                        <span className="font-medium text-red-600">
                          2 urgentes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar com Integração */}
        <Card>
          <CardHeader>
            <CardTitle>Calendar com Integrações</CardTitle>
            <CardDescription>
              Simulação de integração com outros sistemas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-4">Sincronização</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <CalendarIcon size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Google Calendar</p>
                        <p className="text-xs text-gray-600">
                          Última sync: há 2 min
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-green-600">
                      <Check size={12} className="mr-1" />
                      Ativo
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <CalendarIcon size={16} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Outlook</p>
                        <p className="text-xs text-gray-600">
                          Última sync: há 1 hora
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-600">
                      <Warning size={12} className="mr-1" />
                      Pendente
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <CalendarIcon size={16} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Apple Calendar</p>
                        <p className="text-xs text-gray-600">Não conectado</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Conectar
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Notificações</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Info size={16} className="text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">
                          Reunião em 30 minutos
                        </p>
                        <p className="text-xs text-blue-600">
                          Reunião de Equipe - Sala de Conferência
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Warning size={16} className="text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-yellow-800">
                          Deadline próximo
                        </p>
                        <p className="text-xs text-yellow-600">
                          Entrega do projeto em 2 dias
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Check size={16} className="text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-800">
                          Evento confirmado
                        </p>
                        <p className="text-xs text-green-600">
                          Apresentação do Projeto confirmada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
