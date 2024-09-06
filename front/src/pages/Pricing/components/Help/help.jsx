import { Link } from "react-router-dom";
import help from "../../../../assets/images/Help.png";
import "./_help.scss";

function Help() {
  return (
    <section className="help">
      <div className="container row help-box px-10">
        <div className="col-12 col-md-6 help-description p-4">
          <h3>Have even more questions?</h3>
          <div className="help-center">
            <p>You can visit our <Link to="/">Help Center</Link> .</p>
            <p>You can also <Link>Contact us</Link>. We’re here to help.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 p-4 flex-container flex-justify-end">
          <img src={help} alt="more questions" />
        </div>
      </div>
    </section>
  );
}

export default Help;
