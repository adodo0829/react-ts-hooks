import React, { useState, useEffect } from 'react'

// 自定义hook
const useFetch = (url: string) => {
  const [state, setState] = useState({ data: null, isLoading: false })

  useEffect(() => {
    const getData = async () => {
      setState({ data: null, isLoading: true })

      const apiData = await fetch('http://dsadsad/com')
      const data = await apiData.json()

      setState({ data, isLoading: false })
    }
  
    getData()
  }, [url])

  return state
}


function EffectDemo() {

  // 使用自定义hook
  const { data, isLoading } = useFetch('api/list')

  return (
    <>
      { data }
    </>
  )
}

export default EffectDemo