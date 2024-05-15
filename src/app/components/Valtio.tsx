import { useSnapshot } from "valtio"
import { PlanetStore } from "../store/planet-store"

const Planets = () => {
    const snap = useSnapshot(PlanetStore)
    return (
        snap.earth.map((({id, value, action}) => {
            return (
                <div key={id}>{value}{action}</div>
            )
        }))
    )
}