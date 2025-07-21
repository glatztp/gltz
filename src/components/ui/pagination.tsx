import React from "react";
import { cn } from "../../lib/utils";

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  siblingCount?: number;
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      className,
      currentPage,
      totalPages,
      onPageChange,
      showFirstLast = true,
      showPrevNext = true,
      siblingCount = 1,
      ...props
    },
    ref
  ) => {
    const getPageNumbers = (): (number | string)[] => {
      const totalNumbers = siblingCount * 2 + 3;
      const totalBlocks = totalNumbers + 2;

      if (totalPages > totalBlocks) {
        const startPage = Math.max(2, currentPage - siblingCount);
        const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

        let pages: (number | string)[] = Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        );

        const hasLeftSpill = startPage > 2;
        const hasRightSpill = totalPages - endPage > 1;
        const spillOffset = totalNumbers - (pages.length + 1);

        switch (true) {
          case hasLeftSpill && !hasRightSpill: {
            const extraPages = Array.from(
              { length: spillOffset },
              (_, i) => startPage - spillOffset + i
            );
            pages = [...extraPages, ...pages];
            break;
          }
          case !hasLeftSpill && hasRightSpill: {
            const extraPages = Array.from(
              { length: spillOffset },
              (_, i) => endPage + i + 1
            );
            pages = [...pages, ...extraPages];
            break;
          }
          case hasLeftSpill && hasRightSpill:
          default: {
            pages = [1, "...", ...pages, "...", totalPages];
            break;
          }
        }

        return hasLeftSpill || hasRightSpill
          ? pages
          : [1, ...pages, totalPages];
      }

      return Array.from({ length: totalPages }, (_, i) => i + 1);
    };

    const pageNumbers = getPageNumbers();

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
      >
        <PaginationContent>
          {showFirstLast && currentPage > 1 && (
            <PaginationItem>
              <PaginationFirst onClick={() => onPageChange(1)} />
            </PaginationItem>
          )}

          {showPrevNext && currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                onClick={() => onPageChange(currentPage - 1)}
              />
            </PaginationItem>
          )}

          {pageNumbers.map((page, index) => (
            <PaginationItem key={index}>
              {page === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  onClick={() => onPageChange(page as number)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {showPrevNext && currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
            </PaginationItem>
          )}

          {showFirstLast && currentPage < totalPages && (
            <PaginationItem>
              <PaginationLast onClick={() => onPageChange(totalPages)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </nav>
    );
  }
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PaginationLink = React.forwardRef<HTMLButtonElement, PaginationLinkProps>(
  ({ className, isActive, ...props }, ref) => (
    <button
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
        isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
        className
      )}
      {...props}
    />
  )
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "gap-1 pl-2.5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
      className
    )}
    {...props}
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
      className="h-4 w-4"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
    <span>Anterior</span>
  </button>
));
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "gap-1 pr-2.5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
      className
    )}
    {...props}
  >
    <span>Próximo</span>
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
      className="h-4 w-4"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  </button>
));
PaginationNext.displayName = "PaginationNext";

const PaginationFirst = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "gap-1 pl-2.5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
      className
    )}
    {...props}
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
      className="h-4 w-4"
    >
      <path d="m11 17-5-5 5-5" />
      <path d="m18 17-5-5 5-5" />
    </svg>
    <span>Primeiro</span>
  </button>
));
PaginationFirst.displayName = "PaginationFirst";

const PaginationLast = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "gap-1 pr-2.5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
      className
    )}
    {...props}
  >
    <span>Último</span>
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
      className="h-4 w-4"
    >
      <path d="m6 17 5-5-5-5" />
      <path d="m13 17 5-5-5-5" />
    </svg>
  </button>
));
PaginationLast.displayName = "PaginationLast";

const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
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
      className="h-4 w-4"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
    <span className="sr-only">Mais páginas</span>
  </span>
));
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast,
};
