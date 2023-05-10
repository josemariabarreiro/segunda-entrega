import MOCK_DATA from "../data/MOCK_DATA"

export const pedirDatos = () => {   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
            // if (bool) {
            //     resolve("Promesa resuelta")
            // } else {
            //     reject("Promesa rechazada")
            // }
        }, 1000)
    })
}