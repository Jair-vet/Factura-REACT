import React from 'react'

export const Alert = ({mensaje}) => {
  return (
    <div className="bg-red-300 text-red-600 text-center p-2 uppercase font-bold mb-3 rounded-md">
        <p>{mensaje}</p>
    </div>
  )
}
