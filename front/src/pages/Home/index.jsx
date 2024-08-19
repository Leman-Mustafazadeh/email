import Brands from "./components/Brands";
import CreateSign from "./components/CreateSign";
import Disclaimers from "./components/Disclaimers";
import EmailSign from "./components/EmailSign";
import Explore from "./components/Explore";
import FAQs from "./components/FAQ";
import FreeTrial from "./components/FreeTrial";


const Home = () => {
  return (
    <div>
      <EmailSign />
      <Brands />
      <CreateSign />
      <Explore />
      <FAQs />
      <FreeTrial/>
      <Disclaimers />
    </div>
  );
};

export default Home;
