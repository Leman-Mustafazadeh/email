import React from 'react'
import SectionHeader from '../../../../components/common/SectionHeader'
import advantage1 from "../../../../assets/images/advantage/advantage1.png"
import advantage2 from "../../../../assets/images/advantage/advantage2.png"
import advantage3 from "../../../../assets/images/advantage/advantage3.png"
import advantage4 from "../../../../assets/images/advantage/advantage4.png"
import advantage5 from "../../../../assets/images/advantage/advantage5.png"
import "./_style.scss"

const Advantage = () => {
  return (
    <section className='advantage'>
        <div className="container">
       <h1 className='font-size-28 font-weight-600 text-primary pb-2 text-align-center'>Top Advantages of Using an Email Signature Generator</h1>
        <p className='font-size-20 font-weight-500 text-text text-align-center'>Supercharge Your Business and Amplify Your Brand with a 100% Secure Email Signature Generator</p>
        
        <div>
          <div className='row advantage_title'>
            <div className='advantage_items'>
              <div className='row advantage_title'>
                <div>
                  <img src={advantage1} alt="" />
                </div>
                <div>
                  <img src={advantage1} alt="" />
                </div>
              </div>
              <div>
                <img src={advantage2} alt="" />
              </div>
            </div>


            <div  className='advantage_items'>
            
              <div>
                <img src={advantage3} alt="" />
              </div>

              <div className='row advantage_title'>
                <div>
                  <img src={advantage4} alt="" />
                </div>
                <div>
                  <img src={advantage5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Advantage
