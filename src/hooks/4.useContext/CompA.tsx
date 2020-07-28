import React, { useContext } from 'react'
import ThemeContext from './themeContext'

export default () => {

  const bg = useContext(ThemeContext)
  console.log(bg); // green

  return (
    <p style={{ backgroundColor: bg }}>
      Hello World
    </p>
  )
}
