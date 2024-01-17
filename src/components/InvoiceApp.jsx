import { invoice } from "../data/invoice"
import { getInvoice } from "../services/getInvoice"
import { InvoiceInfo } from "./InvoiceInfo"
import { InvoiceView } from "./InvoiceView"
import { TableProducts } from "./TableProducts"
import { TotalView } from "./TotalView"

export const InvoiceApp = () => {

    const { id, name, client, company, items, total} = getInvoice()

  return (
    <div className="container mx-auto mt-4 rounded-md shadow-xl bg-white">
        <div>
            {/* Title */}
            <div className="border bg-gray-200 border-b rounded-t-md p-2">
                <h1 className="text-4xl text-center font-bold text-gray-500">EX<span className="text-purple-600 font-black">Factura</span></h1>
            </div>

            {/* Info Card */}
            <div className="p-3">
                {/* Info */}
                <InvoiceInfo
                    id={id}
                    name={name}
                />
                <div className="p-2 border rounded-md mt-3">
                    <InvoiceView 
                        client={client}
                        company={company}
                    />

                    {/* Table */}
                    <div className="mt-4 p-2 ">
                        <h2 className="text-2xl md:text-left text-center">Productos de la Factura</h2>
                            <TableProducts 
                                items={items}
                            />
                    </div>

                    {/* Total */}
                    <TotalView 
                        total={total}
                    />

                    {/* Button */}
                    <div className="p-2">
                        <button className="bg-gray-500 uppercase p-1 shadow-lg text-white w-24 rounded-md duration-300 hover:bg-gray-600">Add Item</button>
                    </div>

                    <form className="flex flex-col space-y-3 p-3 border rounded-md">
                        <h2 className="text-2xl text-center font-extrabold text-gray-600">Agregar Factura</h2>
                        <input 
                            type="text" 
                            name="product" 
                            placeholder="Producto"
                            className="p-2 border-2 rounded-md" 
                        />
                        <input 
                            type="text" 
                            name="price" 
                            placeholder="Precio" 
                            className="p-2 border-2 rounded-md"  
                        />
                        <input 
                            type="text" 
                            name="quantity" 
                            placeholder="Cantidad" 
                            className="p-2 border-2 rounded-md" 
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
