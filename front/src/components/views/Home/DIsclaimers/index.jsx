import "./_style.scss"

const Disclaimers = () => {
  return (
    <div className="disclaimer">
      <div className="container">
        <p>*Disclaimers</p>
        <ul>
          <li>
            <span>
              1.As a new user, you are entitled to a 7-day free trial period
              after registration.
            </span>
          </li>
          <li>
            <span>
              2.Even after the trial period expires, your account will remain
              accessible. However, please note that your data will become
              temporarily unavailable until you switch to a new plan.
            </span>
          </li>
          <li>
            <span>
              3.Following the conclusion of the trial, Dynamic QR codes
              generated during the trial will be temporarily deactivated.
              Meanwhile, Static QR codes will continue to function.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Disclaimers;
