import { NavLink } from 'react-router-dom';

// const Nav = () => {
//   // TODO: Add necessary code to display the navigation bar and link between the pages
//   return (
//     <div>Nav</div>
//   )
// };

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Candidate Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/SavedCandidates" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Saved Candidates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
