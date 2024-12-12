import React from "react";
import { UserCheck , ReceiptText,Receipt,FileChartColumnIncreasing   ,CalendarCheck , SquareChartGantt , MailCheck , CheckCircle, BookX , ArrowRight } from 'lucide-react'; // Import icons

import { Link } from "react-router-dom";

const Feature1 = () => {
  return (
    <div>
      <div className="px-2 py-2 md:px-6 md:py-10">
        <h1 className="text-2xl font-bold capitalize text-black lg:text-3xl text-center">
          Revenue Cycle Management (RCM) Steps
        </h1>
        <p className="my-2 text-gray-600 text-center">
          The key steps in Revenue Cycle Management (RCM) are crucial for
          ensuring smooth financial operations in healthcare organizations
        </p>
        <hr />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16 items-center text-center">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="space-y-3">
                <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
              {/* Change icons as needed */}
              {i === 0 && <UserCheck  size={20} />}
              {i === 1 && <CalendarCheck  size={20} />}
              {i === 2 && <SquareChartGantt  size={20} />}
              {i === 3 && <MailCheck  size={20} />}
              {i === 4 && <CheckCircle size={20} />}
              {i === 5 && <BookX  size={20} />}
              {i === 6 && <ReceiptText  size={20} />}
              {i === 7 && <Receipt  size={20} />}
              {i === 8 && <FileChartColumnIncreasing  size={20} />}
            </span>
              <h2 className="text-xl font-semibold capitalize text-black">
                {/* Update titles */}
                {i === 0 && "Patient Registration"}
                {i === 1 && "Scheduling"}
                {i === 2 && "Charge Capture"}
                {i === 3 && "Claims Submission"}
                {i === 4 && "Payment Posting"}
                {i === 5 && "Denial Management"}
                {i === 6 && "Patient Billing"}
                {i === 7 && "Collections"}
                {i === 8 && "Reporting and Analytics"}
              </h2>
              <p className="text-sm text-gray-500">
                {/* Update descriptions */}
                {i === 0 &&
                  "- Patient demographics and insurance information are collected - Verification of patient identity and insurance coverage."}
                {i === 1 &&
                  " Appointments are scheduled and patient information is updated."}
                {i === 2 &&
                  "- Services rendered are documented and coded - Charges are captured and entered into the system"}
                {i === 3 &&
                  "- Claims are prepared and submitted to payers - Electronic claims submission (EDI) or paper claims."}
                {i === 4 &&
                  "- Payments are received and posted to patient accounts - Adjustments and write-offs are made as necessary"}
                {i === 5 &&
                  "- Denied claims are identified and reviewed - Appeals and re-submissions are processed as necessary"}
                {i === 6 &&
                  "- Statements are sent to patients for balances due - Patient payments are received and posted"}
                {i === 7 &&
                  "- Unpaid balances are pursued through collection efforts - Accounts may be sent to external collection agencies"}
                {i === 8 &&
                  "- Key performance indicators (KPIs) are tracked and analyzed - Insights are used to optimize RCM processes and improve financial performance"}
              </p>
              <Link
                to={"/Ldddd"}
                className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
              >
                <span className="mx-1">read more</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-8" />
    </div>
  );
};

export default Feature1;
