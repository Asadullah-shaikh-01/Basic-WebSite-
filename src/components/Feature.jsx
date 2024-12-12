import React from 'react'
import { IoPeople } from "react-icons/io5";
import { FaDiagramProject } from "react-icons/fa6";
import { FcDebt } from "react-icons/fc";
import { GrDocumentPerformance } from "react-icons/gr";
const Feature = () => {
  return (
    <div>
        
         <div className="mx-auto max-w-7xl px-2 py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
           <IoPeople  className='size-14'/>
          </div>
          <h1 className="mt-8 text-lg font-bold text-black">368+</h1>
          <h3 className="text-lg font-semibold text-black">Number of People</h3>
          <p className="mt-4 text-sm text-gray-600">
          we are dedicated to providing supportive and compassionate care to our employees
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
          <FaDiagramProject  className='size-14'/>
          </div>
          <h1 className="mt-8 text-lg font-bold text-black">92%</h1>
          <h3 className="text-lg font-semibold text-black">Project success Rate</h3>
          <p className="mt-4 text-sm text-gray-600">
          We're proud of our track record of delivering successful projects!

          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <GrDocumentPerformance  className='size-14'/>
          </div>
          <h1 className="mt-8 text-lg font-bold text-black">84%</h1>
          <h3 className="text-lg font-semibold text-black">Claim Process Rate</h3>
          <p className="mt-4 text-sm text-gray-600">
          We're proud of our efficient claim processing capabilities
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <FcDebt   className='size-14'/>
          </div>
          <h1 className="mt-8 text-lg font-bold text-black">30 to 35 %</h1>
          <h3 className="text-lg font-semibold text-black">Reducing Bad Debt</h3>
          <p className="mt-4 text-sm text-gray-600">
          our solutions can help you minimize bad debt and maximize revenue.
          </p>
        </div>
      </div>
    </div>
   
    </div>
    
  )
}

export default Feature