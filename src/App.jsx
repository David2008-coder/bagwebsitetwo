
// import React, { useState } from 'react';

// IMPORT COMPONENTS
import React, { useState } from 'react';

// IMPORT COMPONENTS
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Products from './Components/Products.jsx';
import Footer from './Components/Footer.jsx';
import Customer from './Components/Customer.jsx';


// IMPORT IMAGES
import bagass1 from './assets/bagass1.png';
import search3 from './assets/search3.png';
import cart4 from './assets/cart4.png';
import cartpro from './assets/cartpro.png';
import stars from './assets/stars.png';

import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import instagram from './assets/instagram.png';
import youtube from './assets/youtube.png';

import map from './assets/map.png';
import envelope from './assets/envelope.png';
import phone from './assets/phone.png';

// Bags
import bag1 from './assets/bag1.jpg';
import bag2 from './assets/bag2.jpg';
import bag3 from './assets/bag3.jpg';
import bag4 from './assets/bag4.jpg';
import bag5 from './assets/bag5.jpg';
import bag6 from './assets/bag6.jpg';
import bag7 from './assets/bag7.jpg';
import bag8 from './assets/bag8.jpg';
// import bag9 from './assets/bag9.jpg';
// import bag10 from './assets/bag10.jpg';
// import bag11 from './assets/bag11.jpg';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const bags = [
    bag1, bag2, bag3, bag4, bag5, bag6,
    bag7, bag8, 
  ];

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} cart4={cart4} />
      <Hero bag2={bag2} search3={search3} />
      <Products bags={bags} cartpro={cartpro} stars={stars} />
      <Customer/>
      <Footer
        facebook={facebook}
        instagram={instagram}
        twitter={twitter}
        youtube={youtube}
        map={map}
        envelope={envelope}
        phone={phone}
      />
    </div>
  );
}
