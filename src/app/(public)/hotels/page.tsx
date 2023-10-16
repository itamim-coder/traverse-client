import RootLayout from "@/app/layout";
import { Col, Row } from "antd";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const HotelsPage = () => {
  return (
    <RootLayout>
      {
        <div className="min-h-screen">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={6} lg={6} className="gutter-row" span={6}>
              <div className="bg-gray-700 min-h-screen">col-6</div>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={18}
              lg={18}
              className="gutter-row"
              span={18}
            >
              <div className=" min-h-screen">
                <section className="text-gray-600 body-font overflow-hidden">
                  <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                      <div className="border py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                          <Image
                            width={300}
                            height={400}
                            alt="NextUI hero Image"
                            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                          />
                        </div>
                        <div className="md:flex-grow">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                            Bitters hashtag waistcoat fashion axe chia unicorn
                          </h2>
                          <p className="leading-relaxed">
                            Glossier echo park pug, church-key sartorial
                            biodiesel vexillologist pop-up snackwave ramps
                            cornhole. Marfa 3 wolf moon party messenger bag
                            selfies, poke vaporware kombucha lumbersexual pork
                            belly polaroid hoodie portland craft beer.
                          </p>
                          <a className="text-indigo-500 inline-flex items-center mt-4">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Col>
          </Row>
        </div>
      }
    </RootLayout>
  );
};

export default dynamic(() => Promise.resolve(HotelsPage), { ssr: false });
