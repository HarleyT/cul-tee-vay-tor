import { useTheme } from 'next-themes'
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

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
            )}</IconButton>
    </div>
  )
}