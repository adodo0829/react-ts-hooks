import React, { useState, useEffect } from 'react'

const Effect = () => {

  useEffect(() => {
    document.title = 'xxxooo'
  }, [])

  return (
    null
  )
}

export default Effect