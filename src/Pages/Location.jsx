import { useNavigate } from "react-router-dom"
import LocationCard from "../Components/view-locations/LocationCard";
import { useEffect, useState } from "react";
import { getThroughtUrl } from "../helpers/functionFetch";
import { useGetLocationsQuery } from "../store/api/pokemonApi";
function ViewLocation() {
    const [location, setLocation] = useState("")
    const navigate = useNavigate()
    const { data: locationData } = useGetLocationsQuery()

    useEffect(() => {
        if (locationData) {
            setLocation(locationData)
        }
    }, [locationData])


    const handlePage = async (url) => {
        try {
            getThroughtUrl(url).then(data => {
                setLocation(data)
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (<>
        <button className="btn btn-dark" onClick={() => navigate(-1)}>←</button>
        <section>
            <h1 className="w-100 text-center display-3 my-5">Locations</h1>
            <div className="w-100 d-flex justify-content-between my-5 px-4">
                <button className="btn btn-outline-primary btn-lg px-5" disabled={location?.previous ? false : true} onClick={() => handlePage(location?.previous)}>Prev</button>
                <button className="btn btn-outline-primary btn-lg px-5" disabled={location?.next ? false : true} onClick={() => handlePage(location?.next)}>Next</button>
            </div>
            <main className="location-grid">
                {location?.results?.map(location => <LocationCard key={location.name} location={location} />)}
            </main>

        </section>

    </>);
}

export default ViewLocation;