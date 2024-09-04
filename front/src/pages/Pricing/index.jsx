import PageHeader from "../../components/common/PageHeader";
import "./_style.scss";
import Enterprice from "./components/enterprice";
import Payment from "./components/payment";
import PricingCard from "./components/pricingCard";
function Pricing() {
  return (
    <main className="pricing-page">
      <div className="container pricing-page-header">
        <PageHeader header='"Exclusive Features for Your Email Signatures”' />
        <p>
          Choose the ideal plan for you or your business and join the thriving
          community of Email <br /> Signature Generator users.
        </p>
      </div>
      <PricingCard />
      <Payment />
      <Enterprice />
    </main>
  );
}

export default Pricing;
