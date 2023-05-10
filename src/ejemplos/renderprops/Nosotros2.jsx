import ProductsData from "./ProductsData"




const Nosotros2 = () => {

    return (
        <div>
            <h2>Nostros 2</h2>
            <hr/>

            <ProductsData>
                {(productos) => (
                    <p>
                        {JSON.stringify(productos)}
                    </p>
                )}
            </ProductsData>
        </div>
    )
}

export default Nosotros2