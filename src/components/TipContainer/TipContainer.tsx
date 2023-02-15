import React from "react";
import InputButton from "../InputButton/InputButton";
import TipButton from "../TipButton/TipButton";
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
          <div className="tip-buttons">
            <TipButton value={5} />
            <TipButton value={10} />
            <TipButton value={15} />
            <TipButton value={25} />
            <TipButton value={50} />
            <InputButton />
          </div>
        </div>
        <div className="total-section"></div>
      </section>
    </>
  );
};

export default TipContainer;
