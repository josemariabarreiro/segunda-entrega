import { useEffect } from "react"
import { useState } from "react"



export const useFetch = (url, arr = []) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((resp) => resp.json())
            .then((resp) => setData(resp)) 
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, arr)

    return ({data, loading})
}