import React from "react";
import { cn } from "../../lib/utils";

interface Column<T = any> {
  id: string;
  header: string;
  accessor?: keyof T | ((item: T) => any);
  cell?: (value: any, item: T, index: number) => React.ReactNode;
  sortable?: boolean;
  width?: string | number;
  align?: "left" | "center" | "right";
}

interface DataTableProps<T = any> {
  data: T[];
  columns: Column<T>[];
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    onPageChange: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
  };
  sorting?: {
    field: string;
    direction: "asc" | "desc";
    onSortChange: (field: string, direction: "asc" | "desc") => void;
  };
  selection?: {
    selectedRows: string[];
    onSelectionChange: (selectedRows: string[]) => void;
    getRowId: (item: T) => string;
  };
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
}

const DataTable = <T extends Record<string, any>>({
  data,
  columns,
  pagination,
  sorting,
  selection,
  loading = false,
  emptyMessage = "Nenhum dado encontrado",
  className,
}: DataTableProps<T>) => {
  const [internalSorting, setInternalSorting] = React.useState<{
    field: string;
    direction: "asc" | "desc";
  } | null>(null);

  const currentSorting = sorting || internalSorting;

  const handleSort = (field: string) => {
    const newDirection =
      currentSorting?.field === field && currentSorting.direction === "asc"
        ? "desc"
        : "asc";

    if (sorting) {
      sorting.onSortChange(field, newDirection);
    } else {
      setInternalSorting({ field, direction: newDirection });
    }
  };

  const getCellValue = (item: T, column: Column<T>) => {
    if (column.accessor) {
      if (typeof column.accessor === "function") {
        return column.accessor(item);
      }
      return item[column.accessor];
    }
    return item[column.id];
  };

  const renderCell = (item: T, column: Column<T>, index: number) => {
    const value = getCellValue(item, column);

    if (column.cell) {
      return column.cell(value, item, index);
    }

    return value?.toString() || "";
  };

  const getAlignmentClass = (align?: string) => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  const isRowSelected = (item: T) => {
    if (!selection) return false;
    const rowId = selection.getRowId(item);
    return selection.selectedRows.includes(rowId);
  };

  const handleRowSelection = (item: T, checked: boolean) => {
    if (!selection) return;

    const rowId = selection.getRowId(item);
    const newSelection = checked
      ? [...selection.selectedRows, rowId]
      : selection.selectedRows.filter((id) => id !== rowId);

    selection.onSelectionChange(newSelection);
  };

  const handleSelectAll = (checked: boolean) => {
    if (!selection) return;

    const newSelection = checked
      ? data.map((item) => selection.getRowId(item))
      : [];

    selection.onSelectionChange(newSelection);
  };

  const isAllSelected =
    selection &&
    selection.selectedRows.length === data.length &&
    data.length > 0;
  const isIndeterminate =
    selection &&
    selection.selectedRows.length > 0 &&
    selection.selectedRows.length < data.length;

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-muted-foreground">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                {selection && (
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      ref={(el) => {
                        if (el) el.indeterminate = !!isIndeterminate;
                      }}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="rounded border border-primary"
                    />
                  </th>
                )}
                {columns.map((column) => (
                  <th
                    key={column.id}
                    className={cn(
                      "h-12 px-4 align-middle font-medium text-muted-foreground",
                      getAlignmentClass(column.align),
                      column.sortable && "cursor-pointer hover:text-foreground"
                    )}
                    style={{ width: column.width }}
                    onClick={() => column.sortable && handleSort(column.id)}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{column.header}</span>
                      {column.sortable && (
                        <div className="flex flex-col">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={cn(
                              "h-3 w-3",
                              currentSorting?.field === column.id &&
                                currentSorting.direction === "asc"
                                ? "text-foreground"
                                : "text-muted-foreground"
                            )}
                          >
                            <path d="m18 15-6-6-6 6" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={cn(
                              "h-3 w-3 -mt-1",
                              currentSorting?.field === column.id &&
                                currentSorting.direction === "desc"
                                ? "text-foreground"
                                : "text-muted-foreground"
                            )}
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + (selection ? 1 : 0)}
                    className="h-24 text-center text-muted-foreground"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr
                    key={selection ? selection.getRowId(item) : index}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    {selection && (
                      <td className="h-12 px-4 align-middle">
                        <input
                          type="checkbox"
                          checked={isRowSelected(item)}
                          onChange={(e) =>
                            handleRowSelection(item, e.target.checked)
                          }
                          className="rounded border border-primary"
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td
                        key={column.id}
                        className={cn(
                          "h-12 px-4 align-middle",
                          getAlignmentClass(column.align)
                        )}
                      >
                        {renderCell(item, column, index)}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {pagination && (
        <div className="flex items-center justify-between space-x-2 py-4">
          <div className="text-sm text-muted-foreground">
            Mostrando {(pagination.page - 1) * pagination.pageSize + 1} a{" "}
            {Math.min(pagination.page * pagination.pageSize, pagination.total)}{" "}
            de {pagination.total} resultado(s)
          </div>
          <div className="flex items-center space-x-2">
            {pagination.onPageSizeChange && (
              <select
                value={pagination.pageSize}
                onChange={(e) =>
                  pagination.onPageSizeChange?.(Number(e.target.value))
                }
                className="h-8 w-[70px] rounded-md border border-input bg-background px-3 py-1 text-sm"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            )}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => pagination.onPageChange(1)}
                disabled={pagination.page === 1}
                className="h-8 w-8 p-0 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mx-auto"
                >
                  <path d="m11 17-5-5 5-5" />
                  <path d="m18 17-5-5 5-5" />
                </svg>
              </button>
              <button
                onClick={() => pagination.onPageChange(pagination.page - 1)}
                disabled={pagination.page === 1}
                className="h-8 w-8 p-0 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mx-auto"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <span className="text-sm px-2">
                Página {pagination.page} de{" "}
                {Math.ceil(pagination.total / pagination.pageSize)}
              </span>
              <button
                onClick={() => pagination.onPageChange(pagination.page + 1)}
                disabled={
                  pagination.page >=
                  Math.ceil(pagination.total / pagination.pageSize)
                }
                className="h-8 w-8 p-0 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mx-auto"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
              <button
                onClick={() =>
                  pagination.onPageChange(
                    Math.ceil(pagination.total / pagination.pageSize)
                  )
                }
                disabled={
                  pagination.page >=
                  Math.ceil(pagination.total / pagination.pageSize)
                }
                className="h-8 w-8 p-0 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mx-auto"
                >
                  <path d="m6 17 5-5-5-5" />
                  <path d="m13 17 5-5-5-5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { DataTable };
export type { Column, DataTableProps };
