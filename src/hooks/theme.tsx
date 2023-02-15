import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { STORAGE_THEME } from 'shared/constants';
import { getLocalItem, setLocalItem } from 'shared/utils/localStorage';

type ThemeType = 'dark' | 'light';

interface ThemeContextData {
  theme: ThemeType;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const persistedTheme = getLocalItem<ThemeType>(STORAGE_THEME);

    if (persistedTheme) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add(persistedTheme);
      return persistedTheme;
    }

    setLocalItem(STORAGE_THEME, 'light');
    return 'light';
  });

  const toggleTheme = useCallback(() => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }

    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    setLocalItem(STORAGE_THEME, newTheme);
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('useTheme must be used within an ThemeProvider');

  return context;
}

export { ThemeProvider, useTheme };
