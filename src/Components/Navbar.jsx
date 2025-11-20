import './Navbar.css';

const Navbar = ({ menuOpen, setMenuOpen, cart4 }) => (
  <nav className="navbar">
    <div className="nav-logo">BAGIFY</div>
    <ul className="nav-links">
      <a href="#home"><li>Home</li></a>
      <a href="#collections"><li>Collections</li></a>
      <a href="#about"><li>About</li></a>
      <a href="#contact"><li>Contact</li></a>
    </ul>
    <div className="nav-icons">
      <img src={cart4} alt="cart" className="cart-icon" />
      <div className="menu-icon" onClick={() => setMenuOpen(true)}> 
        ☰
      </div>
    </div>
    {menuOpen && (
      <div className="mobile-menu">
        <span className="close-btn" onClick={() => setMenuOpen(false)}>×</span>
      <a href="#home"><li>Home</li></a>
      <a href="#collections"><li>Collections</li></a>
      <a href="#about"><li>About</li></a>
      <a href="#contact"><li>Contact</li></a>
      </div>
    )}
  </nav>
);


export default Navbar;