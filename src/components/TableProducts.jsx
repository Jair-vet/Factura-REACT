import React from 'react'

export const TableProducts = ({ items }) => {
  return (
    <div> 
        <table className="w-full md:border-separate md:[border-spacing:0.75rem] md:p-0 p-8 ">
            <thead className="md:text-left even:bg-gray-100">
                <tr>
                    <th>Producto</th>
                    <th className='text-center'>Precio</th>
                    <th className='text-center'>Cantidad</th>
                    <th className='text-center'>Eliminar</th>
                </tr>
            </thead>
            <tbody className="text-left">
                { items.map(({id, product, price, quantity}) => 
                    (
                        <tr key={id} className="odd:bg-gray-300">
                            <td>{ product }</td>
                            <td className='text-center'>${ price }</td>
                            <td className='text-center'>{ quantity }</td>
                            <td className='flex justify-center'> 
                                <div className="flex justify-start">
                                    <button className="bg-red-500 p-1 w-20 shadow-lg text-white rounded-md duration-300 hover:bg-red-600">Delete</button>
                                </div>
                            </td>
                        </tr>
                    )
                ) }
            </tbody>
        </table>
    </div>
  )
}
