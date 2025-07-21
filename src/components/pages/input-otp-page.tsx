import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  InputOTP,
  Button,
} from "../../index";

export function InputOTPPage() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Input OTP Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de entrada para códigos OTP (One-Time Password).
        </p>
      </div>

      <div className="grid gap-6">
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
                <div className="flex gap-2">
                  {[...Array(6)].map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 text-center border rounded-md text-lg font-medium"
                      onChange={(e) => {
                        const newValue = value.split("");
                        newValue[i] = e.target.value;
                        setValue(newValue.join(""));

                        // Auto focus next input
                        if (e.target.value && i < 5) {
                          const nextInput = e.target.parentElement?.children[
                            i + 1
                          ] as HTMLInputElement;
                          nextInput?.focus();
                        }
                      }}
                    />
                  ))}
                </div>
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
      </div>
    </div>
  );
}
