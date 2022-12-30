import "./bbq.scss"
import AnimatedPage from "../AnimatedPage";

export default function BBQ() {
  return (
    <AnimatedPage>
      <div>
        <h2 className="bbq-title">Cashier, Cook, and Floor Attendent <span>@Rudy's BBQ</span></h2>
        <h3>Colorado Springs, CO || June 2013 - April 2016</h3>
        <ul className="bbq-descriptions">
          <li>
            Worked in a fast-paced environment to provide a quality and fun
            experience for customers; engaged with people positively.
          </li>
          <li>
            Maintained floors and tables to allow customers to have a pleasant
            dining experience, which allowed quick and efficient servicing.
          </li>
          <li>
            Trained new employees by demonstrating proficient customer
            interactions, cooking resourcefully, and professionalism.
          </li>
        </ul>
      </div>
    </AnimatedPage>
  );
}
