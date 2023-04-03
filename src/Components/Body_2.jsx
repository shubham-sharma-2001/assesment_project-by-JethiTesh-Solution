import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import house from '../image/house.png';
import './Body_2.css';
const Body_2 = () => {
  return (
    <div className="b1width">
      <div className="item">
        <div className="left">
          <img src={house} alt="house" />
        </div>
        <div className="right">
          <h2>Who We Are</h2>
          <p>
            The Indian real estate sector is resilient despite global headwinds.
            Returns are impressive and the sector is expected to reach US$ 1
            trillion in market size by 2030 (Niti Aayog report, 2021). However,
            the whole real estate purchase journey is very tedious and takes
            more than 2 years on average. Further, as the ticket size of this
            investment is large, security and trust become quite critical.
            Problems compound when you are currently away from your purchase
            destination. If you are experiencing difficulties in the real estate
            purchase journey, we are here to make it fast and transparent.
          </p>

          <button type="button" class="btn btn-outline-secondary" >
            Contact Now <span>&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body_2;
