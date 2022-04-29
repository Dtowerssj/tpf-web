import React from 'react'
import './header.css'
import people from '../../../../assets/people.png'
import ai from '../../../../assets/ai.png'
import trading from '../../../../assets/trading.png'
/*
import trading1 from '../../../../assets/trading1.png'
import trading2 from '../../../../assets/trading2.png'
import trading3 from '../../../../assets/trading3.png'
import trading31 from '../../../../assets/trading31.png'
import trading32 from '../../../../assets/trading32.png'
import trading4 from '../../../../assets/trading4.png'
import trading5 from '../../../../assets/trading5.png'
import trading6 from '../../../../assets/trading6.png'
import trading7 from '../../../../assets/trading7.png'
*/

function Header() {
  return (
    <div className='header section__padding' id='inicio'>
      <div className='header-content'>
        <h1 className='gradient__text'>Únete a la mejor academia de trading de latinoamérica</h1> 
        <p>Aprende a operar como un trader de clase mundial en distintos mercados financieros. 
          Recibe señales ganadoras para incremetar tus ganancias.
          Conoce la mejor estrategia para realizar trading institucional. 
          Sé parte de las mejores clases en vivo para poner en práctica tus conocimientos.</p>

        <div className='header-content__input'>
          <input type="email" placeholder='Tu email'></input>
          <button type='button'>Comienza ahora</button>
        </div>

        <div className='header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className='header-image'>
        <img src={trading} alt={ai} />
      </div> 
    </div>
  )
}

export default Header