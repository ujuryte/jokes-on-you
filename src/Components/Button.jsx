import { useContext } from "react"
import { Store } from "./Store"

export default function Button() {

    const {doRefresh} = useContext(Store)

    return(
        <div className="nice-border">
            <button onClick={doRefresh}>Load New Jokes</button>
        </div>
    )
}