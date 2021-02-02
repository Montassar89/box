import React from 'react';

import Carousel from 're-carousel';

import IndicatorDots from './IndicatorDots';

const BannerTopMobile = () => (
  <div className="bannerHMobile banner-h-mobile w-full  relative mt-24 z-0 block md:hidden">
    <Carousel loop auto widgets={[IndicatorDots]}>
      <div className="itemStyle flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="text-center font-bold text-base w-5/6 mx-auto textStyle">
            Self-Storage and Door-to-Door Storage in Hong Kong
          </div>
          <div className="cny-img">
            <img
              src="https://www.boxful.com/images/cny2021/locker_m_en.png?111"
              className="w-11/12 max-w-xs mx-auto mt-1"
            />
          </div>
          <div className="cny-btn mt-1">
            <a href="/CNYpromotion-self-storage-lockers" target="_blank">
              <img
                src="https://www.boxful.com/images/cny2021/btn_en.png"
                width="220"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center mb-8">
          <a className="buttonOneStyle  flex bg-center bg-no-repeat font-bold text-base rounded-xl h-12">
            SELF-STORAGE
          </a>
        </div>
      </div>
      <div className="itemStyleTow flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="textStyle text-center font-bold text-base w-5/6 mx-auto">
            Self-Storage and Door-to-Door Storage in Hong Kong
          </div>
          <div className="cny-img">
            <img
              src="https://www.boxful.com/images/cny2021/locker_m_en.png?111"
              className="w-11/12 max-w-xs mx-auto mt-1"
            />
          </div>
          <div className="cny-btn mt-1">
            <a href="/CNYpromotion-self-storage-lockers" target="_blank">
              <img
                src="https://www.boxful.com/images/cny2021/btn_en.png"
                width="220"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center mb-8">
          <a className="buttonTowStyle  flex bg-center bg-no-repeat font-bold text-base rounded-xl h-12">
            DOOR-TO-DOOR
          </a>
        </div>
      </div>
    </Carousel>
  </div>
);

export default BannerTopMobile;
