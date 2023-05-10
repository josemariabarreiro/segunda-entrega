import { useEffect } from 'react'
import './ItemListContainer.scss'
import { useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
// import { useProductos } from '../../hooks/useProductos'
import { useParams, useSearchParams } from 'react-router-dom'

export const ItemListContainer = () => {
    // const { loading, productos } = useProductos()
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()

    const search = searchParams.get('search')

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => {
                if (!categoryId) {
                    setProductos(data)
                } else {
                    setProductos( data.filter((el) => el.category === categoryId) )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    const listado = search
                        ? productos.filter((el) => el.nombre.toLowerCase().includes(search.toLowerCase())) 
                        : productos

    console.log(listado)

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={listado}/>
            }
        </div>
    )
}