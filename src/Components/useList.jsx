import { useEffect, useState } from "react";
import axios from 'axios';

export default function useList() {

    const [list, setList] = useState(null);

    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then( res => setList(res.data.jokes))
    }, []);

    return [list]

}