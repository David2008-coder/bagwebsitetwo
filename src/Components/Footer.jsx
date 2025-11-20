import './Footer.css'
const Footer = ({ facebook, instagram, twitter, youtube, map, envelope, phone }) => (
<footer className="footer" id='contact'>
<div>
<h3>BAGIFY</h3>
<p>Premium handcrafted bags delivered worldwide.</p>
</div>


<div className="footer-social">
<img src={facebook} />
<img src={instagram} />
<img src={twitter} />
<img src={youtube} />
</div>


<div className="footer-contact">
<p><img src={map} /> Lagos, Nigeria</p>
<p><img src={envelope} /> obasukedavid21.com</p>
<p><img src={phone} /> +234 814 265 7490</p>
</div>
</footer>
);

export default Footer;