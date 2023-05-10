import { useState, useRef, useEffect } from "react"


export const Clicker = () => {

    const [counter, setCounter] = useState(10)
    const [saludo, setSaludo] = useState("Hola")
    // const [carrito, setCarrito] = useState([])

    const dateRef = useRef(new Date())

    const sumar = () => {
        setCounter( counter + 1 )
    }

    const agregarSaludo = () => {
        setSaludo(saludo + " hola")
    }

    

    useEffect(() => {
        console.log("Componente montado")

        // fetch('https://jsonplaceholder.typicode.com/posts/1')
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));

        return () => {
            // funcion de limpieza || cleanup effect
            console.log("COmponente desmontado")
        }
    }, [])

    // useEffect(() => {
    //     console.log("Esto va después del render")
    //     // dateRef.current = new Date()   
        
    //     return () => {
    //         console.log("Esto va antes del render")
    //     }
    // }, [saludo, counter])

    // useEffect(() => {
    //     localStorage.setItem('carrito', JSON.stringify(carrito))
    // }, [carrito])


    return (
        <div className="container my-5">
            <button onClick={sumar} className="btn btn-primary">Click me</button>
            <p>Contador: {counter}</p>
            <p>Componente montado: {dateRef.current.toLocaleString()}</p>

            <div onClick={agregarSaludo}>
                {saludo}
            </div>
        </div>
    )
}