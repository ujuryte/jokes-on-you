import { createContext } from "react";
import useList from "./useList";
import useRefresh from "./useRefresh";


export const Store = createContext();

export function Code({children}) {

    
    const [list] = useList();
    const [refresh, doRefresh] = useRefresh();
   

    return(
        <Store.Provider value={{ list, refresh, doRefresh }}>
            {children}
        </Store.Provider>
    )

}