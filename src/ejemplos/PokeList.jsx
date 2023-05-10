import { useEffect } from "react"
import { useState } from "react"
import Pokemon from "./Pokemon"

const PokeList = () => {
    const [list, setList] = useState(null)
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)
    const [pagination, setPagination] = useState({
        next: null,
        previous: null
    })

    console.log(pagination)

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setList(data.results)
                setPagination({
                    next: data.next,
                    previous: data.previous
                })
            })
            .catch(err => console.log(err))
    }, [url])

    const handleAnterior = () => {
        pagination.previous && setUrl(pagination.previous)
    }

    const handleSiguiente = () => {
        pagination.next && setUrl(pagination.next)
    }

    return (
        <div className="container my-5">
            <h2>PokeList</h2>
            <hr/>

            <button onClick={handleAnterior} className="btn btn-outline-primary">Anterior</button>
            <button onClick={handleSiguiente} className="btn btn-primary mx-3">Siguiente</button>

            <div className="row">
                {list && 
                    list.map(poke => <Pokemon url={poke.url} key={poke.name}/>)
                }
            </div>
        </div>
    )
}

export default PokeList

//     protocolo |     dominio      | endpoints
// url:   https://www.coderhouse.com/alumnos
// verb: GET | POST | PATCH | DELETE

// GET: https://www.coderouse.com/alumnos
// comision: number => id de curso, limit: number => limite de resultados

// query params
// url = https://www.coderouse.com/alumnos?comision=45866&limit=10

// URL params
// GET: https://www.coderhouse.com/alumnos/{id}
// url = https://www.coderhouse.com/alumnos/14200

// POST: https://www.coderhouse.com/alumnos
// obj = {id, nombre, edad, curso} => body

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'AppToken': 'asñlfkj12k-124-lkjf-asf12'
//     },
//     body: {
//         // info a enviar en JSON
//     }
// })

