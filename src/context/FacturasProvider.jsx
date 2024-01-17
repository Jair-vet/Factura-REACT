import { createContext, useState } from 'react'


const FacturasContext = createContext()

const FacturasProvider = ({children}) => {


    

    return(
        <FacturasContext.Provider
            value={{

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