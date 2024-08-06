import Brands from "../../components/views/Home/Brands";
import CreateSign from "../../components/views/Home/CreateSign";
import Disclaimers from "../../components/views/Home/DIsclaimers";
import EmailSign from "../../components/views/Home/EmailSign";
import Explore from "../../components/views/Home/Explore";
import FAQs from "../../components/views/Home/FAQ";

const Home = () => {
  return (
    <div>
      <EmailSign />
      <Brands />
      <CreateSign />
      <Explore />
      <FAQs />
      <Disclaimers />
    </div>
  );
};

export default Home;
