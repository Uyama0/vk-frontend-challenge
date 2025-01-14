import {
  useEffect,
  useState,
  useContext,
  createContext,
  PropsWithChildren,
} from 'react';

interface FavoriteProps {
  id: string;
  url: string;
}

interface FavoritesContextProps {
  favorites: FavoriteProps[];
  toggleFavorite: (item: FavoriteProps) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<FavoriteProps[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (item: FavoriteProps) => {
    const isAlreadyFavorite = favorites.some(
      (favorite) => favorite.id === item.id
    );

    const updatedFavorites = isAlreadyFavorite
      ? favorites.filter((favorite) => favorite.id !== item.id)
      : [...favorites, item];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites is using outside of FavoritesProvider');
  }
  return context;
};
