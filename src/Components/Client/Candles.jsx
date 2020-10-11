import React from "react";

import "./Candles.scss";

import vela1 from '../../Shared/Images/vela1.jpeg'
import vela2 from '../../Shared/Images/vela2.jpeg'
import vela3 from '../../Shared/Images/vela3.jpeg'

const Candles = () => {
  return (
    <div className="velas">
      <h2 className="velas__title text-primary">
        <span>Lo último en Velas</span>
      </h2>
      <div className="velas__icon--left">
        <svg
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.9997 58.6666C46.7273 58.6666 58.6663 46.7275 58.6663 31.9999C58.6663 17.2723 46.7273 5.33325 31.9997 5.33325C17.2721 5.33325 5.33301 17.2723 5.33301 31.9999C5.33301 46.7275 17.2721 58.6666 31.9997 58.6666Z"
            stroke="#00B5E2"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.9997 21.3333L21.333 31.9999L31.9997 42.6666"
            stroke="#00B5E2"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42.6663 32H21.333"
            stroke="#00B5E2"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="velas__item-content">
        <div className="velas__item">
          <div className="velas__item-image">
            <img src={vela1}alt="vela" />
          </div>
          <div className="velas__item-info">
            <p>Vela Vengala</p>
            <div className="velas__item-icon--left">
              <svg
                width={48}
                height={48}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                  stroke="#93328E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 32L32 24L24 16"
                  stroke="#93328E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 24H32"
                  stroke="#93328E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="velas__item">
          <div className="velas__item-image">
            <img src={vela2} alt="vela" />
          </div>
          <div className="velas__item-info">
            <p>Vela Vengala</p>
            <div className="velas__item-icon--left">
              <svg
                width={48}
                height={48}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                  stroke="#93328E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 32L32 24L24 16"
                  stroke="#93328E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 24H32"
                  stroke="#93328E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="velas__item">
          <div className="velas__item-image">
            <img src={vela3} alt="vela" />
          </div>
          <div className="velas__item-info">
            <p>Vela Vengala</p>
            <div className="velas__item-icon--left">
              <svg
                width={48}
                height={48}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                  stroke="#93328E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 32L32 24L24 16"
                  stroke="#93328E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 24H32"
                  stroke="#93328E"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="velas__icon--right">
        <svg
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.9948 58.6771C46.7224 58.6771 58.6615 46.738 58.6615 32.0104C58.6615 17.2828 46.7224 5.34375 31.9948 5.34375C17.2672 5.34375 5.32812 17.2828 5.32812 32.0104C5.32812 46.738 17.2672 58.6771 31.9948 58.6771Z"
            stroke="#00B5E2"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 42.6771L42.6667 32.0104L32 21.3438"
            stroke="#00B5E2"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.3281 32H42.6614"
            stroke="#00B5E2"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Candles;
