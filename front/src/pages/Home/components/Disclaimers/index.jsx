import "./_style.scss"

const Disclaimers = () => {
  return (
    <div className="disclaimer">
      <div className="container">
        <p>*Disclaimers</p>
        <ul >
          <li className="pb-1">
            <span>
              1.As a new user of our email signature generator, you are eligible for a 7-day free trial period upon registration.
            </span>
          </li>
          <li className="pb-1">
            <span>
              2.Once the trial period ends, your account will still be accessible. However, be aware that your email signatures will be temporarily inaccessible until you upgrade to a new plan.
            </span>
          </li>
          <li className="pb-1">
            <span>
              3.After the trial ends, premium features utilized during the trial will be temporarily disabled. Basic features will remain functional.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Disclaimers;
