import React from 'react'

const Services_Section = () => {
  return (
    <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex items-center justify-center">
        <img
          src="/assets/career/rcm_workflow.png"
          alt="Services"
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col justify-center space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Why is RCM in Healthcare So Important ?
          </h3>
          <p className="text-gray-700">
          It is a company’s brain and bloodstream. Without RCM, the revenue does not flow through the clinic and the practice is deprived of the much required cash flow for the clinic to thrive and grow. The RCM function is crucial to the survival of any healthcare organization.

Every healthcare organization is committed to providing the best possible care to its patients and keeping the best RCM services in place makes it easier to fulfil those commitments. The healthcare RCM services provided by Practolytics are customized to meet your unique clinical requirements.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Why Should Organization Use RCM Services ?
          </h3>
          <p className="text-gray-700">
          RCM has a wide range of applications that can assist healthcare organizations in enhancing their financial performance and patient care. A few instances are: <br />

Bridging gaps between service providers and insurance firms, which eventually lowers the possibility of missing information.
Giving patients the chance to have better treatment experiences by modifying and improving processes thereby making the process more productive and proactive.  <br />
For healthcare providers, the effectiveness of an RCM process can make or destroy an organization. The potential for growth and prominence of a healthcare service provider can be stymied by an inefficient revenue cycle management process. <br />

<br />
 in Below
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services_Section