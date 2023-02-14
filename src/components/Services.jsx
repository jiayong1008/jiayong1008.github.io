import React from 'react'
import { BsCheck } from 'react-icons/bs'

const swDevServices = [
  'Website / Mobile Application',
  'Customized Application with API Integration.',
  'Any System (PM me).',
];

const digitalMarketing = [
  'Facebook Advertising',
  'Social Media Advertising',
  'Search Engine Optimization (SEO)',
];

const interests = [
  'Tech + Business',
  'Welcome any interesting projects.',
];

const ServiceWrapper = ({ title, services }) => (
  <article className="service">
    <div className="service__head mb-3">
      <h3>{title}</h3>
    </div>

    <ul className="service__list p-2">
      {services.map((service) => (
        <li key={service} className='d-flex gap-3 mb-3'>
          <BsCheck className='service__list-icon mt-1' />
          <p>{service}</p>
        </li>
      ))}
    </ul>
  </article>
);

// Main Services Section
const Services = () => {
  return (
    <section id='services' className='pt-5'>
      <h5 className='pt-5'>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <ServiceWrapper title='Software Development' services={swDevServices} />
        <ServiceWrapper title='Digital Marketing' services={digitalMarketing} />
        <ServiceWrapper title='Interests' services={interests} />
      </div>
    </section>
  )
}

export default Services