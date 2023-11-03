import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";
import { useGetItemsQuery } from "../../store/api/pokemonApi";
import { getThroughtUrl } from "../../helpers/functionFetch";

function Items() {
    const [items, setItems] = useState("")
    const { data: itemsData } = useGetItemsQuery()
    const navigate = useNavigate()
    useEffect(() => {
        if (itemsData) {
            setItems(itemsData)
        }
    }, [itemsData])

    const handlePage = async (url) => {
        try {
            getThroughtUrl(url).then(data => {
                setItems(data)
            })

        } catch (error) {
            console.error(error)
        }
    }

    return (<>
        <button className="btn btn-dark" onClick={() => navigate(-1)}>←</button>
        <section>
            <h1 className="display-1 w-100 text-center my-5">Items</h1>
            <div className="w-100 d-flex justify-content-between my-5 px-4">
                <button className="btn btn-outline-primary btn-lg px-5" disabled={items?.previous ? false : true} onClick={() => handlePage(items?.previous)}>Prev</button>
                <button className="btn btn-outline-primary btn-lg px-5" disabled={items?.next ? false : true} onClick={() => handlePage(items?.next)}>Next</button>
            </div>
            <main className="items-grid">
                {items && items.results.map(item => <ItemCard key={item.name} item={item} />)}
            </main>

        </section></>);
}

export default Items;