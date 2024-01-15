import PropTypes from 'prop-types'

export const InvoiceView = ({client, company}) => {

    const { name: nameClient, lastName, address } = client
    const { country, city, street, number } = address 
  return (
    <div className="flex md:flex-row items-center flex-col p-2 mt-3 gap-5">
        {/* Client Data */}
        <div className="md:w-1/2">
            <h2 className="text-2xl md:text-left text-center">Datos del Cliente</h2>
            <div>
                <p className="p-1 bg-purple-600 text-white border rounded-t-md">{ nameClient } { lastName }</p>
                <p className="p-1 border">{ country } / { city }</p>
                <p className="p-1 border rounded-b-md">{ street } { number }</p>
            </div>
        </div>
        {/* Empresa Data */}
        <div className="md:w-1/2">
            <h2 className="text-2xl md:text-left text-center">Datos de la Empresa</h2>
            <div>
                <p className="p-1 bg-purple-600 text-white border rounded-t-md">{ company.name }</p>
                <p className="p-1 border">{ company.fiscalNumber }</p>
            </div>
        </div>
    </div>
  )
}

InvoiceView.prototype = {
    client: PropTypes.object.isRequired,
    company: PropTypes.object.isRequired
}