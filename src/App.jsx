import { Link } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  
  return (
    <>
    <Header />
    <main className="container py-4">
      <section className="text-center">
        <img src="https://placehold.co/600x300?text=Players+Smilling" alt=""className="img-fuild" />
      </section>

      <section className="text-center py-5">
        <h2>Our Players</h2>
        <p>Meet our talented team of players who work hard to achieve success on the field.</p>
        <Link className="btn btn-primary" to="/players">View Players</Link>
      </section>

      <section className="text-center py-5">
        <h2>Team Performance</h2>
        <p>Meet our talented team of players who work hard to achieve success on the field.</p>
        <Link className="btn btn-primary" to="/players">View Performance</Link>
      </section>
      
      </main>
      <Footer />
    </>
  )
}

export default App
