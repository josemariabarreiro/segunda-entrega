import { withProductsData } from "./withProductsData"

const Nosotros = ({productos, loading}) => {
    console.log(productos)

    return (
        <div>
            <h2>Nosotros</h2>
            <hr/>
        </div>
    )
}

export default withProductsData(Nosotros)
