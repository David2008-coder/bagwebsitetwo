import './Products.css'
const Products = ({ bags, cartpro, stars }) => (
<section className="products" id='collections'>
<h2>Featured Bags</h2>
<div className="product-grid">
{bags.map((bag, i) => (
<div className="product-card" key={i}>
<img src={bag} className="bag-img" />
<h3>Classic Leather Bag</h3>
<img src={stars} alt="stars" className="stars" />
<p>$120.00</p>
<button className="add-btn">Buy</button>
</div>
))}
</div>
</section>
);

export default Products;