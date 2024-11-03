const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div>
          <p className="flex gap-2">
            <span className="navbar-firstname">Afolabi</span>
            <span className="navbar-lastname">Olaide</span>
          </p>
        </div>
        <div>
          <ul className="navbar-links-container">
            <li className="navbar-links">Projects</li>
            <li className="navbar-links">About</li>
            <li className="navbar-links">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
