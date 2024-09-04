import icon1 from "../../../assets/images/pricing-plan-icons/icon-1.png";
import icon12 from "../../../assets/images/pricing-plan-icons/icon-12.png";
import icon3 from "../../../assets/images/pricing-plan-icons/icon-3.png";
import icon4 from "../../../assets/images/pricing-plan-icons/icon-4.png";
import icon7 from "../../../assets/images/pricing-plan-icons/icon-7.png";
import icon8 from "../../../assets/images/pricing-plan-icons/icon-8.png";
import "./_enterprice.scss"

function Enterprice() {
  return (
    <section className="enterprice">
      <div className="container row enterprice-box">
        <div className="col-12 col-md-6">
          <h3>Enterprice</h3>
          <p>
            ”A customized solution designed for organizations that need more
            members, more templates, and additional features and benefits”
          </p>
          <ul>
            <li><img src={icon3} alt="enterpice" /></li>
            <li><img src={icon4} alt="enterpice" /></li>
            <li><img src={icon1} alt="enterpice" /></li>
            <li><img src={icon12} alt="enterpice" /></li>
            <li><img src={icon7} alt="enterpice" /></li>
            <li><img src={icon8} alt="enterpice" /></li>
          </ul>
        </div>
        <div className="col-12 col-md-6"></div>
      </div>
    </section>
  );
}

export default Enterprice;
