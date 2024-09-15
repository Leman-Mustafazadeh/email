import "./_style.scss";
const CookiePopUp = () => {
  return (
    <section className="pt-5">
      <div className="container">
        <div>
          <h1 className="font-size-22 font-weight-500 text-text ">
            Your Email signature is just a click away!
          </h1>

          <div className="row pt-3 cookie">
            <p className="font-size-16 font-weight-400 text-text ">
              Ensuring you have the best experience is our top priority. By
              selecting ‘Accept All Cookies,’ you allow us to use stored cookies
              to enhance your site navigation, analyze how you use our site, and
              support our marketing efforts. For more details on your privacy,
              click here.
            </p>
           <div className=" cookie_wrap">
           <button className=" btn-cookie font-size-16 font-weight-700 text-primary border-primary p-3 bg-natural ">
              Decline
            </button>
            <button className=" btn-cookie font-size-16 font-weight-700 text-natural  bg-primary p-3">
              Accept
            </button>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePopUp;
