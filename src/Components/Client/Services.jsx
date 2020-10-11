import React from "react";

import "./Services.scss";

import map from '../../Shared/Images/map.png'
import paquete from '../../Shared/Images/paquete.png'
import entrega from '../../Shared/Images/entrega.png'
import creditCard from '../../Shared/Images/credit-card.png'

const Services = () => {
  return (
    <div className="sevices-container">
      <div className="services">
        <div className="services__item">
          <div className="services__image">
            <img src={map} alt="servicio" />
          </div>
          <div className="services__info">
            <h2 className="services__info--title">Colombia</h2>
            <p className="services__info--text">Estamos más cerca de tí</p>
          </div>
        </div>
        <div className="separator" />
        <div className="services__item">
          <div className="services__image">
            <img src={paquete} alt="servicio"/>
          </div>
          <div className="services__info">
            <h2 className="services__info--title">Distribuidor</h2>
            <p className="services__info--text">
              Conviertete en distribuidor de nuestros productos
            </p>
          </div>
        </div>
        <div className="separator" />
        <div className="services__item">
          <div className="services__image">
            <img src={entrega} alt="servicio" />
          </div>
          <div className="services__info">
            <h2 className="services__info--title">Envíos</h2>
            <p className="services__info--text">
              Descubre nuestros mejores descuentos en envíos
            </p>
          </div>
        </div>
        <div className="separator" />
        <div className="services__item">
          <div className="services__image">
            <img src={creditCard}/>
          </div>
          <div className="services__info">
            <h2 className="services__info--title">Métodos de Pago</h2>
            <p className="services__info--text">Los mejores métodos de pagos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
