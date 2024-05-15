"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Provider } from 'jotai';

export function ThemeProviders({children, ...props}: ThemeProviderProps) {

    return (

        <NextThemesProvider
        {...props}>
          <Provider>
            {children}
          </Provider>
        </NextThemesProvider>
    )
  }