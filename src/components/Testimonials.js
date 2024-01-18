import React from "react";
import Clients from "../Clients";


const Testimonials = () => {

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>What customers say about us</h2>
      </div>
      <div className="cards">
        {Clients.map((client) => (
          <div key={client.id} className="client-items">
            <div className="client-content">
              <div className="client-name">
                <h5>{client.title}</h5>
                <div className="rounded-img">
                <img src={client.image} alt="" />
                </div>
                <p>Rating: {client.rating}/5</p>
              </div>
              <div className="client-review">
              <p>{client.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials;