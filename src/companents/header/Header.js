// import React, { Component } from 'react'
import './header.css'


const Header = (props) => {
    return (
      <div className={props.modes.mode}>
        <div className='mygroup_ul'>
                <ul className='first_ul'>
                    <li><a href={'/'}>0% Рассрочка</a></li>
                    <li><a href={'/'}>Скидки</a></li>
                    <li><a href={'/'}>Розыгрыши</a></li>
                </ul>

                <ul className='second_ul'>
                    <li><h5 style={{color: 'white', paddingTop: '5px'}}>+998 (71) 202 2021</h5></li>
                    <li><a href={'/'}>Продавайте на olcha</a></li>
                    <button className='btn' style={{color: 'white'}} onClick={props.Mode}><i class="fa-regular fa-sun fa-lg" style={{color: 'white', padding: '10px'}}></i> | <i class="fa-regular fa-moon fa-lg" style={{color: 'white'}}></i></button>
                    <span style={{color: 'white'}}>{props.modes.Mode}</span>
                </ul>
        </div>
      </div>
    )
}   

export default Header;
