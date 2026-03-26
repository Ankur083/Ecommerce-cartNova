import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}  alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At our eCommerce platform, we aim to make online shopping simple, reliable, and enjoyable for everyone. We bring together a wide range of quality products across multiple categories, ensuring that customers can find everything they need in one place. Our focus is on offering the best value through competitive pricing, trusted brands, and a smooth user experience that makes browsing and purchasing effortless.</p>
          <p>We are committed to building long-term relationships with our customers by prioritizing trust, transparency, and satisfaction. From secure payments to fast delivery and responsive customer support, every aspect of our service is designed with the customer in mind. As we continue to grow, our goal is to innovate and improve, providing a shopping experience that is convenient, dependable, and tailored to modern needs.</p>
          <b className='text-gray-800'> Our Mission</b>
          <p className=''>Our mission is to provide a seamless and trustworthy online shopping experience by offering high-quality products at competitive prices. We strive to make shopping convenient, secure, and accessible for everyone, while continuously improving our platform to meet the evolving needs of our customers.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinence:</b>
          <p className='text-gray-600'> with our user-friendly interface and hassle-free ordering process, shopping has never been easier. </p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is your top priority. </p>

        </div>

      </div>
      <NewsletterBox />
      
    </div>
  )
}

export default About
