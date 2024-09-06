import PageHeader from "../../components/common/PageHeader";
import "./_style.scss";
import Brands from "../../pages/Home/components/Brands" 
import FAQ from "../../pages/Home/components/FAQ" 
import Customers from "../../pages/SignaturePages/components/Customers/Customers"
import PricingCard from "./components/Pricing/pricingCard";
import Payment from "./components/Payment/payment";
import Enterprice from "./components/Enterprice/enterprice";
import Help from "./components/Help/help";
function Pricing() {
  return (
    <main className="pricing-page mt-10">
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
      <Brands/>
      <Customers/>
      <FAQ/>
      <Help/>
      <div className="space"></div>
    </main>
  );
}

export default Pricing;
