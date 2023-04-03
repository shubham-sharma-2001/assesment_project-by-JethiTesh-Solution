import React from 'react';
import './Body_3.css';
import Brejesh from '../image/Brejesh.png';
import Alok from '../image/Alok.png';
import Deepak from '../image/Deepak.png';
const Body_4 = () => {
  return (
    <div>
      <div className="b1width">
        <div className="content">
          <div className="heading">Our Team Members</div>
        </div>

        <div className="card_name ">
          <div className="card_name_one">
            <div class="card cardshadow">
              <img src={Brejesh} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Background verification</h5>
                <p class="card-text">
                  A Chartered Accountant & Company Secretary, has over a decade
                  of experience in managing realty focused venture capital
                  funds, and was heading Azure Capital Advisors Private Limited.
                  He has also been...
                </p>
                <div className="buttview">
                  <div className="card_price">View More</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card_name_one">
            <div class="card cardshadow">
              <img src={Deepak} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Virtual site visit</h5>
                <p class="card-text">
                  Deepak Shukla has completed his B.Tech (hons.) from the Indian
                  Institute of Technology (IIT) Kharagpur and obtained an MBA
                  from the Indian Institute of Management (IIM) Ahmedabad,
                  India.
                </p>
                <div className="buttview">
                  <div className="card_price">View More</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card_name_one">
            <div class="card cardshadow">
              <img src={Alok} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> Title diligence</h5>
                <p class="card-text">
                  Entrepreneur with pedigree from IIT-BHU and IIML, and more
                  than 25 years of experience in management responsibilities in
                  top tier companies including Infosys, Infosys BPO and Azure
                  Capital.
                </p>

                <div className="buttview">
                  <div className="card_price">View More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body_4;
