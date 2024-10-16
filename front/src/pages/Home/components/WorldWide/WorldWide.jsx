import React from "react";
import "./_style.scss";
import { Link } from "react-router-dom";

const WorldWide = () => {
  return (
    <section className="world">
      <div className="container">
        <h1 className="world_hero font-size-28 font-weight-600 text-primary pb-7 text-align-center">
          See why professionals worldwide trust us for creating powerful email
          signatures!
        </h1>

        <div className="row world_head">
          <div className="bg-primary world_title">
            <div className="row gap-5">
              <h1 className="font-size-32 font-weight-700 text-natural">Get started free</h1>
              <Link to={'/sign-up'}>
                <button>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.52501 0.708947C3.36993 0.707426 3.2161 0.736783 3.07248 0.795305C2.92885 0.853827 2.79832 0.940345 2.68846 1.04982C2.57861 1.15929 2.49165 1.28953 2.43263 1.43295C2.37361 1.57637 2.34373 1.7301 2.34472 1.88518C2.3457 2.04027 2.37754 2.1936 2.43838 2.33626C2.49922 2.47891 2.58783 2.60804 2.69907 2.7161C2.81031 2.82417 2.94193 2.90902 3.08629 2.96571C3.23064 3.0224 3.38484 3.04979 3.53988 3.0463L15.6606 2.97439L1.05211 17.5828C0.832906 17.802 0.70976 18.0993 0.70976 18.4093C0.70976 18.7193 0.832907 19.0166 1.05211 19.2358C1.27131 19.455 1.56861 19.5782 1.87861 19.5782C2.18861 19.5782 2.48591 19.455 2.70512 19.2358L17.3119 4.62905L17.2392 16.7456C17.2422 17.0523 17.3656 17.3455 17.5829 17.5621C17.8002 17.7786 18.0938 17.901 18.4005 17.903C18.7073 17.9049 19.0024 17.7862 19.2224 17.5725C19.4424 17.3588 19.5696 17.0671 19.5765 16.7605L19.6658 2.09004C19.6669 1.89674 19.6297 1.70515 19.5562 1.52635C19.4828 1.34755 19.3746 1.18511 19.2379 1.04842C19.1012 0.911742 18.9388 0.80354 18.76 0.730088C18.5812 0.656634 18.3896 0.61939 18.1963 0.620513L3.52501 0.708947Z"
                      fill="#1A73E8"
                    />
                    <path
                      d="M3.52501 0.708947C3.36993 0.707426 3.2161 0.736783 3.07248 0.795305C2.92885 0.853827 2.79832 0.940345 2.68846 1.04982C2.57861 1.15929 2.49165 1.28953 2.43263 1.43295C2.37361 1.57637 2.34373 1.7301 2.34472 1.88518C2.3457 2.04027 2.37754 2.1936 2.43838 2.33626C2.49922 2.47891 2.58783 2.60804 2.69907 2.7161C2.81031 2.82417 2.94193 2.90902 3.08629 2.96571C3.23064 3.0224 3.38484 3.04979 3.53988 3.0463L15.6606 2.97439L1.05211 17.5828C0.832906 17.802 0.70976 18.0993 0.70976 18.4093C0.70976 18.7193 0.832907 19.0166 1.05211 19.2358C1.27131 19.455 1.56861 19.5782 1.87861 19.5782C2.18861 19.5782 2.48591 19.455 2.70512 19.2358L17.3119 4.62905L17.2392 16.7456C17.2422 17.0523 17.3656 17.3455 17.5829 17.5621C17.8002 17.7786 18.0938 17.901 18.4005 17.903C18.7073 17.9049 19.0024 17.7862 19.2224 17.5725C19.4424 17.3588 19.5696 17.0671 19.5765 16.7605L19.6658 2.09004C19.6669 1.89674 19.6297 1.70515 19.5562 1.52635C19.4828 1.34755 19.3746 1.18511 19.2379 1.04842C19.1012 0.911742 18.9388 0.80354 18.76 0.730088C18.5812 0.656634 18.3896 0.61939 18.1963 0.620513L3.52501 0.708947Z"
                      fill="white"
                      fillOpacity="0.3"
                    />
                  </svg>
                </button>
              </Link>
            </div>
            <p className="font-size-17 font-weight-400 text-natural">
              See why professionals worldwide trust us for creating powerful
              email signatures!
            </p>
          </div>

          <div className="world_item text-align-center">
            <h2 className="font-size-36 font-weight-800 pb-2">15 million +</h2>
            <p>Users</p>
          </div>

          <div className="world_item text-align-center">
            <h2 className="font-size-36 font-weight-800 pb-2">10 million +</h2>
            <p>Integrated email signatures</p>
          </div>

          <div className="world_item text-align-center">
            <h2 className="font-size-36 font-weight-800 pb-2">160 +</h2>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldWide;
