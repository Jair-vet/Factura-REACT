import { invoice } from "../data/invoice"
import { getInvoice } from "../services/getInvoice"
import { InvoiceInfo } from "./InvoiceInfo"
import { InvoiceView } from "./InvoiceView"
import { TableProducts } from "./TableProducts"

export const InvoiceApp = () => {

    const { id, name, client, company, items} = getInvoice()

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

                    <div className="p-2 flex justify-end">
                        <button className="shadow-lg rounded-md duration-300 bg-green-800 text-sm text-white w-12">1149</button>
                    </div>

                    {/* Button */}
                    <div className="p-2">
                        <button className="bg-gray-500 uppercase p-1 shadow-lg text-white w-24 rounded-md duration-300 hover:bg-gray-600">Add Item</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
