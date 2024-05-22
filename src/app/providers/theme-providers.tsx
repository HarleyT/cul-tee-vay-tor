"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProviders({children, ...props}: ThemeProviderProps) {

    return (

        <NextThemesProvider themes={['light', 'dark', 'custom']}
        {...props}>
          {children}
        </NextThemesProvider>
    )
  }