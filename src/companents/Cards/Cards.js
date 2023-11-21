// import React, { Component } from 'react'
import './card.css'

const mycard = [
    {price: '15 000 000',
     name: 'Apple Iphone 14 Pro Max',
     priceMonth: '1 971 000',
     image: 'https://olcha.uz/image/220x220/products/2022-07-13/apple-iphone-14-pro-64964-0.jpeg'},

     {price: '13 922 000',
      name: 'Apple Iphone 14 Pro',
      priceMonth: '1 771 000',
      image: 'https://olcha.uz/image/220x220/products/2022-07-13/apple-iphone-14-pro-64964-0.jpeg'},

     {price: '13 940 000',
      name: 'Apple Iphone 14 Pro',
      priceMonth: '1 785 000',
      image: 'https://olcha.uz/image/220x220/products/2022-07-13/apple-iphone-14-pro-64964-0.jpeg'},

     {price: '15 200 000',
      name: 'Apple Iphone 14 Pro Max',
      priceMonth: '1 985 000',
      image: 'https://olcha.uz/image/220x220/products/2022-07-13/apple-iphone-14-pro-64964-0.jpeg'},

      
]

const Cards = (props) => {
  console.log(props);
  return (
    <div style={{paddingTop: '2%', height: '85vh'}} className={props.modes.mode}>
          <div class="container text-center">
          <div class="row row-cols-4">
            {mycard.map((value) => {
                return <div class="col animate__animated animate__fadeInUp">
                  <div class="card" style={{width: '18rem'}}>
                      <img src={value.image} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">{value.name}</h5>
                        <p class="card-text" style={{color: '#da002b'}}>{value.price} сум</p>
                        <p class="card-text" style={{backgroundColor: '#ffd740', borderRadius: '10px'}}>{value.priceMonth} сум x 12 мес</p>
                        <a href={'/'} class="btn" style={{backgroundColor: '#da002b', color: 'white'}}>Корзинка</a>
                      </div>
                  </div>
                </div>
            })}
          </div>
      </div>
    </div>
  )
}

export default Cards;