import React from "react";
import "./amazon.scss";
import AnimatedPage from "../AnimatedPage";

export default function Amazon() {
  return (
    <AnimatedPage>
      <div>
        <h2 className="amazon-title">
          Amazon Shopper <span>@Amazon</span>
        </h2>
        <h3>Oakland, CA || May 2019 - March 2022</h3>
        <ul className="amazon-descriptions">
          <li>
            Prepared and organized customer orders in a fast-paced environment;
            responsible for ensuring timely order fulfilments.
          </li>
          <li>
            Coordinated and assisted team members, focusing on efficient item
            retrieval and load management for each member.
          </li>
          <li>
            Attentive to details and adapted to circumstances to guarantee items
            were safely packed and well-organized to provide secure orders.
          </li>
          <li>
            Emphasized positive communication with customers to confirm orders
            and provide alternatives when items cannot be fulfilled.
          </li>
          <li>
            Assisted in training new team members; responsible for giving clear
            and concise directions and communicating expectations of the team
            and company to create a healthy work environment.
          </li>
        </ul>
      </div>
    </AnimatedPage>
  );
}
