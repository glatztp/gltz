import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Slider,
  Label,
  Badge,
  Button,
  Separator,
} from "../../index";

export function SliderPage() {
  const [value, setValue] = React.useState([50]);
  const [volume, setVolume] = React.useState([75]);
  const [brightness, setBrightness] = React.useState([33]);
  const [priceRange, setPriceRange] = React.useState([20, 80]);
  const [temperature, setTemperature] = React.useState([22]);
  const [quality, setQuality] = React.useState([80]);
  const [rgb, setRgb] = React.useState([255, 128, 64]);
  const [progress, setProgress] = React.useState([65]);
  const [timeline, setTimeline] = React.useState([30]);
  const [equalizer, setEqualizer] = React.useState([
    50, 60, 70, 40, 30, 80, 90,
  ]);
  const [zoom, setZoom] = React.useState([100]);
  const [weight, setWeight] = React.useState([70]);
  const [age, setAge] = React.useState([25]);
  const [rating, setRating] = React.useState([7.5]);

  return (
    <div className="flex gap-6 min-h-screen pt-12">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-8 p-6">
          <div>
            <h1 className="text-3xl font-bold">Slider Component</h1>
            <p className="text-muted-foreground mt-2">
              Componente de controle deslizante para seleção de valores com
              múltiplas variantes e casos de uso.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Slider Básico */}
            <Card>
              <CardHeader>
                <CardTitle>Slider Básico</CardTitle>
                <CardDescription>
                  Exemplos básicos de slider com diferentes configurações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Volume</Label>
                      <Badge variant="outline">{value[0]}%</Badge>
                    </div>
                    <Slider
                      value={value}
                      onValueChange={setValue}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Brilho</Label>
                      <Badge variant="outline">{brightness[0]}%</Badge>
                    </div>
                    <Slider
                      value={brightness}
                      onValueChange={setBrightness}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Faixa de Preço</Label>
                      <Badge variant="outline">
                        R$ {priceRange[0]} - R$ {priceRange[1]}
                      </Badge>
                    </div>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sliders com Escalas Diferentes */}
            <Card>
              <CardHeader>
                <CardTitle>Escalas e Intervalos</CardTitle>
                <CardDescription>
                  Sliders com diferentes escalas, passos e valores
                  mínimos/máximos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Temperatura (°C)</Label>
                      <Badge
                        variant="outline"
                        className={`${
                          temperature[0] <= 18
                            ? "bg-blue-100 text-blue-800"
                            : temperature[0] <= 25
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {temperature[0]}°C
                      </Badge>
                    </div>
                    <Slider
                      value={temperature}
                      onValueChange={setTemperature}
                      min={16}
                      max={30}
                      step={0.5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>16°C</span>
                      <span>23°C</span>
                      <span>30°C</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Qualidade de Vídeo</Label>
                      <Badge variant="outline">
                        {quality[0] <= 25
                          ? "240p"
                          : quality[0] <= 50
                          ? "480p"
                          : quality[0] <= 75
                          ? "720p"
                          : quality[0] <= 90
                          ? "1080p"
                          : "4K"}
                      </Badge>
                    </div>
                    <Slider
                      value={quality}
                      onValueChange={setQuality}
                      max={100}
                      step={25}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>240p</span>
                      <span>480p</span>
                      <span>720p</span>
                      <span>1080p</span>
                      <span>4K</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Zoom</Label>
                      <Badge variant="outline">{zoom[0]}%</Badge>
                    </div>
                    <Slider
                      value={zoom}
                      onValueChange={setZoom}
                      min={25}
                      max={400}
                      step={25}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>25%</span>
                      <span>100%</span>
                      <span>200%</span>
                      <span>400%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sliders Coloridos */}
            <Card>
              <CardHeader>
                <CardTitle>Sliders RGB</CardTitle>
                <CardDescription>
                  Controles de cor com sliders personalizados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-red-600">Red</Label>
                          <Badge variant="outline" className="bg-red-50">
                            {rgb[0]}
                          </Badge>
                        </div>
                        <Slider
                          value={[rgb[0]]}
                          onValueChange={(value) =>
                            setRgb([value[0], rgb[1], rgb[2]])
                          }
                          max={255}
                          step={1}
                          className="w-full [&_[role=slider]]:bg-red-500 [&_[role=slider]]:border-red-600"
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-green-600">Green</Label>
                          <Badge variant="outline" className="bg-green-50">
                            {rgb[1]}
                          </Badge>
                        </div>
                        <Slider
                          value={[rgb[1]]}
                          onValueChange={(value) =>
                            setRgb([rgb[0], value[0], rgb[2]])
                          }
                          max={255}
                          step={1}
                          className="w-full [&_[role=slider]]:bg-green-500 [&_[role=slider]]:border-green-600"
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-blue-600">Blue</Label>
                          <Badge variant="outline" className="bg-blue-50">
                            {rgb[2]}
                          </Badge>
                        </div>
                        <Slider
                          value={[rgb[2]]}
                          onValueChange={(value) =>
                            setRgb([rgb[0], rgb[1], value[0]])
                          }
                          max={255}
                          step={1}
                          className="w-full [&_[role=slider]]:bg-blue-500 [&_[role=slider]]:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Preview da Cor</Label>
                      <div
                        className="w-full h-32 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                        style={{
                          backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
                        }}
                      >
                        <div className="bg-white bg-opacity-90 px-3 py-1 rounded text-sm font-mono">
                          rgb({rgb[0]}, {rgb[1]}, {rgb[2]})
                        </div>
                      </div>
                      <div className="text-center">
                        <Badge variant="outline" className="font-mono">
                          #{rgb[0].toString(16).padStart(2, "0")}
                          {rgb[1].toString(16).padStart(2, "0")}
                          {rgb[2].toString(16).padStart(2, "0")}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sliders de Controle de Mídia */}
            <Card>
              <CardHeader>
                <CardTitle>Controles de Mídia</CardTitle>
                <CardDescription>
                  Sliders para controle de reprodução de mídia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Timeline da Música</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          {Math.floor(timeline[0] / 60)}:
                          {(timeline[0] % 60).toString().padStart(2, "0")}
                        </span>
                        <span className="text-sm text-muted-foreground">/</span>
                        <span className="text-sm text-muted-foreground">
                          3:45
                        </span>
                      </div>
                    </div>
                    <Slider
                      value={timeline}
                      onValueChange={setTimeline}
                      max={225} // 3:45 em segundos
                      step={1}
                      className="w-full"
                    />
                    <div className="flex items-center justify-center gap-2">
                      <Button size="sm" variant="outline">
                        ⏮️
                      </Button>
                      <Button size="sm">▶️</Button>
                      <Button size="sm" variant="outline">
                        ⏭️
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Volume do Sistema</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">
                          {volume[0] === 0
                            ? "🔇"
                            : volume[0] < 30
                            ? "🔈"
                            : volume[0] < 70
                            ? "🔉"
                            : "🔊"}
                        </span>
                        <Badge variant="outline">{volume[0]}%</Badge>
                      </div>
                    </div>
                    <Slider
                      value={volume}
                      onValueChange={setVolume}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Equalizador */}
            <Card>
              <CardHeader>
                <CardTitle>Equalizador</CardTitle>
                <CardDescription>
                  Controles de equalização de audio com múltiplos sliders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-7 gap-4">
                    {[
                      "60Hz",
                      "170Hz",
                      "310Hz",
                      "600Hz",
                      "1kHz",
                      "3kHz",
                      "6kHz",
                    ].map((freq, index) => (
                      <div key={freq} className="space-y-2">
                        <div className="text-xs font-medium text-center">
                          {freq}
                        </div>
                        <div className="flex flex-col items-center h-48">
                          <div className="text-xs text-muted-foreground mb-2">
                            +12
                          </div>
                          <Slider
                            value={[equalizer[index]]}
                            onValueChange={(value) => {
                              const newEqualizer = [...equalizer];
                              newEqualizer[index] = value[0];
                              setEqualizer(newEqualizer);
                            }}
                            max={100}
                            step={1}
                            orientation="vertical"
                            className="h-32"
                          />
                          <div className="text-xs text-muted-foreground mt-2">
                            -12
                          </div>
                        </div>
                        <div className="text-xs text-center font-mono">
                          {equalizer[index]}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Button variant="outline" size="sm">
                      Rock
                    </Button>
                    <Button variant="outline" size="sm">
                      Jazz
                    </Button>
                    <Button variant="outline" size="sm">
                      Pop
                    </Button>
                    <Button variant="outline" size="sm">
                      Classical
                    </Button>
                    <Button variant="outline" size="sm">
                      Reset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sliders de Dados Pessoais */}
            <Card>
              <CardHeader>
                <CardTitle>Informações Pessoais</CardTitle>
                <CardDescription>
                  Sliders para entrada de dados pessoais e métricas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Idade</Label>
                        <Badge variant="outline">{age[0]} anos</Badge>
                      </div>
                      <Slider
                        value={age}
                        onValueChange={setAge}
                        min={16}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>16</span>
                        <span>40</span>
                        <span>65</span>
                        <span>100</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Peso (kg)</Label>
                        <Badge variant="outline">{weight[0]} kg</Badge>
                      </div>
                      <Slider
                        value={weight}
                        onValueChange={setWeight}
                        min={40}
                        max={150}
                        step={0.5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>40kg</span>
                        <span>70kg</span>
                        <span>100kg</span>
                        <span>150kg</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Avaliação</Label>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-400">
                            {"⭐".repeat(Math.floor(rating[0] / 2))}
                          </span>
                          <Badge variant="outline">{rating[0]}/10</Badge>
                        </div>
                      </div>
                      <Slider
                        value={rating}
                        onValueChange={setRating}
                        min={0}
                        max={10}
                        step={0.1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>😞 Ruim</span>
                        <span>😐 Regular</span>
                        <span>😊 Bom</span>
                        <span>🤩 Excelente</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Progresso do Projeto</Label>
                        <Badge variant="outline">{progress[0]}%</Badge>
                      </div>
                      <Slider
                        value={progress}
                        onValueChange={setProgress}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress[0]}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sliders Especiais */}
            <Card>
              <CardHeader>
                <CardTitle>Variantes Especiais</CardTitle>
                <CardDescription>
                  Sliders com estilos e comportamentos únicos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Slider de Tempo */}
                  <div className="space-y-4">
                    <Label>Horário do Alarme</Label>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">
                          Horas
                        </div>
                        <Slider
                          defaultValue={[7]}
                          max={23}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>00h</span>
                          <span>12h</span>
                          <span>23h</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">
                          Minutos
                        </div>
                        <Slider
                          defaultValue={[30]}
                          max={59}
                          step={5}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>00m</span>
                          <span>30m</span>
                          <span>59m</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Slider de Orçamento */}
                  <div className="space-y-4">
                    <Label>Distribuição de Orçamento</Label>
                    <div className="space-y-4">
                      {[
                        { name: "Marketing", value: 30, color: "bg-blue-500" },
                        {
                          name: "Desenvolvimento",
                          value: 45,
                          color: "bg-green-500",
                        },
                        { name: "Design", value: 25, color: "bg-purple-500" },
                      ].map((item, index) => (
                        <div key={item.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{item.name}</span>
                            <span className="font-medium">{item.value}%</span>
                          </div>
                          <Slider
                            defaultValue={[item.value]}
                            max={100}
                            step={5}
                            className={`w-full`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Slider de Configuração de Jogo */}
                  <div className="space-y-4">
                    <Label>Configurações de Jogo</Label>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Dificuldade</span>
                            <Badge variant="outline">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={
                                    i < 3 ? "text-yellow-400" : "text-gray-300"
                                  }
                                >
                                  ⭐
                                </span>
                              ))}
                            </Badge>
                          </div>
                          <Slider
                            defaultValue={[60]}
                            max={100}
                            step={20}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Fácil</span>
                            <span>Normal</span>
                            <span>Difícil</span>
                            <span>Expert</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Sensibilidade do Mouse</span>
                            <Badge variant="outline">2.5x</Badge>
                          </div>
                          <Slider
                            defaultValue={[50]}
                            max={100}
                            step={1}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Campo de Visão (FOV)</span>
                            <Badge variant="outline">90°</Badge>
                          </div>
                          <Slider
                            defaultValue={[75]}
                            min={60}
                            max={120}
                            step={5}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Distância de Renderização</span>
                            <Badge variant="outline">100m</Badge>
                          </div>
                          <Slider
                            defaultValue={[50]}
                            max={100}
                            step={10}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sliders Criativos */}
            <Card>
              <CardHeader>
                <CardTitle>Casos de Uso Criativos</CardTitle>
                <CardDescription>
                  Implementações únicas e criativas do Slider
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Slider de Humor */}
                  <div className="space-y-4">
                    <Label>Como você está se sentindo hoje?</Label>
                    <div className="space-y-3">
                      <Slider
                        defaultValue={[70]}
                        max={100}
                        step={20}
                        className="w-full"
                      />
                      <div className="flex justify-between text-2xl">
                        <span>😢</span>
                        <span>😔</span>
                        <span>😐</span>
                        <span>😊</span>
                        <span>🤩</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Slider de Velocidade */}
                  <div className="space-y-4">
                    <Label>Velocidade de Animação</Label>
                    <div className="space-y-3">
                      <Slider
                        defaultValue={[50]}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>🐢 Lenta</span>
                        <span>🚶 Normal</span>
                        <span>🏃 Rápida</span>
                        <span>⚡ Instantânea</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Slider de Energia */}
                  <div className="space-y-4">
                    <Label>Nível de Energia da Bateria</Label>
                    <div className="space-y-3">
                      <Slider
                        defaultValue={[85]}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-4 border-2 border-gray-400 rounded-sm relative">
                            <div className="absolute right-[-3px] top-1 w-1 h-2 bg-gray-400 rounded-r-sm"></div>
                            <div
                              className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-sm transition-all duration-300"
                              style={{ width: "85%" }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700"
                        >
                          🔋 Carregando
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Slider de Pizza */}
                  <div className="space-y-4">
                    <Label>Tamanho da Pizza</Label>
                    <div className="space-y-3">
                      <Slider
                        defaultValue={[60]}
                        max={100}
                        step={25}
                        className="w-full"
                      />
                      <div className="flex justify-between items-end">
                        <div className="text-center">
                          <div className="text-2xl">🍕</div>
                          <div className="text-xs">Pequena</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl">🍕</div>
                          <div className="text-xs">Média</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl">🍕</div>
                          <div className="text-xs">Grande</div>
                        </div>
                        <div className="text-center">
                          <div className="text-5xl">🍕</div>
                          <div className="text-xs">Família</div>
                        </div>
                      </div>
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
