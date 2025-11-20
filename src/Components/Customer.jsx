import React from 'react';
import './Customer.css';

const Customer = () => {
  return (
    <div className="customer-container">
      <h1 className="customer-heading">Our Customers</h1>
      <div className="customer-grid">
        <div className="customer-card">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer 1" />
          <h2>David k</h2>
          <p>"I was a bit hesitant to buy online, but the customer service team was super helpful and answered all my questions. The bag itself is great, comfortable to carry and looks amazing. My only issue is that the strap 
            could be a bit longer, but overall very happy!" - David K.</p>
        </div>
        <div className="customer-card">
          <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Customer 2" />
          <h2>Emikly W</h2>
          <p>I'm absolutely loving my new bag from Bagify! The quality is top-notch and the design is so sleek. I've gotten compliments everywhere I go. 
            The shipping was super fast too! Highly recommend." - Emily W.</p>
        </div>
        <div className="customer-card">
          <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Customer 3" />
          <h2>Michael L</h2>
          <p>"I love the style of the bag, but unfortunately, it arrived with a small defect. However, the customer service team was quick to respond and offered a 
            replacement. Appreciate the effort to make things right!" - Michael L.</p>
        </div>
        <div className="customer-card">
          <img src="https://randomuser.me/api/portraits/women/34.jpg" alt="Customer 4" />
          <h2>Rachael T</h2>
          <p>"Wow, just wow! I ordered this bag as a gift for my sister and she absolutely loves it. The packaging was so cute and the note
             I included was perfect. Will definitely be ordering again!" - Rachel T.</p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
