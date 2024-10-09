import Brands from "./components/Brands";
import CreateSign from "./components/CreateSign";
import Disclaimers from "./components/Disclaimers";
import EmailSign from "./components/EmailSign";
import Explore from "./components/Explore";
import FAQs from "./components/FAQ";
import FreeTrial from "./components/FreeTrial";
import "./_style.scss";
import Rates from "./components/Rates/Rates";
import Advantage from "./components/Advantage/Advante";
import WorldWide from "./components/WorldWide/WorldWide";

const Home = () => {
  return (
    <div className="home-page">
      <Brands />
      <EmailSign />
      <Rates/>
      <CreateSign />
      <Explore />
      <Advantage/>
      <WorldWide/>
      <FAQs />
      {/* <div className="mt-2">
        <FreeTrial />
      </div>
      <div className="mt-10">
        <Disclaimers />
      </div> */}
    </div>
  );
};

export default Home;
