import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../index";

export function HoverCardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Hover Card Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de cartão que aparece ao passar o mouse sobre um elemento.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hover Card Básico</CardTitle>
            <CardDescription>
              Passe o mouse sobre os elementos abaixo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="relative group">
                  <Button variant="link">@usuario</Button>
                  <div className="absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 left-0 top-full mt-2 w-80 p-4 bg-popover text-popover-foreground border rounded-md shadow-lg">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarImage src="/avatar.jpg" />
                        <AvatarFallback>US</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@usuario</h4>
                        <p className="text-sm">
                          Desenvolvedor Full Stack apaixonado por tecnologia.
                        </p>
                        <div className="flex items-center pt-2">
                          <span className="text-xs text-muted-foreground">
                            Membro desde Janeiro 2023
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <Button variant="outline">Informações</Button>
                  <div className="absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 left-0 top-full mt-2 p-4 bg-popover text-popover-foreground border rounded-md shadow-lg">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">
                        Informações Adicionais
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Este cartão contém informações extras que aparecem
                        quando você passa o mouse sobre o botão.
                      </p>
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
