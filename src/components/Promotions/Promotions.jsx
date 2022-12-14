import "./Promotions.scss";
import React from "react";

const Promotions = () => {
  return (
    <section id="promotions" className="text-center">
      <div className="promo-slider">
        <div className="promo-container">
          <div className="slide-group">
            <img src="/images/promo-01.jpg" alt="prPromoción cumpleaños" width="100%" />
            <img src="/images/promo-02.jpg" alt="Promoción Cuarto Cresciente" width="100%" />
            <img src="/images/promo-03.jpg" alt="10% de descuento" width="100%" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Promotions;
