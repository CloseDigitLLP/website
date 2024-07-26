import React from 'react'
import vaidStyle from "../../styles/portfolioDetails/vaid.module.scss"
import Image from 'next/image'
import Link from 'next/link';

export default function Vaid() {
  return (
    <>
      <section className={vaidStyle['banner-section']}>
        <div className="container">
          <div className={vaidStyle['content']}>
            <div>
              <h3>Crafting Timeless Spaces:
                Unveiling the <span>Interior Design</span></h3>
            </div>
            <div className={vaidStyle['banner-img']}>
              <div>
                <Image
                  src={require('../../assets/images/work/2024/vaid/vaid-banner.png')}
                  alt="Animated"
                  className={vaidStyle['brand-img']}
                />
              </div>
              <div className={vaidStyle['phone-img']}>
                <Image
                  src={require('../../assets/images/work/2024/vaid/phone.png')}
                  alt="Animated"
                />
              </div>
            </div>

            <div>
              <p>VAID is a specialized messaging app designed to facilitate seamless communication between clients and interior architects. Whether you're planning a renovation, decorating a new space, or need regular updates on your project, VAID keeps you informed and connected. It includes a feature for daily evidence updates, allowing architects to share progress photos with clients, and provides access to view plans and designs directly through the app.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
