"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import VisibilityIcon from '@mui/icons-material/Visibility';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      <Button isIconOnly onClick={() => setTheme('light')}><LightModeIcon /></Button>
      <Button isIconOnly onClick={() => setTheme('dark')}><DarkModeIcon /></Button>
      <Button isIconOnly onClick={() => setTheme('colourblind')}><VisibilityIcon /></Button>
    </div>
  )
};