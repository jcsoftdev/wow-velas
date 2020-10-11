import React from "react";


import './Footer.scss'

import logo from '../../Shared/Images/logo.png'
import bg3 from '../../Shared/Images/bg3.png'


const Footer = () => {
  return (
    <div className="footer">
      <img src={bg3} alt="img" />
      <div className="footer-content">
        <div className="footer__info">
          <div className="footer__info-image">
            <img src={logo} alt="logo" />
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Entero en
            feugiat lorem. Pellentque ac placerat tellus.
          </p>
        </div>
        <div className="footer__contact">
          <h3 className="footer__title text-white">Contáctenos</h3>
          <ul className="footer-list text-white">
            <li>
              <div className="footer__icon">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="/F7F7F7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22V12H15V22"
                    stroke="/F7F7F7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>715 Fake Street, Colombia</p>
            </li>
            <li>
              <div className="footer__icon">
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4.08789H20C21.1 4.08789 22 5.00181 22 6.11883V18.3044C22 19.4214 21.1 20.3354 20 20.3354H4C2.9 20.3354 2 19.4214 2 18.3044V6.11883C2 5.00181 2.9 4.08789 4 4.08789Z"
                    stroke="/F7F7F7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6.11914L12 13.2274L2 6.11914"
                    stroke="/F7F7F7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>wowvela@gmail.com</p>
            </li>
            <li>
              <div className="footer__icon">
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.0014 17.7964V20.8428C22.0025 21.1256 21.9455 21.4056 21.8339 21.6647C21.7223 21.9238 21.5587 22.1564 21.3535 22.3476C21.1483 22.5388 20.906 22.6844 20.6421 22.775C20.3783 22.8656 20.0988 22.8992 19.8214 22.8738C16.7442 22.5342 13.7884 21.4665 11.1914 19.7563C8.77523 18.1972 6.72673 16.117 5.1914 13.6635C3.50138 11.0143 2.44964 7.99814 2.1214 4.85933C2.09641 4.57852 2.12927 4.2955 2.2179 4.02829C2.30652 3.76109 2.44897 3.51555 2.63616 3.30731C2.82336 3.09907 3.0512 2.93269 3.30519 2.81877C3.55917 2.70484 3.83374 2.64587 4.1114 2.64561H7.1114C7.5967 2.64076 8.06719 2.81527 8.43516 3.13662C8.80313 3.45797 9.04348 3.90423 9.1114 4.39221C9.23802 5.36713 9.47285 6.32438 9.8114 7.24568C9.94594 7.60915 9.97506 8.00415 9.8953 8.3839C9.81555 8.76366 9.63026 9.11223 9.3614 9.38833L8.0914 10.678C9.51495 13.2202 11.5879 15.3252 14.0914 16.7708L15.3614 15.4811C15.6333 15.2081 15.9766 15.02 16.3505 14.939C16.7245 14.858 17.1135 14.8876 17.4714 15.0242C18.3787 15.368 19.3213 15.6064 20.2814 15.735C20.7672 15.8046 21.2108 16.0531 21.5279 16.4331C21.8451 16.8132 22.0136 17.2984 22.0014 17.7964Z"
                    stroke="/F7F7F7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>000-0000752</p>
            </li>
            <li>
              <div className="footer__icon">
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.5427C17.5228 22.5427 22 17.9963 22 12.388C22 6.77979 17.5228 2.2334 12 2.2334C6.47715 2.2334 2 6.77979 2 12.388C2 17.9963 6.47715 22.5427 12 22.5427Z"
                    stroke="/F7F7F7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6.29492V12.3877L16 14.4186"
                    stroke="/F7F7F7"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>Lunes a sábado de 8:00 am a 7:00 pm</p>
            </li>
          </ul>
        </div>
        <div className="footer__about">
          <h3 className="footer__title text-white">Wow Vela</h3>
          <ul className="footer-list">
            <li>
              <a href="/" className="text-green">
                Quienes Somos
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                Política
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                Donde nos encontramos
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                Quiénes Somos
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__novelties">
          <h3 className="footer__title text-white">Boletín informativo</h3>
          <div className="footer-list">
            <p className="text-white">
              Entérese de las últimas novedades de Wow Vela
            </p>
            <div className="form-control">
              <input type="text" placeholder="ingrese su correo" />
            </div>
          </div>
        </div>
        <div className="footer__rights text-white">
          <div className="one" />
          <p>© 2020 Todos los Derechos Reservados</p>
          <div className="footer__rights-right">
            <p>
              Desarrollado por <a href="/">IDW</a>
            </p>
            <div className="footer__icon-up">
              <svg
                width={25}
                height={23}
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6719 12.1719C24.6719 12.7031 24.4792 13.1719 24.0938 13.5781L22.9219 14.75C22.526 15.1458 22.0521 15.3438 21.5 15.3438C20.9375 15.3438 20.4688 15.1458 20.0938 14.75L15.5 10.1719V21.1719C15.5 21.7135 15.3047 22.1536 14.9141 22.4922C14.5234 22.8307 14.0521 23 13.5 23H11.5C10.9479 23 10.4766 22.8307 10.0859 22.4922C9.69531 22.1536 9.5 21.7135 9.5 21.1719V10.1719L4.90625 14.75C4.53125 15.1458 4.0625 15.3438 3.5 15.3438C2.9375 15.3438 2.46875 15.1458 2.09375 14.75L0.921875 13.5781C0.526042 13.1823 0.328125 12.7135 0.328125 12.1719C0.328125 11.6198 0.526042 11.1458 0.921875 10.75L11.0938 0.578125C11.4583 0.192708 11.9271 0 12.5 0C13.0625 0 13.5365 0.192708 13.9219 0.578125L24.0938 10.75C24.4792 11.1562 24.6719 11.6302 24.6719 12.1719Z"
                  fill="/F2F2F2"
                />
              </svg>
            </div>
          </div>
          <div className="two" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
