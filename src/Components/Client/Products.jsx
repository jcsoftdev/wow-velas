import React from "react";

import './Products.scss'

import silbatos from '../../Shared/Images/silbatos.png'
import velas from '../../Shared/Images/velas.png'
import vela_num from '../../Shared/Images/vela_num.png'
import vela_vengala from '../../Shared/Images/vela_vengala.png'

const Products = () => {
  return (
    <div className="product">
      <h2 className="product__title">
        <span>Nuestras Tendencias</span>
      </h2>
      <div className="product__icon--left">
        <svg
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.9997 58.6667C46.7273 58.6667 58.6663 46.7276 58.6663 32C58.6663 17.2724 46.7273 5.33333 31.9997 5.33333C17.2721 5.33333 5.33301 17.2724 5.33301 32C5.33301 46.7276 17.2721 58.6667 31.9997 58.6667Z"
            stroke="#93328E"
            strokeOpacity="0.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.9997 21.3333L21.333 32L31.9997 42.6667"
            stroke="#93328E"
            strokeOpacity="0.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42.6663 32H21.333"
            stroke="#93328E"
            strokeOpacity="0.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="product__slides">
        <div className="product__item">
          <div className="product__image">
            <img src={silbatos} alt="product" />
          </div>
          <div className="product__description">
            <div className="product__colors">
              <div className="color color-01" />
              <div className="color color-02" />
              <div className="color color-03" />
              <div className="color color-04" />
            </div>
            <h3 className="product__subtitle">Silbatos</h3>
            <div className="product__price">
              <div className="product__price--offer">
                <p>$29.90</p>
              </div>
              <div className="product__price--normal">
                <p>$36.99</p>
              </div>
            </div>
            <div className="product__options">
              <div className="button-small button-outline-white product__options-btn">
                <span>Añadir</span>
                <div className="product__icon">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 16.5C15.4142 16.5 15.75 16.1642 15.75 15.75C15.75 15.3358 15.4142 15 15 15C14.5858 15 14.25 15.3358 14.25 15.75C14.25 16.1642 14.5858 16.5 15 16.5Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width={18} height={18} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="product__icon">
                <svg
                  width={23}
                  height={21}
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2913 2.67091C19.7806 2.14118 19.1741 1.72097 18.5067 1.43427C17.8392 1.14757 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14757 14.2959 1.43427C13.6285 1.72097 13.0221 2.14118 12.5113 2.67091L11.4513 3.76977L10.3913 2.67091C9.35961 1.6014 7.96033 1.00055 6.5013 1.00055C5.04226 1.00055 3.64299 1.6014 2.61129 2.67091C1.5796 3.74042 1 5.19099 1 6.7035C1 8.21602 1.5796 9.66659 2.61129 10.7361L3.67129 11.835L11.4513 19.9001L19.2313 11.835L20.2913 10.7361C20.8023 10.2066 21.2077 9.57796 21.4842 8.88604C21.7608 8.19411 21.9031 7.45248 21.9031 6.7035C21.9031 5.95453 21.7608 5.2129 21.4842 4.52097C21.2077 3.82905 20.8023 3.20039 20.2913 2.67091V2.67091Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="product__icon">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="product__item">
          <div className="product__image">
            <img src={velas} alt="product" />
          </div>
          <div className="product__description">
            <div className="product__colors">
              <div className="color color-01" />
              <div className="color color-02" />
              <div className="color color-03" />
              <div className="color color-04" />
            </div>
            <h3 className="product__subtitle">Silbatos</h3>
            <div className="product__price">
              <div className="product__price--offer">
                <p>$29.90</p>
              </div>
              <div className="product__price--normal">
                <p>$36.99</p>
              </div>
            </div>
            <div className="product__options">
              <div className="button-small button-outline-white product__options-btn">
                <span>Añadir</span>
                <div className="product__icon">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 16.5C15.4142 16.5 15.75 16.1642 15.75 15.75C15.75 15.3358 15.4142 15 15 15C14.5858 15 14.25 15.3358 14.25 15.75C14.25 16.1642 14.5858 16.5 15 16.5Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width={18} height={18} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="product__icon">
                <svg
                  width={23}
                  height={21}
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2913 2.67091C19.7806 2.14118 19.1741 1.72097 18.5067 1.43427C17.8392 1.14757 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14757 14.2959 1.43427C13.6285 1.72097 13.0221 2.14118 12.5113 2.67091L11.4513 3.76977L10.3913 2.67091C9.35961 1.6014 7.96033 1.00055 6.5013 1.00055C5.04226 1.00055 3.64299 1.6014 2.61129 2.67091C1.5796 3.74042 1 5.19099 1 6.7035C1 8.21602 1.5796 9.66659 2.61129 10.7361L3.67129 11.835L11.4513 19.9001L19.2313 11.835L20.2913 10.7361C20.8023 10.2066 21.2077 9.57796 21.4842 8.88604C21.7608 8.19411 21.9031 7.45248 21.9031 6.7035C21.9031 5.95453 21.7608 5.2129 21.4842 4.52097C21.2077 3.82905 20.8023 3.20039 20.2913 2.67091V2.67091Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="product__icon">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="product__item">
          <div className="product__image">
            <img src={vela_num} alt="product" />
          </div>
          <div className="product__description">
            <div className="product__colors">
              <div className="color color-01" />
              <div className="color color-02" />
              <div className="color color-03" />
              <div className="color color-04" />
            </div>
            <h3 className="product__subtitle">Silbatos</h3>
            <div className="product__price">
              <div className="product__price--offer">
                <p>$29.90</p>
              </div>
              <div className="product__price--normal">
                <p>$36.99</p>
              </div>
            </div>
            <div className="product__options">
              <div className="button-small button-outline-white product__options-btn">
                <span>Añadir</span>
                <div className="product__icon">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 16.5C15.4142 16.5 15.75 16.1642 15.75 15.75C15.75 15.3358 15.4142 15 15 15C14.5858 15 14.25 15.3358 14.25 15.75C14.25 16.1642 14.5858 16.5 15 16.5Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width={18} height={18} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="product__icon">
                <svg
                  width={23}
                  height={21}
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2913 2.67091C19.7806 2.14118 19.1741 1.72097 18.5067 1.43427C17.8392 1.14757 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14757 14.2959 1.43427C13.6285 1.72097 13.0221 2.14118 12.5113 2.67091L11.4513 3.76977L10.3913 2.67091C9.35961 1.6014 7.96033 1.00055 6.5013 1.00055C5.04226 1.00055 3.64299 1.6014 2.61129 2.67091C1.5796 3.74042 1 5.19099 1 6.7035C1 8.21602 1.5796 9.66659 2.61129 10.7361L3.67129 11.835L11.4513 19.9001L19.2313 11.835L20.2913 10.7361C20.8023 10.2066 21.2077 9.57796 21.4842 8.88604C21.7608 8.19411 21.9031 7.45248 21.9031 6.7035C21.9031 5.95453 21.7608 5.2129 21.4842 4.52097C21.2077 3.82905 20.8023 3.20039 20.2913 2.67091V2.67091Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="product__icon">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="product__item">
          <div className="product__image">
            <img src={vela_vengala} alt="product" />
          </div>
          <div className="product__description">
            <div className="product__colors">
              <div className="color color-01" />
              <div className="color color-02" />
              <div className="color color-03" />
              <div className="color color-04" />
            </div>
            <h3 className="product__subtitle">Silbatos</h3>
            <div className="product__price">
              <div className="product__price--offer">
                <p>$29.90</p>
              </div>
              <div className="product__price--normal">
                <p>$36.99</p>
              </div>
            </div>
            <div className="product__options">
              <div className="button-small button-outline-white product__options-btn">
                <span>Añadir</span>
                <div className="product__icon">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M6.75 16.5C7.16421 16.5 7.5 16.1642 7.5 15.75C7.5 15.3358 7.16421 15 6.75 15C6.33579 15 6 15.3358 6 15.75C6 16.1642 6.33579 16.5 6.75 16.5Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 16.5C15.4142 16.5 15.75 16.1642 15.75 15.75C15.75 15.3358 15.4142 15 15 15C14.5858 15 14.25 15.3358 14.25 15.75C14.25 16.1642 14.5858 16.5 15 16.5Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width={18} height={18} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="product__icon">
                <svg
                  width={23}
                  height={21}
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2913 2.67091C19.7806 2.14118 19.1741 1.72097 18.5067 1.43427C17.8392 1.14757 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14757 14.2959 1.43427C13.6285 1.72097 13.0221 2.14118 12.5113 2.67091L11.4513 3.76977L10.3913 2.67091C9.35961 1.6014 7.96033 1.00055 6.5013 1.00055C5.04226 1.00055 3.64299 1.6014 2.61129 2.67091C1.5796 3.74042 1 5.19099 1 6.7035C1 8.21602 1.5796 9.66659 2.61129 10.7361L3.67129 11.835L11.4513 19.9001L19.2313 11.835L20.2913 10.7361C20.8023 10.2066 21.2077 9.57796 21.4842 8.88604C21.7608 8.19411 21.9031 7.45248 21.9031 6.7035C21.9031 5.95453 21.7608 5.2129 21.4842 4.52097C21.2077 3.82905 20.8023 3.20039 20.2913 2.67091V2.67091Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="product__icon">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product__icon--right">
        <svg
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.9948 58.677C46.7224 58.677 58.6615 46.7379 58.6615 32.0103C58.6615 17.2827 46.7224 5.34366 31.9948 5.34366C17.2672 5.34366 5.32812 17.2827 5.32812 32.0103C5.32812 46.7379 17.2672 58.677 31.9948 58.677Z"
            stroke="#93328E"
            strokeOpacity="0.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 42.677L42.6667 32.0103L32 21.3437"
            stroke="#93328E"
            strokeOpacity="0.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.3281 32H42.6614"
            stroke="#93328E"
            strokeOpacity="0.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Products;
