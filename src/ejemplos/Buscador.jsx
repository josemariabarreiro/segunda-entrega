import { useRef } from "react"
import { useSearchParams } from "react-router-dom"



const Buscador = () => {
    const [, setSearchParams] = useSearchParams()

    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const value = inputRef.current.value

        setSearchParams({
            search: value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" className="form-control" style={{maxWidth: '450px'}}/>
            <button type="submit" className="btn btn-success">Buscar</button>
        </form>
    )
}

export default Buscador