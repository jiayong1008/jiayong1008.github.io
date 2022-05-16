import React from 'react'
import zen from '../assets/zen.png'
import krypt from '../assets/krypt.png'
import joker from '../assets/joker.jpg'


const PortfolioWrapper = ({ image, title, github, youtube }) => (
  <article className="portfolio__item">
    <div className="portfolio__item-img d-flex justify-content-center align-items-center">
      <img src={image} alt={image} />
    </div>
    <h3 className='my-4'>{title}</h3>
    <div className="d-flex justify-content-center gap-3 mb-3">
      <a href={github} className='btn' target='_blank'>Github</a>
      <a href={youtube} className='btn btn-primary' target='_blank'>Live Demo</a>
    </div>
  </article>
);

const Portfolio = () => {
  return (
    <section id='portfolio' className='pt-5'>
      <h5 className="pt-5">My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <PortfolioWrapper image={zen} title='Restaurant Management System'
          github='https://github.com/jiayong1008/laravel-zen-sushi/'
          youtube='https://youtu.be/jOz4F5gLhxg/' />
        <PortfolioWrapper image={krypt} title='Blockchain App - Send Eth to Anybody'
          github='https://github.com/jiayong1008/laravel-restaruant-zen/tree/main/'
          youtube='https://youtu.be/jOz4F5gLhxg/' />
        <PortfolioWrapper image={joker} title='Customized ERC20 Token'
          github='https://github.com/jiayong1008/laravel-restaruant-zen/tree/main/'
          youtube='https://jiayong1008.github.io/web3-joker/' />
      </div>
    </section>
  )
}
// https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/
export default Portfolio