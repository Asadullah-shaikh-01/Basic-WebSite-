import React from "react";
import { Link } from "react-router-dom";

const Blog_sections = () => {
  return (
    <div>
      <section className="relative overflow-hidden py-20">
        <div className="relative">
          <div className="mx-auto max-w-xl lg:max-w-7xl">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">
                OUR BLOG
              </span>
              <h1 className="text-5xl font-bold">Latest news from our blog</h1>
            </div>
            <div className="my-18 -mx-4 flex flex-wrap px-4">
              <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
                <Link
                  to="https://go.beckershospitalreview.com/finance/rcm-strategy-session-experts-discuss-emerging-tech-and-the-power-of-cdi"
                  className="group block w-full"
                >
                  <img
                    className="mb-5 block w-full rounded-lg"
                    src="/assets/Blogs-img/blogs-11.png"
                    alt="no Images found"
                  />
                  <span className="mb-5 block text-gray-500">Aug 18, 2024</span>
                  <h4 className="mb-5 text-3xl font-semibold text-gray-900 group-hover:text-blue-400">
                    Expert Insights on RCM and CDI: Navigating Denials with
                    Cutting-Edge Technology
                  </h4>
                  <p className="max-w-xl text-lg text-gray-500 ">
                    A rising tide of claim denials is threatening operations and
                    finances at hospitals and health systems nationwide.
                    Clinical documentation integrity is a vital factor in
                    reversing the trend
                  </p>
                </Link>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <Link
                  to="https://www.nber.org/digest/sep11/consequences-risk-adjustment-medicare-advantage-program"
                  className="group mb-8 md:flex"
                >
                  <img
                    className="h-40 w-48 rounded-lg"
                    src="/assets/Blogs-img/blogs-12.png"
                    alt=""
                  />
                  <div className="my-4 pt-2 md:ml-6 md:mt-0">
                    <span className="mb-2 block text-gray-500">
                      Dec 27, 2023
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-400">
                      Mastering Medicare Advantage Reimbursement: Overcoming
                      Risk-Adjusted Payment Complexity
                    </h4>
                  </div>
                </Link>
                <Link
                  to="https://currents.neurocriticalcare.org/Leading-Insights/Article/the-business-of-neurocritical-care-understanding-risk-adjustment-factor-raf-scores-and-their-impact-on-reimbursement"
                  className="group mb-8 md:flex"
                >
                  <img
                    className="h-40 w-48 rounded-lg"
                    src="/assets/Blogs-img/blogs-13.png"
                    alt=""
                  />
                  <div className="my-4 pt-2 md:ml-6 md:mt-0">
                    <span className="mb-2 block text-gray-500">
                      Jan 25, 2024
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-400">
                      3 key insights for RAF scores and reimbursements in HCC
                      V28
                    </h4>
                  </div>
                </Link>
                <Link
                  to="https://www.acc.org/latest-in-cardiology/articles/2024/07/16/14/13/proposed-2025-medicare-physician-fee-schedule-deep-dive#:~:text=Under%20the%20proposal%2C%20physicians%20will,individual%20services%20roughly%20balancing%20out."
                  className="group mb-8 md:flex"
                >
                  <img
                    className="h-40 w-48 rounded-lg"
                    src="/assets/Blogs-img/blogs-14.png"
                    alt=""
                  />
                  <div className="my-4 pt-2 md:ml-6 md:mt-0">
                    <span className="mb-2 block text-gray-500">
                      Aug 08, 2024
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-400">
                      Understanding the 2025 Medicare Physician Fee Schedule
                      Proposed Rule
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-14 text-center">
              <Link
                to="/blogs"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-emerald-400"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8" />
    </div>
  );
};

export default Blog_sections;
