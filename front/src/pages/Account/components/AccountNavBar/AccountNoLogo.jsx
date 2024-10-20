import { Link } from "react-router-dom"
import "./_account-nav-bar.scss"

function AccountNoLogo() {
  return (
    <div className="acoount-nav-bar ">
        <div className="delete row flex-align-center flex-justify-space-between">
          <div className="row flex-align-center delete_head">
           

            <div className="container">
              <Link className="row delete_dashboard">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5319 19.7409C11.8563 19.421 11.8868 18.9155 11.6208 18.5609L11.5409 18.4681L6.05 12.9L20.1 12.9C20.5971 12.9 21 12.4971 21 12C21 11.5412 20.6567 11.1625 20.2129 11.107L20.1 11.1L6.05 11.1L11.5409 5.53187C11.8608 5.20741 11.884 4.70155 11.6131 4.3507L11.5319 4.25911C11.2074 3.93922 10.7015 3.91596 10.3507 4.18694L10.2591 4.26813L3.2591 11.3681C2.94242 11.6893 2.91603 12.1891 3.17993 12.5401L3.25911 12.6319L10.2591 19.7319C10.6081 20.0858 11.1779 20.0899 11.5319 19.7409Z"
                    fill="#2688EB"
                  />
                </svg>

                <p className="font-size-18 font-weight-700 text-primary ">
                  Dashboard
                </p>
              </Link>
            </div>
          </div>

          <div>
            <Link to={""} className="row delete_help ">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.6"
                  y="0.6"
                  width="21.8383"
                  height="22.84"
                  rx="10.9192"
                  stroke="#1A73E8"
                  strokeWidth="1.2"
                />
                <path
                  d="M10.1994 14.0464C10.1994 13.5587 10.3104 13.129 10.5323 12.757C10.7542 12.385 11.1282 11.9709 11.6542 11.5145C11.972 11.2394 12.2076 11.0237 12.361 10.8675C12.5144 10.7112 12.6405 10.5361 12.7391 10.3423C12.8377 10.1485 12.887 9.92972 12.887 9.68591C12.887 9.41084 12.8199 9.17173 12.6857 8.96855C12.5514 8.76537 12.3706 8.60909 12.1432 8.49968C11.9158 8.39028 11.6706 8.33558 11.4076 8.33558C10.772 8.33558 10.2652 8.6169 9.88711 9.17954C9.73368 9.36083 9.59396 9.49055 9.46794 9.5687C9.34192 9.64684 9.1885 9.68591 9.00768 9.68591C8.70632 9.68591 8.47345 9.58276 8.30907 9.37646C8.14469 9.17016 8.0625 8.91698 8.0625 8.6169C8.0625 8.32933 8.12825 8.04489 8.25975 7.76357C8.39126 7.48225 8.57207 7.22593 8.8022 6.99463C9.11453 6.68205 9.51314 6.4398 9.99806 6.26789C10.483 6.09597 11.0378 6.01001 11.6624 6.01001C12.424 6.01001 13.0993 6.14911 13.6884 6.4273C14.2774 6.70549 14.7349 7.10715 15.0609 7.63228C15.387 8.15742 15.55 8.78256 15.55 9.50775C15.55 10.0141 15.4705 10.4549 15.3116 10.8299C15.1527 11.205 14.9459 11.5286 14.6911 11.8005C14.4363 12.0724 14.1089 12.3678 13.7089 12.6867C13.3473 12.9867 13.0788 13.243 12.9035 13.4556C12.7281 13.6681 12.5802 13.9307 12.4596 14.2433C12.3391 14.4808 12.2364 14.6653 12.1514 14.7965C12.0665 14.9278 11.9542 15.0341 11.8144 15.1154C11.6747 15.1966 11.498 15.2373 11.2843 15.2373C10.9336 15.2373 10.6652 15.1263 10.4789 14.9044C10.2926 14.6825 10.1994 14.3964 10.1994 14.0464ZM9.82957 17.7504C9.82957 17.4566 9.89395 17.1971 10.0227 16.9721C10.1515 16.747 10.3254 16.5735 10.5446 16.4516C10.7638 16.3297 11.0049 16.2688 11.2679 16.2688C11.5309 16.2688 11.772 16.3297 11.9912 16.4516C12.2103 16.5735 12.3829 16.747 12.5089 16.9721C12.635 17.1971 12.698 17.4566 12.698 17.7504C12.698 18.0442 12.635 18.3037 12.5089 18.5287C12.3829 18.7538 12.2103 18.9272 11.9912 19.0492C11.772 19.1711 11.5309 19.232 11.2679 19.232C11.0049 19.232 10.7638 19.1711 10.5446 19.0492C10.3254 18.9272 10.1515 18.7538 10.0227 18.5287C9.89395 18.3037 9.82957 18.0442 9.82957 17.7504Z"
                  fill="#1A73E8"
                />
              </svg>

              <p className="font-size-18 font-weight-700 text-primary ">
                Help Center
              </p>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default AccountNoLogo