import { useState, useEffect } from "react";

const useFecth = (url) => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCon = new AbortController()

    setTimeout(() => {
      fetch(url, { signal: abortCon.signal })
        .then(res => {
          if (!res.ok) {
            throw Error('Ne peux pas charger les données depuis cette ressource')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Récupération des données annulée')
          }
          else {
            setError(err.message)
            setIsPending(false)
          }
        })
    }, 5)
    return () => abortCon.abort()
  }, [url])

  return { data, isPending, error }
}


export default useFecth