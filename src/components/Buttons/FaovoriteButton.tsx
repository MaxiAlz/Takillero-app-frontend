import { useState } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const FavoriteButton = () => {
  // Estado para controlar si el botón está "marcado como favorito"
  const [isFavorite, setIsFavorite] = useState(false);

  // Función para alternar el estado
  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <button
      onClick={toggleFavorite} // Cambia el estado al hacer clic
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:text-primary"
    >
      {/* Muestra el ícono según el estado */}
      {isFavorite ? (
        <MdFavorite size={20} color="orange" /> // Ícono relleno
      ) : (
        <MdFavoriteBorder size={20} /> // Ícono outline
      )}
    </button>
  );
};

export default FavoriteButton;
