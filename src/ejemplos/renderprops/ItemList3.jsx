import ItemCard from "../../components/ItemCard/ItemCard"
import ProductsData from "./ProductsData"



const ItemList3 = () => {

    return (
        <div>
            <h1>ItemList 3</h1>
            <hr/>
            
            <ProductsData>
                {(productos, loading) => (
                    <div className="container my-5 row">
                        {loading
                            ? <h2>Cargando...</h2>
                            : productos.map(item => <ItemCard item={item} key={item.id}/>)
                        }
                    </div>
                )}
            </ProductsData>
        </div>
    )
}

export default ItemList3