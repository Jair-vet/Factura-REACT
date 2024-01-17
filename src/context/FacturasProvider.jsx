import { createContext, useState } from 'react'
import { getInvoice } from '../services/getInvoice'


const FacturasContext = createContext()

const FacturasProvider = ({children}) => {

    const { id, name, client, company, items: itemsInitial, total} = getInvoice()

    const [productValue, setProductValue] = useState('')
    const [priceValue, setPriceValue] = useState('')
    const [quantityValue, setQuantityValue] = useState('')

    const [items, setItems] = useState(itemsInitial)

    const [counter, setCounter] = useState(5)
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if([productValue, isNaN(priceValue) , isNaN(quantityValue)].includes('')) {
            setMensaje('Completa los Campos y Agrega los Valores Correctamente')
            setTimeout(() => {
                setMensaje('')
            },3000)
            return
        }
        setMensaje('')

        setItems([...items, {
            id: counter,
            product: productValue, 
            price: +priceValue, 
            quantity: +quantityValue
        }])

        // Clear Form
        setProductValue('')
        setPriceValue('')
        setQuantityValue('')
        setCounter(counter + 1)
    }

    return(
        <FacturasContext.Provider
            value={{
                handleSubmit,
                productValue, 
                setProductValue,
                priceValue, 
                setPriceValue,
                quantityValue,
                setQuantityValue,
                counter,
                setCounter,
                mensaje,
                setMensaje,
                id, 
                name, 
                client, 
                company, 
                items, 
                total
            }}
        >
            {children}
        </FacturasContext.Provider>
    )
}

export {
    FacturasProvider as FacturasProvider
}

export default FacturasContext