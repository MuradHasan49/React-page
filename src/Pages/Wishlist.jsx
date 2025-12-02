import React from 'react'
import SecondBTN from '../components/button/SecondBTN'
const Wishlist = () => {
  return (
    <>
      <div className="container mx-auto p-5">
        <div className=" flex justify-between items-center">
            <div className="">
            <span>Wishlist <span>(2)</span> </span>
            </div>
            <SecondBTN
            BTNtext={"Move All To Bag"}
            />
        </div>
      </div>
    </>
  )
}

export default Wishlist
