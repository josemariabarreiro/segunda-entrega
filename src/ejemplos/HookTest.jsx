import { useProductos } from "../hooks/useProductos"



const HookTest = () => {

    const {loading, productos} = useProductos()
    console.log(productos)

    return (
        <div>
            {
                loading ? "Cargando productos" : "productos cargados"
            }
        </div>
    )
}

export default HookTest