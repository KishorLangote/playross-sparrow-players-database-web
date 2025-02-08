import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">Players Database</Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

          <div className="collapse navbar-collapse" id="navBar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/players">
                Players
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reports">
                Report
              </NavLink>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
