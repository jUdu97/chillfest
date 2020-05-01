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
        <div id="sun">
          <Sunflower />
        </div>
        <div id="#boom">
          <Boombox />
        </div>
        <div id="#peace">
          <Peacekeeper />
        </div>
        <div id="#leg">
          <Legend />
        </div>
      </section>
    </div>
  );
}

function Sunflower() {
  return (
    <div>
      <h3 className="title_op">Sunflower Package Option</h3>
      <p className="op_text">Beginner level pricing. For those just easing into the chilling. Starting level option for newcomers.</p>
    </div>
  );
}
function Boombox() {
  return (
    <div>
      <h3 className="title_op">Boombox Package Option</h3>
      <p className="op_text">Mid-tier 1 level pricing. Get more for your buck as a medium-grade chiller. More access to amenities on the festival property.</p>
    </div>
  );
}
function Peacekeeper() {
  return (
    <div>
      <h3 className="title_op">Peacekepper Package Option</h3>
      <p className="op_text">Mid-tier 2 level pricing. Better access. Better amenities. Better (higher) prices. Prepare for a pro-level medium chilling experience.</p>
    </div>
  );
}
function Legend() {
  return (
    <div>
      <h3 className="title_op">Legend Package Option</h3>
      <p className="op_text">High level pricing. Only for extremely practiced masters of zen. This package offers the full, ChillFest experience. Truly, an all access extravaganza awaits.</p>
    </div>
  );
}
