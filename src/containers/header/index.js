import React from 'react';
import './style.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return(
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Get a free kind of Think</h1>
        <p>Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email' />
          <button type="button">Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
         <img src={people} alt="people"/>
          <p>un cerro e wones</p>
        </div>
       </div>
       <div className='gpt3__header-image'>
        <img src={ai} alt="ai"/>
       </div>
    </div>
  )
}
export default Header
