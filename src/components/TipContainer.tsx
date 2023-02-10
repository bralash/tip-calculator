import React from "react";
import "./TipContainer.css";

const TipContainer = () => {
  return (
    <>
      <section className="container">
        <div className="bill-section">
          <h3>Bill</h3>
          <div className="input-container">
            <span>$</span>
            <input type="number" />
          </div>
          <h3>Select Tip %</h3>
        </div>
        <div className="total-section"></div>
      </section>
    </>
  );
};

export default TipContainer;
