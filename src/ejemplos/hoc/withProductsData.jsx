import { useState, useEffect } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"



// recibe componente por parametro
export const withProductsData = (Component) => {
    // crear otro componente que retorne el anterior
    // con la funcionalidad agregada
    const WithProductsData = (props) => {
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            setLoading(true)
    
            pedirDatos()
                .then((data) => setProductos(data))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        }, [])

        return (
            <Component productos={productos} loading={loading} {...props}/>
        )
    }

    return WithProductsData
}