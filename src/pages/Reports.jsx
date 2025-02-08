import Header from "../components/Header";
import Footer from "../components/Footer";
import { playersData } from "./Players";
import React, { useState } from "react";

const Reports = () => {

  const mostValuablePlayer = { name: "Lionel Messi", goals: 35, assists: 12 }
  const topScorers = { name: "Cristiano Ronaldo", goals: 51, assists: 9 }
  const mostDefensivePlayer = { name: "Neymar Jr", goals: 35, assists: 16 }

  return (
    <>
    <Header />
      <main className="container py-4">
      <div>
      <h1>Player Report</h1>
      <hr />
        <div className="row">

          <div className="col-md-4">
            <div className="card border-light">
              <div className="card-body">
                <h3>Most Valuable Player</h3>
                <p><strong>Name: </strong> {mostValuablePlayer.name}</p>
                <p><strong>Goals: </strong>{mostValuablePlayer.goals}</p>
                <p><strong>Assists: </strong>{mostValuablePlayer.assists}</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card border-light">
              <div className="card-body">
                <h3>Top Scorer Player</h3>
                <p><strong>Name: </strong> {topScorers.name}</p>
                <p><strong>Goals: </strong>{topScorers.goals}</p>
                <p><strong>Assists: </strong>{topScorers.assists}</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card border-light">
              <div className="card-body">
                <h3>Most Defensive Player</h3>
                <p><strong>Name: </strong> {mostDefensivePlayer.name}</p>
                <p><strong>Goals: </strong>{mostDefensivePlayer.goals}</p>
                <p><strong>Assists: </strong>{mostDefensivePlayer.assists}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </main>
      <Footer />
    </>
  )
}

export default Reports





