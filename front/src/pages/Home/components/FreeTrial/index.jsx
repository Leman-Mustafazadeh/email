import { Link } from "react-router-dom";
import trial1 from "../../../../assets/images/trial/trial1.png";
import trial2 from "../../../../assets/images/trial/free.png";
import "./_style.scss";
const FreeTrial = () => {
  return (
    <section className="container trial_head">
      <div className="container mx-4">
        <div className="row trial flex-justify-space-between flex-align-center">
          <div className="col-12 col-md-6 col-lg-5">
            <h2 className=" text-inky font-size-26 font-weight-500 mb-3">
              Take Your Emails to the Next Level
            </h2>
            <p className=" text-text font-size-20 font-weight-400 ">
              Try our signature tool Free today. Design custom, impactful
              signatures that highlight your brand and professionalism.
            </p>
            <Link to={"/sign-up"}>
              <button className="btn-primary font-size-16 font-weight-700 text-natural mt-9">
                Start Free Trial
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-5 trial_title">
            <img src={trial1} alt="" />
          </div>
          <div className="col-12 col-md-6 col-lg-5 free">
            <img src={trial2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
