import { useState, useEffect } from "react";

export const useFetch = url => {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, serError] = useState(null)

  useEffect(() => {
    const fetchResources = async () => {
      try {
        let res = await fetch(url)
        let data = await res.json()
        setData(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        serError(error)
      }
    }
    fetchResources()
  }, [url])

  return { data, loading, error }
}