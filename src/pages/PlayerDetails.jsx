import { playersData } from "./Players"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PlayerDetails = () => {
const playerId = useParams()
console.log(playerId)

const playerData = playersData.find((player) => player.id == playerId.id)
console.log(playerData)
  return (
    <>
    <Header />
      <main className="container py-4">
        <h1>{playerData.name}</h1>
        <ul className="list-group">
          <li className="list-group-item"><strong>Name: </strong>{playerData.name}</li>
          <li className="list-group-item"><strong>Position: </strong>{playerData.position}</li>
          <li className="list-group-item"><strong>Team: </strong>{playerData.team}</li>
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default PlayerDetails