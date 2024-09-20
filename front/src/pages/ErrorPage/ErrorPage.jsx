import React from 'react'
import error from "../../assets/images/errorpage/error.png"
const ErrorPage = () => {
  return (
    <section>
        <div className="container">
            <h1 className='font-size-60 font-weight-900 text-inky'>Oops!</h1>
            <p className='font-size-21 font-weight-500 text-inky'>You are lost</p>
            <div>
                <img src={error} alt="" />
            </div>
        </div>
    </section>
  )
}

export default ErrorPage
