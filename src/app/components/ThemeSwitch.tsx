import { useTheme } from 'next-themes'
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function themeButton(){
    if (theme === 'dark') {
        setTheme('light')
    } else {
        setTheme('dark')
    }
}

  return (
    <div>
      <IconButton onClick={themeButton}>
        {theme === 'dark' ? (
          <DarkModeIcon />
          ) : (
              <LightModeIcon />
          )}
      </IconButton>
    </div>
  )
}