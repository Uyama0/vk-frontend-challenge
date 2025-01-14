import {
  useEffect,
  useState,
  useContext,
  createContext,
  PropsWithChildren,
} from 'react';

interface FavoritesContextProps {
  favorites: string[];
  toggleFavorite: (item: string) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(storedFavorites);
  }, []);

  console.log(favorites);

  const toggleFavorite = (item: string) => {
    const isAlreadyFavorite = favorites.includes(item);
    const updatedFavorites = isAlreadyFavorite
      ? favorites.filter((favorite) => favorite !== item)
      : [...favorites, item]; 
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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
