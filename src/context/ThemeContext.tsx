import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext<{
  isPaper: boolean;
  toggleTheme: () => void;
} | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isPaper, setIsPaper] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = isPaper ? 'paper' : 'deep-space';
  }, [isPaper]);

  return (
    <ThemeContext.Provider value={{ isPaper, toggleTheme: () => setIsPaper(value => !value) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
