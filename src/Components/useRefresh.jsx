import { useState } from "react";


export default function useRefresh() {

    const [refresh, setRefresh] = useState(null);


    const doRefresh = _ => {
        setRefresh(window.location.reload(false))
    }

    return [refresh, doRefresh]

}