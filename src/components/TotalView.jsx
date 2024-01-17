
export const TotalView = ({total}) => {
  return (
    <div className="p-2 flex justify-end">
        <p className="p-2 font-bold">Total:</p>
        <p className="shadow-lg p-2 rounded-md duration-300 bg-green-800 text-sm text-white w-15">${ total }</p>
    </div>
  )
}
