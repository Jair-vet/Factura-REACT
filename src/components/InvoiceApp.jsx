import { InvoiceInfo } from "./InvoiceInfo"
import { InvoiceView } from "./InvoiceView"
import { TableProducts } from "./TableProducts"
import { TotalView } from "./TotalView"
import { Formulario } from "./Formulario"
import useFactura from "../hook/useFactura"


export const InvoiceApp = () => {

    const { id, name, client, company, items, total} = useFactura()

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

                    <Formulario 
                        items={items}
                    />

                </div>
            </div>
        </div>
    </div>
  )
}
