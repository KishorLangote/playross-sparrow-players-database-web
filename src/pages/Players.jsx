import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export const playersData = [
  { id: 1, name: "Lionel Messi", position: "Forward", team: "Barcelona" },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    position: "Forward",
    team: "Manchester United",
  },
  {
    id: 3,
    name: "Neymar Jr",
    position: "Forward",
    team: "Paris Saint-Germain",
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    position: "Forward",
    team: "Paris Saint-Germain",
  },
  {
    id: 5,
    name: "Robert Lewandowski",
    position: "Forward",
    team: "Bayern Munich",
  },
];

const Players = () => {
  const [teamFilter, setTeamFilter] = useState("All");

  const filterTeams = teamFilter === "All" ? playersData : playersData.filter((player) => player.team === teamFilter)
  console.log("Team filter:", teamFilter)

  return (
    <>
      <Header />
      <main className="container py-3">
        <h1>List of Players</h1>
        <div className="row py-4">
          <label htmlFor="selectTeam" class="col col-form-label mx-4">Filter by Team:</label>
          <div class="col-sm-10">
          <select
            id="selectTeam"
            className="form-control"
            onChange={(e) => setTeamFilter(e.target.value)}
          >
            <option value="All">All Teams</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Manchester-United">Manchester-United</option>
            <option value="Paris Saint-Germain">Paris Saint-Germain</option>
            <option value="Bayern Munich">Bayern Munich</option>
          </select>
          </div>
        </div>
        <ul className="list-group">
          {filterTeams.map((player) => (
            <>
              <li key={player.id} className="list-group-item py-4">
                <h4>{player.name}</h4>
                <p>Position: {player.position}</p>
                <p>Team: {player.team}</p>
                <Link className="btn btn-primary" to={`/players/${player.id}`}>
                  View Details
                </Link>
              </li>
            </>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Players;
