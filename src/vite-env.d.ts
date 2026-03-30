/// <reference types="vite/client" />

declare module '@thundrex/web-components' {
  export function setTheme(theme: string | Record<string, string>): void;
  export function resetTheme(): void;
  export const themes: Record<string, Record<string, string>>;
}
