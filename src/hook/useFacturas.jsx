import { useContext } from "react";
import FacturasContext from "../context/FacturasProvider";

const useCotizador = () => {
    return useContext(FacturasContext)
}

export default useCotizador