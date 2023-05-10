import { useState, useEffect } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"

const ProductsData = ({children}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => setProductos(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return children(productos, loading)
}

export default ProductsData