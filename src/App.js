import React from "react";
import LearnButton from "./learnButton.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>ChillFest</h1>
      <p>The music festival of a lifetime awaits you!</p>
      <p>
        Choose below from the various levels the option that best suits your
        vibe.
      </p>
      <h2>Packaging & Pricing</h2>
      <section className="options">
        <div className="chill_box">
          <ul>
            <h3>Sunflower</h3>
            <li>$780.99 (plus tax)</li>
            <li>Access to ground</li>
            <li>3-day pass</li>
            <LearnButton />
          </ul>
        </div>
        <div className="chill_box">
          <ul>
            <h3>Boombox</h3>
            <li>$1120.97 (plus tax)</li>
            <li>Free merch</li>
            <li>Parking voucher</li>
            <li>4-day pass</li>
            <LearnButton />
          </ul>
        </div>
        <div className="chill_box">
          <ul>
            <h3>Peacekeeper</h3>
            <li>$2248.96 (plus tax)</li>
            <li>VIP back stage tour</li>
            <li>5-day pass</li>
            <li>Premium lounge access</li>
            <LearnButton />
          </ul>
        </div>
        <div className="chill_box">
          <ul>
            <h3>Legend</h3>
            <li>$3991.98 (plus tax)</li>
            <li>6-day pass</li>
            <li>Executive Suite access</li>
            <LearnButton />
          </ul>
        </div>
      </section>
    </div>
  );
}
