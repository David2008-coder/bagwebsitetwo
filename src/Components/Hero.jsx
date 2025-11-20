import './Hero.css'
const Hero = ({ bag2, search3 }) => (
<section className="hero" id="home">
<div className="hero-text">
<h1>Luxury Bags for Every Style</h1>
<p>Find your perfect match from our exclusive bag collections.</p>


<div className="hero-search">
<input type="text" placeholder="Search handbag styles..." />
<img src={search3} alt="search" />
</div>


<button className="hero-btn">Shop Now</button>
</div>


<div className="hero-img">
<img src={bag2} alt="bag" />
</div>
</section>
);

export default Hero;