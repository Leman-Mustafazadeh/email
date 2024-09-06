import visa from "../../../../assets/images/payment/visa.png";
import master from "../../../../assets/images/payment/master.png";
import american from "../../../../assets/images/payment/american.png";
import jcb from "../../../../assets/images/payment/jcb.png";
import discover from "../../../../assets/images/payment/discover.png";
import diners from "../../../../assets/images/payment/diners.png";
import link from "../../../../assets/images/payment/link.png";
import "./_payment.scss"
import SectionHeader from "../../../../components/common/SectionHeader";

function Payment() {
  return (
    <section className="payment">
      <SectionHeader header="For your security, all orders are processed via Stripe" />
      <div className="container row payment-items">
        <img src={visa} alt="visa" />
        <img src={master} alt="master" />
        <img src={american} alt="american" />
        <img src={jcb} alt="jcb" />
        <img src={discover} alt="discover" />
        <img src={diners} alt="diners" />
        <img src={link} alt="link" />
      </div>
    </section>
  );
}

export default Payment;
