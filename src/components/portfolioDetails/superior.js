import superiorStyle from '../../styles/portfolioDetails/superior.module.scss';
import portfolioDetailsCommon from '../../styles/portfolioDetails/portfolioDetailsCommon.module.scss';
import BannerSection from './portfolioDetailsCommon/ScrollBanner';

const Superior = () => {

  return (
    <div className={portfolioDetailsCommon.mainSection}>
      <div className="container">
        <h3 className={portfolioDetailsCommon.bannerPrimaryText}>
          Customize Your Car with the Best Parts
          <br />
          <span className={superiorStyle.mainheadingSpan}>
            Superior Engineering
          </span>
        </h3>
      </div>
      <BannerSection laptopImg_Src='/work/2024/superior/laptop.png' mobileImg_Src='/work/2024/superior/phone.png' />
      <div className='container mt-4'>
        <p className={portfolioDetailsCommon.bannerSecondaryText}>At Superior Engineering, we specialize in creating custom number plates and accessories tailored to your style. Our team combines innovative design with high-quality materials to deliver unique products that enhance your vehicle's personality. From concept to creation, we ensure your satisfaction every step of the way. Elevate your ride with our bespoke designs.</p>
      </div>
    </div>
  );
};

export default Superior;


