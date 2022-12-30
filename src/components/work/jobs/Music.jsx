import "./music.scss"
import AnimatedPage from "../AnimatedPage";

export default function Music() {
  return (
    <AnimatedPage>
      <div>
        <h2 className="music-title">Assistant Manager <span>@Music Unlimited</span></h2>
        <h3>San Leandro, CA || May 2016 - December 2016</h3>
        <ul className="music-descriptions">
          <li>
            Assisted in selling and maintaining musical equipment; demonstrated
            item knowledge and understanding to meet customer needs.
          </li>
          <li>
            Oversaw vendor relationships; established optimal inventory levels
            based on demand forecasts through store and online purchases.
          </li>
          <li>
            Responsible for opening and closing store; relied upon by management
            and colleagues for smooth business operations.
          </li>
          <li>
            Promoted store and merchandise through advertising, social media and
            customer engagement, resulting in additional sales.
          </li>
          <li>
            First employee to offer instrument repair work, providing an extra
            outlet for generating revenue and customer relationship building.
          </li>
        </ul>
      </div>
    </AnimatedPage>
  );
}
