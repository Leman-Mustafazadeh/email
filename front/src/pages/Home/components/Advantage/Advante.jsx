import advantage1 from "../../../../assets/images/advantage/advantage1.png";
import advantage2 from "../../../../assets/images/advantage/advantage2.png";
import advantage3 from "../../../../assets/images/advantage/advantage3.png";
import advantage4 from "../../../../assets/images/advantage/advantage4.png";
import advantage5 from "../../../../assets/images/advantage/advantage5.png";
import "./_style.scss";

const Advantage = () => {
  return (
    <section className="advantage">
      <div className="container">
        <h1 className="font-size-28 font-weight-600 text-primary pb-2 text-align-center">
          Top Advantages of Using an Email Signature Generator
        </h1>
        <p className="font-size-20 font-weight-500 text-text text-align-center">
          Supercharge Your Business and Amplify Your Brand with a 100% Secure
          Email Signature Generator
        </p>

        <div className="row advantage_content">
          <div className="col-lg-6 col-md-12 mb-4">

            <div className="row advantage_head">
              <div className="col-6">
                <img src={advantage1} alt="Advantage 1" className="img-fluid" />
              </div>
              <div className="col-6">
                <img src={advantage1} alt="Advantage 1" className="img-fluid" />
              </div>
            </div>

            <div className="mt-4">
              <img src={advantage2} alt="Advantage 2" className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4">
            <div className="mb-4">
              <img src={advantage3} alt="Advantage 3" className="img-fluid" />
            </div>
            <div className="row advantage_head">
              <div className="col-6">
                <img src={advantage4} alt="Advantage 4" className="img-fluid" />
              </div>
              <div className="col-6">
                <img src={advantage5} alt="Advantage 5" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
