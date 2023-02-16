import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { PERSISTED_THEME } from 'shared/constants';
import { getLocalItem, setLocalItem } from 'shared/utils/localStorage';

type ThemeType = 'dark' | 'light';

interface ThemeContextData {
  theme: ThemeType;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const persistedTheme = getLocalItem<ThemeType>(PERSISTED_THEME);

    document.documentElement.classList.remove('dark');

    if (persistedTheme && persistedTheme === 'dark') {
      document.documentElement.classList.add('dark');

      return 'dark';
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');

      setLocalItem(PERSISTED_THEME, 'dark');
      return 'dark';
    }

    setLocalItem(PERSISTED_THEME, 'light');
    return 'light';
  });

  const toggleTheme = useCallback(() => {
    document.documentElement.classList.toggle('dark');

    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    setLocalItem(PERSISTED_THEME, newTheme);
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
