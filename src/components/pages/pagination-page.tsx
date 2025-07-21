import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
} from "../../index";

export function PaginationPage() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Pagination Component</h1>
        <p className="text-muted-foreground mt-2">
          Componente de paginação para navegar entre páginas de conteúdo.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pagination Básico</CardTitle>
            <CardDescription>Exemplo básico de paginação</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  Anterior
                </Button>

                {[...Array(Math.min(5, totalPages))].map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  );
                })}

                {totalPages > 5 && <span>...</span>}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  Próximo
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Página {currentPage} de {totalPages}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
