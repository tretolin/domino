import "./Promotions.scss";
import React from "react";
// import { Subtitle } from "../../utils/utils";

const Promotions = () => {
  return (
    <section id="promotions" className="text-center">
      {/* <Subtitle title="promociones"/> */}
      <div className="promo-slider">
        <div className="promo-container">
          {/* <div>A</div>
          <div>B</div>
          <div>C</div> */}
          <div className="slide-group">
            <img src="/images/promo-01.jpg" alt="promo" width="100%" />
            <img src="/images/promo-02.jpg" alt="promo" width="100%" />
            <img src="/images/promo-03.jpg" alt="promo" width="100%" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Promotions;
