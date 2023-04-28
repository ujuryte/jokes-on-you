import { useContext } from "react"
import { Store } from "./Store"

export default function Jokes() {

    const { list } = useContext(Store);

    if (null === list) {
        return <h1>Loading..</h1>
    }

    return (
        <div className="border list">
            {
                list.map(q => q.type === 'twopart'
                    ? <div key={q.id} className="list">
                        <h6>{q.setup}</h6>
                        <p>{q.delivery}</p>
                    </div>
                    : <div key={q.id} className="list">
                        <p>{q.joke}</p>
                    </div>)
            }
        </div>
    )
}