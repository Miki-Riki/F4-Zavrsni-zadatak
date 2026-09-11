import { create } from 'zustand';

type ThemeState = { theme: 'light' | 'dark'; toggle: () => void };
export const useTheme = create<ThemeState>((set) => ({
  theme: 'light',
  toggle: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),
}));
