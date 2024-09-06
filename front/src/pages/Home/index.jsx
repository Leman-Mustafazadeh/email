import Brands from "./components/Brands";
import CreateSign from "./components/CreateSign";
import Disclaimers from "./components/Disclaimers";
import EmailSign from "./components/EmailSign";
import Explore from "./components/Explore";
import FAQs from "./components/FAQ";
import FreeTrial from "./components/FreeTrial";
import "./_style.scss";

const Home = () => {
  return (
    <div className="home-page">
      <EmailSign />
      <Brands />
      <CreateSign />
      <Explore />
      <FAQs />
      <div className="mt-2">
        <FreeTrial />
      </div>
      <div className="mt-10">
        <Disclaimers />
      </div>
    </div>
  );
};

export default Home;
