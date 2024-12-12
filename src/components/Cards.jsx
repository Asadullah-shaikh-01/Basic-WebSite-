import React from "react";
import { FaPlane } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaClinicMedical } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaLaptopMedical } from "react-icons/fa";
import { GrCalculator } from "react-icons/gr";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
const ICONS = [
  {
    icon: <RiCustomerServiceFill className="text-4xl text-emerald-200" />,
    title: "Patient Access Services",
    description:
      "which set the foundation for the entire patient experience and revenue process These services ensure that patient information is accurately captured, and insurance details are verified, which helps in reducing denials and enhancing the overall efficiency of the revenue cycle.",
  },
  {
    icon: <FaClinicMedical className="text-4xl text-emerald-200" />,
    title: "HIM and Clinical Services",
    description:
      "HIM is responsible for the management, protection, and user health information in both electronic and paper formats. HIM professionals ensure that healthcare data is accurate, accessible, and secure, supporting both clinical care and compliance with legal and regulatory requirements.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-4xl text-emerald-200" />,
    title: "Patient Financial Services",
    description:
      " (PFS) plays a vital role in the healthcare revenue cycle by managing the financial aspects of patient care. This department is responsible for ensuring that healthcare providers receive payment for services rendered and that patients understand and manage their financial responsibilities",
  },
  {
    icon: <FaLaptopMedical className="text-4xl text-emerald-200" />,
    title: " Professional Medical Coders ",
    description:
      "  Professional medical coders are specialized professionals responsible for translating healthcare services, procedures, and diagnoses into standardized codes. These codes are used for billing, insurance claims, and maintaining accurate patient records.",
  },
  {
    icon: <GrCalculator className="text-4xl text-emerald-200" />,
    title: " RCA Development Services ",
    description:
      "  RCA (Root Cause Analysis) Development Services refer to a set of services aimed at identifying, analyzing, and addressing the underlying causes of problems or incidents within a healthcare or other business setting. In the context of healthcare, RCA is often used to improve patient safety, enhance service delivery, and prevent the recurrence of adverse events.",
  },
  {
    icon: <FaLaptopMedical className="text-4xl text-emerald-200" />,
    title: " Computer-Assisted Coding ",
    description:
      " CAC uses natural language processing (NLP), machine learning, and other artificial intelligence (AI) techniques to analyze clinical documentation and automatically generate the appropriate medical codes, such as ICD-10, CPT, and HCPCS. These codes are essential for billing, reimbursement, and data analysis",
  },
  {
    icon: <TbDeviceDesktopAnalytics className="text-4xl text-emerald-200" />,
    title: " Revenue Cycle Automation Analytics ",
    description:
      "  Analytics is the application of advanced analytics and automation technologies to streamline and optimize the healthcare revenue cycle. This process involves leveraging data analytics, robotic process automation (RPA), artificial intelligence (AI), and machine learning (ML) to enhance the efficiency, accuracy, and effectiveness of revenue cycle management (RCM).",
  },
  {
    icon: <TbReportAnalytics className="text-4xl text-emerald-200" />,
    title: " Analytics & Reporting ",
    description:
      "  (RCM) are critical tools that help healthcare organizations monitor, evaluate, and optimize their financial performance. By systematically analyzing data from various stages of the revenue cycle, healthcare providers can gain insights into their operations, identify trends, spot potential issues, and make data-driven decisions to improve overall efficiency and profitability",
  },
];

const Cards = () => {
  return (
    <div className="py-2 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          {ICONS.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110"
            >
              <div className="flex justify-center mb-4 ">{card.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-center">
                {card.title}
              </h4>
              <p className="text-base text-gray-700 mb-4 text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
