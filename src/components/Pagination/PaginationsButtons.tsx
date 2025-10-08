import React from 'react';

interface PaginationProps {
  pageIndex: number; // Página actual (1-based)
  totalPages: number; // Total de páginas
  onPageChange: (page: number) => void; // Handler cuando cambia de página
}

/*
Modo de uso:
crear un estado en el Hook del UseQuery : const [page, setPage] = useState(1);
Pasaer el page al la key del Hook y el repositorio, usarlo de la siguiente forma: /Users?pageIndex=${page}
Desesctructurar el setpage del hook en el componente a usar:  const { usersData, isLoading, setPage } = useGetUsers();
Pasarlo en el componente de PaginationsButtons como props
*/

const PaginationsButtons: React.FC<PaginationProps> = ({
  pageIndex,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Mostrar todas las páginas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Mostrar con "..."
      if (pageIndex <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (pageIndex >= totalPages - 3) {
        pages.push(
          1,
          '...',
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          '...',
          pageIndex - 1,
          pageIndex,
          pageIndex + 1,
          '...',
          totalPages,
        );
      }
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="flex w-full items-center justify-center gap-2 my-4">
      {/* Botón Anterior */}
      <button
        onClick={() => onPageChange(pageIndex - 1)}
        disabled={pageIndex === 1}
        className={`px-3 py-1 rounded-lg border text-sm ${
          pageIndex === 1
            ? 'text-gray-400 border-gray-300 cursor-not-allowed'
            : 'dark:text-white dark:border-white hover:bg-primary'
        }`}
      >
        Anterior
      </button>

      {/* Números de páginas */}
      {pages.map((p, index) =>
        typeof p === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(p)}
            className={`px-3 py-1 rounded-lg border text-sm ${
              p === pageIndex
                ? 'bg-primary text-white border-primary'
                : 'text-white border-gray-400 hover:bg-primary hover:opacity-90'
            }`}
          >
            {p}
          </button>
        ) : (
          <span key={index} className="px-3 py-1 text-gray-500">
            {p}
          </span>
        ),
      )}

      {/* Botón Siguiente */}
      <button
        onClick={() => onPageChange(pageIndex + 1)}
        disabled={pageIndex === totalPages}
        className={`px-3 py-1 rounded-lg border text-sm ${
          pageIndex === totalPages
            ? 'text-gray-400 border-gray-300 cursor-not-allowed'
            : 'dark:text-white dark:border-white hover:bg-primary'
        }`}
      >
        Siguiente
      </button>
    </div>
  );
};

export { PaginationsButtons };
