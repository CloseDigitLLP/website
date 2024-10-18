import React from 'react';
import portfolioDetailsCommon from '../../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';

export default function Loader() {

  return (
    <>
        <div className={portfolioDetailsCommon.loaderContainer}>
          <div className={portfolioDetailsCommon.loader}></div>
        </div>
    </>
  );
}

