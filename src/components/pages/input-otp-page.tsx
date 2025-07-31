import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Input,
} from "../../index";

export function InputOTPPage() {
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");

  // Função para renderizar inputs customizados
  function renderInputs({
    length,
    value,
    setValue,
    inputClass = "",
    mask = false,
    disabled = false,
    autoFocus = false,
  }: {
    length: number;
    value: string;
    setValue: (v: string) => void;
    inputClass?: string;
    mask?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
  }) {
    return (
      <div className="flex gap-2">
        {[...Array(length)].map((_, i) => (
          <Input
            key={i}
            type={mask ? "password" : "text"}
            maxLength={1}
            autoFocus={autoFocus && i === 0}
            disabled={disabled}
            value={value[i] || ""}
            className={`w-12 h-12 text-center border rounded-lg text-lg font-bold bg-background shadow-sm focus:ring-2 focus:ring-primary/60 transition-all ${inputClass} ${disabled ? "opacity-60" : ""}`}
            onChange={(e) => {
              const newValue = value.split("");
              newValue[i] = e.target.value.replace(/[^0-9a-zA-Z]/g, "");
              setValue(newValue.join("").slice(0, length));
              // Auto focus next input
              if (e.target.value && i < length - 1) {
                const nextInput = e.target.parentElement?.children[
                  i + 1
                ] as HTMLInputElement;
                nextInput?.focus();
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && !value[i] && i > 0) {
                const prevInput = e.currentTarget.parentElement?.children[
                  i - 1
                ] as HTMLInputElement;
                prevInput?.focus();
              }
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Input OTP Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de entrada para códigos OTP (One-Time Password).
        </p>
      </div>
      
            <div className="grid gap-6">
              {/* Variante básica */}
              <Card>
                <CardHeader>
                  <CardTitle>Input OTP Básico</CardTitle>
                  <CardDescription>
                    Exemplo básico de entrada de código OTP
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Digite o código de verificação:
                      </label>
                      {renderInputs({ length: 6, value, setValue })}
                      {value.length === 6 && (
                        <p className="text-sm text-green-600">
                          ✓ Código completo: {value}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <Button disabled={value.length !== 6}>Verificar Código</Button>
                      <Button variant="outline" onClick={() => setValue("")}>
                        Limpar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
      
              {/* Variante com máscara */}
              <Card>
                <CardHeader>
                  <CardTitle>OTP com Máscara</CardTitle>
                  <CardDescription>
                    Os dígitos são ocultos para maior privacidade.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <label className="text-sm font-medium">
                      Digite o código secreto:
                    </label>
                    {renderInputs({
                      length: 6,
                      value: value2,
                      setValue: setValue2,
                      mask: true,
                      inputClass: "bg-gray-100",
                    })}
                    <div className="flex gap-3 mt-2">
                      <Button disabled={value2.length !== 6}>Verificar</Button>
                      <Button variant="outline" onClick={() => setValue2("")}>
                        Limpar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
      
              {/* Variante desabilitada */}
              <Card>
                <CardHeader>
                  <CardTitle>OTP Desabilitado</CardTitle>
                  <CardDescription>
                    Exemplo de campos de OTP desabilitados.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <label className="text-sm font-medium">
                      Código não editável:
                    </label>
                    {renderInputs({
                      length: 6,
                      value: value3,
                      setValue: setValue3,
                      disabled: true,
                      inputClass: "bg-gray-200 cursor-not-allowed",
                    })}
                  </div>
                </CardContent>
              </Card>
      
              {/* Variante colorida */}
              <Card>
                <CardHeader>
                  <CardTitle>OTP Colorido</CardTitle>
                  <CardDescription>
                    Inputs com destaque de cor ao digitar.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <label className="text-sm font-medium">
                      Digite o código colorido:
                    </label>
                    {renderInputs({
                      length: 4,
                      value: value3,
                      setValue: setValue3,
                      inputClass:
                        "focus:ring-2 focus:ring-pink-500 border-pink-400 text-pink-600",
                      autoFocus: true,
                    })}
                  </div>
                </CardContent>
              </Card>
      
              {/* Variante com separador visual */}
              <Card>
                <CardHeader>
                  <CardTitle>OTP com Separador</CardTitle>
                  <CardDescription>
                    Separação visual entre blocos de dígitos (ex: 3-3).
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    {renderInputs({
                      length: 3,
                      value: value,
                      setValue: (v) => setValue(v + value.slice(3)),
                      inputClass: "border-blue-400",
                    })}
                    <span className="text-xl font-bold text-muted-foreground">-</span>
                    {renderInputs({
                      length: 3,
                      value: value.slice(3),
                      setValue: (v) => setValue(value.slice(0, 3) + v),
                      inputClass: "border-blue-400",
                    })}
                  </div>
                </CardContent>
              </Card>
      
              {/* Variante para letras e números */}
              <Card>
                <CardHeader>
                  <CardTitle>OTP Alfanumérico</CardTitle>
                  <CardDescription>
                    Aceita letras e números (ex: códigos de convite).
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {renderInputs({
                      length: 8,
                      value: value2,
                      setValue: setValue2,
                      inputClass: "uppercase tracking-widest",
                    })}
                  </div>
                </CardContent>
              </Card>
      
              {/* Caso de uso: confirmação de transação */}
              <Card>
                <CardHeader>
                  <CardTitle>Confirmação de Transação</CardTitle>
                  <CardDescription>
                    Exemplo de uso real: confirmação de operação bancária.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">
                      Enviamos um código SMS para <span className="font-mono">(**) *****-1234</span>
                    </p>
                    {renderInputs({
                      length: 6,
                      value: value,
                      setValue: setValue,
                      inputClass: "border-green-500 focus:ring-green-600",
                    })}
                    <div className="flex gap-2 mt-2">
                      <Button disabled={value.length !== 6}>Confirmar</Button>
                      <Button variant="ghost">Reenviar código</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
      
              {/* Caso de uso: autenticação em 2 fatores */}
              <Card>
                <CardHeader>
                  <CardTitle>2FA - Autenticação em 2 Fatores</CardTitle>
                  <CardDescription>
                    Digite o código do seu app autenticador.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-start gap-2">
                    {renderInputs({
                      length: 6,
                      value: value2,
                      setValue: setValue2,
                      inputClass: "border-purple-500 focus:ring-purple-600",
                      mask: true,
                    })}
                    <Button disabled={value2.length !== 6}>Entrar</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      }
