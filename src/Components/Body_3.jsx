import React from 'react';
import './Body_3.css';
import back from '../image/back.png';
import virtual from '../image/virtual.png';
import tile from '../image/tile.png';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
const Body_3 = () => {
  return (
    <div className="b1width">
      <div className="content">
        <div className="heading">Our Offerings</div>
        <div className="para">
          This whole purchase journey can be divided into three stages. For more
          details, <b> Click Here</b>
        </div>
      </div>
      <div className="cardss">
        
        <button> <LooksOneIcon /> Pre-Booking</button>
        <button className="two">
          <LooksTwoIcon /> Post Booking & <br />
          Pre-Booking
        </button>
        <button> <Looks3Icon />Post-Registration</button>
      </div>

      <div className="card_name">
        <div className="card_name_one">
          <div class="card">
            <img src={back} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"> Background verification</h5>
              <p class="card-text">
                Assuring your capital is in safe hands, we provide detailed
                verification reports of the project and developer. These are
                customized and detailed...
              </p>
              <div className="buttandprice">
                <div className="butt">
                  <button type="button" class="btn btn-outline-secondary butti">
                    Contact Us <span>&#8594;</span>
                  </button>
                </div>

                <div className="card_price">INR 3000/Project</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card_name_one">
          <div class="card">
            <img src={virtual} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"> Virtual site visit</h5>
              <p class="card-text">
                It becomes imperative to observe your apartment or plot very
                closely before paying the booking amount. We are here to assist
                with an AI-enabled UAV...
              </p>
              <div className="butt">
                <button type="button" class="btn btn-outline-secondary butti">
                  Contact Us <span>&#8594;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card_name_one">
          <div class="card">
            <img src={tile} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"> Title diligence</h5>
              <p class="card-text">
                Due diligence is necessary to prevent real estate malpractices
                which have contributed to more than 20% of the civil cases in
                India. We have a panel of...
              </p>

              <div className="butt">
                <button type="button" class="btn btn-outline-secondary butti">
                  Contact Us <span>&#8594;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body_3;
