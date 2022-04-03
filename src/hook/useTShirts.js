import { useEffect, useState } from "react"

const useTShirts = () => {
    const [tShirts, setTShirts] = useState([])
    useEffect(() => {
        fetch('tshirts.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setTShirts(data)
        })
    }, [])
    return [tShirts, setTShirts]
}
export default useTShirts;