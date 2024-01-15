import PropTypes from 'prop-types'

export const InvoiceInfo = ({ id, name }) => {
  return (
    <div>
        <div className="p-2 border rounded-md">
            <ul>
                <li className="md:text-left text-center"><span className="text-purple-600 font-black">ID:</span> { id }</li>
                <li className="md:text-left text-center"><span className="text-purple-600 font-black">Name:</span> { name }</li>
            </ul>
        </div>
    </div>
  )
}

InvoiceInfo.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}
