import React from "react";
import "./_style.scss"
const WorldWide = () => {
  return (
    <section className="world">
      <div className="container">
       <h1 className='world_hero font-size-28 font-weight-600 text-primary pb-7 text-align-center '>See why professionals worldwide trust us for creating powerful email signatures!</h1>

        <div className="row world_head">
          <div className="bg-primary world_title">
            <div>
              <h1  className='font-size-32 font-weight-700 text-natural '>Get started free</h1>
              <button></button>
            </div>
            <p className="font-size-17 font-weight-400 text-natural">
              See why professionals worldwide trust us for creating powerful
              email signatures!
            </p>
          </div>

          <div className="world_item text-align-center">
            <h2 className='font-size-36 font-weight-800  pb-2 '>15 million +</h2>
            <p>Users</p>
          </div>

          <div className="world_item text-align-center ">
            <h2 className='font-size-36 font-weight-800  pb-2 '>10 million +</h2>
            <p>integrated email signature</p>
          </div>

          <div className="world_item text-align-center">
            <h2 className='font-size-36 font-weight-80 pb-2 '>160 +</h2>
            <p>Country</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldWide;
