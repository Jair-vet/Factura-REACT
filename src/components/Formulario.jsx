import { useState } from "react"
import { Alert } from "./Alert"
import useFactura from "../hook/useFactura"

export const Formulario = () => {

    const { 
        handleSubmit, 
        productValue, 
        setProductValue, 
        priceValue, 
        setPriceValue, 
        quantityValue, 
        setQuantityValue, 
        mensaje
    } = useFactura()

  return (
    <>
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col space-y-3 p-3 border rounded-md mt-10"
        >

            { mensaje && <Alert className="text-center" mensaje='Completa los Campos y Agrega los Valores Correctamente'>{mensaje}</Alert> }
            <h2 className="text-2xl text-center font-extrabold text-gray-600">Agregar Factura</h2>
            <input 
                type="text" 
                name="product" 
                id="product" 
                placeholder="Producto"
                className="p-2 border-2 rounded-md"
                value={ productValue } 
                onChange={ e => {
                    e.target.value 
                    setProductValue(e.target.value)
                }}
                
            />
            <input 
                type="text" 
                name="price" 
                id="price" 
                placeholder="Precio" 
                className="p-2 border-2 rounded-md"
                value={ priceValue }
                onChange={ e => {
                    e.target.value 
                    setPriceValue(e.target.value)
                }}  
            />
            <input 
                type="text" 
                name="quantity" 
                id="quantity" 
                placeholder="Cantidad" 
                className="p-2 border-2 rounded-md"
                value={ quantityValue }
                onChange={ e => {
                    e.target.value 
                    setQuantityValue(e.target.value)
                }} 
            />
        
            {/* Button */}
            <div>
                <button
                    type="submit"
                    className="bg-gray-500 uppercase p-2 shadow-lg text-white w-full rounded-md duration-300 hover:bg-gray-600"
                >
                    Add Item
                </button>
            </div>
        </form>
    </>
  )
}
