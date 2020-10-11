import React from "react";

import "./Offers.scss";

import globos from '../../Shared/Images/globos.png'
import torta from '../../Shared/Images/torta.png'
import sombrerito from '../../Shared/Images/sombrerito.png'

const Offers = () => {
  return (
    <div className="offer">
      <h2 className="offer__title">
        <span>Te Ofrecemos</span>
      </h2>
      <div className="offer__item">
        <div className="dashed circle">
          <img src={globos} alt="globos" />
        </div>
        <button className="button button-primary">Piñatería</button>
      </div>
      <div className="offer__item">
        <div className="dashed circle">
          <img src={torta} alt="tortas" />
        </div>
        <button className="button button-primary">Piñatería</button>
      </div>
      <div className="offer__item">
        <div className="dashed circle">
          <img src={sombrerito} alt="globos" />
        </div>
        <button className="button button-primary">Piñatería</button>
      </div>
    </div>
  );
};

export default Offers;
