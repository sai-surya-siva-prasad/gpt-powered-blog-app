import React from 'react'



const Footer = () => {
  return <footer className="bg-wh-900 text-wh-50 py-10 px-10">
  <div className="justify-between mx-auto gap-16 sm:flex">
     {/* FIRST COLUMN*/}
     <div className="mt-16 basis-1/2 sm:mt-0">
        <h4 className="font-bold">BLOG OF THE FUTURE</h4>
        <p className="my-5">
            hHi this is ssurya i am writing to you saying
            there is nothing wroing asking for help
            Even the dhrarma rau bowed for help
            Its not that rama cannot go but rama
            want to take help.There is nothig wrong.
        </p>
        <p> Blog of the future all rights reserved</p>
     </div>
     {/* SECOND COLUMN*/}
     <div className="mt-16 basis-1/4 sm:mt-0">
        <h4 className="font-bold">Links</h4>
        <p className="my-5">
            this is the secind link we are talking about
        </p>
        <p className="my-5">
            this is the third link we are talking about
        </p>
        <p >
            this is the fourth link we are talking about
        </p>

     </div>
      {/* THIRD COLUMN*/}
      <div className="mt-16 basis-1/4 sm:mt-0">
        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5">
            this is the secind link we are talking about
        </p>
        <p>(740)5520627 </p>
       

     </div>
  </div>
  </footer>
}

export default Footer