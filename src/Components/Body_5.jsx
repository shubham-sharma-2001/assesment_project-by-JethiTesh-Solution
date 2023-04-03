import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../image/img1.png';
import img2 from '../image/img2.png';
import img3 from '../image/img3.png';
import './Body_5.css';
const Body_5 = () => {
  return (
    <div className="b1widt">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide class_name"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="card_name">
          <div className="card_name_one">
            <div class="card">
              <img src={img1} class="card-img-top topgap" alt="..." />
              <div className="real">
                <p>Real Estate, Analysis</p>
              </div>
              <div className="caladmin">
                <div className="one">

                <span> &#128466;</span>
                9 June,2022
                </div>

                <p>By admin</p>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  {' '}
                  Guide for personal property <br /> Buying{' '}
                </h5>
                <p class="card-text">
                  "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod temp incididuut labore dolore magna aliqua do
                  eiusmod...
                </p>
                <div className="buttandprice">
                  <div className="butt">
                    <button
                      type="button"
                      class="btn btn-outline-secondary butti"
                    >
                      View More <span>&#8594;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card_name_one">
            <div class="card">
              <img src={img2} class="card-img-top topgap" alt="..." />
              <div className="real">
                <p>Real Estate, Analysis</p>
              </div>
              <div className="caladmin">
                <div className="one">

                <span> &#128466;</span>
                9 June,2022
                </div>

                <p>By admin</p>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  {' '}
                  Guide for personal property <br /> Buying{' '}
                </h5>
                <p class="card-text">
                  "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod temp incididuut labore dolore magna aliqua do
                  eiusmod...
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
              <img src={img3} class="card-img-top  topgap" alt="..." />
              <div className="real">
                <p>Real Estate, Analysis</p>
              </div>
              <div className="caladmin">
                <div className="one">

                <span> &#128466;</span>
                9 June,2022
                </div>

                <p>By admin</p>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  {' '}
                  Guide for personal property <br /> Buying{' '}
                </h5>
                <p class="card-text">
                  "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                  do eiusmod temp incididuut labore dolore magna aliqua do
                  eiusmod...
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
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span> */}
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          {/* <span
            class="carousel-control-next-icon iconleft"
            aria-hidden="true"
          ></span> */}
          {/* <span class="visually-hidden">Next</span> */}
        </button>
      </div>
    </div>
  );
};

export default Body_5;
