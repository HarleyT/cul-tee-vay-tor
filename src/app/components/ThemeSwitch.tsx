import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import IconDark from './Icons/Dark';
import IconLight from './Icons/Light';

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
        setTheme('dark')
    } else if (theme === 'custom') {
        setTheme('custom')
    } else {
        setTheme('light')
    }
}

  return (
    <div>
      <button onClick={themeButton}>
        {theme === 'dark' ? (
          <IconDark />
          ) : (
              <IconLight />
          )}
      </button>
    </div>
  )
}