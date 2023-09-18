import React from 'react'
import s from "./index.module.css"

export const About = () => {
  return (
	 <div className='container'>
        <h1 className={s.category}>About Interior shop</h1>
        <img className={s.about_main_bg} src="/src/assets/about--bg-1.jpg" alt="" />
        <div className={s.about_main}>
            <h1 className={s.category}>GET THE DETAILS OF CK ARCHITECTURE INTERIORS</h1>
            <h3>We specialize in the creation of opulent living and working spaces. Through in-house capabilities in space planning, individualized project management and construction, we provide end-to-end bespoke solutions for discerning private owners and high-end residential and commercial developments.
            At CK Architecture Interiors, we pride ourselves on being the go-to choice for luxury architecture and interior fit out companies in Dubai. Our expert team has years of experience in the field and is equipped with the knowledge and skills necessary to help you.
            From Concept Design to Final Project Delivery, we take care of everything – from start to finish. Our team is dedicated to providing the highest quality work possible, and we take pride in our reputation for delivering on time and under budget.</h3>
        </div>
        <div className={s.about_info}>
        <div className={s.about_info_one}>
            <div className={s.about_info_title}>
                <h1>Your brand experienced</h1>
                <h3>Connect your brand to millions of customers. Control the experience from discovery to your dedicated storefront, and from your product pages to their inboxes—Amazon customers following a brand spend more than double that of non-followers. Communicate your core values, build loyal relationships, and ignite your brand experience.</h3>
            </div>
            <img className={s.about_info_img_one} src="/src/assets/about-bg2.png" alt="" />
        </div>
        <div className={s.about_info_one}>
            <div className={s.about_info_title}>
                <h1>Your success supported</h1>
                <h3>Protect your brand and IP with powerful tools to defend against counterfeits and fraud, plus get critical performance metrics to monitor customer sentiment and ensure a top-tier, always-on brand experience. Get started with 1:1 onboarding support for insights to help you take your business to the next level.</h3>
            </div>
            <img className={s.about_info_img_two} src="/src/assets/about-bg.svg" alt="" />
        </div>
        </div>
   <div className={s.about_info_two}>
    <div className={s.about_info_two_title}>
        <h2>Register your brand</h2><br />
        <p>Unlock a suite of tools designed to help you manage your brand and create a better customer experience, including automated protection and powerful search tools to find and report violations.</p>
    </div>
    <div className={s.about_info_two_title}>
        <h2>Get a helping hand</h2><br />
        <p>All new sellers in the U.S. now qualify for 12 free months of 1:1 onboarding support from our account managers. Or, add a designated account manager to help you scale your business with Strategic Account Services (SAS) Core.</p>
    </div>
    <div className={s.about_info_two_title}>
        <h2>Scale with apps and services</h2><br />
        <p>Service Partner Network now offers more than 6,200 Amazon-vetted service providers and apps which are used by more than 1 million sellers worldwide to help sellers build, manage, automate, and scale their business.</p>
    </div>
   </div>

   <div className="container">
      <h1 className={s.category}>Shop popular brands</h1>
      <div className={s.brands}>
        <img src="/src/assets/brand-img1.jpg" alt="" />
        <img src="/src/assets/brand-img2.jpg" alt="" />
        <img src="/src/assets/brand-img3.jpg" alt="" />
        <img src="/src/assets/brand-img4.jpg" alt="" />
        <img src="/src/assets/brand-img5.jpg" alt="" />
        <img src="/src/assets/brand-img6.jpg" alt="" />
      </div>
    </div>
   </div>
  )
}
