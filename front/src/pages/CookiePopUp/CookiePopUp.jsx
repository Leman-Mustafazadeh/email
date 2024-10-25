import { useEffect, useState } from "react";
import "./_style.scss";
const CookiePopUp = () => {
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  const handleClosePopup = () => {
    localStorage.setItem("cookie", "true");
    setShowCookiePopup(false);
  };

  useEffect(() => {
    const cookieLoc = localStorage.getItem("cookie");
    if (!cookieLoc) {
      setShowCookiePopup(true);
    }
  }, []);

  if (!showCookiePopup) return null;

  return (
    <section className="cookie-popup">
      <div className="container cookie-content">
        <button className="close-popup" onClick={handleClosePopup}>
          &times;
        </button>
        <h1 className="font-size-22 font-weight-500 text-text ">
          Your Email signature is just a click away!
        </h1>

        <div className="row pt-3 cookies">
          <p className="font-size-16 font-weight-400 text-text ">
            Ensuring you have the best experience is our top priority. By
            selecting ‘Accept All Cookies,’ you allow us to use stored cookies
            to enhance your site navigation, analyze how you use our site, and
            support our marketing efforts. For more details on your privacy,
            <a href=""> click here.</a>
          </p>
          <div className="cookie_wrap">
            <button
              className="btn-cookie font-size-16 font-weight-700 text-primary border-primary bg-natural"
              onClick={handleClosePopup}
            >
              Decline
            </button>
            <button
              className="btn-cookie font-size-16 font-weight-700 text-natural bg-primary"
              onClick={handleClosePopup}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePopUp;
