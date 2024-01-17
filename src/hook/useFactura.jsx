import { useContext } from "react";
import FacturasContext from "../context/FacturasProvider";

const useFactura = () => {
    return useContext(FacturasContext)
}

export default useFactura